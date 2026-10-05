<script lang="ts">
	import type { Attachment } from 'svelte/attachments';

	type Props = {
		src: string;
		alt: string;
		loading?: 'lazy' | 'eager';
		// Accept attachments that target the element this component renders.
		[key: symbol]: Attachment<HTMLImageElement> | false | undefined | null;
	};

	let { src, alt, loading = 'lazy', ...rest }: Props = $props();
</script>

<img {...rest} {alt} {loading} {src} />
