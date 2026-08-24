<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { setAppContext } from '$lib/app-context.svelte';

	let { children } = $props();

	setAppContext({ appName: 'My Svelte App', version: '1.0.0' });
</script>

<svelte:head>
	<link href={favicon} rel="icon" />
</svelte:head>

{@render children()}
