---
description: "One row of tags that keeps to its width, collapsing the rest into an overflow tag."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/tags/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Tags

One row of tags that keeps to its width, collapsing the rest into an overflow tag. It is what a
room row and a room card use to show their tags on a single line.

<ThemedImage alt="Tags" width={173} sources={{ light: require('./tags--primary-light.png').default, dark: require('./tags--primary-dark.png').default }} />

## Use this when / not when

- Use for the tags of one object, on one line, where the row's width is fixed and the extras
  have to go somewhere.
- Not for a single tag — [`Tag`](./tag.md) on its own is smaller and lets you set its
  width yourself.
- Not for a wrapping cloud of tags; this row is `overflow: hidden` and never wraps. Lay
  [`Tag`](./tag.md)s out in your own flex container for that.
- Not for the user's own picks, which should be removable — that is
  [`SelectedItem`](./selected-item.md).

## Import

```ts
import { Tags } from "@onlyoffice/apps-ui-kit/components/tags";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme`, which the tags and the
overflow menu both read their colours from.


## Stories

### Default

<ThemedImage alt="Default" width={173} sources={{ light: require('./tags--default-light.png').default, dark: require('./tags--default-dark.png').default }} />

### Multiple Tags

Five tags side by side, each given an equal share of the row, for when the column count leaves room for all of them.

<ThemedImage alt="Multiple Tags" width={323} sources={{ light: require('./tags--multiple-tags-light.png').default, dark: require('./tags--multiple-tags-dark.png').default }} />

### With Overflow

Three tags and a `...` tag; click it to list the other three in a drop-down, and click an entry to select it (`onSelectTag`). Switch `removeTagIcon` in the Controls panel below to see the entries lose their leading margin.

<ThemedImage alt="With Overflow" width={185} sources={{ light: require('./tags--with-overflow-light.png').default, dark: require('./tags--with-overflow-dark.png').default }} />

### With Tag Objects

**Design** carries an icon before its label, **Review** a suffix after it, and the third tag is only its icon at a fixed width (`isThirdParty`) — the looks a plain string cannot ask for.

<ThemedImage alt="With Tag Objects" width={224} sources={{ light: require('./tags--with-tag-objects-light.png').default, dark: require('./tags--with-tag-objects-dark.png').default }} />

### Show All

All five tags at their natural width with no overflow tag, for a place where every tag must stay visible (`columnCount={-1}`); tags that do not fit are cut off at the container edge.

<ThemedImage alt="Show All" width={252} sources={{ light: require('./tags--show-all-light.png').default, dark: require('./tags--show-all-dark.png').default }} />

### With Create Tag

A plus tag after the two tags, for offering to add one more (`showCreateTag`); clicking it calls `onOptionTagClick`, and it disappears once the tags overflow.

<ThemedImage alt="With Create Tag" width={209} sources={{ light: require('./tags--with-create-tag-light.png').default, dark: require('./tags--with-create-tag-dark.png').default }} />

### With Custom Option Tag

Two tags and a `+1` count instead of `...`, for when the hidden tags belong in a menu of your own: clicking the count opens no drop-down and calls `onOptionTagClick`, and `optionTagRef` points at it for anchoring.

<ThemedImage alt="With Custom Option Tag" width={142} sources={{ light: require('./tags--with-custom-option-tag-light.png').default, dark: require('./tags--with-custom-option-tag-dark.png').default }} />

### Css Customization

The variable is listed under CSS variables on this page. The example sets it to 24px on the document; click the `...` tag to see the entry **Invoice** start further from the menu's edge.

<ThemedImage alt="Css Customization" width={195} sources={{ light: require('./tags--css-customization-light.png').default, dark: require('./tags--css-customization-dark.png').default }} />

## Minimal example

`columnCount` is how many tags are drawn before the rest collapse; it is required.

```tsx
import { Tags } from "@onlyoffice/apps-ui-kit/components/tags";

export function RoomTags({ tags }: { tags: string[] }) {
  return (
    <div style={{ width: 320 }}>
      <Tags
        tags={tags}
        columnCount={3}
        onSelectTag={(tag) => console.log(tag.label)}
      />
    </div>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `columnCount` | `number` | How many tags are drawn before the rest collapse into one overflow tag. `-1` draws all of them. |
| `onSelectTag` | `(tag: TagClickEvent) => void` | Called with `{ label, roomType, providerType }` when a tag, or an entry of the overflow drop-down, is clicked. |
| `tags` | `(string \| TagType)[]` | Tags to lay out. A bare string is treated as `{ label }`. |
| `className`? | `string` | Applied to the outermost element. |
| `id`? | `string` | Applied to the outermost element. |
| `onMouseEnter`? | `VoidFunction` | Called when the pointer enters any tag. It is not told which one. |
| `onMouseLeave`? | `VoidFunction` | Called when the pointer leaves any tag. |
| `onOptionTagClick`? | `VoidFunction` | Called when the overflow tag or the create tag is clicked. Passing it replaces the built-in drop-down. |
| `optionTagRef`? | `RefObject<HTMLDivElement \| null>` | Ref to the overflow tag, for a menu of your own anchored to it. |
| `removeTagIcon`? | `boolean` | Passed to the overflow drop-down, where it removes the leading margin of each entry. Default: `false`. |
| `showCreateTag`? | `boolean` | Whether a plus tag is drawn for creating a new one. It is dropped as soon as the tags overflow. |
| `style`? | `CSSProperties` | Applied to the outermost element as inline style. |

</APITable>

Each entry is a string or a `TagType`, whose fields are listed in
[`Tag`](./tag.md#props).

## Recipes

### All tags, no collapsing

`columnCount={-1}` draws every tag at a 195px cap and never builds an overflow tag. The row
still does not wrap, so anything past its width is clipped.

```tsx
import { Tags } from "@onlyoffice/apps-ui-kit/components/tags";

