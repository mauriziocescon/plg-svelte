<script lang="ts">
	import { getAppContext } from '$lib/app-context.ts';
	import { getBarContext, setBarContext } from './bar-context.ts';
	import Comp2 from './Comp2.svelte';
	import Child from './Child.svelte';

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
<p>Count in Comp1: {getBarContext().count}</p>
<input bind:value />
<br />

{#snippet children()}
	<Child />
{/snippet}

<Comp2 {children} />
