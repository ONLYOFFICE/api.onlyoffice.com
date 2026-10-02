---
description: "Fixed 32px glyph saying which kind of room this is, with an optional selection checkbox."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/room-logo/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# RoomLogo

Fixed 32px glyph saying which kind of room this is, with an optional selection checkbox. One of
six room types, or the archive or template variant of it — chosen entirely from flags, with no
per-room artwork involved.

<ThemedImage alt="RoomLogo" width={48} sources={{ light: require('./room-logo--primary-light.png').default, dark: require('./room-logo--primary-dark.png').default }} />

## Use this when / not when

- Use in a list or a picker where the reader has to tell a form room from a collaboration room
  at a glance.
- Not for a particular room's own logo or its initials — that is
  [`RoomIcon`](./room-icon.md), which takes a `logo`, a colour and a title.
- Not for a whole row offering a room type with its name and description — that is
  [`RoomType`](./room-type.md), which is built on this component.
- Not as a way to render a checkbox: the checkbox here is hidden by the stylesheet. Use
  [`Checkbox`](../form-controls/checkbox.md) directly.

**The glyphs are a closed set.** There is no prop for a custom icon, no size preset, and no
label — the whole surface is which flag wins.

## Import

```ts
import { RoomLogo } from "@onlyoffice/apps-ui-kit/components/room-logo";
import { RoomsType } from "@onlyoffice/apps-ui-kit/enums";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

No provider is required: the glyphs are flat SVGs with their own colours and the box reads only
its two custom properties, both with fallbacks.


## Stories

### Default

The glyph of one room type at its standard size; pick another type or turn on a flag in the Controls panel below to see which glyph wins.

<ThemedImage alt="Default" width={48} sources={{ light: require('./room-logo--default-light.png').default, dark: require('./room-logo--default-dark.png').default }} />

### All Room Types

Every room type side by side, labelled by type, to pick the glyph a list or a header needs for each kind of room.

<ThemedImage alt="All Room Types" width={82} sources={{ light: require('./room-logo--all-room-types-light.png').default, dark: require('./room-logo--all-room-types-dark.png').default }} />

### Archive State

An archived room keeps one glyph whatever its type (`isArchive`), so a reader tells archived rooms apart from active ones at a glance.

<ThemedImage alt="Archive State" width={48} sources={{ light: require('./room-logo--archive-state-light.png').default, dark: require('./room-logo--archive-state-dark.png').default }} />

### Template Room Types

A template made from a room shows the template variant of that room's glyph (`isTemplateRoom`), so it still says which kind of room it creates. **AI** has no variant and keeps its plain glyph.

<ThemedImage alt="Template Room Types" width={82} sources={{ light: require('./room-logo--template-room-types-light.png').default, dark: require('./room-logo--template-room-types-dark.png').default }} />

### Template State

One template glyph for every type (`isTemplate`), for a place that lists templates without telling their room types apart; the `type` set here is ignored.

<ThemedImage alt="Template State" width={48} sources={{ light: require('./room-logo--template-state-light.png').default, dark: require('./room-logo--template-state-dark.png').default }} />

### With Checkbox

A row in selection mode swaps the glyph for a checkbox in the same box (`withCheckbox`). The component renders the checkbox hidden, so the story adds the rule that swaps them, as a host must; tick it, or set the mixed state in the Controls panel below.

<ThemedImage alt="With Checkbox" width={41} sources={{ light: require('./room-logo--with-checkbox-light.png').default, dark: require('./room-logo--with-checkbox-dark.png').default }} />

### Checkbox Checked

A selected row keeps its checkbox ticked (`isChecked`), with the same host rule revealing it as in the story above.

<ThemedImage alt="Checkbox Checked" width={41} sources={{ light: require('./room-logo--checkbox-checked-light.png').default, dark: require('./room-logo--checkbox-checked-dark.png').default }} />

### Css Customization

Both variables set on one wrapper -- the variables are listed under CSS variables on this page. The example draws a 40px box with a round glyph.

<ThemedImage alt="Css Customization" width={48} sources={{ light: require('./room-logo--css-customization-light.png').default, dark: require('./room-logo--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { RoomLogo } from "@onlyoffice/apps-ui-kit/components/room-logo";
import { RoomsType } from "@onlyoffice/apps-ui-kit/enums";

export function RoomKind() {
  return <RoomLogo type={RoomsType.FormRoom} />;
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `className`? | `string` | Added before the component's own classes, on the outer element. |
| `id`? | `string` | `id` of the outer element. |
| `isArchive`? | `boolean` | Draws the archive glyph instead, whatever `type` says. It wins over every other flag. Default: `false`. |
| `isChecked`? | `boolean` | Whether that checkbox is checked. Default: `false`. |
| `isIndeterminate`? | `boolean` | Whether that checkbox shows the mixed state instead of a tick. Default: `false`. |
| `isPrivacy`? | `boolean` | Ignored. Nothing reads this prop; there is no privacy glyph in the folder. |
| `isTemplate`? | `boolean` | Draws the generic template glyph, ignoring `type`. Checked after `isArchive`. Default: `false`. |
| `isTemplateRoom`? | `boolean` | Draws the template variant of `type`'s glyph. There is no AI template variant — that one falls back to the plain AI glyph. Default: `false`. |
| `onChange`? | `() => void` | Called by the checkbox, and by a tap on the glyph itself — but the glyph only calls it on a device `react-device-detect` reports as mobile. |
| `style`? | `CSSProperties` | Inline style of the outer element. |
| `type`? | `RoomsType` | Which room type's glyph to draw. An unknown value, or none, renders an empty box of the logo's size. |
| `withCheckbox`? | `boolean` | Renders a checkbox next to the glyph. The stylesheet hides it, so it only becomes visible under a rule of yours. Default: `false`. |

</APITable>

## Recipes

### A list of rooms by kind

`type` takes the portal's `RoomsType`, whose members are `FormRoom`, `EditingRoom`,
`CustomRoom`, `PublicRoom`, `VirtualDataRoom` and `AIRoom`. Anything outside that set renders an
empty box of the same size, so the row does not jump.

```tsx
import { RoomLogo } from "@onlyoffice/apps-ui-kit/components/room-logo";
import { RoomsType } from "@onlyoffice/apps-ui-kit/enums";

