<script lang="ts">
	import { getAppContext } from '$lib/app-context.svelte';
	import { Count, getCountContext, setCountContext } from './count-context.svelte.ts';
	import Comp2 from './Comp2.svelte';
	import Comp3 from './Comp3.svelte';
	import Child from './Child.svelte';

	const app = getAppContext();

	let { value = $bindable('') } = $props();
	setCountContext(new Count(() => value.length));
	const count = getCountContext();
</script>

<h3>Comp1: {app.appName}</h3>
<p>Count in Comp1: {count.getCount()}</p>
<input bind:value />
<br />

{#snippet c()}
	<Child />
{/snippet}

<Comp2 children={c} />
<Comp3 />
