<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	type Props = HTMLImgAttributes & {
		src: string;
		alt: string;
		loading?: 'lazy' | 'eager';
	};

	let { src, alt, loading = 'lazy', ...rest }: Props = $props();
</script>

<img {src} {alt} {loading} {...rest} />
