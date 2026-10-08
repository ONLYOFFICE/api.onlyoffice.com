---
description: "Square room tile that shows the room's logo, or its initials on a colour when there is none."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/room-icon/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# RoomIcon

Square room tile that shows the room's logo, or its initials on a colour when there is none. It
is the thing at the left of a room row and at the top of a room tile: a logo image, an inlined
cover glyph, or two letters cut from the room's name, with an optional corner badge and an
optional pencil that opens the logo menu.

<ThemedImage alt="RoomIcon" width={112} sources={{ light: require('./room-icon--primary-light.png').default, dark: require('./room-icon--primary-dark.png').default }} />

## Use this when / not when

- Use wherever a specific room is shown by name — a row, a tile, a breadcrumb, a dialog header.
- Not for the icon that says what **kind** of room it is — that is
  [`RoomLogo`](./room-logo.md), which picks a fixed glyph from `RoomsType` and knows
  nothing about a logo of the room's own.
- Not for a person — use [`Avatar`](./avatar.md), which has the role ring, the status
  dot and the person-shaped placeholder.
- Not for a count or a marker on its own — that is [`Badge`](./badge.md). The badge
  here is a decoration on the tile, not a counter.

**It is a square with no built-in spacing and no label.** The room's name is drawn only as two
initials, and only when there is no logo; the readable name next to the tile is yours.

## Import

```ts
import { RoomIcon } from "@onlyoffice/apps-ui-kit/components/room-icon";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` above it in the tree, and unusually it reads the theme in JavaScript as
well as in CSS: the colour of the initials is computed from `isBase`. Without a provider the
context falls back to the light theme, so the tile keeps light-theme initials on a dark page —
this is not something a stylesheet override can correct.

## Stories

### Default

A room with no logo is shown by its initials on its colour. Change the name, the colour or the size live in the Controls panel below.

<ThemedImage alt="Default" width={112} sources={{ light: require('./room-icon--default-light.png').default, dark: require('./room-icon--default-dark.png').default }} />

### Sizes

The same tile at 32px, 48px and 96px (`size`). Any px value works; the initials stay 14px at every size, so a large tile needs its own text style for them.

<ThemedImage alt="Sizes" width={224} sources={{ light: require('./room-icon--sizes-light.png').default, dark: require('./room-icon--sizes-dark.png').default }} />

### Colors

Each room gets its own colour (`color`, six hex digits without `#`), and the initials turn white or black to stay readable on it.

<ThemedImage alt="Colors" width={320} sources={{ light: require('./room-icon--colors-light.png').default, dark: require('./room-icon--colors-dark.png').default }} />

### With Editing

Lets the reader change the logo: click the pencil in the corner, or anywhere on the tile, to open the logo menu (`withEditing`, `model`); picking an entry shows up in the Actions panel.

<ThemedImage alt="With Editing" width={118} sources={{ light: require('./room-icon--with-editing-light.png').default, dark: require('./room-icon--with-editing-dark.png').default }} />

### Empty State

For a room that has no logo yet: a dashed frame with a camera glyph, and a plus button in the bottom-right corner that opens the logo menu (`isEmptyIcon`, `model`). The button takes its background from the host's accent colour, which Storybook does not define, so here only a click on that corner finds it.

<ThemedImage alt="Empty State" width={112} sources={{ light: require('./room-icon--empty-state-light.png').default, dark: require('./room-icon--empty-state-dark.png').default }} />

### Archive

An archived room is greyed out whatever its colour: this tile is given the same blue as the others (`isArchive`).

<ThemedImage alt="Archive" width={112} sources={{ light: require('./room-icon--archive-light.png').default, dark: require('./room-icon--archive-dark.png').default }} />

### With Badge

Marks something about the room with a glyph in the bottom corner (`badgeUrl`); clicking it calls `onBadgeClick`, shown in the Actions panel.

<ThemedImage alt="With Badge" width={119} sources={{ light: require('./room-icon--with-badge-light.png').default, dark: require('./room-icon--with-badge-dark.png').default }} />

### With Tooltip

Explains the badge in words: hover it to read the text (`tooltipContent`), which the badge finds through `tooltipId`.

<ThemedImage alt="With Tooltip" width={119} sources={{ light: require('./room-icon--with-tooltip-light.png').default, dark: require('./room-icon--with-tooltip-dark.png').default }} />

### Template

Tells a template apart from a room: an outline in the tile colour instead of a filled square, with the initials inside (`isTemplate`).

