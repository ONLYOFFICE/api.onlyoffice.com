---
description: "Anchor styled to the kit's conventions, for navigation or for an in-place action."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/link/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Link

Anchor styled to the kit's conventions, for navigation or for an in-place action. It renders a
`Text` as an `<a>`, so everything that shapes text — size, weight, truncation — comes from
there.

<ThemedImage alt="Link" width={80} sources={{ light: require('./link--primary-light.png').default, dark: require('./link--primary-dark.png').default }} />

## Use this when / not when

- Use to navigate, and for a low-emphasis action inside a sentence or a table cell.
- Not for the primary action of a screen or a dialog — that is
  [`Button`](../interactive-elements/button.md), which is sized, focusable and labelled for the job.
- Not for a link that opens a menu: [`LinkWithDropdown`](../interactive-elements/link-with-dropdown.md).
- Not for text that does not act — plain [`Text`](../data-display/text.md) has the same typography
  without the cursor and the hover underline.

## Import

```ts
import { Link, LinkType } from "@onlyoffice/apps-ui-kit/components/link";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` above it in the tree. It
supplies the link colour, which otherwise falls back to plain black.

## Stories

### Default

A page link that opens its address in a new tab. Hover it to see the underline, and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={80} sources={{ light: require('./link--default-light.png').default, dark: require('./link--default-dark.png').default }} />

### Page Links

Page links navigate to another address; hover the regular one to see the solid underline a page link grows. **Bold page link** (`isBold`), **Hovered page link** keeps the underline on without a pointer (`isHovered`), **Semitransparent page link** is drawn at half opacity (`isSemitransparent`).

<ThemedImage alt="Page Links" width={1014} sources={{ light: require('./link--page-links-light.png').default, dark: require('./link--page-links-dark.png').default }} />

### Action Links

Action links run code in place instead of navigating, for filtering a list or opening a menu; hover the regular one to see the dashed underline that sets them apart from page links. The four links show the same states as the page links above.

<ThemedImage alt="Action Links" width={1014} sources={{ light: require('./link--action-links-light.png').default, dark: require('./link--action-links-dark.png').default }} />

### All Variants

Page and action links side by side, to compare the two underlines and the states each type shares: bold, hovered and semitransparent.

<ThemedImage alt="All Variants" width={1014} sources={{ light: require('./link--all-variants-light.png').default, dark: require('./link--all-variants-dark.png').default }} />

### Hovered State

The link shows its hover underline with no pointer over it, as it should inside a row that highlights its link while the whole row is hovered (`isHovered`).

<ThemedImage alt="Hovered State" width={92} sources={{ light: require('./link--hovered-state-light.png').default, dark: require('./link--hovered-state-dark.png').default }} />

### Semitransparent State

The link at half opacity, to mark an entity that is pending or inactive while keeping it clickable (`isSemitransparent`).

<ThemedImage alt="Semitransparent State" width={140} sources={{ light: require('./link--semitransparent-state-light.png').default, dark: require('./link--semitransparent-state-dark.png').default }} />

### With Text Overflow

A label longer than its 200px container stays on one line and ends with an ellipsis, so it cannot push the layout wider (`isTextOverflow` with `truncate`).

<ThemedImage alt="With Text Overflow" width={216} sources={{ light: require('./link--with-text-overflow-light.png').default, dark: require('./link--with-text-overflow-dark.png').default }} />

### No Hover Effect

Hover the link: no underline appears, for a link whose surroundings already show that it is clickable (`noHover`).

<ThemedImage alt="No Hover Effect" width={133} sources={{ light: require('./link--no-hover-effect-light.png').default, dark: require('./link--no-hover-effect-dark.png').default }} />

### With Tooltip

Hover the link to read what it opens, for a label too short to say it (`title`). The text appears in the app's shared tooltip, not the browser's native one, so it shows only where the app mounts `RootTooltip`.

<ThemedImage alt="With Tooltip" width={96} sources={{ light: require('./link--with-tooltip-light.png').default, dark: require('./link--with-tooltip-dark.png').default }} />

### Keyboard Accessible Action

Press Tab to reach the link: an action link has no address, so without a role and a tab stop the keyboard skips it and a screen reader does not announce it. Here it is announced as a button (`role`), sits in the Tab order (`tabIndex`) and runs its action from the keys the handler checks (`onKeyDown`).

