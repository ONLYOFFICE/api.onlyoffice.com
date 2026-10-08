---
description: "Crop window with drag, zoom and a replace control, for turning an uploaded picture into an avatar or a logo."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/image-editor/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# ImageEditor

:::warning[Portal only]

<ThemedImage alt="ImageEditor" width={664} sources={{ light: require('./image-editor--primary-light.png').default, dark: require('./image-editor--primary-dark.png').default }} />

Works only inside an ONLYOFFICE Apps portal: it needs the portal's API client, stores and translations, and is not part of the [public API](../../getting-started/installation-and-setup.md#public-and-portal-internal).

:::

Crop window with drag, zoom and a replace control, for turning an uploaded picture into an avatar
or a logo. It holds nothing: the file, the crop and the rendered preview all live in your state
and come back through callbacks.

**Portal-internal.** `t` is required and the labels are asked for by key, so the component needs
the portal's translation context. Outside DocSpace, supply a `t` of your own — see the example.

## Use this when / not when

- Use when a picture has already been chosen and the reader needs to frame it.
- Not as the upload control — there is no drop zone and no browse button until a file is set;
  use [`Dropzone`](./dropzone.md) or your own `<input type="file">` first.
- Not if you want the whole dialog — [`AvatarEditorDialog`](../overlays/avatar-editor-dialog.md)
  wraps this component in a modal with save and cancel.
- Not for picking a room's cover — that is
  [`RoomLogoCoverDialog`](../overlays/room-logo-cover-dialog.md), which is colours and glyphs
  rather than a photograph.
- **It renders nothing while `image.uploadedFile` is empty**, and nothing again when that value
  is a string containing `default_user_photo`. There is no placeholder and no message; the
  element is simply empty.
- **The cropper is a square with a rounded window.** There is no free-form crop, no rotation and
  no aspect-ratio choice — only `editorBorderRadius`.

## Import

```ts
import {
  ImageEditor,
  ButtonDelete,
} from "@onlyoffice/apps-ui-kit/components/image-editor";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` above it in the tree: the cropper reads the theme in JavaScript to pick the
shade of the mask outside the crop window, and that context falls back to light rather than
failing, so on a dark page without a provider the mask stays light. `TranslationProvider` — or a
`t` of your own — supplies `Common:ChooseAnother`; without it the replace control has no label.

## Stories

### Default

A picture framed in a square window with slightly rounded corners, the starting point for a logo or a cover. Drag the picture to reframe it; the zoom row stays hidden because the picture is given as a URL, not a `File`. Change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={664} sources={{ light: require('./image-editor--default-light.png').default, dark: require('./image-editor--default-dark.png').default }} />

### Profile Avatar

A round crop window, the shape a profile picture is usually cut to: any radius of half the 648px canvas or more (`editorBorderRadius`) turns the square into a circle.

<ThemedImage alt="Profile Avatar" width={664} sources={{ light: require('./image-editor--profile-avatar-light.png').default, dark: require('./image-editor--profile-avatar-dark.png').default }} />

### With Zoom Controls

A picture given as a `File`, the way it arrives from a file input, gets the zoom row under the Choose another control: the slider zooms from 1x to 5x in fine steps, the minus and plus buttons by half a step each, and the preview below follows the crop (`setPreview`).

<ThemedImage alt="With Zoom Controls" width={664} sources={{ light: require('./image-editor--with-zoom-controls-light.png').default, dark: require('./image-editor--with-zoom-controls-dark.png').default }} />

### Disabled State

The editor while a save is in flight: the zoom row is greyed out, the picture no longer drags and Choose another opens no picker (`isDisabled`).

<ThemedImage alt="Disabled State" width={664} sources={{ light: require('./image-editor--disabled-state-light.png').default, dark: require('./image-editor--disabled-state-dark.png').default }} />

### Fixed Framing

The same `File` with its framing locked: the zoom row is gone and dragging leaves the picture where it is, while Choose another still replaces it (`disableImageRescaling`).

<ThemedImage alt="Fixed Framing" width={664} sources={{ light: require('./image-editor--fixed-framing-light.png').default, dark: require('./image-editor--fixed-framing-dark.png').default }} />

## Minimal example

