<script lang="ts">
    import type { Snippet } from 'svelte';

    const {children} = $props<{children: Snippet}>();

    let show = $state(false);

    class Todo {
        text = $state('');
        done = $state(false);
        doubleText = $derived(`${this.text}-${this.text}`);

        constructor() {
            $effect(() => console.log(this.text));
        }

        reset() {
            this.text = '';
            this.done = false;
        }
    }
</script>

<button onclick={() => show = true}>Toggle</button>

{#if show}
    { let cc = $state('') }
    { let c = new Todo() }
    { c = new Todo()}
    { c = new Todo()}
    { let d = new Date() }

    {d}
    {c.doubleText}
    <input bind:value={c.text} />
{/if}

{@render children()}