export function AllRoomTags({ tags }: { tags: string[] }) {
  return (
    <Tags
      tags={tags}
      columnCount={-1}
      onSelectTag={(tag) => alert(tag.label)}
    />
  );
}
```

### Your own overflow menu

Passing `onOptionTagClick` replaces the built-in drop-down: the overflow tag is then labelled
`+N` and clicking it calls you, with `optionTagRef` pointing at the element to anchor to.

```tsx
import { useRef, useState } from "react";
import { Tags } from "@onlyoffice/apps-ui-kit/components/tags";
import { DropDown } from "@onlyoffice/apps-ui-kit/components/drop-down";
import { DropDownItem } from "@onlyoffice/apps-ui-kit/components/drop-down-item";

export function RoomTagsWithMenu({ tags }: { tags: string[] }) {
  const anchor = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <div style={{ width: 280 }}>
      <Tags
        tags={tags}
        columnCount={2}
        optionTagRef={anchor}
        onOptionTagClick={() => setOpen(true)}
        onSelectTag={(tag) => console.log(tag.label)}
      />
      <DropDown
        open={open}
        forwardedRef={anchor}
        clickOutsideAction={() => setOpen(false)}
      >
        {tags.slice(2).map((tag) => (
          <DropDownItem key={tag} label={tag} onClick={() => setOpen(false)} />
        ))}
      </DropDown>
    </div>
  );
}
```

## Behaviour the types don't state

- **The row's width is shared out among the visible tags.** Each gets an equal percentage
  `maxWidth` of the measured width, less room for the overflow or create tag, so a long label
  truncates with an ellipsis instead of widening the row.
- **The widths are measured once per change of `tags`, `columnCount` or `showCreateTag`.**
  There is no `ResizeObserver`: resizing the container, or the row growing because a sibling
  shrank, leaves every tag at the percentage computed for the old width.
- **`columnCount` is a count of tags, not of pixels.** `-1` means "draw them all", `0` means
  "collapse them all into the overflow tag", and anything smaller than `tags.length` produces
  the overflow tag as an extra element after that many tags.
- **The overflow tag looks different depending on whether you handle it.** Without
  `onOptionTagClick` it is labelled `...` and opens a [`DropDown`](../overlays/drop-down.md) of
  the hidden labels; with it, the label becomes `+N` and the menu is yours to render.
- **`showCreateTag` is dropped as soon as the tags overflow.** The plus tag is only appended on
  the branch where everything fits, so a row that needs an overflow tag silently loses its
  "add" affordance.
- **The create tag and the overflow tag share `onOptionTagClick` and `optionTagRef`**, so one
  handler is called for both and cannot tell them apart.
- **`onSelectTag` is the only way a tag reports a click.** `TagType.onClick` is ignored:
  every tag is wired to `onSelectTag`, and an entry of the built-in menu reports through it too.
- **Tags are keyed by their label.** Two tags with the same text collide on the React key, and
  the `data-testid` of both becomes `tag_item_<label>`.
- **A `TagType` marked `isThirdParty` is fixed at 44px and its label is not rendered** — only
  its icon is, so such a tag must carry one.
- **`maxWidth` on a `TagType` is overwritten**, always, by the width the row computes.
- **The row is `display: flex`, `width: 100%` and `overflow: hidden`.** It takes the width of
  its parent and clips, so the parent is what decides how much fits.
- `removeTagIcon` does not remove anything: it drops the leading margin of each entry in the
  built-in overflow menu.
- `TagsProps` is not exported from the folder's entry point — type a wrapper's props with
  `React.ComponentProps<typeof Tags>`.

## CSS variables

The row itself has one; the tags inside follow [`Tag`](./tag.md#css-variables).

<APITable>

| Variable                      | Default | Effect                                           |
| ----------------------------- | ------- | ------------------------------------------------ |
| `--tags-overflow-text-margin` | `8px`   | Leading margin of an entry in the overflow menu. |

</APITable>

The overflow menu is portalled to the document body, so this variable reaches it only when it
is set on `:root` or `body`; a wrapper, or the `style` prop, never does. It is ignored under
`removeTagIcon`, which drops the margin altogether.

## Accessibility

- The row is a `<div>` with the hardcoded English `aria-label="Tags container"`, which cannot
  be overridden and does not change with the interface language. The `<div>` has no role, so
  most screen readers do not announce the label at all.
- Everything else comes from each [`Tag`](./tag.md): its label is its accessible name
  (`aria-label`), and a disabled tag carries `aria-disabled`.
- It has no list semantics: the tags are not `<li>`s and the row is not a `<ul>`, so a screen
  reader reads a run of labels with no sense of how many there are.
- **No tag can be reached from the keyboard** — see [`Tag`](./tag.md#accessibility) —
  and neither can the overflow tag, so the hidden labels are unreachable without a mouse.
- The overflow menu is a [`DropDown`](../overlays/drop-down.md) and inherits its behaviour,
  including closing on an outside click.

## Test ids

<APITable>

| Element              | `data-testid`       |
| -------------------- | ------------------- |
| The row              | `tags`              |
| A tag                | `tag_item_<label>`  |
| The overflow tag     | `tag_item`          |
| An entry of its menu | `tag_dropdown_item` |

</APITable>

None of them can be overridden by a prop.

## Related

- [`Tag`](./tag.md) — one tag, and the shape of an entry.
- [`DropDown`](../overlays/drop-down.md) — the overflow menu.
- [`SelectedItem`](./selected-item.md) — the removable chip for a user's own choice.
