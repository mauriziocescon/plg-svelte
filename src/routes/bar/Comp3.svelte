<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getAppContext } from '$lib/app-context.ts';
	import { getCountContext } from './count-context.svelte.ts';

	const { children }: { children?: Snippet } = $props();

	let dialogEl: HTMLDialogElement;

	function openModal() {
		dialogEl.showModal();
	}

	function closeModal() {
		dialogEl.close();
	}
</script>

{#if children}
	{@render children()}
{/if}

<h3>Comp3: {getAppContext().appName}</h3>
<p>Count in Comp3: {getCountContext().getCount()}</p>
<button onclick={() => getCountContext().setCount(42)}>Set count to 42</button>
<button onclick={openModal}>Open modal</button>

<dialog bind:this={dialogEl}>
	<h2>Modal</h2>
	<p>Count is: {getCountContext().getCount()}</p>
	<button onclick={() => getCountContext().setCount(0)}>Reset count</button>
	<button onclick={closeModal}>Close</button>
</dialog>

<style>
    dialog::backdrop {
        background: rgba(0, 0, 0, 0.5);
    }

    dialog {
        border: none;
        border-radius: 8px;
        padding: 2rem;
        max-width: 400px;
    }
</style>
