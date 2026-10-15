---
description: "The file list of the DocSpace portal, in three parts: the container, the row and the row's content."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/rows/README.md"
---

import APITable from '@site/src/components/APITable/APITable';

# Rows

The file list of the DocSpace portal, in three parts: the container, the row and the row's
content. It is shaped around that list, not around lists in general — read the three pages
below before choosing it.

## Use this when / not when

- Use when you are rebuilding something that has to look and behave like the portal's file
  list: a selectable row with an icon, a title, badges and a context menu, virtualised over
  thousands of items.
- Not for a generic list of your own. The parts read each other's children by position and by
  prop name, and the virtual list measures itself through a literal element id — see
  [`RowContainer`](./row-container.md).
- Not for tabular data with columns the user sorts or resizes: that is
  [`Table`](../table/index.md).
- Not for a handful of items. Three names and an avatar are a flex column of your own, and cost
  nothing to keep.

## Import

```ts
import {
  Row,
  RowContainer,
  RowContent,
} from "@onlyoffice/apps-ui-kit/components/rows";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme`, and
`TranslationProvider` from `@onlyoffice/apps-ui-kit/providers/translation` for the context
menu's own labels.

## Minimal example

The three nest in one order only: container, then rows, then one content per row.

```tsx
import {
  Row,
  RowContainer,
  RowContent,
} from "@onlyoffice/apps-ui-kit/components/rows";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

export function MemberList({ names }: { names: string[] }) {
  return (
    <RowContainer useReactWindow={false}>
      {names.map((name) => (
        <Row key={name} contextOptions={[]}>
          <RowContent>
            <Text fontWeight={600}>{name}</Text>
            <span />
            <Text fontSize="12px">Member</Text>
          </RowContent>
        </Row>
      ))}
    </RowContainer>
  );
}
```

## Recipes

### Selection

`checked` renders the checkbox by being present at all, and `onSelect` hands back whatever you
put in `data`.

```tsx
import { useState } from "react";
import {
  Row,
  RowContainer,
  RowContent,
} from "@onlyoffice/apps-ui-kit/components/rows";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

export function SelectableList({ names }: { names: string[] }) {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <RowContainer useReactWindow={false}>
      {names.map((name) => (
        <Row
          key={name}
          checked={selected.includes(name)}
          data={{ contextOptions: [] }}
          onSelect={(checked) =>
            setSelected((current) =>
              checked
                ? [...current, name]
                : current.filter((item) => item !== name),
            )
          }
        >
          <RowContent>
            <Text fontWeight={600}>{name}</Text>
            <span />
          </RowContent>
        </Row>
      ))}
    </RowContainer>
  );
}
```

## Behaviour the types don't state

- **The parts are coupled by position and by name, not by types.**
  [`RowContent`](./row-content.md) addresses its children by index,
  [`Row`](./row.md) reads `item` off its child's props, and
  [`RowContainer`](./row-container.md) is found by the virtual list through the literal
  id `rowContainer`. None of that is visible in the props.
- **Only one row list can work on a page**, because of that literal id, and the container has
  to be under the portal's scroll element for virtualisation to measure anything. Pass
  `useReactWindow={false}` outside the portal.
- The folder also exports `RowSkeleton` and `RowsSkeleton` for the loading state, and
  `IndexIconButtons` for the arrows the row shows while indexes are being edited.
- Each part has its own page; the traps are listed there rather than here.

## Sub-components

<APITable>

| Export                                      | What it is                                               |
| ------------------------------------------- | -------------------------------------------------------- |
| [`RowContainer`](./row-container.md) | The scrolling, virtualised list the rows go in           |
| [`Row`](./row.md)                    | One row: checkbox, start element, content, context menu  |
| [`RowContent`](./row-content.md)     | The row's text, laid out by the position of its children |
| `RowSkeleton`, `RowsSkeleton`               | Placeholders in the shape of a row and of a list of them |
| `IndexIconButtons`                          | The up and down arrows of the row's index-editing mode   |

</APITable>

`RowsSkeleton` draws `count` placeholder rows, 25 when it is not given, while the real rows
load. Each row is a 32px square for the start element, a bar for the title and a 16px square
for the context button; below the desktop breakpoint a shorter second bar appears under the
title, where a real row shows its line of details. The shapes take the colour, opacity, corner
radius, `speed` and `animate` props of
[`RectangleSkeleton`](../skeletons/rectangle.md), and `className` and `style` go to every row;
`x`, `y`, `width`, `height` and `uniqueKey` are ignored, because the rows place and size their
shapes themselves. `RowsSkeleton` has no way to round the start element: for a list of
avatars, render `RowSkeleton isRectangle={false}` once per row, which draws a circle in the
square's place. Neither checks the system's reduced-motion setting; `animate={false}` keeps
the shapes still.

## Accessibility

- Nothing here is a list, a grid or an option as far as assistive technology is concerned: the
  parts are `<div>`s. There is no `role="list"`, no `aria-selected` on a row, and the context
  menu opens on right-click or from a `<div>` that is not focusable.
- Selection is a [`Checkbox`](../form-controls/checkbox.md) inside the row, which is a real input and
  is reachable — it is the only part of a row that is.
- A list a keyboard user must be able to work through needs [`Table`](../table/index.md) or
  markup of your own.
- Each skeleton shape is an SVG with `role="img"`, so a screen reader meets three images per
  placeholder row. `title` names every one of them through an SVG `<title>`; without it they
  have no name and nothing is announced. The skeletons set no `aria-busy` — mark the loading
  region with it yourself.

## Test ids

<APITable>

| Element         | `data-testid`                        |
| --------------- | ------------------------------------ |
| The container   | `row-container`                      |
| A row           | `row`, overridable with `dataTestId` |
| A row's content | `row-content`                        |

</APITable>

## Related

- [`Row`](./row.md) — one row, and everything it renders.
- [`RowContainer`](./row-container.md) — the list around them.
- [`RowContent`](./row-content.md) — how a row's text is laid out.

## In this section

The following components are available:

| Component | Description |
| --- | --- |
| [RowContainer](./row-container.md) | Scrolling list the rows go in, virtualised and paged in as the user reaches the end. |
| [RowContent](./row-content.md) | The text of a row, laid out by the position of its children rather than by named slots. |
| [Row](./row.md) | One row of the file list: an optional checkbox, a start element, the content and a context menu. |
| [RowsSkeleton](./rows-skeleton.md) | Placeholder in the shape of a list of rows, shown while the rows themselves are loading. |
