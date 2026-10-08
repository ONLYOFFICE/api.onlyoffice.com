---
description: "Dialog for a room's generated logo: a colour from the palette and an optional glyph, over a live preview."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/room-logo-cover-dialog/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# RoomLogoCoverDialog

:::warning[Portal only]

<ThemedImage alt="RoomLogoCoverDialog" width={1024} sources={{ light: require('./room-logo-cover-dialog--primary-light.png').default, dark: require('./room-logo-cover-dialog--primary-dark.png').default }} />

Works only inside an ONLYOFFICE Apps portal: it needs the portal's API client, stores and translations, and is not part of the [public API](../../getting-started/installation-and-setup.md#public-and-portal-internal).

:::

Dialog for a room's generated logo: a colour from the palette and an optional glyph, over a live
preview. It is what a room gets instead of an uploaded picture — the tile that
[`RoomIcon`](../data-display/room-icon.md) then draws.

**Portal-internal.** `t` is required, and the icon picker asks for keys outside the `Common`
namespace the package ships, so two of its labels are empty anywhere but in DocSpace.

## Use this when / not when

- Use to let someone choose the colour and glyph of a room's generated logo.
- Not for uploading a picture — that is
  [`AvatarEditorDialog`](./avatar-editor-dialog.md) with
  [`ImageEditor`](../interactive-elements/image-editor.md).
- Not for showing the result — [`RoomIcon`](../data-display/room-icon.md) draws the tile the choice
  produces.
- Not for a colour on its own — [`ColorPicker`](../form-controls/color-picker.md) is the picker this
  dialog opens for a custom colour.
- **It does not apply anything.** `onApply` hands you a colour and a cover; saving them, and
  closing the dialog afterwards, is yours to do.
- **The glyphs are your data, injected as markup.** Each cover's `data` is written into the page
  with `dangerouslySetInnerHTML`, in the picker and again in the preview. Serve them only from a
  source you trust.

## Import

```ts
import {
  RoomLogoCoverDialog,
  RoomLogoCover,
} from "@onlyoffice/apps-ui-kit/components/room-logo-cover-dialog";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` above it in the tree: the preview reads the theme in JavaScript to decide
whether to wash the colour out, and that context falls back to light rather than failing.
`TranslationProvider` — or a `t` of your own — supplies `Common:RoomCover`,
`Common:ApplyButton`, `Common:CancelButton` and `Common:Color`.

## Stories

### Default

The dialog as it opens for a room with no logo yet: the first preset colour, no icon and no title. Pick a colour and an icon to watch the preview change, and apply or cancel to see the callbacks in the Actions panel; the button reopens it.

<ThemedImage alt="Default" width={1024} sources={{ light: require('./room-logo-cover-dialog--default-light.png').default, dark: require('./room-logo-cover-dialog--default-dark.png').default }} />

### With Preselected Cover

Reopening the dialog for a room that already has a logo: its icon is on the tile and its colour, which is not one of the presets, sits as an extra swatch after them with a pencil to change it (`initialCover`, `initialColor`).

<ThemedImage alt="With Preselected Cover" width={1024} sources={{ light: require('./room-logo-cover-dialog--with-preselected-cover-light.png').default, dark: require('./room-logo-cover-dialog--with-preselected-cover-dark.png').default }} />

### Initials From Title

With no icon chosen the tile carries the room's initials, here QR for a room called Quarterly reports (`title`). Pick an icon and it replaces them; the without-icon chip brings them back.

<ThemedImage alt="Initials From Title" width={1024} sources={{ light: require('./room-logo-cover-dialog--initials-from-title-light.png').default, dark: require('./room-logo-cover-dialog--initials-from-title-dark.png').default }} />

### With Accent Colors

Pass the portal's colour scheme so the chosen icon sits on a tint of its accent colour; without it the chosen icon looks like the rest (`currentColorScheme`).

<ThemedImage alt="With Accent Colors" width={1024} sources={{ light: require('./room-logo-cover-dialog--with-accent-colors-light.png').default, dark: require('./room-logo-cover-dialog--with-accent-colors-dark.png').default }} />

### Without Icon Picker

When there are no icons to offer, the icon picker is left out and the dialog chooses only the colour behind the initials (`covers={[]}`).

<ThemedImage alt="Without Icon Picker" width={1024} sources={{ light: require('./room-logo-cover-dialog--without-icon-picker-light.png').default, dark: require('./room-logo-cover-dialog--without-icon-picker-dark.png').default }} />

### On Phone