```tsx
import { useState } from "react";

import { ImageEditor } from "@onlyoffice/apps-ui-kit/components/image-editor";
import type { TImage } from "@onlyoffice/apps-ui-kit/components/image-editor";
import type { TTranslation } from "@onlyoffice/apps-ui-kit/utils";

export function AvatarCropper({ t }: { t: TTranslation }) {
  const [image, setImage] = useState<TImage>({ zoom: 1, x: 0.5, y: 0.5 });
  const [preview, setPreview] = useState("");

  const pick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImage({ zoom: 1, x: 0.5, y: 0.5, uploadedFile: file });
  };

  return (
    <div>
      <input type="file" accept="image/png,image/jpeg" onChange={pick} />
      <ImageEditor
        t={t}
        image={image}
        onChangeImage={setImage}
        setPreview={setPreview}
        onChangeFile={pick}
        isDisabled={false}
        editorBorderRadius={324}
        Preview={
          preview ? <img src={preview} alt="" width={96} height={96} /> : null
        }
      />
    </div>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `editorBorderRadius` | `number` | Corner radius of the crop window in pixels, measured on the 648px canvas — half of it, 324, is a circle. |
| `image` | `TImage` | The picture and its crop, held in your state. The whole editor renders nothing while `uploadedFile` is empty. |
| `isDisabled` | `boolean` | Blocks dragging, zooming and choosing another file. It is required, so pass `false` when nothing is in flight. |
| `onChangeFile` | `(e: React.ChangeEvent<HTMLInputElement>) => void` | Called with the change event of the hidden file input when another picture is chosen. Read the file and put it in `image.uploadedFile` yourself. |
| `onChangeImage` | `TChangeImage` | Called with a new `image` whenever the crop is dragged or the zoom changes. Apply it to your state or nothing moves. |
| `Preview` | `ReactNode` | Rendered beside the cropper, inside the wrapper that `classNameWrapperImageCropper` names — the place for a preview of the cropped result. |
| `setPreview` | `TSetPreview` | Called, at most every 300ms, with the cropped picture as a `data:` URL. A canvas tainted by a cross-origin image makes it stop silently. |
| `t` | `TTranslation` | Translation function. The editor asks it for `Common:ChooseAnother`, so a portal translation context is required. |
| `className`? | `string` | Added to the outer element. |
| `classNameWrapperImageCropper`? | `string` | Added to the element that wraps the cropper and `Preview`. It is the hook for laying those two out side by side. |
| `disableImageRescaling`? | `boolean` | Hides the zoom row and freezes the crop position, leaving the picture as it is. |
| `maxImageSize`? | `number` | **Deprecated.** Ignored. Nothing in this folder reads it; check the file's size in `onChangeFile` instead. |

</APITable>

## Recipes

### Disabled / read-only

`isDisabled` is required and blocks everything: dragging, both zoom buttons, the slider and the
replace control. It is what the dialog sets while a save is in flight.

```tsx
import { useState } from "react";

import { ImageEditor } from "@onlyoffice/apps-ui-kit/components/image-editor";
import type { TImage } from "@onlyoffice/apps-ui-kit/components/image-editor";
import type { TTranslation } from "@onlyoffice/apps-ui-kit/utils";

export function FrozenCropper({
  t,
  file,
  saving,
}: {
  t: TTranslation;
  file: File;
  saving: boolean;
}) {
  const [image, setImage] = useState<TImage>({
    zoom: 1,
    x: 0.5,
    y: 0.5,
    uploadedFile: file,
  });

  return (
    <ImageEditor
      t={t}
      image={image}
      onChangeImage={setImage}
      setPreview={() => {}}
      onChangeFile={() => {}}
      isDisabled={saving}
      editorBorderRadius={324}
      Preview={null}
    />
  );
}
```

### The delete button

`ButtonDelete` is exported beside the editor but is never rendered by it: put it wherever the
layout calls for it, and clear `image.uploadedFile` from its handler.

```tsx
import { useState } from "react";

import {
  ImageEditor,
  ButtonDelete,
} from "@onlyoffice/apps-ui-kit/components/image-editor";
import type { TImage } from "@onlyoffice/apps-ui-kit/components/image-editor";
import type { TTranslation } from "@onlyoffice/apps-ui-kit/utils";

