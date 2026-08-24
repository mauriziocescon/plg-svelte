<script lang="ts">
	import { defineContext, useCounter } from './count-context.svelte.ts';

	defineContext(() => 'Counter', () => 0);
	const ctx = useCounter();
</script>

<div style="display: inline-flex; align-items: center; gap: 0.5rem;">
	<button onclick={() => ctx.decrease()}>-</button>
	<p>{ctx.getCount()} (context: {ctx.desc()})</p>
	<button onclick={() => ctx.increase()}>+</button>
</div>
<br />
<button onclick={() => ctx.reset()}>Reset</button>
