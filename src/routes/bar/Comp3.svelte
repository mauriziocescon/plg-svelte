<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getAppContext } from '$lib/app-context.ts';
	import { getBarContext } from './bar-context.ts';

	const { children }: { children?: Snippet } = $props();

	const bar = getBarContext();
</script>

<h3>Comp3: {getAppContext().appName}</h3>
<p>Count in Comp3: {bar.count}</p>
<button onclick={() => bar.setCount(42)}>Set count to 42</button>

{#if children}
	{@render children()}
{/if}
