---
description: "Row offering one kind of room, with its glyph, its translated name and its description."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/room-type/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# RoomType

Row offering one kind of room, with its glyph, its translated name and its description. It is
the "choose a room type" step of the portal's create-room flow, in three layouts: a card in the
list, the collapsed button at the top of a dropdown, and an entry inside that dropdown.

<ThemedImage alt="RoomType" width={1014} sources={{ light: require('./room-type--primary-light.png').default, dark: require('./room-type--primary-dark.png').default }} />

## Use this when / not when

- Use when you are reproducing the portal's room-creation picker and want its exact wording.
- Not for the glyph alone — that is [`RoomLogo`](./room-logo.md), which this component
  renders inside itself.
- Not for a particular existing room — that is [`RoomIcon`](./room-icon.md).
- Not as a generic option row: every string is a `Common` translation key of the DocSpace
  portal, so a row about anything else comes out blank.

**Portal-internal.** All six titles and all six descriptions come from the portal's `Common`
namespace (`CollaborationRoomTitle`, `VirtualDataRoomDescription`, `FormFilingRoomInfo` and so
on). Without those translations loaded the row renders a glyph and two empty lines.

## Import

```ts
import RoomType from "@onlyoffice/apps-ui-kit/components/room-type";
```

It is a **default** export, so the name is yours to choose. The root barrel carries it by name
as well — `components/index.ts` re-exports it as `export { default as RoomType }` — but prefer the
subpath: the barrel does not build without four optional peers, see
[Which import form](../../getting-started/installation.md#which-import-form).

Needs `TranslationProvider` above it, with the portal's `Common` namespace, or every label is
empty and i18next logs a missing-key error. Needs `ThemeProvider` for its borders and hover
backgrounds.


## Stories

### Default

A single card as it appears in a list of room types to choose from; pick another type or layout in the Controls panel below.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./room-type--default-light.png').default, dark: require('./room-type--default-dark.png').default }} />

### Dropdown Button

The collapsed button at the top of a picker, drawn open: the border takes the accent colour and the arrow points up (`isOpen`). Clear `isOpen` in the Controls panel to see it closed, arrow pointing down.

<ThemedImage alt="Dropdown Button" width={1014} sources={{ light: require('./room-type--dropdown-button-light.png').default, dark: require('./room-type--dropdown-button-dark.png').default }} />

### Dropdown Item

An entry inside the picker's dropdown: no border and no arrow, only a background on hover.

<ThemedImage alt="Dropdown Item" width={423} sources={{ light: require('./room-type--dropdown-item-light.png').default, dark: require('./room-type--dropdown-item-dark.png').default }} />

### Room Types

Every room type the row can describe, each with its own glyph, name and description (`roomType`) — what a room-type picker lists.

<ThemedImage alt="Room Types" width={1014} sources={{ light: require('./room-type--room-types-light.png').default, dark: require('./room-type--room-types-dark.png').default }} />

### Disabled State

Rows for a room type the user may not create right now, shown but refusing the click:

- **Form Filling Space** — a list card on a grey background, with no hover change and no pointer cursor (`disabledFormRoom`)
- **Public room** — a dropdown entry with its glyph and text faded (`disabledPublicRoom`)

Click either one: the Actions panel stays empty.

<ThemedImage alt="Disabled State" width={1014} sources={{ light: require('./room-type--disabled-state-light.png').default, dark: require('./room-type--disabled-state-dark.png').default }} />

### From Template

The two ways a template shows up in a picker:

- **From template** — the entry that starts a room from a template: both lines take the template wording and the glyph its template form (`isTemplate`)
- **Collaboration room** — a room type offered from a template: the glyph changes, the name and description stay (`isTemplateRoom`)

<ThemedImage alt="From Template" width={1014} sources={{ light: require('./room-type--from-template-light.png').default, dark: require('./room-type--from-template-dark.png').default }} />

### Form Space

The row worded for a form space rather than a room, for a picker opened from the forms section (`isFormSection`). Turn on `isTemplate` in the Controls panel below to see the form-space template wording.

<ThemedImage alt="Form Space" width={1014} sources={{ light: require('./room-type--form-space-light.png').default, dark: require('./room-type--form-space-dark.png').default }} />

### Right To Left

The card in a right-to-left interface: the glyph moves to the right edge, the text aligns right and the forward arrow sits on the left, pointing left.

<ThemedImage alt="Right To Left" width={1014} sources={{ light: require('./room-type--right-to-left-light.png').default, dark: require('./room-type--right-to-left-dark.png').default }} />

### Css Customization

Every overridable variable set on one card -- the variables are listed under CSS variables on this page. Hover it to see `--room-type-item-hover-bg`.

<ThemedImage alt="Css Customization" width={336} sources={{ light: require('./room-type--css-customization-light.png').default, dark: require('./room-type--css-customization-dark.png').default }} />

## Minimal example

```tsx
import RoomType from "@onlyoffice/apps-ui-kit/components/room-type";
import { RoomsType } from "@onlyoffice/apps-ui-kit/enums";

export function RoomTypePicker({ onPick }: { onPick: () => void }) {
  return (
    <RoomType
      roomType={RoomsType.FormRoom}
      isOpen={false}
      selectedId=""
      onClick={onPick}
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `isOpen` | `boolean` | Whether the row is drawn as opened: an accent border on `dropdownButton`, and its arrow turned the other way. |
| `onClick` | `React.MouseEventHandler<HTMLElement>` | Called with the event when the row is clicked, once per click wherever inside the row it lands. A disabled row does not call it at all. |
| `selectedId` | `number \| string` | Written to `data-selected-id` and read by nothing else. Required all the same. |
| `disabledFormRoom`? | `boolean` | Greys the row out while `roomType` is `FormRoom`, marks it `aria-disabled` and stops it calling `onClick`. |
| `disabledPublicRoom`? | `boolean` | Greys the row out while `roomType` is `PublicRoom`, marks it `aria-disabled` and stops it calling `onClick`. |
| `id`? | `string` | `id` of the outer element. |
| `isFormSection`? | `boolean` | Uses the form-set wording for the title and the description instead of the room type's. |
| `isTemplate`? | `boolean` | Replaces the title and the description with the "from template" wording, whatever `roomType` says, and switches the glyph to the template one. |
| `isTemplateRoom`? | `boolean` | Switches the glyph to the template variant of `roomType` without touching the texts. |
| `roomType`? | `RoomsType` | Which room type the row describes. It picks the glyph, the title and the description; an unknown value leaves both texts empty. |
| `type`? | `"dropdownButton" \| "dropdownItem" \| "listItem"` | Which layout to render. Default: `"listItem"`. |

</APITable>

## Recipes

### The list of types

The default layout is `listItem`: a bordered card, full width, with the forward arrow on the
trailing edge.

```tsx
import RoomType from "@onlyoffice/apps-ui-kit/components/room-type";
import { RoomsType } from "@onlyoffice/apps-ui-kit/enums";

const TYPES = [
  RoomsType.FormRoom,
  RoomsType.EditingRoom,
  RoomsType.PublicRoom,
  RoomsType.VirtualDataRoom,
];

export function ChooseRoomType({
  onPick,
}: {
  onPick: (type: RoomsType) => void;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {TYPES.map((type) => (
        <RoomType
          key={type}
          roomType={type}
          isOpen={false}
          selectedId={type}
          onClick={() => onPick(type)}
        />
      ))}
    </div>
  );
}
```

### The collapsed picker

`type="dropdownButton"` is the chosen row with a chevron that points down, and up while
`isOpen`. The list under it is yours — a [`DropDown`](../overlays/drop-down.md) holding rows of
`type="dropdownItem"`.

```tsx
import { useState } from "react";
import RoomType from "@onlyoffice/apps-ui-kit/components/room-type";
import { RoomsType } from "@onlyoffice/apps-ui-kit/enums";

export function RoomTypeSelect() {
  const [open, setOpen] = useState(false);
  const [picked, setPicked] = useState(RoomsType.FormRoom);

  return (
    <div>
      <RoomType
        roomType={picked}
        type="dropdownButton"
        isOpen={open}
        selectedId={picked}
        onClick={() => setOpen((value) => !value)}
      />
      {open
        ? [RoomsType.FormRoom, RoomsType.EditingRoom].map((type) => (
            <RoomType
              key={type}
              roomType={type}
              type="dropdownItem"
              isOpen={false}
              selectedId={type}
              onClick={() => {
                setPicked(type);
                setOpen(false);
              }}
            />
          ))
        : null}
    </div>
  );
}
```

## Behaviour the types don't state

- **The arrow carries no handler of its own.** It sits inside the row, which already handles the
  click, so one click is one call. It is given `isClickable` only while the row is enabled, which
  is what keeps the pointer cursor on it.
- **A disabled row refuses the click.** `disabledFormRoom` and `disabledPublicRoom` add a class,
  swap the tooltip for the portal-wide `create-room-tooltip` anchor, drop the `title`, mark the
  row `aria-disabled` and return before `onClick`. It is still in the tab order — `aria-disabled`
  describes the state rather than removing the element. A disabled list card turns grey; a
  disabled dropdown entry turns grey and fades its glyph and text to half opacity.
- **`dropdownButton` ignores both disabled props.** It passes `onClick` straight through and
  never gets the disabled class, so a form room or public room in the collapsed button stays
  clickable and looks enabled.
- **The three layouts differ in their frame.** `listItem` and `dropdownButton` have a 1px border
  and rounded corners; `dropdownItem` has neither, and hides the arrow.
- **Open is drawn on the button only.** While `isOpen`, `dropdownButton` takes the accent border,
  turns its chevron from down to up and stops changing background on hover. The other layouts
  receive the class and do nothing with it.
- **`selectedId` is required and does nothing.** It is written to `data-selected-id` and read
  nowhere in the component.
- **A fourth layout exists in the stylesheet and cannot be reached.** `displayItem` — a static
  card with no arrow — is the fallback branch, but `type` defaults to `listItem` and its union
  has only the three names, so nothing can select it.
- **Some theme variables are never read.** `dropdownButton` reads its own
  `--room-type-dropdown-button-*` set and `dropdownItem` its own hover, disabled and description
  values, but `dropdownItem`'s background still falls back to the list item's `none`, so it is
  transparent rather than the solid white or black `--room-type-dropdown-item-background` gives
  it; the `--room-type-display-item-*` set belongs to the unreachable layout.
- **The accent border depends on the portal.** The pressed list card and the open or pressed
  dropdown button take `--accent-main`, a portal token the component does not define or give a
  fallback, so outside the portal that border does not change colour.
- **`isTemplate` overrides the wording entirely**, both lines, whatever `roomType` is, while
  `isTemplateRoom` changes only the glyph. `isFormSection` is checked first: alone it gives the
  form-set wording, and with `isTemplate` the form-set template wording.
- **Right to left, the arrow moves and mirrors.** It sits on the trailing edge by
  `margin-inline-start: auto`, so it moves to the left, and under `.rtl` it is flipped with
  `scaleX(-1)`.
- **The row is `width: 100%` with 16px of padding** and no maximum, so it fills whatever holds
  it; the gap between rows is the container's.
- **The title is a tooltip too** — it is passed to the wrapping `TooltipContainer`, so the kit's
  shared tooltip repeats the type's name on hover, provided `RootTooltip` is mounted. A disabled
  row passes an empty string instead.

## CSS variables

<APITable>

| Variable                        | Default    | Effect                                        |
| ------------------------------- | ---------- | --------------------------------------------- |
| `--room-type-item-bg`           | none       | Background of every layout                    |
| `--room-type-item-border`       | light grey | Border of the list item and dropdown button   |
| `--room-type-item-hover-bg`     | light grey | Hover background                              |
| `--room-type-description-color` | grey       | Colour of the second line                     |
| `--room-type-item-radius`       | `6px`      | Corner radius of the list item and button     |
| `--room-type-item-padding`      | `16px`     | Inner padding                                 |
| `--room-type-gap`               | `12px`     | Gap between the glyph, the text and the arrow |

</APITable>

A disabled row keeps its grey whatever `--room-type-item-bg` and `--room-type-item-hover-bg`
say. The dropdown entry has no border and no radius, so the border and radius variables do
nothing to it.

## Accessibility

- The row is a `<div>` with a click handler and no role, no `tabIndex` and no key handler, in
  every layout. It cannot be reached or activated from the keyboard, and a picker built from
  these rows is unusable without a pointer — wrap each row in your own button if that matters.
- The arrow inside is an `IconButton` and is focusable, which makes the only reachable control a
  decorative one.
- A greyed-out row carries `aria-disabled`, so its state is announced — but it stays focusable and
  is not removed from the tab order, which is the usual trade `aria-disabled` makes.
- The glyph is decorative and unlabelled; the accessible content of the row is its two lines of
  translated text.

## Test ids

<APITable>

| Layout           | `data-testid`               |
| ---------------- | --------------------------- |
| `listItem`       | `room-type-list-item`       |
| `dropdownButton` | `room-type-dropdown-button` |
| `dropdownItem`   | `room-type-dropdown-item`   |

</APITable>

Every layout also carries `data-selected-id`. There is no prop to change any of these.

## Related

- [`RoomLogo`](./room-logo.md) — the glyph this row draws, on its own.
- [`RoomIcon`](./room-icon.md) — an existing room rather than a kind of room.
- [`DropDown`](../overlays/drop-down.md) — the surface the `dropdownItem` rows are meant to sit in.
