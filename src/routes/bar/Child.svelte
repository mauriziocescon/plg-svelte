<script lang="ts">
	import { getCountContext } from './count-context.svelte.ts';

	const count = getCountContext();
</script>

<p style="color: red">Child: {count.getCount()}</p>
