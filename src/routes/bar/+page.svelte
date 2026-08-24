<script lang="ts">
	import { onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';
	import { getAppContext } from '$lib/app-context.svelte';

	import Comp1 from './Comp1.svelte';

	const app = getAppContext();

	let value = $state('');

	onDestroy(() => {
		console.log('Bar page destroyed');
	});
</script>

<h1>Bar Page</h1>
<nav>
	<a href="/bar">Go to Bar</a>
	<a href="/foo">Go to Foo</a>
</nav>

<h3 out:fade={{ duration: 1000 }}>Bar fades out</h3>
<br />
<input bind:value />
<br />
<Comp1 {value} />