On a phone the dialog becomes a full-screen panel, with the preview and the icons centred, and the plus button opens the colour picker in a modal of its own.

<ThemedImage alt="On Phone" width={1024} sources={{ light: require('./room-logo-cover-dialog--on-phone-light.png').default, dark: require('./room-logo-cover-dialog--on-phone-dark.png').default }} />

## Minimal example

```tsx
import { useState } from "react";

import {
  RoomLogoCoverDialog,
  type ICover,
} from "@onlyoffice/apps-ui-kit/components/room-logo-cover-dialog";
import type { TTranslation } from "@onlyoffice/apps-ui-kit/utils";

const covers: ICover[] = [
  {
    id: "folder",
    data: '<svg viewBox="0 0 24 24"><rect width="24" height="24" /></svg>',
  },
];

export function RoomCoverButton({ t }: { t: TTranslation }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setVisible(true)}>
        Change cover
      </button>
      <RoomLogoCoverDialog
        t={t}
        visible={visible}
        covers={covers}
        title="Marketing"
        onClose={() => setVisible(false)}
        onApply={(color, cover) => {
          console.info(color, cover?.id);
          setVisible(false);
        }}
      />
    </>
  );
}
```

## Props


<APITable name="Props">

| Property | Type | Description |
| --- | --- | --- |
| `covers` | `ICover[]` | The cover icons to offer. Each carries raw SVG markup that is injected into the page, so take them only from a source you trust. An empty array leaves the icon picker out. |
| `onApply` | `(color: string, cover: ICover \| null) => void` | Called with the chosen colour and cover when apply is clicked. The dialog does not close itself. |
| `onClose` | `() => void` | Called by the cancel button, the header cross, Escape and the backdrop — but not while the colour picker is open, which swallows all four. |
| `t` | `TTranslation` | Translation function. The dialog asks it for `Common:RoomCover`, `Common:ApplyButton` and `Common:CancelButton`, and its icon picker for keys outside `Common`, so a portal translation context is required. |
| `visible` | `boolean` | Whether the dialog is on screen. Opening it remounts the picker, which discards whatever was chosen last time. |
| `currentColorScheme`? | `CustomColorThemesSettingsItem` | The portal's accent colours, used to tint the hovered and selected icon. Without it those states have no accent. |
| `initialColor`? | `string` | Colour selected when the dialog opens, as `#rrggbb`. Defaults to the first of the kit's logo colours. |
| `initialCover`? | `ICover \| null` | Cover selected when the dialog opens, or `null` for the initials. |
| `isBaseTheme`? | `boolean` | Whether the preview is drawn for the light theme. Taken from the theme context when it is not passed. |
| `title`? | `string` | Room title, used for the initials drawn on the preview when no icon is chosen. Default: `""`. |

</APITable>

## Recipes

### Open / close (controlled)

`visible` puts the dialog on screen; `onClose` is called by the cancel button, the header cross,
Escape and the backdrop — except while the custom-colour picker is open, which swallows all four.

```tsx
import { useState } from "react";

import { Button } from "@onlyoffice/apps-ui-kit/components/button";
import {
  RoomLogoCoverDialog,
  type ICover,
} from "@onlyoffice/apps-ui-kit/components/room-logo-cover-dialog";
import type { TTranslation } from "@onlyoffice/apps-ui-kit/utils";

export function CoverDialog({
  t,
  covers,
}: {
  t: TTranslation;
  covers: ICover[];
}) {
  const [visible, setVisible] = useState(false);
  const [cover, setCover] = useState<ICover | null>(null);
  const [color, setColor] = useState("#4781D1");

  return (
    <>
      <Button label="Cover" onClick={() => setVisible(true)} />
      <RoomLogoCoverDialog
        t={t}
        visible={visible}
        covers={covers}
        title="Marketing"
        initialColor={color}
        initialCover={cover}
        onClose={() => setVisible(false)}
        onApply={(nextColor, nextCover) => {
          setColor(nextColor);
          setCover(nextCover);
          setVisible(false);
        }}
      />
    </>
  );
}
```

### Colour only

An empty `covers` array leaves the glyph picker out, and the dialog becomes a palette over the
preview of the room's initials.

```tsx
import { useState } from "react";

import { RoomLogoCoverDialog } from "@onlyoffice/apps-ui-kit/components/room-logo-cover-dialog";
import type { TTranslation } from "@onlyoffice/apps-ui-kit/utils";

export function ColourOnlyDialog({ t }: { t: TTranslation }) {
  const [visible, setVisible] = useState(true);

  return (
    <RoomLogoCoverDialog
      t={t}
      visible={visible}
      covers={[]}
      title="Design system"
      onClose={() => setVisible(false)}
      onApply={(color) => {
        console.info(color);
        setVisible(false);
      }}
    />
  );
}
```

