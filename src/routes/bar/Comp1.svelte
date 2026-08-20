<script lang="ts">
	import { getAppContext } from '$lib/app-context.ts';
	import Comp2 from './Comp2.svelte';
</script>

AppName: {getAppContext().appName}

<Comp2 />
