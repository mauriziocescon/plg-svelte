<script lang="ts">
	import { getAppContext } from '$lib/app-context.ts';
	import { setBarContext } from './bar-context.ts';

	let value = $state('');

	setBarContext({
		get count() {
			return value.length;
		},
		setCount: (v: number) => {
			value = 'x'.repeat(v);
		}
	});
</script>

<input bind:value />

AppName: {getAppContext().appName}
<p>Count: {value.length}</p>