const ROOMS = [
  { id: "1", name: "Onboarding forms", type: RoomsType.FormRoom },
  { id: "2", name: "Q3 planning", type: RoomsType.EditingRoom },
  {
    id: "3",
    name: "Archived 2023",
    type: RoomsType.CustomRoom,
    archived: true,
  },
];

export function RoomList() {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {ROOMS.map((room) => (
        <li
          key={room.id}
          style={{ display: "flex", alignItems: "center", gap: 12 }}
        >
          <RoomLogo type={room.type} isArchive={room.archived} />
          <span>{room.name}</span>
        </li>
      ))}
    </ul>
  );
}
```

### Making the checkbox visible

`withCheckbox` renders one, and the component's own stylesheet sets it to `display: none`. It
becomes visible only under a rule of yours — in the portal that rule lives on the hovered or
selected row.

```tsx
import { RoomLogo } from "@onlyoffice/apps-ui-kit/components/room-logo";
import { RoomsType } from "@onlyoffice/apps-ui-kit/enums";

// In your stylesheet:
//   .selectable:hover .room-logo_checkbox,
//   .selectable[data-selected="true"] .room-logo_checkbox { display: flex; }

export function SelectableRoom({
  selected,
  onToggle,
}: {
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="selectable" data-selected={selected}>
      <RoomLogo
        type={RoomsType.PublicRoom}
        withCheckbox
        isChecked={selected}
        onChange={onToggle}
      />
    </div>
  );
}
```

## Behaviour the types don't state

- **The checkbox is hidden by the component's own CSS.** `.room-logo_checkbox` is
  `display: none` with nothing in the folder turning it back on, so `withCheckbox` on its own
  produces a control the user never sees. That class name is the hook a consumer's stylesheet
  has to target.
- **A tap on the glyph calls `onChange` only on a mobile device.** The handler on the icon
  wrapper returns early unless `react-device-detect` reports `isMobile`, which is a user-agent
  test made at module load — a narrow desktop window is still desktop, and a click there does
  nothing.
- **The flags are checked in a fixed order**: `isArchive`, then `isTemplate`, then
  `isTemplateRoom`, then `type`. The first one that matches wins, so an archived template shows
  the archive glyph.
- **There is no AI template glyph.** `isTemplateRoom` with `RoomsType.AIRoom` falls through to
  the same icon the non-template branch uses, unlike the other five types.
- **`isPrivacy` is dead.** It is declared, documented as adding a privacy icon, and read by
  nothing.
- **The box is 32×32 and refuses to shrink** — `min-width` and `min-height` match the size — and
  it brings no margin, so spacing in a row is the container's `gap`.
- **The `data-testid` is the literal `room-logo`**; there is no prop to change it.

## CSS variables

<APITable>

| Variable             | Default | Effect                                                   |
| -------------------- | ------- | -------------------------------------------------------- |
| `--room-logo-size`   | `32px`  | Width and height of the box, and its minimums            |
| `--room-logo-radius` | `6px`   | Corner radius applied to the glyph, not to the outer box |

</APITable>

The glyphs are SVG assets with baked-in colours; neither variable recolours them. Nor does
`--room-logo-size` scale them: each SVG is drawn at a fixed 32px, so a larger box only adds
empty space around the glyph, and a smaller one leaves it overflowing the box.

## Accessibility

- The glyph is an inline SVG inside two plain `<div>`s, with no role, no title and no
  `aria-hidden`. A screen reader skips it, which is right while the room's kind is also written
  out next to it — and wrong when the glyph is the only statement of it. Add your own
  `aria-label` on the row in that case.
- The wrapper's click handler is not exposed to the keyboard: there is no `tabIndex` and no key
  handler, and it only fires on mobile anyway. The checkbox inside is a real one and is
  focusable — once your stylesheet has made it visible.

## Test ids

<APITable>

| Element       | `data-testid` |
| ------------- | ------------- |
| Outer element | `room-logo`   |

</APITable>

The icon wrapper and the checkbox carry the class names `room-logo_icon-container`,
`room-logo_icon` and `room-logo_checkbox` instead, which is what to select on.

## Related

- [`RoomIcon`](./room-icon.md) — a specific room's own logo, colour and initials.
- [`RoomType`](./room-type.md) — this glyph inside a full row with the type's name and description.
- [`Checkbox`](../form-controls/checkbox.md) — the checkbox on its own, visible by default.
