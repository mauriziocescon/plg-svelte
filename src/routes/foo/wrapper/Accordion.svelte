<script lang="ts">
	import { Accordion } from 'bits-ui';
</script>

<Accordion.Root type="single">
	<Accordion.Item value="item-1">
		<Accordion.Header>
			<Accordion.Trigger>
				{#snippet child({ props })}
					<button {...props} class="scoped-button">Toggle Item</button>
				{/snippet}
			</Accordion.Trigger>
		</Accordion.Header>
		<Accordion.Content>
			This is the collapsible content for this section.
		</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>


<style>
    .scoped-button {
        background-color: #3182ce;
        color: #fff;
    }
</style>
