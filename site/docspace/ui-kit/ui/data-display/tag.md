---
description: "Small outlined label for one keyword, clickable and optionally removable."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/tag/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Tag

Small outlined label for one keyword, clickable and optionally removable. It is the room tag
of the portal, and the piece [`Tags`](./tags.md) lays out in a row.

<ThemedImage alt="Tag" width={66} sources={{ light: require('./tag--primary-light.png').default, dark: require('./tag--primary-dark.png').default }} />

## Use this when / not when

- Use for a keyword attached to an object — a room tag, a category, a provider — that the
  reader may click to filter by.
- Not for several tags side by side: [`Tags`](./tags.md) measures the row, collapses
  the overflow into a menu and passes each tag the width it may take.
- Not for something the user chose and can undo — [`SelectedItem`](./selected-item.md)
  is the chip with a cross for that.
- Not for a count or a status word; [`Badge`](./badge.md) is the filled pill.

## Import

```ts
import { Tag } from "@onlyoffice/apps-ui-kit/components/tag";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme`; without it the tag has no
border and no colours.

## Stories

### Default

A plain tag with a label, the starting point for every other state; change any prop live in the Controls panel below.

<ThemedImage alt="Default" width={66} sources={{ light: require('./tag--default-light.png').default, dark: require('./tag--default-dark.png').default }} />

### States

The four looks a tag can take, side by side, to pick the one that matches an item's status:

- **Default** — a bordered tag on the plain background
- **New Tag** — a filled tag with a delete cross after the label (`isNewTag` with `onDelete`)
- **Disabled** — a dashed border; the tag ignores hover and clicks (`isDisabled`)
- **Deleted** — a greyed-out border; clicks no longer reach `onClick` (`isDeleted`)

<ThemedImage alt="States" width={331} sources={{ light: require('./tag--states-light.png').default, dark: require('./tag--states-dark.png').default }} />

### New Tags

Tags the user has just added and can still take back: click a cross to remove its tag, and the Actions panel shows the identifier `onDelete` receives.

<ThemedImage alt="New Tags" width={282} sources={{ light: require('./tag--new-tags-light.png').default, dark: require('./tag--new-tags-dark.png').default }} />

### Clickable Tags

Tags that act as filters: hover one to see it highlight, click it, and the Actions panel shows the `{ label }` object `onClick` receives instead of the DOM event.

<ThemedImage alt="Clickable Tags" width={270} sources={{ light: require('./tag--clickable-tags-light.png').default, dark: require('./tag--clickable-tags-dark.png').default }} />

### Max Width Variants

Tags with different max-width values. Long text is truncated with ellipsis when it exceeds the max width.

<ThemedImage alt="Max Width Variants" width={418} sources={{ light: require('./tag--max-width-variants-light.png').default, dark: require('./tag--max-width-variants-dark.png').default }} />

### Icon Only

A compact tag that is only a glyph marks where an item comes from without taking the width of a label; the hidden label still names the tag for screen readers (`withLabel={false}`):

- **First tag** — the glyph loaded from an SVG file (`icon` as a URL)
- **Second tag** — the same glyph passed as a React component (`icon` as a component)

<ThemedImage alt="Icon Only" width={112} sources={{ light: require('./tag--icon-only-light.png').default, dark: require('./tag--icon-only-dark.png').default }} />

### With Label Suffix

A count after the label, in a quieter colour, tells the reader how many items the tag covers without a second element (`labelSuffix`, `labelSuffixColor`).

<ThemedImage alt="With Label Suffix" width={104} sources={{ light: require('./tag--with-label-suffix-light.png').default, dark: require('./tag--with-label-suffix-dark.png').default }} />

### Css Customization

Six variables set on one wrapper -- the variables are listed under CSS variables on this page. Both tags take every variable from the wrapper; the second is there to show the space `--tag-spacing-end` leaves after **Custom Tag**.

<ThemedImage alt="Css Customization" width={231} sources={{ light: require('./tag--css-customization-light.png').default, dark: require('./tag--css-customization-dark.png').default }} />

## Minimal example

`onClick` is handed an object, not the DOM event.

```tsx
import { Tag } from "@onlyoffice/apps-ui-kit/components/tag";

export function RoomTag({ onFilter }: { onFilter: (label: string) => void }) {
  return (
    <Tag tag="finance" label="Finance" onClick={(e) => onFilter(e.label)} />
  );
}
```

## Props


<APITable name="Props">

