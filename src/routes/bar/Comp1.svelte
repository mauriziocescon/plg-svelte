<script lang="ts">
	import { getAppContext } from '$lib/app-context.ts';
	import { Count, getCountContext, setCountContext } from './count-context.svelte.ts';
	import Comp2 from './Comp2.svelte';
	import Comp3 from './Comp3.svelte';
	import Child from './Child.svelte';

	let value = $state('');

	setCountContext(new Count(() => value.length));
</script>

<h3>Comp1: {getAppContext().appName}</h3>
<p>Count in Comp1: {getCountContext().getCount()}</p>
<input bind:value />
<br />

{#snippet c()}
	<Child />
{/snippet}

<Comp2 children={c} />
<Comp3 />
