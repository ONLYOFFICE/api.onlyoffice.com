---
description: "Modal that frames an uploaded picture: the kit's crop window between a title and a save and cancel pair."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/avatar-editor-dialog/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# AvatarEditorDialog

:::warning[Portal only]

<ThemedImage alt="AvatarEditorDialog" width={1024} sources={{ light: require('./avatar-editor-dialog--primary-light.png').default, dark: require('./avatar-editor-dialog--primary-dark.png').default }} />

Works only inside an ONLYOFFICE Apps portal: it needs the portal's API client, stores and translations, and is not part of the [public API](../../getting-started/installation-and-setup.md#public-and-portal-internal).

:::

Modal that frames an uploaded picture: the kit's crop window between a title and a save and
cancel pair. It owns the preview it hands back on save, and nothing else — the picture, the crop
and the open state all stay in your code.

**Portal-internal.** `t` is required, and the two footer labels and the editor's replace control
are asked for by key, so the component needs the portal's translation context. Outside DocSpace,
supply a `t` of your own.

## Use this when / not when

- Use for the whole "change your picture" flow once a file has been chosen.
- Not without a file — the body is empty until `image.uploadedFile` is set, so pick the file
  before opening the dialog, or put your own input in the page behind it.
- Not for the cropper on its own — [`ImageEditor`](../interactive-elements/image-editor.md) is the same crop
  window without the modal.
- Not for a room's cover — [`RoomLogoCoverDialog`](./room-logo-cover-dialog.md) is the
  colour-and-glyph picker.
- **There is no file size or dimension check.** `maxImageSize` is accepted and ignored all the
  way down; validate in `onChangeFile`.
- **Saving does not close it.** `onSave` is awaited and then nothing happens: close the dialog
  from your own handler.

## Import

```ts
import { AvatarEditorDialog } from "@onlyoffice/apps-ui-kit/components/avatar-editor-dialog";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` above it in the tree for the dialog's own colours and for the crop mask,
which is chosen in JavaScript from the theme context. `TranslationProvider` — or a `t` of your
own — supplies `Common:SaveButton`, `Common:CancelButton` and `Common:ChooseAnother`; without it
those three labels are empty.

## Stories

### Default

The dialog as it opens on a chosen picture: drag the picture to frame it, zoom with the slider or the buttons, and press Save or Cancel. The story keeps the picture in its own state and closes the dialog from both handlers, as your code has to; reopen it with the button. Change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={1024} sources={{ light: require('./avatar-editor-dialog--default-light.png').default, dark: require('./avatar-editor-dialog--default-dark.png').default }} />

### Loading

What the user sees while the cropped picture uploads: a spinner on Save and Cancel greyed out, while the picture no longer drags and the zoom row no longer responds (`isLoading`). The header cross, Escape and the backdrop still close the dialog, so guard `onClose` yourself if a close must wait for the upload.

<ThemedImage alt="Loading" width={1024} sources={{ light: require('./avatar-editor-dialog--loading-light.png').default, dark: require('./avatar-editor-dialog--loading-dark.png').default }} />

### Square Crop

A crop window with square corners, for a picture that is not shown round, such as a logo or a cover (`editorBorderRadius` of 0). The radius is measured on the editor's 648px canvas: the default 110 gives rounded corners, 324 a circle.

<ThemedImage alt="Square Crop" width={1024} sources={{ light: require('./avatar-editor-dialog--square-crop-light.png').default, dark: require('./avatar-editor-dialog--square-crop-dark.png').default }} />

## Minimal example