<ThemedImage alt="Template" width={112} sources={{ light: require('./room-icon--template-light.png').default, dark: require('./room-icon--template-dark.png').default }} />

### With Hover

Hints that the tile can be clicked: hover it, and the initials slide away while a second image fades in (`hoverSrc`); a click opens the logo menu (`model`).

<ThemedImage alt="With Hover" width={112} sources={{ light: require('./room-icon--with-hover-light.png').default, dark: require('./room-icon--with-hover-dark.png').default }} />

### Long Title

However long the name, the tile shows two letters: the first of its first word and the first of its last (`title`).

<ThemedImage alt="Long Title" width={64} sources={{ light: require('./room-icon--long-title-light.png').default, dark: require('./room-icon--long-title-dark.png').default }} />

### With Logo

A room with a logo of its own shows it instead of the initials (`logo`):

- **Image** — a URL, drawn as it is
- **Cover** — an object with a `cover` SVG, inlined and painted in the initials' colour on the tile
- **Broken URL** — the image fails to load, so the tile falls back to the initials

<ThemedImage alt="With Logo" width={176} sources={{ light: require('./room-icon--with-logo-light.png').default, dark: require('./room-icon--with-logo-dark.png').default }} />

### Right To Left

The tile under a right-to-left interface: the pencil button and the badge move to the bottom-left corner. The direction comes from the theme's `interfaceDirection` (the Direction toolbar); the wrapper also carries `dir="rtl"` for the rules that read the DOM direction.

<ThemedImage alt="Right To Left" width={136} sources={{ light: require('./room-icon--right-to-left-light.png').default, dark: require('./room-icon--right-to-left-dark.png').default }} />

### Css Customization

Every overridable variable set on one wrapper -- the variables are listed under CSS variables on this page. It covers two instances:

- **Design review** — an editable tile, for `--room-icon-bg-opacity` on the tile and `--room-icon-edit-bg` on the pencil
- **Empty frame** — for `--room-icon-bg` on the plus glyph, `--room-icon-button-icon-color` on the camera, and the frame's `--room-icon-dashed-border` and `--room-icon-empty-radius`

