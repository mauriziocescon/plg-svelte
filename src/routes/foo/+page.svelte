<script lang="ts">
	import { onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';

	import Attachments from './Attachments.svelte';
	import Counter from './Counter.svelte';

	let value = $state(10);

	let att: Attachments | undefined = $state();

	function doSomething() {
		console.log('doSomething');
		att?.example;
	}

	onDestroy(() => {
		console.log('Foo page destroyed');
	});
</script>

<h1>Foo Page</h1>
<nav>
	<a href="/bar">Go to Bar</a>
	<a href="/foo">Go to Foo</a>
</nav>

{#if true}
	<h3 out:fade={{ duration: 1000 }}>Foo fades out</h3>
{/if}

<Counter>
	<input bind:value={value} type="number" />
</Counter>

<button onclick={doSomething}>Do something</button>

{#if true}
	<Attachments bind:this={att} />
{:else}
	<Attachments bind:this={att} />
{/if}
