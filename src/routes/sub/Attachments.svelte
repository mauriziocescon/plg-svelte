<script lang="ts">
export function logValue(node: HTMLElement & {value: string }) {
    node.addEventListener('input', () => console.log(node.value));
}
export const example = 'test';
</script>

<!--<button x={10}>Click me!</button>					&lt;!&ndash; ❌compile error: x not a valid binding &ndash;&gt;-->

<input {@attach logValue} />                <!-- ✅has value -->
<textarea {@attach logValue}></textarea>    <!-- ✅has value -->
<select class:f={''} style="" {@attach logValue}></select>        <!-- ✅has value -->
<!--<div {@attach logValue}></div>              &lt;!&ndash; ❌compile error: div has no value &ndash;&gt;-->