<ThemedImage alt="Keyboard Accessible Action" width={112} sources={{ light: require('./link--keyboard-accessible-action-light.png').default, dark: require('./link--keyboard-accessible-action-dark.png').default }} />

### Custom Color

Colour draws the eye to a link inside plain text: the label takes any CSS colour (`color`). The value `accent` uses the accent colour of the portal instead, which this Storybook does not define, so it is not shown here.

<ThemedImage alt="Custom Color" width={128} sources={{ light: require('./link--custom-color-light.png').default, dark: require('./link--custom-color-dark.png').default }} />

### Text Decorations

A link inside a paragraph is easier to spot when it is underlined before the pointer reaches it. **Underlined link** keeps a solid underline, **Dashed action link** a dashed one (`textDecoration`); the line stays the same on hover.

<ThemedImage alt="Text Decorations" width={1014} sources={{ light: require('./link--text-decorations-light.png').default, dark: require('./link--text-decorations-dark.png').default }} />

### Css Customization

Overridable variables set on a wrapper and on the link itself -- the variables are listed under CSS variables on this page.

**Custom color link** is a page link: it takes the colour from the wrapper, and on hover shows no underline (`--link-hover-page-text-decoration`). **Custom action link** is there for the variables an action link reads: hover it for a wavy underline (`--link-hover-text-decoration`); at rest it carries a dotted underline and a taller line (`--link-text-decoration`, `--link-line-height`, through its `style` prop). `--link-display` is not shown: in a column of links its effect cannot be seen.