export function RemovableCropper({ t, file }: { t: TTranslation; file: File }) {
  const [image, setImage] = useState<TImage>({
    zoom: 1,
    x: 0.5,
    y: 0.5,
    uploadedFile: file,
  });

  return (
    <div>
      <ImageEditor
        t={t}
        image={image}
        onChangeImage={setImage}
        setPreview={() => {}}
        onChangeFile={() => {}}
        isDisabled={false}
        editorBorderRadius={12}
        Preview={null}
      />
      <ButtonDelete
        t={t}
        onClick={() => setImage({ zoom: 1, x: 0.5, y: 0.5 })}
      />
    </div>
  );
}
```

## Behaviour the types don't state

- **`maxImageSize` is dead.** It is declared here and passed down by the avatar dialog, and
  nothing reads it — there is no size check anywhere in the folder. Check the file yourself in
  `onChangeFile`.
- **The replace control only accepts PNG and JPEG.** Its hidden input carries
  `accept="image/png, image/jpeg"`, and it also carries the literal id `customFileInput`, so two
  editors on one page produce duplicate ids.
- **The zoom row appears only for a `File`.** It is rendered when `uploadedFile` is not a string
  and has a `name`, so a picture supplied as a URL can be dragged but never zoomed. Setting
  `disableImageRescaling` removes the row and freezes dragging as well.
- **The buttons and the slider move by different amounts**: the slider steps by 0.01, each button
  by 0.5, and both are clamped to the range 1 to 5.
- **`setPreview` is throttled to once every 300ms** and is called with a `data:` URL of the
  cropped canvas. It also fires once as soon as the picture has loaded.
- **A cross-origin picture can stop the preview silently.** The canvas is created with
  `crossOrigin="anonymous"`, so a remote image served without the matching header taints it,
  `toDataURL` throws, and the failure is swallowed: `setPreview` is simply never called again.
- **The crop canvas is 648px and displayed at 368px**, so `editorBorderRadius` is measured on the
  648px figure — 324 is a circle, and the value the avatar dialog defaults to, 110, is a rounded
  square.
- **The outer element and the cropper wrapper use `data-test-id`, not `data-testid`.** Testing
  Library's default query does not see them; the cropper inside is the first element with a real
  `data-testid`.
- **The replace control is a `<div>` with a click handler**, with no role, no `tabindex` and no
  key handler, so it cannot be reached or operated by keyboard. The same is true of
  `ButtonDelete`.
- **The folder contains a `PreviewTile` component that nothing imports** — not the editor, not
  the index. It is not part of the exported surface; build your own preview and hand it in
  through `Preview`.

## Sub-components

**`ButtonDelete`** — a trash glyph with a `Common:Delete` label, exported from the same subpath
and rendered by you, not by the editor. It takes `onClick`, the same `t`, and an optional
`className`, and it carries the class `icon_cropper-delete_button` for portal stylesheets. Like
the replace control it is a `<div>`, so it is not keyboard-operable.

`ImageCropper` and `PreviewTile` also live in the folder but neither is exported.

## Accessibility

- The outer element is a `region` labelled `"Image editor"` — a hard-coded English string with no
  prop to translate it.
- **Neither the replace control nor `ButtonDelete` is a button.** Both are `<div>`s with click
  handlers: no role, no tab stop, no Enter or Space. A keyboard user cannot replace or delete the
  picture. Add your own controls beside the editor when that matters.
- The crop area is a canvas dragged with the pointer and there is no keyboard equivalent for
  positioning. The zoom slider is the kit's `Slider`, a native `<input type="range">`: it is
  reached with Tab and moved with the arrow keys, in its 0.01 steps. The two zoom buttons come
  from `IconButton` and are `<div>`s as well.
- The cropper sets `aria-disabled` from `isDisabled`, so the state is announced even though the
  controls inside it are not focusable to begin with.
- Nothing announces that the preview has been re-rendered.

## Test ids

<APITable>

| Element         | `data-testid`           |
| --------------- | ----------------------- |
| Cropper         | `image-cropper`         |
| Replace control | `change_image_button`   |
| Zoom out        | `zoom_out_icon_button`  |
| Zoom in         | `zoom_in_icon_button`   |
| `ButtonDelete`  | `cropper_delete_button` |

</APITable>

None is settable. The outer element and the cropper wrapper carry `image-editor` and
`image-cropper-wrapper` under the misspelt attribute `data-test-id`, which the usual query does
not match; the hidden file input has the element id `customFileInput`.

## Related

- [`AvatarEditorDialog`](../overlays/avatar-editor-dialog.md) — this editor inside a modal with save and cancel.
- [`RoomLogoCoverDialog`](../overlays/room-logo-cover-dialog.md) — for choosing a colour and a glyph instead of cropping a photograph.
- [`Avatar`](../data-display/avatar.md) — what the cropped result is usually shown in.
