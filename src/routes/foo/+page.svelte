<script lang="ts">
	import { onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';

	import { defineContext, useCounter } from './count-context.svelte.ts';

	import Attachments from './Attachments.svelte';
	import Title from './Title.svelte';

	let value = $state(10);

	defineContext(() => 'Counter', () => value);
	const ctx = useCounter();

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

<h3 out:fade={{ duration: 1000 }}>Foo fades out</h3>

<p>Context desc: {ctx.desc()}</p>
<Attachments bind:this={att} />
<Title />
