<script lang="ts">
	import Button from './Button.svelte';
	import Img from './Img.svelte';

	let btn: Button | undefined = $state();
	let img: Img | undefined = $state();

	function logValue(node: HTMLElement & { value: string }) {
		node.addEventListener('input', () => console.log(node.value));
	}

	function logImage(node: HTMLImageElement) {
		node.addEventListener('load', () => console.log(node.currentSrc, node.naturalWidth, node.naturalHeight));
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

<Button {@attach logValue} bind:this={btn} />

<!-- ✅ Img renders an <img>, so {@attach logImage} type-checks -->
<Img {@attach logImage} alt="" src="/favicon.png" />

<!-- ❌️ {@attach logValue} cannot be added to Img: Img's props declare
     [key: symbol]: Attachment<HTMLImageElement>, and <img> has no `value`,
     so logValue (which needs HTMLElement & { value }) is rejected. -->
<!--<Img {@attach logValue} alt="" src="/favicon.png" />-->
