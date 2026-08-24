<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getAppContext } from '$lib/app-context.ts';
	import { Count, getCountContext, setCountContext } from './count-context.svelte.ts';
	import Comp3 from './Comp3.svelte';
	import Child from './Child.svelte';

	const { children }: { children?: Snippet } = $props();

	let value = $state('');

	setCountContext(new Count(() => value.length));
</script>

AppName: {getAppContext().appName}
<p>Count in Comp2: {getCountContext().getCount()}</p>
<input bind:value />
{#if children}
	{@render children()}
{/if}
<Comp3>
	<Child />
</Comp3>