| Property | Type | Description |
| --- | --- | --- |
| `tag` | `string` | Identifier of the tag. It is handed to `onDelete`, and it is the text shown when `label` is left out. |
| `className`? | `string` | Applied to the outermost element. |
| `dataTestId`? | `string` | `data-testid` of the outermost element. |
| `icon`? | `FC<SVGProps<SVGSVGElement>> \| string` | Glyph before the label: an SVG URL, or a component rendered as a 12px icon. |
| `iconClassName`? | `string` | Applied to that glyph. |
| `id`? | `string` | Applied to the outermost element. |
| `isDefault`? | `boolean` | Ignored. Nothing reads this prop on a single tag; it is `TagType.isDefault` that `Tags` acts on. |
| `isDeleted`? | `boolean` | Whether the tag counts as removed: `onClick` stops firing and the border greys out. |
| `isDisabled`? | `boolean` | Whether the tag is inert. Pointer events are dropped in CSS as well, so hover does nothing either. |
| `isLast`? | `boolean` | Whether the trailing margin is dropped, for the last tag in a row. |
| `isNewTag`? | `boolean` | Whether the tag is drawn in its "new" colours. It is also what makes the delete cross appear. Default: `false`. |
| `label`? | `string` | Text of the tag. It is also the `title` attribute and the accessible name. |
| `labelSuffix`? | `string` | Extra text after the label, inside the same line. |
| `labelSuffixColor`? | `string` | CSS colour of that suffix. |
| `onClick`? | `(tag: TagClickEvent) => void` | Called on a click anywhere in the tag, with `{ label, roomType, providerType }` — not with the DOM event. |
| `onDelete`? | `(tag?: string) => void` | Called with `tag` when the cross is clicked. The cross is only rendered when `isNewTag` is set as well. |
| `onMouseEnter`? | `() => void` | Called when the pointer enters the tag. |
| `onMouseLeave`? | `() => void` | Called when the pointer leaves the tag. |
| `providerType`? | `number` | Passed straight back through `onClick`. The component itself does nothing with it. |
| `ref`? | `RefObject<HTMLDivElement \| null>` | Ref to the outermost element. |
| `roomType`? | `number` | Passed straight back through `onClick`. The component itself does nothing with it. |
| `style`? | `CSSProperties` | Merged into the outermost element's inline style, before `tagMaxWidth` is applied. |
| `tagMaxWidth`? | `string` | `max-width` of the tag, as a CSS length — `Tags` passes a percentage of its own width. |
| `withLabel`? | `boolean` | Whether the label is rendered. Turn it off for a tag that is only its icon. Default: `true`. |

</APITable>

`Tags` accepts a different, wider shape for each entry of its row:


<APITable name="Props">

| Property | Type | Description |
| --- | --- | --- |
| `label` | `string` | Text of the tag. `Tags` also uses it as the React key. |
| `advancedOptions`? | `string[]` | Labels listed in the overflow drop-down. `Tags` fills this in for the overflow tag itself. |
| `icon`? | `FC<SVGProps<SVGSVGElement>> \| string` | Glyph before the label: an SVG URL, or a component. |
| `isDefault`? | `boolean` | Marks the tag as the room's default one. It only takes part in the width arithmetic. |
| `isDisabled`? | `boolean` | Whether the tag is inert. |
| `isOptionTag`? | `boolean` | Marks the tag as the overflow or create trigger. `Tags` sets this itself. |
| `isThirdParty`? | `boolean` | Marks the tag as a third-party provider: it is given a fixed 44px width and its label is hidden. |
| `key`? | `string` | React key for the tag. `Tags` falls back to the label when it is absent. |
| `labelSuffix`? | `string` | Extra text after the label. |
| `labelSuffixColor`? | `string` | CSS colour of that suffix. |
| `maxWidth`? | `string` | `max-width` of the tag. `Tags` overwrites whatever is passed here with its own calculation. |
| `onClick`? | `() => void` | Ignored by `Tags`, which wires every tag to `onSelectTag` instead. |
| `providerType`? | `number` | Passed back through `onSelectTag`. |
| `roomType`? | `number` | Passed back through `onSelectTag`. |

</APITable>

## Recipes

### Disabled / read-only

`isDisabled` dashes the border and drops pointer events in CSS, so hover does nothing either.

```tsx
import { Tag } from "@onlyoffice/apps-ui-kit/components/tag";

export function ArchivedTag() {
  return <Tag tag="archive" label="Archived" isDisabled />;
}
```

### Removable

The cross needs **both** `isNewTag` and `onDelete`; either alone renders no cross.

```tsx
import { useState } from "react";
import { Tag } from "@onlyoffice/apps-ui-kit/components/tag";

export function DraftTags() {
  const [tags, setTags] = useState(["design", "q3"]);

  return (
    <div style={{ display: "flex" }}>
      {tags.map((tag, index) => (
        <Tag
          key={tag}
          tag={tag}
          label={tag}
          isNewTag
          isLast={index === tags.length - 1}
          onDelete={(name) => setTags((t) => t.filter((x) => x !== name))}
        />
      ))}
    </div>
  );
}
```

### A provider tag, icon only

`withLabel={false}` leaves the glyph on its own — this is how a third-party storage is marked.

