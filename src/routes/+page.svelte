<script lang="ts">
	import Counter from './sub/Counter.svelte';
	import Attachments from './sub/Attachments.svelte';

	let value = $state(10);

	let att: Attachments | undefined = $state();

	function doSomething() {
		console.log('doSomething');
		att?.example;
	}
</script>

{#snippet children()}
	<p>Hello from children snippet</p>
{/snippet}

<Counter>
	<input type="text" value={value} />
</Counter>

<button onclick={doSomething}>Do something</button>

{#if true}
	<Attachments bind:this={att} />
{:else}
	<Attachments bind:this={att} />
{/if}