### The picker without the dialog

`RoomLogoCover` is exported on its own, for a settings page rather than a modal. It owns the
selection and reports it through `onChange`, and the colour picker's open state is yours to hold.

```tsx
import { useState } from "react";

import {
  RoomLogoCover,
  type ICover,
} from "@onlyoffice/apps-ui-kit/components/room-logo-cover-dialog";
import type { TTranslation } from "@onlyoffice/apps-ui-kit/utils";

export function CoverSection({
  t,
  covers,
}: {
  t: TTranslation;
  covers: ICover[];
}) {
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const [choice, setChoice] = useState<{ color: string; cover: ICover | null }>(
    {
      color: "#4781D1",
      cover: null,
    },
  );

  return (
    <RoomLogoCover
      t={t}
      covers={covers}
      title="Marketing"
      initialColor={choice.color}
      initialCover={choice.cover}
      generalScroll
      openColorPicker={openColorPicker}
      setOpenColorPicker={setOpenColorPicker}
      onChange={(color, cover) => setChoice({ color, cover })}
    />
  );
}
```

## Behaviour the types don't state

- **While the custom-colour picker is open the dialog cannot be closed.** The close handler
  returns early, so the cancel button, the header cross, Escape and the backdrop all do nothing.
  The picker itself closes on a click outside it, which then restores the dialog's own close.
- **The dialog never re-renders on a choice.** The colour and cover are kept in a ref and read
  when apply is clicked, so nothing outside can observe the selection while the dialog is open,
  and the footer cannot reflect it.
- **Opening the dialog throws the previous selection away.** The picker is keyed on `visible`, so
  it is remounted each time and starts again from `initialColor` and `initialCover`.
- **`onApply` does not close the dialog**, and there is no loading state to hold it open while you
  save.
- **Below 600px the dialog is a side panel**, not a centred modal — the display type is chosen
  once, from the window width, when the component renders.
- **Clicking the glyph that is already chosen turns it off** rather than re-selecting it: the
  handler on a selected icon is the same toggle as the "without icon" control.
- **That control does nothing until a glyph has been chosen.** Turning "without icon" on is
  refused while no cover is selected, which is the state the dialog opens in when
  `initialCover` is `null`.
- **Two of the icon picker's labels are asked for outside `Common`.** It asks for
  `CreateEditRoomDialog:Icon`, which is not in the `Common` bundle the package ships, so a `t` of
  your own has to supply it outside the portal. It also asks for a bare `WithoutIcon` with no
  namespace: that key is in `Common`, so it resolves through a `t` whose default namespace is
  `Common` and shows the key itself through any other.
- **Cover markup is injected, not parsed.** `dangerouslySetInnerHTML` is used for every glyph in
  the picker and for the chosen one in the preview.
- **The dialog's height is computed from fixed constants** — 648px on desktop, 854px on tablet —
  measured against the body once it is mounted, the first opening included, recalculated on every
  resize, and forced to a scrolling body when the viewport is landscape and shorter than 640px.
- **A custom colour is anything outside the kit's palette** of nine presets. The extra swatch
  appears only once `selectedColor` is not one of `globalColors.logoColors`; before that the same
  slot is the plus button that opens the picker. The extra swatch carries a pencil button that
  opens the picker again to change it.
- **Where the colour picker opens depends on the width.** On a phone (600px and below) it is a
  modal of its own; otherwise it is a drop-down anchored to the plus button or custom swatch.
- **The initials are the first letters of the title's first and last words**, upper-cased, after
  special symbols are stripped — "Quarterly reports" gives QR, a one-word title a single letter.
- On `RoomLogoCover` the raw-room fields **`logoColor` and `coverColor` are six hex digits without
  a leading `#`** — the component prefixes it — while `initialColor` is a full `#rrggbb`.

## Sub-components

**`RoomLogoCover`** — the preview and the two pickers, without the modal around them. The dialog
renders it, and it is exported for a settings page that needs the same choice inline. It holds
the selection itself and reports it through `onChange`; `openColorPicker` and its setter belong
to whatever wraps it, because the dialog uses that flag to refuse closing.


<APITable name="Sub-components">