```tsx
import { Tag } from "@onlyoffice/apps-ui-kit/components/tag";

export function ProviderTag({ iconUrl }: { iconUrl: string }) {
  return (
    <Tag
      tag="provider"
      label="Nextcloud"
      icon={iconUrl}
      withLabel={false}
      providerType={3}
    />
  );
}
```

## Behaviour the types don't state

- **`onClick` receives `{ label, roomType, providerType }`, not an event.** `label` falls back
  to `tag` when you did not pass one, so the handler always has something to filter by.
- **The delete cross is drawn only when `isNewTag` is set.** `onDelete` on its own does
  nothing, which is the usual reason a tag looks un-removable.
- **`isDeleted` and `isDisabled` do not restyle the text.** The stylesheet has rules for a
  struck-through label and a greyed one, but the class they need is never put on the text, so
  only the border changes. Do not rely on either state being legible on its own.
- **`isDisabled` also blocks hover**, because the CSS sets `pointer-events: none` on the whole
  tag — a tooltip attached to it will not open.
- **The clickable area is bigger than the tag.** A pseudo-element extends it 3px on every side
  and 28px tall, so two tags closer than that overlap in their hit areas.
- **The tag brings its own trailing margin** of 4px, which `isLast` removes. In a flex row with
  a `gap` the two add up.
- **Hover highlights the tag only when `onClick` is passed.** Without a handler the tag keeps
  its colours and the default cursor under the pointer; a disabled or deleted tag never
  highlights.
- **The tag is `width: fit-content` and capped at 22px tall.** `tagMaxWidth` is written into
  the inline style, after `style`, so it wins over a `maxWidth` set there. A label wider than
  that cap is cut off with an ellipsis, and the full text stays in the `title` tooltip.
- **A component passed as `icon` is rendered inside an [`IconButton`](../interactive-elements/icon-button.md)**
  at 12px and the tag's padding drops to 0; a string is fetched and inlined instead. The two
  forms do not look the same.
- `isDefault` is declared on `TagProps` and never read — it is `TagType.isDefault`, the shape
  [`Tags`](./tags.md) takes, that has an effect.
- The `title` attribute and the accessible name are both `label`, so a tag with no label has
  neither.

## CSS variables

Set them on any ancestor.

<APITable name="CSS-variables">

| Variable              | Default     | Effect                                |
| --------------------- | ----------- | ------------------------------------- |
| `--tag-bg`            | theme token | Background of the tag.                |
| `--tag-border-style`  | theme token | Whole `border` shorthand.             |
| `--tag-radius`        | `6px`       | Corner radius.                        |
| `--tag-inner-padding` | `1px 7px`   | Inner padding.                        |
| `--tag-spacing-end`   | `4px`       | Trailing margin, removed by `isLast`. |
| `--tag-height`        | `22px`      | `max-height` of the tag.              |
| `--tag-text-color`    | theme token | Label colour.                         |
| `--tag-size`          | `13px`      | Label font size.                      |
| `--tag-lh`            | `20px`      | Label line height.                    |

</APITable>

`--tag-bg` is the resting background only: a new tag, and any clickable tag on hover or press,
takes its theme colour instead. Likewise `--tag-border-style` gives way to the dashed theme
border on a disabled tag. `--tag-height` is a `max-height`, so raise it together with the
vertical part of `--tag-inner-padding` for a taller tag.

`--tag-text-color`, `--tag-size` and `--tag-lh` are read by the same label class the
`isDeleted` and `isDisabled` text rules need, which is never put on the text, so today they
change nothing. The other `--tag-*` names the stylesheet
uses (`--tag-background`, `--tag-color` and the rest) are declared by the theme on the tag
itself, so a wrapper cannot override them.

## Accessibility

- The tag is a `<div>` with a click handler and `aria-label` set from `label`. It has **no
  role and no `tabIndex`**, so a clickable tag cannot be reached or activated from the keyboard.
- `aria-disabled` is set from `isDisabled`, and the CSS additionally makes the tag inert.
- The delete cross is an [`IconButton`](../interactive-elements/icon-button.md), which is itself a `<div>`
  with no name — nothing announces which tag it removes, and it cannot be focused.
- A tag with `withLabel={false}` announces only its `aria-label`, so keep `label` filled in
  even when it is not drawn.

## Test ids

<APITable name="Test-ids">

| Element | `data-testid`               |
| ------- | --------------------------- |
| The tag | `tag_item`, or `dataTestId` |

</APITable>

[`Tags`](./tags.md) overrides it per tag with `tag_item_<label>`.

## Related

- [`Tags`](./tags.md) — the row that lays these out and handles the overflow.
- [`SelectedItem`](./selected-item.md) — the removable chip for a user's own choice.
- [`Badge`](./badge.md) — the filled pill for a count or a status.
