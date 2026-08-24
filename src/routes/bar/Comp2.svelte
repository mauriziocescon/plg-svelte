<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getAppContext } from '$lib/app-context.ts';
	import { Count, getCountContext, setCountContext } from './count-context.svelte.ts';
	import Comp3 from './Comp3.svelte';
	import Child from './Child.svelte';

	const { children }: { children?: Snippet } = $props();

	const app = getAppContext();

	let value = $state('');
	setCountContext(new Count(() => value.length));

	const count = getCountContext();
</script>

AppName: {app.appName}
<p>Count in Comp2: {count.getCount()}</p>
<input bind:value />
{#if children}
	{@render children()}
{/if}
<Comp3>
	<Child />
</Comp3>
