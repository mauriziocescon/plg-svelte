<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade } from 'svelte/transition';

	const { children } = $props<{ children: Snippet }>();
</script>

<h3 out:fade={{ duration: 2000 }}>Counter fades out</h3>

{@render children()}