<ThemedImage alt="Css Customization" width={232} sources={{ light: require('./room-icon--css-customization-light.png').default, dark: require('./room-icon--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { RoomIcon } from "@onlyoffice/apps-ui-kit/components/room-icon";

export function RoomRow({ name }: { name: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <RoomIcon title={name} color="4781D1" showDefault />
      <span>{name}</span>
    </div>
  );
}
```

## Props

The props type is an intersection of two unions. The first says a tile is either **coloured**
(`color` required, `imgClassName` refused) or **image-backed** (`imgClassName` allowed, `color`
optional); the second makes the four badge props all-or-nothing. The table below merges them.


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `title` | `string` | Room name. Only its initials are drawn — the first letter of the first word and of the last. |
| `badgeIconColor`? | `string` | Keeps the glyph's own colours instead of filling it with the tile's background colour. |
| `badgeIconNode`? | `ReactNode` | Badge glyph as a node, used instead of `badgeUrl`. |
| `badgeUrl`? | `string` | URL of the badge glyph, drawn in the corner. Either this or `badgeIconNode` renders the badge; `withEditing` suppresses it. |
| `className`? | `string` | Added to the outer element, before the component's own classes. |
| `color`? | `string` | Background of the tile and the source of the initials' colour, as six hex digits **without** a leading `#`. Required unless you pass `imgClassName` instead. |
| `dataTestId`? | `string` | Value of `data-testid` on the outer element. Default: `"room-icon"`. |
| `dropDownManualX`? | `string` | Horizontal offset of the logo menu. Default: `"-10px"`. |
| `hoverSrc`? | `string` | Image faded in over the tile while the pointer is on it. Ignored while `isArchive` is set. |
| `imgClassName`? | `string` | Added to the `<img>` the logo renders into. The type refuses it alongside a required `color`: a coloured default or an image, not both. |
| `isArchive`? | `boolean` | Paints the tile in the archive grey instead of `color`, and turns off the hover overlay. Default: `false`. |
| `isEmptyIcon`? | `boolean` | Draws a dashed empty frame with a camera glyph and a plus button, for a room that has no logo yet. It replaces every other content, including the initials. |
| `isTemplate`? | `boolean` | Draws the template outline instead of the round tile, with the logo shrunk to 24px inside it. Default: `false`. |
| `logo`? | `string \| TLogo` | The room's logo: a URL, or the portal's logo object. An object with a `cover` is inlined as a base64 SVG and recoloured; otherwise `medium` is used as a URL. |
| `model`? | `TModel[]` | Entries of the logo menu. Without it the menu opens empty. |
| `onBadgeClick`? | `() => void` | Called when the badge is clicked. The click also reaches the tile, which toggles the logo menu. |
| `onChangeFile`? | `(e: React.ChangeEvent<HTMLInputElement>) => void` | Called with the change event of the hidden file input. Passing it is what renders that input at all. |
| `radius`? | `string` | Corner radius of the tile and of the image inside it. Default: `"6px"`. |
| `showDefault`? | `boolean` | Draws the initials instead of the logo, whatever `logo` holds. |
| `size`? | `string` | Side of the square, as a px string. It is also divided to scale the cover glyph, so a value in any other unit gives `NaN`. Default: `"32px"`. |
| `tooltipContent`? | `string` | Text of the badge's tooltip. It also needs `tooltipId`, and it is what makes the badge show a pointer cursor. |
| `tooltipId`? | `string` | Id the badge's tooltip is registered under. Without it the tooltip has nothing to attach to. |
| `withEditing`? | `boolean` | Adds the pencil button and the menu it opens. It also makes the tile 64px wide at the least. |

</APITable>

## Recipes

### A room with a logo, falling back to initials

The logo is prefetched into an `Image` on mount, and a load failure switches the tile to the
initials on its own. You do not need to test the URL first.

```tsx
import { RoomIcon } from "@onlyoffice/apps-ui-kit/components/room-icon";

export function RoomAvatar({
  name,
  logoUrl,
}: {
  name: string;
  logoUrl?: string;
}) {
  return <RoomIcon title={name} color="4781D1" logo={logoUrl} size="48px" />;
}
```

### The editable tile

`withEditing` adds the pencil and the menu; `model` fills that menu; `onChangeFile` is what
renders the hidden file input. Only the entry whose `key` is
`ROOM_ACTION_KEYS.CREATE_EDIT_ROOM_UPLOAD` (`"create_edit_room_upload"`, exported from the root
barrel) is handed that input's ref; every other entry's `onClick` is called with no argument.

```tsx
import { RoomIcon } from "@onlyoffice/apps-ui-kit/components/room-icon";
import type { TModel } from "@onlyoffice/apps-ui-kit/components/room-icon";

export function LogoPicker({
  name,
  onUpload,
  onRemove,
}: {
  name: string;
  onUpload: (ref?: React.RefObject<HTMLInputElement | null>) => void;
  onRemove: () => void;
}) {
  const model: TModel[] = [
    {
      key: "create_edit_room_upload",
      label: "Upload",
      icon: "",
      onClick: onUpload,
    },
    { key: "remove", label: "Remove", icon: "", onClick: onRemove },
  ];

  return (
    <RoomIcon
      title={name}
      color="F97A0B"
      size="96px"
      withEditing
      model={model}
      onChangeFile={(e) => console.log(e.target.files)}
    />
  );
}
```

### A tile with a corner badge

The badge renders when `badgeUrl` or `badgeIconNode` is set and `withEditing` is not — the two
share the corner and editing wins.

```tsx
import { RoomIcon } from "@onlyoffice/apps-ui-kit/components/room-icon";

export function PublicRoomIcon({ name }: { name: string }) {
  return (
    <RoomIcon
      title={name}
      color="2DB482"
      size="48px"
      showDefault
      badgeIconNode={
        <svg viewBox="0 0 12 12" aria-hidden="true">
          <circle cx="6" cy="6" r="5" />
        </svg>
      }
      onBadgeClick={() => console.log("badge")}
    />
  );
}
```

## Behaviour the types don't state

- **`color` is six hex digits with no `#`.** The component prepends it. Passing `#4781D1` yields
  `##4781D1` and no background at all.
- **`size` must be a px string.** It is parsed with `parseFloat` after stripping `"px"` to scale
  the cover glyph, so `size="3rem"` gives a `NaN` scale and the glyph disappears; the width and
  height themselves would still be honoured.
- **A click anywhere on the tile toggles the logo menu**, not just on the pencil. The handler is
  on the outer element unconditionally, so a tile inside a clickable row opens the menu on every
  row click when `withEditing`, `isEmptyIcon` or `hoverSrc` is set — and silently flips an
  internal boolean the rest of the time. Clicking the badge does the same, because the badge's
  click bubbles.
- **The initials are the first letter of the first word and the first letter of the last**, taken
  after `-_[]{}()*+!?.,&\^$|#@%` are stripped and runs of whitespace collapsed, then uppercased.
  A one-word name therefore gives one letter, and a name made only of punctuation gives none.
- **The "wrong image" state can never be reached.** Its condition requires `imgSrc` to be
  something other than a string, and the only values `imgSrc` ever takes are a string or
  `undefined` — so the `wrongImage` class is dead and a failed load falls back to the plain
  initials.
- **The badge is painted outside the square.** It is absolutely positioned and pushed 24px (80px
  at `size="96px"`) from the centre, so it overflows the tile's own box; a container with
  `overflow: hidden` clips it.
- **The file input carries the literal id `customFileInput`.** Two editable tiles on one page
  produce two elements with the same id.
- **`logo` with a `cover`** is turned into a `data:image/svg+xml;base64` URL and rendered through
  `react-svg`, which means the glyph's `path` fill is recoloured from the theme. A plain string,
  or an object with only `medium`, is used as an ordinary image URL and is not recoloured.
- **`isTemplate`, `isEmptyIcon` and `showDefault` are checked in that order** and each replaces
  everything below it, so a tile that is both a template and empty renders the template.
- **The initials' colour depends on the theme.** In the light theme they are black on a
  `color` whose brightness is above 202 (of 255) and white on anything darker; in the dark
  theme they are drawn in `color` itself, on the same colour at 0.1 opacity. An inlined cover
  glyph is painted the same way. An archived tile in the dark theme keeps the black-or-white rule.
- **`hoverSrc` animates the tile.** On hover the initials or the cover glyph slide up and fade
  out, the background darkens to 80% brightness and the hover image fades in over it.
- **`isArchive` removes the pencil.** An archived tile with `withEditing` keeps the 64px minimum
  width and the pointer cursor, but draws neither the pencil nor the menu behind it.
- **No `logo` means the initials**, on `color`. `showDefault` is for forcing them while a logo
  exists; it is not needed to get them.

## CSS variables

All are read with a fallback, so setting any of them on an ancestor works.

<APITable>

| Variable                        | Default                       | Effect                                            |
| ------------------------------- | ----------------------------- | ------------------------------------------------- |
| `--room-icon-bg`                | white, black in dark          | Fill of the badge glyph and of the plus button    |
| `--room-icon-bg-opacity`        | `1`, `0.1` in dark            | Opacity of the coloured background                |
| `--room-icon-button-icon-color` | grey                          | Fill of the empty-state camera and template glyph |
| `--room-icon-edit-bg`           | light grey, dark grey in dark | Background of the pencil button                   |
| `--room-icon-dashed-border`     | `2px dashed` grey             | Border of the empty state                         |
| `--room-icon-empty-radius`      | `10px`                        | Corner radius of the empty state                  |

</APITable>

`--room-icon-bg` fills the badge glyph only when `badgeIconColor` is unset; a badge that keeps
its own colours ignores it. `--room-icon-button-icon-color` paints the template outline only
when the tile has no `color`.

The tile's own size, radius and colour are written as inline custom properties from the props
and cannot be overridden from a stylesheet.

## Accessibility

- The outer element is a `<div>` with no role and no ARIA, and it carries a click handler. It is
  not reachable by keyboard; the room's name has to be a real link or button next to it.
- The initials are rendered as text, so a screen reader reads out "TR" rather than the room name.
  Treat the tile as decorative and label the row.
- Both images use fixed English `alt` text — `"room icon"` and `"room icon hover"` — which is not
  translated and cannot be changed through a prop.
- The pencil, the plus and the badge are `IconButton`s and are focusable, but the menu they open
  is a `DropDown` that closes on an outside click and offers no roving focus of its own.

## Test ids

<APITable>

| Element                   | `data-testid`                           |
| ------------------------- | --------------------------------------- |
| Outer element             | `room-icon`, overridden by `dataTestId` |
| Initials                  | `room-title`                            |
| Inlined cover glyph       | `room-icon-cover`                       |
| Logo image                | `room-icon-image`                       |
| Camera glyph, empty state | `empty-icon`                            |
| Hover overlay             | `hover-container`, `hover-image`        |
| Badge wrapper             | `badge-container`                       |
| Hidden file input         | `customFileInput`                       |

</APITable>

The outer element also carries `data-is-archive`, `data-has-editing`, `data-is-template` and
`data-is-empty`.

## Related

- [`RoomLogo`](./room-logo.md) — the glyph for a room _type_, with no per-room logo.
- [`Avatar`](./avatar.md) — the same job for a person, with the status and role rings.
- [`Badge`](./badge.md) — a standalone counter or marker.
