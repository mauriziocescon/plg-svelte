<script lang="ts">
	import { onDestroy } from 'svelte';
	import Attachments from './Attachments.svelte';
	import Counter from './Counter.svelte';
	import Expander from './Expander.svelte';

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

<h1>Bar Page</h1>
<nav>
	<a href="/bar">Go to Bar</a>
	<a href="/foo">Go to Foo</a>
</nav>

{#snippet children()}
	<p>Hello from children snippet</p>
{/snippet}

<Counter>
	<input bind:value={value} type="number" />
</Counter>

<button onclick={doSomething}>Do something</button>

{#if true}
	<Attachments bind:this={att} />
{:else}
	<Attachments bind:this={att} />
{/if}

<hr />
<Expander />
