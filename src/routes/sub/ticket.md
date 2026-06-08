Hey!

I think this goes beyond simple bugs. It is also about meeting modern development expectations.
Here is an example of a directive that should be constrained by TypeScript interfaces, but still has to rely on Angular 2016-era template conventions, even in the signals world:
```ts
@Directive({
  // Need to specify all selectors ⚠️
  selector: 'input[elWithValue], textarea[elWithValue], select[elWithValue]',
})
export class ElementWithValue {
  // I'm not an error ❌
  private readonly el = inject<ElementRef<HTMLImageElement>>(ElementRef);

  private readonly domReady = afterNextRender(() => {
    console.log(`ElementWithValue: ${this.el.nativeElement}`);
  });
}

@Component({
  imports: [ElementWithValue],
  template: `
    <div elWithValue>I'm not an error ❌!</div>
  `,
})
export class Consumer {}
```
https://stackblitz.com/edit/stackblitz-starters-ifdxm2fc?file=src%2Fmain.ts

The result is suboptimal because this directive should only apply to HTML elements that have a `value` property, not to arbitrary elements. Here is a different approach, without DI or selectors, just to illustrate a possible direction:

```ts
@Directive()
export class ElementWithValue {
  /**
   * Readonly signal managed by Angular.
   *
   * elRef: name reserved for the framework.
   */
  readonly elRef = ref<HTMLElement & { value: string }>();

  private readonly domReady = afterNextRender(() => {
    console.log(`ElementWithValue: ${this.el.nativeElement.value}`);
  });
}
```
With a typed `elRef` as a framework-level marker, Angular could catch these errors much more accurately.

The point is that features like this are already common in other frameworks, such as Solid 2 with ref directive factories, or Svelte (via `svelte2tsx` and `IntrinsicElements`):

```sveltehtml
<script lang="ts">
  function logValue(node: HTMLElement & { value: string }) {
    node.addEventListener('input', () => console.log(node.value));
  }
</script>

<button x={10}>Click me!</button>           <!-- ❌ compile error: x not a valid binding -->

<input {@attach logValue} />                <!-- ✅ has value -->
<textarea {@attach logValue}></textarea>    <!-- ✅ has value -->
<select {@attach logValue}></select>        <!-- ✅ has value -->
<div {@attach logValue}></div>              <!-- ❌ compile error: div has no value -->
```

I think there's no disagreement that any large enterprise codebase would benefit from better-typed templates like this one. 

However, when it comes to the future of Angular templates, I am a bit confused about the team's direction.
After the exciting announcements at ngPoland two years ago, there seems to have been a substantial shift back to a very conservative position, where template changes are no longer on the roadmap, mostly because of the rise of AI.

I am not talking about small or medium changes, but significant ones like:
- better template types (like this ticket),
- selectorless components/directives,
- hostless components,
- better content projection,
- component encapsulation (`ref` / `expose` as in Vue, rather than `viewQuery` / public class interface),
- colocality,
- and more generally, legible template patterns.

I do not think there is any disagreement that these are big challenges likely requiring a new authoring format. But they would massively improve the current situation, while also moving Angular forward in terms of modernity, ease of use, predictability, and correctness.
And not only for humans. I believe this would benefit AI agents as well, because we would end up with:
- far better types,
- legible constraints,
- self-describing contracts,
- colocality,
- canonical patterns.

These seem to be roughly the criteria that make a framework easy to reason about for humans and very AI-friendly by design, based on many conversations with Claude / Codex / Gemini 😅.

So I wonder:
- Am I completely off with these arguments?
- Is the amount of training data from the last 10 years so important that changing Angular's current template syntax might create more problems than benefits?
- Is this mainly about Google-internal priorities? tsgo?
- What am I missing in this picture?

If possible, I'd like to understand this a bit better.

As usual, thanks a lot!
