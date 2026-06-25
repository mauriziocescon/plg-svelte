<script>
	import Counter from './sub/Counter.svelte';
	import Attachments from './sub/Attachments.svelte';

	let value = $state(10);
</script>

{#snippet children()}
	<p>Hello from children snippet</p>
{/snippet}
<Counter>
<input ciao type="text" value={value} />
</Counter>
<Attachments />
