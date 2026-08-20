<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getAppContext } from '$lib/app-context.ts';
	import { setBarContext } from './bar-context.ts';
	import Comp3 from './Comp3.svelte';
	import Child from './Child.svelte';

	const { children }: { children?: Snippet } = $props();

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

<input bind:value />

AppName: {getAppContext().appName}
<p>Count: {value.length}</p>

{#if children}
	{@render children()}
{/if}
<Comp3>
	<Child />
</Comp3>
