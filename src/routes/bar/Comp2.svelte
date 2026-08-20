<script lang="ts">
	import { getAppContext } from '$lib/app-context.ts';
	import { getBarContext, setBarContext } from './bar-context.ts';
	import Comp3 from './Comp3.svelte';

	let value = $state('');

	setBarContext({
		get count() {
			return value.length;
		},
		setCount: (v: number) => {
			value = 'x'.repeat(v);
		}
	});

	const bar = getBarContext();
</script>

<h3>Comp2: {getAppContext().appName}</h3>
<input bind:value />
<p>Count in Comp2: {bar.count}</p>
<br />
<Comp3 />
