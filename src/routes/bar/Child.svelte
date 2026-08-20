<script lang="ts">
	import { getBarContext } from './bar-context.ts';

	const bar = getBarContext();
</script>

<p style="color: red">Child: {bar.count}</p>
