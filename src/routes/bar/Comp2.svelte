<script lang="ts">
	import { getAppContext } from '$lib/app-context.ts';
	import { getBarContext, setBarContext } from './bar-context.ts';

	let value = $state('');

	setBarContext({
		get count() {
			return value.length;
		},
		setCount: (v: number) => {
			value = 'x'.repeat(v);
		}
	});

	const bar = getBarContext();
</script>

<input bind:value />

AppName: {getAppContext().appName}
<p>Count in Comp2: {bar.count}</p>