```tsx
import { useState } from "react";

import { AvatarEditorDialog } from "@onlyoffice/apps-ui-kit/components/avatar-editor-dialog";
import type { TImage } from "@onlyoffice/apps-ui-kit/components/image-editor";
import type { TTranslation } from "@onlyoffice/apps-ui-kit/utils";

const EMPTY: TImage = { zoom: 1, x: 0.5, y: 0.5 };

export function ChangeAvatar({ t }: { t: TTranslation }) {
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState<TImage>(EMPTY);

  const pick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage({ ...EMPTY, uploadedFile: file });
    setVisible(true);
  };

  return (
    <div>
      <input type="file" accept="image/png,image/jpeg" onChange={pick} />
      <AvatarEditorDialog
        t={t}
        visible={visible}
        title="Change photo"
        image={image}
        onChangeImage={setImage}
        onChangeFile={pick}
        onClose={() => setVisible(false)}
        onSave={(_cropped, preview) => {
          console.info(preview.slice(0, 32));
          setVisible(false);
        }}
      />
    </div>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `image` | `TImage` | The picture and its crop, held in your state. The body is empty until `uploadedFile` is set. |
| `onChangeFile` | `(e: React.ChangeEvent<HTMLInputElement>) => void` | Called with the change event of the hidden file input when another picture is chosen. Read the file and put it in `image.uploadedFile` yourself. |
| `onChangeImage` | `TChangeImage` | Called with a new `image` whenever the crop is dragged or the zoom changes. Apply it to your state or nothing moves. |
| `onClose` | `() => void` | Called after the dialog has reset `image` to an empty, centred, unzoomed one — by the cancel button, the header cross, Escape and the backdrop alike. |
| `onSave` | `(image: TImage, preview: string) => void \| Promise<void>` | Called with the cropped `image` and its `data:` URL preview when save is clicked. The dialog neither closes itself nor sets `isLoading`. |
| `t` | `TTranslation` | Translation function. The dialog asks it for `Common:SaveButton`, `Common:CancelButton` and `Common:ChooseAnother`, so a portal translation context is required. |
| `title` | `string` | Text of the dialog's header. It is not translated for you. |
| `visible` | `boolean` | Whether the dialog is on screen. |
| `dataTestId`? | `string` | Value of `data-testid` on the dialog. |
| `editorBorderRadius`? | `number` | Corner radius of the crop window in pixels, on the editor's 648px canvas. Default: `110`. |
| `isLoading`? | `boolean` | Puts the save button in its loading state and blocks the editor and the cancel button. It does not block the header cross, Escape or the backdrop. Default: `false`. |
| `maxImageSize`? | `number` | **Deprecated.** Ignored. It is handed to the image editor, which does not read it either; check the file's size in `onChangeFile`. |

</APITable>

## Recipes

### Open / close (controlled)

`visible` is the only thing that puts the dialog on screen. Every way out — the cancel button,
the header cross, Escape and the backdrop — goes through `onClose`, and the dialog resets your
`image` to an empty one just before calling it.

```tsx
import { useState } from "react";

import { AvatarEditorDialog } from "@onlyoffice/apps-ui-kit/components/avatar-editor-dialog";
import { Button } from "@onlyoffice/apps-ui-kit/components/button";
import type { TImage } from "@onlyoffice/apps-ui-kit/components/image-editor";
import type { TTranslation } from "@onlyoffice/apps-ui-kit/utils";

export function AvatarButton({ t, file }: { t: TTranslation; file: File }) {
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState<TImage>({
    zoom: 1,
    x: 0.5,
    y: 0.5,
    uploadedFile: file,
  });

  return (
    <>
      <Button label="Edit photo" onClick={() => setVisible(true)} />
      <AvatarEditorDialog
        t={t}
        visible={visible}
        title="Edit photo"
        image={image}
        onChangeImage={setImage}
        onChangeFile={() => {}}
        onClose={() => setVisible(false)}
        onSave={() => setVisible(false)}
      />
    </>
  );
}
```

### Loading

`isLoading` puts the save button in its spinner state and disables the editor and the cancel
button. It does **not** disable the header cross, Escape or the backdrop, and closing that way
resets the image while the upload is still running — guard the close yourself.

```tsx
import { useState } from "react";

import { AvatarEditorDialog } from "@onlyoffice/apps-ui-kit/components/avatar-editor-dialog";
import type { TImage } from "@onlyoffice/apps-ui-kit/components/image-editor";
import type { TTranslation } from "@onlyoffice/apps-ui-kit/utils";