<ThemedImage alt="Css Customization" width={1014} sources={{ light: require('./link--css-customization-light.png').default, dark: require('./link--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { Link } from "@onlyoffice/apps-ui-kit/components/link";

export function RoomLink({ id, name }: { id: string; name: string }) {
  return <Link href={`/rooms/${id}`}>{name}</Link>;
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `ariaLabel`? | `string` | Value of `aria-label`. When it is absent and `children` is a string, that string is used, so the visible text is the accessible name; a node child gets no `aria-label`, and the anchor is named by its content. |
| `color`? | `string` | Any CSS colour, or the literal `"accent"`, which resolves to the theme's `--accent-main`. |
| `dataTestId`? | `string` | Value of `data-testid` on the anchor. Default: `"link"`. |
| `enableUserSelect`? | `boolean` | Whether the label can be selected with the mouse. Default: `true`. |
| `href`? | `string` | Used as HTML `href` property |
| `id`? | `string` | Accepts id |
| `isBold`? | `boolean` | Renders the label at weight 600. Default: `false`. |
| `isHovered`? | `boolean` | Paints the link as if the pointer were over it, for a row that highlights its link on hover of the whole row. Default: `false`. |
| `isSemitransparent`? | `boolean` | Halves the opacity, the kit's convention for a pending or inactive entity. Default: `false`. |
| `isTextOverflow`? | `boolean` | Constrains the link to the width of its container (`display: inline-block; max-width: 100%`). It does **not** add the ellipsis by itself — that comes from `truncate`, inherited from `Text`. Set both to clip a long label. Default: `false`. |
| `label`? | `string` | Ignored. The component reads its text from `children`; this prop is spread onto the anchor as an unknown attribute and does nothing. |
| `noHover`? | `boolean` | Removes the underline the link grows on hover. Default: `false`. |
| `onClick`? | `((e: React.MouseEvent<Element>) => void) & ((e: React.MouseEvent<Element>) => void)` | Sets a callback function that is triggered when the link is clicked. Only for 'action' type of link |
| `onKeyDown`? | `(e: React.KeyboardEvent<Element>) => void` | Sets a callback function that is triggered on a key press. An action link carries no href, so it is not activated by Enter on its own - a link that has to work from the keyboard handles the key here and takes a tabIndex. |
| `rel`? | `string` | Used as HTML `rel` property |
| `role`? | `AriaRole` | ARIA role. An anchor with no href has no implicit role at all, so an action link is invisible to assistive technology until it is named one - "button", since it acts rather than navigates. |
| `tabIndex`? | `number` | Used as HTML `tabindex` property |
| `target`? | `LinkTarget` | Sets the target attribute |
| `textDecoration`? | `"line-through" \| "none" \| "overline" \| "underline dashed" \| "underline dotted" \| "underline"` | Sets the text decoration style |
| `title`? | `string` | Tooltip text. Consumed by the `withTooltip` wrapper the folder exports, so it becomes the tooltip's content and never reaches the DOM as a `title` attribute. |
| `type`? | `LinkType` | `page` for navigation, `action` for a link that runs code. An action link carries no `href`, which has consequences for the keyboard — see `role` and `onKeyDown`. Default: `LinkType.page`. |

</APITable>

#### Inherited from `TextProps`

Declared by [`components/text`](../data-display/text.md) and accepted here too.

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `aria-hidden`? | `Booleanish` | Hides the element from assistive technology, passed unchanged, for decoration that repeats what is already read. |
| `aria-label`? | `string` | Accessible name, passed unchanged, for text whose content is not what should be announced. |
| `aria-live`? | `"assertive" \| "off" \| "polite"` | Live-region politeness, passed unchanged, for a line whose content changes and should be read out. |
| `as`? | `ElementType<any, keyof JSX.IntrinsicElements>` | Element to render, replacing the component's own default — `p` for `Text` itself. Wins over `tag` when both are set. |
| `backgroundColor`? | `string` | Background colour, as an inline style. Any CSS colour. |
| `children`? | `ReactNode` | Text to render. |
| `className`? | `string` | Added after the component's own classes. |
| `containerMinWidth`? | `string` | Not read here — it reaches the DOM as an unknown attribute. It is read off this element by `RowContent`, which uses it as the minimum width of a side slot. |
| `containerWidth`? | `string` | Not read here — it reaches the DOM as an unknown attribute. It is read off this element by `RowContent` and `TileContent`, which use it as the width of the slot they put the child in. |
| `dir`? | `"auto" \| "ltr" \| "rtl"` | Writing direction. `"ltr"` and `"rtl"` set the `dir` attribute; `"auto"` instead wraps the children in a span that takes the pointer events off them. |
| `display`? | `string` | Ignored. Nothing reads this prop, and it reaches the DOM as an unknown attribute. Use `isInline` or `style`. |
| `fontSize`? | `string` | Font size, as an inline style. Unset, `Text` is 13px through `--text-size`. |
| `fontWeight`? | `number \| string` | Font weight, as an inline style. Ignored while `isBold` is set. Unset, `Text` is 400 through `--text-weight`. |
| `htmlFor`? | `string` | Passed to the element unchanged, for `as="label"`. |
| `isInline`? | `boolean` | Renders the text inline instead of as a block — `inline-block` in `Text`, `inline` in `Heading`. |
| `isItalic`? | `boolean` | Renders the text in italics. |
| `lineHeight`? | `string` | Line height, as an inline style. |
| `noSelect`? | `boolean` | Stops the text being selected, on every browser the kit supports. |
| `ref`? | `RefObject<HTMLDivElement \| null>` | Attached to the rendered element, whatever `as` made it. Typed for a div whatever that element actually is. |
| `style`? | `CSSProperties` | Inline style of the element. `Text` merges it over the style props above, so a `fontSize` here wins over the `fontSize` prop. |
| `tag`? | `string` | Element to render, used only while `as` is unset. It is a tag name, not an id. |
| `textAlign`? | `"center" \| "justify" \| "left" \| "right"` | Text alignment, as an inline style. |
| `truncate`? | `boolean` | Holds the text on one line and ends it with an ellipsis. It needs a parent of bounded width; on its own the element grows instead. |
| `view`? | `string` | Only `"tile"` is recognised, and only together with `dir="auto"`: it clamps the text to two lines. |

</APITable>

#### Added by the wrapper the folder exports

The `index` module exports a wrapped component, so these are accepted on top of the props above.

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `onMouseEnter`? | `MouseEventHandler` | Called in addition to the handler that opens the tooltip, after it. |
| `onMouseLeave`? | `MouseEventHandler` | Called in addition to the handler that closes the tooltip, after it. |
| `onMouseMove`? | `MouseEventHandler` | Passed through only while the element has no tooltip. Once one is active the wrapper's own handler replaces it and this is dropped. |
| `tooltipContent`? | `ReactNode` | Tooltip content, used instead of `title` when both are set. Only a string produces a tooltip: the wrapper needs text for the anchor, so any other node leaves the element with no tooltip at all. |

</APITable>

## Recipes

### An action link

An action link has no `href`, and an anchor without one is neither focusable nor announced as
anything. Give it a role, a tab stop and a key handler, or use a `Button`.

```tsx
import { Link, LinkType } from "@onlyoffice/apps-ui-kit/components/link";

export function ResendInvite({ resend }: { resend: () => void }) {
  return (
    <Link
      type={LinkType.action}
      role="button"
      tabIndex={0}
      onClick={() => resend()}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") resend();
      }}
    >
      Resend the invitation
    </Link>
  );
}
```

### A long label in a narrow column

```tsx
import { Link } from "@onlyoffice/apps-ui-kit/components/link";

export function FileLink({ href, name }: { href: string; name: string }) {
  return (
    <div style={{ width: 200 }}>
      <Link href={href} isTextOverflow truncate title={name}>
        {name}
      </Link>
    </div>
  );
}
```

## Behaviour the types don't state

- **`isTextOverflow` does not produce an ellipsis.** It only sets
  `display: inline-block; max-width: 100%`, which gives the label a width to be clipped
  against. The clipping itself comes from `truncate`, inherited from `Text`. One without the
  other does nothing visible.
- **`title` never reaches the DOM.** The folder exports `withTooltip(Link)`, and the wrapper
  consumes `title` as the tooltip's text. Only a string produces a tooltip, and it shows only in
  an application that mounts `RootTooltip` once — without it the hover does nothing.
- **`color="accent"` depends on the portal.** It resolves to `var(--accent-main)`, which the
  portal's theme defines and this component does not; where nothing defines it, the declaration
  is dropped and the label takes its parent's colour.
- The hover underline differs by type: a `page` link grows a solid underline, an `action` link
  a dashed one. `isHovered` holds that underline on without the pointer, and `noHover` removes
  it in both cases.
- **An action link is not keyboard-operable by itself.** With `type={LinkType.action}` there is
  no `href`, so the anchor has no implicit role, no tab stop and no Enter activation. The
  recipe above adds all three.
- `aria-label` falls back to `children` when `ariaLabel` is absent and the child is a string,
  so the visible text is the accessible name. A node child sets no `aria-label`, and the anchor
  is named by its content as any anchor is.
- `label` is accepted and never read. The text is `children`; `label` is spread onto the
  anchor as an unknown attribute.
- `enableUserSelect` defaults to **true**, so the label is selectable unless you turn it off —
  the opposite of most controls in this kit.
- The component is memoised with a deep comparison rather than React's shallow one, so a new
  object or handler on every render does not re-render it.

## CSS variables

<APITable>

| Variable                            | Default            | Effect                                                     |
| ----------------------------------- | ------------------ | ---------------------------------------------------------- |
| `--link-text-color`                 | theme text         | Colour of the label; the `color` prop wins over it         |
| `--link-hover-page-text-decoration` | `underline`        | Line a `page` link shows on hover and under `isHovered`    |
| `--link-hover-text-decoration`      | `underline dashed` | Line an `action` link shows on hover and under `isHovered` |

</APITable>

The other `--link-*` names in the stylesheet — `--link-text-decoration` (the line at rest,
`none`), `--link-line-height` (`calc(100% + 6px)`) and `--link-display` (`inline-block`, read
only while `isTextOverflow` is set) — are assigned on the component's own element, so a value
set on an ancestor is overridden. Set them through the link's own `style` prop, or use
`textDecoration`, `lineHeight` and `isTextOverflow` instead.

## Accessibility

- With `href` it is an ordinary anchor: focusable, activated by Enter, announced as a link.
- With `type={LinkType.action}` and no `href` it is none of those things until you pass `role`,
  `tabIndex` and `onKeyDown`. This is the component's sharpest edge.
- `aria-label` is set from `ariaLabel`, or from `children` when that is a string.
- The hover state is an underline; nothing distinguishes focus from hover, so a focus ring of
  your own is worth adding where a link is the only control in a row.

## Test ids

<APITable>

| Element    | `data-testid`                         |
| ---------- | ------------------------------------- |
| The anchor | `link`, overridable with `dataTestId` |

</APITable>

## Related

- [`Button`](../interactive-elements/button.md) — for an action with emphasis, focus and a real button role.
- [`LinkWithDropdown`](../interactive-elements/link-with-dropdown.md) — for a link that opens a menu.
- [`Text`](../data-display/text.md) — the typography this component is built on.
