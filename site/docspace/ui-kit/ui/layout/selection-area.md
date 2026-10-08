---
description: "Rubber-band selection: a dragged rectangle that reports which items it covers, frame by frame."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/selection-area/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# SelectionArea

Rubber-band selection: a dragged rectangle that reports which items it covers, frame by frame. It
renders one fixed, invisible box and does all its work through document listeners and class names
you give it.

<ThemedImage alt="SelectionArea" width={756} sources={{ light: require('./selection-area--primary-light.png').default, dark: require('./selection-area--primary-dark.png').default }} />

## Use this when / not when

- Use over a listing whose items you can label with classes and a `value` attribute, when
  dragging across them should select them.
- **It does nothing without an element whose id is the literal `sectionScroll`.** Every mouse-down
  outside one is ignored. [`Section`](./section.md) renders that element as its body
  scroller, so inside one this is already satisfied; anywhere else, give the scrolling element that
  id yourself or the component is inert.
- Not for selecting one item — that is the checkbox on
  [`Tiles`](../tiles/index.md) or [`Rows`](../rows/index.md).
- Not for dragging items somewhere — [`DragAndDrop`](../interactive-elements/drag-and-drop.md) is the drop
  target.
- **It holds no selection.** `onMove` hands you the full covered and uncovered sets on every frame;
  keeping and applying them is yours.
- **It is pointer-only.** There is no keyboard equivalent and no focus handling of any kind.

## Import

```ts
import { SelectionArea } from "@onlyoffice/apps-ui-kit/components/selection-area";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` above it in the tree for the rectangle's border colour, and for the writing
direction — in a right-to-left interface the tile column index is mirrored, which it learns from
the provider's direction context.

## Stories

### Default

A grid of tiles, the layout the rectangle's column and row arithmetic is built for. Click and drag across the items to select them; a covered tile turns blue. Change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={756} sources={{ light: require('./selection-area--default-light.png').default, dark: require('./selection-area--default-dark.png').default }} />

### Row View

A list of equal-height rows, where only the rectangle's vertical extent decides what is covered: drag down from any row and every row it crosses turns blue, however far to the side the pointer goes (`viewAs`). Each row keeps its `value` on a child, found by `itemClass`.

<ThemedImage alt="Row View" width={784} sources={{ light: require('./selection-area--row-view-light.png').default, dark: require('./selection-area--row-view-dark.png').default }} />

### Right To Left

The tile grid in a right-to-left layout: the first tile sits in the top right corner, and a drag across the right-hand column selects the first tile of each row. The wrapper carries `dir="rtl"` for the grid; the component mirrors its column order from the theme's `interfaceDirection` (the Direction toolbar).

<ThemedImage alt="Right To Left" width={666} sources={{ light: require('./selection-area--right-to-left-light.png').default, dark: require('./selection-area--right-to-left-dark.png').default }} />

### Css Customization

All three variables set on one wrapper -- the variables are listed under CSS variables on this page. Drag across the tiles to see the fill and the border.

