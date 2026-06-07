<script lang="ts">
function logValue(node: HTMLElement & {value: string }) {
    node. addEventListener('input', () => console.log(node. value)) ;
}
</script>

<input {@attach logValue} />                <!-- ✅has value -->
<textarea {@attach logValue}></textarea>    <!-- ✅has value -->
<select {@attach logValue}></select>        <!-- ✅has value -->
<!--<div {@attach logValue}></div>              &lt;!&ndash; ❌compile error: div has no value &ndash;&gt;-->
