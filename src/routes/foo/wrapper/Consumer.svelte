<script lang="ts">
	import Button from './Button.svelte';

	let btn: Button | undefined = $state();

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

<!-- ⚠️ {@attach logImage} cannot be added to Button: Button renders a <button>, not an <img>, so it does not satisfy HTMLImageElement -->
<!--<Button {@attach logImage} {@attach logValue} />-->
<Button {@attach logValue} bind:this={btn} />