<ThemedImage alt="Css Customization" width={756} sources={{ light: require('./selection-area--css-customization-light.png').default, dark: require('./selection-area--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { useState } from "react";

import { SelectionArea } from "@onlyoffice/apps-ui-kit/components/selection-area";

const files = ["Report.docx", "Notes.txt", "Budget.xlsx"];

export function SelectableList() {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div id="sectionScroll" className="files-scroll">
      <SelectionArea
        viewAs="row"
        containerClass="files-scroll"
        scrollClass="files-scroll"
        itemsContainerClass="files-list"
        selectableClass="file-row"
        itemClass="file-row-value"
        onMove={({ added }) =>
          setSelected(
            added.map((node) => node.textContent ?? "").filter(Boolean),
          )
        }
      />
      <div className="files-list">
        {files.map((name, index) => (
          <div key={name} className="file-row">
            <div className="file-row-value" data-value={`file_${index}`}>
              {name}
            </div>
          </div>
        ))}
      </div>
      <p>{selected.length} selected</p>
    </div>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `containerClass` | `string` | Class of the element the rectangle is clamped to. When nothing matches it, the `<html>` element is used. Required. |
| `itemClass` | `string` | In row view, the class of the descendant that carries the `value` attribute. Required. |
| `itemsContainerClass` | `string` | Class of the element the items sit in. It is measured once, at the start of each drag, to place the grid's origin. Required. |
| `scrollClass` | `string` | Class of the scrolling element. The component listens to its `scroll` and shifts the rectangle to match; without a match it falls back to the document. Required. |
| `selectableClass` | `string` | Class every selectable element carries. Each one must also have a `value` attribute shaped `type_…_index`, which is how the component works out where it sits. Required. Default: `""`. |
| `viewAs` | `TViewAs` | `"tile"` switches to the grid arithmetic — columns, row gaps and missing tiles; anything else is treated as a single column. Required. |
| `arrayTypes`? | `TArrayTypes[]` | One entry per group of items, in the order they appear. Tile arithmetic needs it; without it every gap and row count is taken as zero. |
| `countTilesInRow`? | `number` | How many tiles fit in a row. It is asserted to exist in tile view, where a missing value makes every position `NaN`. |
| `defaultHeaderHeight`? | `number` | Height in pixels of one group heading, multiplied by the number of headings above a group. |
| `folderHeaderHeight`? | `number` | Height in pixels of the header above the tiles, added to the grid's origin unless `isRooms` is set. It is asserted to exist in tile view. |
| `isRooms`? | `boolean` | In tile view, skips adding `folderHeaderHeight` to the grid's origin. |
| `onMouseDown`? | `(event: MouseEvent) => void` | Called on every mouse-down on the document, before the button and the target are checked — so it fires for the right button and for clicks that start no selection. |
| `onMove`? | `({ added, removed, clear }: TOnMove) => void` | Called on every animation frame of a drag with the full covered and uncovered sets. |

</APITable>

## Recipes

### Labelling the items

Each selectable element needs a `value` attribute shaped `type_…_index`: the first
`_`-separated part names the group, the last is the item's position within the listing. In row
view the attribute is looked for on the descendant carrying `itemClass`; in tile view on the
selectable element itself.

```tsx
import { SelectionArea } from "@onlyoffice/apps-ui-kit/components/selection-area";

const rooms = ["Marketing", "Design", "Legal"];

export function LabelledTiles() {
  return (
    <div id="sectionScroll" className="tiles-scroll">
      <SelectionArea
        viewAs="tile"
        containerClass="tiles-scroll"
        scrollClass="tiles-scroll"
        itemsContainerClass="tiles-grid"
        selectableClass="room-tile"
        itemClass="room-tile"
        countTilesInRow={3}
        folderHeaderHeight={0}
        defaultHeaderHeight={0}
        arrayTypes={[{ type: "room", itemHeight: 180, rowGap: 16 }]}
        isRooms
        onMove={({ added }) => console.info(added.length)}
      />
      <div className="tiles-grid">
        {rooms.map((room, index) => (
          <div key={room} className="room-tile" data-value={`room_${index}`}>
            {room}
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Applying the result

`added` and `removed` together cover every selectable element on each frame, so the simplest
correct handler replaces the whole selection rather than merging.

```tsx
import { useCallback, useState } from "react";

import { SelectionArea } from "@onlyoffice/apps-ui-kit/components/selection-area";

export function ControlledSelection({ ids }: { ids: string[] }) {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const onMove = useCallback(({ added }: { added: Element[] }) => {
    const next = new Set<string>();
    for (const node of added) {
      const value = node.getAttribute("data-value");
      if (value) next.add(value);
    }
    setSelected(next);
  }, []);

  return (
    <div id="sectionScroll" className="scroll">
      <SelectionArea
        viewAs="row"
        containerClass="scroll"
        scrollClass="scroll"
        itemsContainerClass="list"
        selectableClass="row"
        itemClass="row-value"
        onMove={onMove}
      />
      <div className="list">
        {ids.map((id, index) => (
          <div key={id} className="row">
            <div className="row-value" data-value={`item_${index}`}>
              {id}
              {selected.has(`item_${index}`) ? " ✓" : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Behaviour the types don't state

- **The literal id `sectionScroll` is a hard requirement.** A mouse-down whose target is not inside
  an element with that id is ignored outright. [`Section`](./section.md) puts it on its body
  scroller, but only while `withBodyScroll` is set and the layout is not the phone one — so a
  section that does not scroll its own body leaves this component inert as well.
- **Six more literal class names cancel a selection before it starts**: `not-selectable`,
  `tile-selected`, `table-row-selected`, `row-selected`, `table-container_row-checkbox` and
  `item-file-name`. A mouse-down inside any of them does nothing.
- **Positions are computed, not measured.** The first selectable element is measured once at the
  start of each drag, and every other item's rectangle is derived from its index, that height and
  the gaps in `arrayTypes`. A listing whose items differ in height selects the wrong ones.
- **`added` and `removed` are not deltas.** On each animation frame every selectable element is
  classified afresh: `added` is everything the rectangle covers now, `removed` everything it does
  not.
- **`clear` never arrives.** The one call that would set it is guarded by a comparison of the
  pointer's position with itself, which is always zero — the flag in `TOnMove` is unreachable.
- **The drag starts after 10px.** Below that threshold the rectangle stays hidden and no `onMove`
  fires, so a plain click never reports anything.
- **Only the left button starts a selection.** A press with any other button is dropped straight
  after `onMouseDown` has been called.
- **`onMouseDown` fires for every button and every target**, because it is called before the
  left-button check and before the class-name checks.
- **In tile view three optional props are treated as required.** `countTilesInRow`,
  `folderHeaderHeight` and `defaultHeaderHeight` are asserted to exist; leaving them out makes the
  computed positions `NaN` and nothing is ever covered.
- **It listens on the document for as long as it is mounted**, adding `mousemove`, `mouseup` and a
  `scroll` listener on the scrolling element for the duration of a drag, plus a `blur` listener on
  the window that cancels it.
- **The rectangle is `position: fixed` at `z-index: 1000`** and is painted over everything; it is
  moved by writing inline styles, not by React.

## CSS variables

<APITable>

| Variable                   | Default                   | Effect                          |
| -------------------------- | ------------------------- | ------------------------------- |
| `--selection-area-bg`      | `rgba(68, 170, 255, 0.5)` | Fill of the rectangle           |
| `--selection-area-border`  | `1px solid #5299e0`       | Border of the rectangle         |
| `--selection-area-z-index` | `1000`                    | Stacking order of the rectangle |

</APITable>

## Accessibility

- **There is no keyboard equivalent.** Range selection here is a mouse gesture and nothing else;
  provide checkboxes or a Shift-click path on the items themselves so that a keyboard user can
  select more than one.
- The rectangle is a decorative `<div>` with no role and no label, and nothing announces how many
  items are covered. Put the count in a live region of your own if it matters.
- Because it works from a document-level `mousedown`, it competes with anything else that starts on
  the same event; the class names above are the only way to opt an element out.

## Test ids

<APITable>

| Element       | `data-testid`    |
| ------------- | ---------------- |
| The rectangle | `selection-area` |

</APITable>

It is not settable. The element also carries the stable class `selection-area`.

## Related

- [`Tiles`](../tiles/index.md) — the tile listing this is normally dragged over.
- [`Rows`](../rows/index.md) — the same for the list view.
- [`DragAndDrop`](../interactive-elements/drag-and-drop.md) — for dragging files in, rather than selecting.