| Property | Type | Description |
| --- | --- | --- |
| `covers` | `ICover[]` | The cover icons to offer. Each carries raw SVG markup that is injected into the page, so take them only from a source you trust. An empty array leaves the icon picker out. |
| `openColorPicker` | `boolean` | Whether the colour picker is open. The component does not own this: hold it in the state of whatever wraps it. |
| `setOpenColorPicker` | `React.Dispatch<React.SetStateAction<boolean>>` | Opens and closes the colour picker. |
| `t` | `TTranslation` | Translation function. Besides `Common:Color` the icon picker asks for keys outside the `Common` namespace the kit ships. |
| `coverColor`? | `string` | A room's stored cover colour, six hex digits **without** a leading `#`. Used only when `initialColor` is absent, and it wins over `logoColor`. |
| `coverId`? | `string` | Id of a room's stored cover, looked up in `covers`. Used only when `initialCover` is absent. |
| `currentColorScheme`? | `CustomColorThemesSettingsItem` | The portal's accent colours, used to tint the hovered and selected icon. Without it those states have no accent. |
| `forwardedRef`? | `React.Ref<HTMLDivElement>` | Attached to the outer element, for measuring its height: a ref object, or a callback that is handed the element once it is mounted. |
| `generalScroll`? | `boolean` | Drops the inner scroll area, for when something outside scrolls instead. |
| `initialColor`? | `string` | Colour chosen on the first render, as `#rrggbb`. Anything but `undefined` wins over `coverColor` and `logoColor`. |
| `initialCover`? | `ICover \| null` | Cover chosen on the first render. An explicit `null` selects the initials and still wins over `coverId` and `logoCover`. |
| `isBaseTheme`? | `boolean` | Whether the preview is drawn for the light theme. Taken from the theme context when it is not passed. |
| `logoColor`? | `string` | A room's stored colour, six hex digits **without** a leading `#`. Used only when `initialColor` is absent. |
| `logoCover`? | `ICover \| null` | A room's stored cover. Used only when `initialCover` and `coverId` are absent, and only together with `withSelection`. |
| `onChange`? | `(color: string, cover: ICover \| null) => void` | Called with the colour and cover after every change. This is the only way out: the component keeps the selection in its own state. |
| `onInit`? | `(color: string, cover: ICover \| null) => void` | Called once after mount with the starting colour and cover, so the owner can record what it will get back unchanged. |
| `scrollHeight`? | `string` | Height of the scroll area around the two pickers, as a CSS length. Ignored on mobile and while `generalScroll` is set. |
| `title`? | `string` | Room title, reduced to initials for the preview when no icon is chosen. Default: `""`. |
| `withSelection`? | `boolean` | Lets `logoCover` be taken as the starting cover. Without it that field is ignored. |

</APITable>

`CustomLogo`, `SelectColor` and `SelectIcon` are in the folder but are not exported; their prop
types are, for typing a re-implementation.

## Accessibility

- **The whole picker is pointer-only.** Every swatch, every glyph and the "without icon" control
  is a `<div>` with a click handler: no role, no `tabindex`, no key handling. A keyboard user can
  reach the apply and cancel buttons and nothing between them.
- Nothing marks which swatch or glyph is chosen to a screen reader — the selected state is a
  class and a ring, with no `aria-pressed` or `aria-selected`.
- The glyphs are injected SVG with no titles and no `aria-hidden`, so they are announced, if at
  all, as unlabelled graphics.
- **While the colour picker is open, Escape does not close the dialog.** That is deliberate, so
  that Escape belongs to the picker, but the picker itself is dismissed by clicking outside it and
  offers no keyboard way out.
- The header is a plain string inside `ModalDialog.Header`, not a heading element.

## Test ids

<APITable name="Test-ids">

| Element                | `data-testid`                   |
| ---------------------- | ------------------------------- |
| Dialog                 | `room_logo_cover_dialog`        |
| Apply button           | `room_logo_cover_apply_button`  |
| Cancel button          | `room_logo_cover_cancel_button` |
| "Without icon" control | `room_logo_cover_without_icon`  |
| Add-a-colour button    | `color_item_add_custom`         |

</APITable>

The swatches are `color_item_<index>`, the chosen one `color_item_selected_<index>`, a chosen
custom colour `color_item_custom_selected`, and the glyphs `room_logo_cover_icon_<index>`; each
glyph also carries the element id `cover-icon-<id>`. None of them is settable.

## Related

- [`RoomIcon`](../data-display/room-icon.md) — draws the tile this dialog configures.
- [`ColorPicker`](../form-controls/color-picker.md) — the picker behind the plus button.
- [`ModalDialog`](./modal-dialog.md) — the dialog this is built from.