export function UploadingAvatar({
  t,
  file,
  upload,
}: {
  t: TTranslation;
  file: File;
  upload: (preview: string) => Promise<void>;
}) {
  const [visible, setVisible] = useState(true);
  const [busy, setBusy] = useState(false);
  const [image, setImage] = useState<TImage>({
    zoom: 1,
    x: 0.5,
    y: 0.5,
    uploadedFile: file,
  });

  return (
    <AvatarEditorDialog
      t={t}
      visible={visible}
      title="Edit photo"
      image={image}
      isLoading={busy}
      onChangeImage={setImage}
      onChangeFile={() => {}}
      onClose={() => {
        if (!busy) setVisible(false);
      }}
      onSave={async (_cropped, preview) => {
        setBusy(true);
        await upload(preview);
        setBusy(false);
        setVisible(false);
      }}
    />
  );
}
```

### A square logo instead of a round avatar

`editorBorderRadius` is measured on the editor's 648px canvas, not on the 368px the crop window
is displayed at. The default, 110, is a rounded square; 324 is a circle; 0 is a hard square.

```tsx
import { useState } from "react";

import { AvatarEditorDialog } from "@onlyoffice/apps-ui-kit/components/avatar-editor-dialog";
import type { TImage } from "@onlyoffice/apps-ui-kit/components/image-editor";
import type { TTranslation } from "@onlyoffice/apps-ui-kit/utils";

export function LogoDialog({ t, file }: { t: TTranslation; file: File }) {
  const [image, setImage] = useState<TImage>({
    zoom: 1,
    x: 0.5,
    y: 0.5,
    uploadedFile: file,
  });

  return (
    <AvatarEditorDialog
      t={t}
      visible
      title="Company logo"
      image={image}
      editorBorderRadius={0}
      onChangeImage={setImage}
      onChangeFile={() => {}}
      onClose={() => {}}
      onSave={() => {}}
    />
  );
}
```

## Behaviour the types don't state

- **Closing wipes your image state.** Before calling `onClose` the dialog calls `onChangeImage`
  with `{ x: 0.5, y: 0.5, zoom: 1, uploadedFile: undefined }`. That is what makes reopening start
  clean, and it also means a close during a save leaves you with no file.
- **`isLoading` does not lock the dialog.** It disables the cancel button and the editor and puts
  the save button in its loading state; the header cross, the Escape key and a click on the
  backdrop all still close it.
- **`onSave` is awaited and then ignored.** Nothing closes, nothing resets and no error is caught
  — a rejected promise surfaces as an unhandled rejection.
- **`maxImageSize` is passed to the editor, which does not read it.** There is no size check at
  either level.
- **The body height is measured against the viewport.** A resize listener compares the document
  height with 590px — the crop window plus the header and footer — and, when the screen is
  shorter, pins the body to what is left and turns on its scrollbar.
- **The picture is never shown on open until you supply one**: the editor renders an empty
  element for an unset `uploadedFile`, and also for a string containing `default_user_photo`.
- **The dialog has no width of its own.** It takes the kit's modal sizing, with its header fixed
  at 54px and its footer capped at 72px.

## CSS variables

<APITable>

| Variable              | Default | Effect                                                                                                       |
| --------------------- | ------- | ------------------------------------------------------------------------------------------------------------ |
| `--modal-body-height` | `auto`  | Height of the dialog body. The component sets it inline on short screens, which wins over any value you set. |

</APITable>

## Accessibility

- The dialog itself is the kit's `ModalDialog`: it renders into a portal, traps nothing by
  itself, and closes on Escape. Its accessibility notes apply here.
- The header is a `Text`, not a heading element, and nothing labels the dialog: add your own
  heading inside `title` only if you also wrap the dialog, since the prop takes a plain string.
- **The controls inside the editor are not keyboard-operable** — the replace control and both
  zoom buttons are `<div>`s. The zoom slider is reachable; the crop position is pointer-only. A
  keyboard user can save the picture at its default framing and nothing more.
- The save and cancel buttons are real buttons, labelled from the translation function; when that
  function returns an empty string the buttons are unlabelled.

## Test ids

<APITable>

| Element | `data-testid`                                              |
| ------- | ---------------------------------------------------------- |
| Dialog  | the value of `dataTestId`, else `modal` from `ModalDialog` |

</APITable>

Everything inside carries the ids of [`ImageEditor`](../interactive-elements/image-editor.md) and the kit's
button.

## Related

- [`ImageEditor`](../interactive-elements/image-editor.md) — the crop window on its own, for your own layout.
- [`ModalDialog`](./modal-dialog.md) — the dialog this is built from.
- [`Avatar`](../data-display/avatar.md) — where the result is usually shown.
