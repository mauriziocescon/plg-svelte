<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getAppContext } from '$lib/app-context.svelte.ts';
	import { getCountContext } from './count-context.svelte.ts';

	const { children }: { children?: Snippet } = $props();

	const app = getAppContext();
	const count = getCountContext();

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

<h3>Comp3: {app.appName}</h3>
<p>Count in Comp3: {count.getCount()}</p>
<button onclick={() => count.setCount(42)}>Set count to 42</button>
<button onclick={openModal}>Open modal</button>

<dialog bind:this={dialogEl}>
	<h2>Modal</h2>
	<p>Count is: {count.getCount()}</p>
	<button onclick={() => count.setCount(0)}>Reset count</button>
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
