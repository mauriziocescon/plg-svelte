<script lang="ts">
	import { onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';
	import Consumer from './Consumer.svelte';
	import Counter from './Counter.svelte';
	import Title from './Title.svelte';

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

<Consumer />
<hr />
<Counter />
<hr />
<Title />
