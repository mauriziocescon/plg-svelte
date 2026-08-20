<script lang="ts">
	import { getAppContext } from '$lib/app-context.ts';
	import { getBarContext } from './bar-context.ts';

	const bar = getBarContext();
</script>

AppName: {getAppContext().appName}
<p>Count in Comp3: {bar.count}</p>
<button onclick={() => bar.setCount(42)}>Set count to 42</button>
