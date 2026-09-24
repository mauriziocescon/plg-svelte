<script lang="ts">
	import Accordion from './Accordion.svelte';
	import Button from './Button.svelte';
	import Img from './Img.svelte';
	import type { Attachment } from 'svelte/attachments';

	let btn: Button | undefined = $state();
	let img: Img | undefined = $state();

	function logValue(node: HTMLElement & { value: string }) {
		node.addEventListener('input', () => console.log(node.value));
	}

	function logImage(node: HTMLImageElement) {
		node.addEventListener('load', () => console.log(node.currentSrc, node.naturalWidth, node.naturalHeight));
	}

	function backgroundColor(color: string = 'red'): Attachment<HTMLElement> {
		return (element) => {
			const previous = element.style.backgroundColor;
			element.style.backgroundColor = color;

			// Cleanup: restore the previous value when the attachment is removed/updated.
			return () => {
				element.style.backgroundColor = previous;
			};
		};
	}

	function applyClass(className: string = 'btn-bold'): Attachment {
		return (element) => {
			element.classList.add(className);
			return () => element.classList.remove(className);
		};
	}
</script>

<input {@attach logValue} />                <!-- ✅has value -->
<textarea {@attach logValue}></textarea>    <!-- ✅has value -->
<select {@attach logValue}></select>        <!-- ✅has value -->
<!--<div {@attach logValue}></div>              &lt;!&ndash; ❌compile error: div has no value &ndash;&gt;-->
<!--<div {@attach logImage}></div>              &lt;!&ndash; ❌compile error: div is not an img &ndash;&gt;-->

<img {@attach logImage} alt="" src="/favicon.png" />  <!-- ✅is an img -->

<!-- ❌️ {@attach logImage} cannot be added to Button: Button renders a <button>, not an <img>, so it does not satisfy HTMLImageElement -->
<!--<Button {@attach logImage} {@attach logValue} />-->

<Button {@attach logValue} {@attach backgroundColor()} bind:this={btn}>Click me</Button>

<Button {@attach applyClass()}>Click me (yellow)</Button>

<!-- ✅ Img renders an <img>, so {@attach logImage} type-checks -->
<Img {@attach logImage} alt="" src="/favicon.png" />

<!-- ❌️ {@attach logValue} cannot be added to Img: Img's props declare
     [key: symbol]: Attachment<HTMLImageElement>, and <img> has no `value`,
     so logValue (which needs HTMLElement & { value }) is rejected. -->
<!--<Img {@attach logValue} alt="" src="/favicon.png" />-->

<Accordion />
