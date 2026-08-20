<script lang="ts">
	import { getAppContext } from '$lib/app-context.ts';
	import Comp2 from './Comp2.svelte';
	import { setBarContext } from './bar-context.ts';

	let value = $state('');

	setBarContext({
		get count() {
			return value.length;
		},
		setCount: (v: number) => {
			value = 'x'.repeat(v);
		}
	});
</script>

<h3>Comp1: {getAppContext().appName}</h3>
<input bind:value />
<br />
<Comp2 />
