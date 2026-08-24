<script lang="ts">
	import { getCountContext } from './count-context.svelte.ts';
</script>

<p style="color: red">Child: {getCountContext().getCount()}</p>
