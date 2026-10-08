---
description: "Read-only field with a folder icon that opens the file dialog and accepts a drop."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/file-input/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# FileInput

Read-only field with a folder icon that opens the file dialog and accepts a drop. The whole
field is the drop target, and the names of the chosen files are written into it.

<ThemedImage alt="FileInput" width={189} sources={{ light: require('./file-input--primary-light.png').default, dark: require('./file-input--primary-dark.png').default }} />

## Use this when / not when

- Use where a file is one field of a form, beside the other fields — an import, an avatar, a
  certificate.
- Not for a large drop area. [`Dropzone`](../interactive-elements/dropzone.md) is the panel-sized one; this is
  an input-sized control.
- Not to show upload progress. `isLoading` is a spinner in place of the icon and nothing more;
  there is no percentage and no cancel.
- Not when you need the file list to be editable. The field is read-only and shows every name
  joined with commas, with no way to remove one.

## Import

```ts
import { FileInput } from "@onlyoffice/apps-ui-kit/components/file-input";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

`FileInputProps` is not exported — type a wrapper's props yourself.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme`, and `TranslationProvider`
from `@onlyoffice/apps-ui-kit/providers/translation` for the message it raises when a file is
rejected. That message is a toast, so mount [`Toast`](../feedback/toast.md) once in your app or it
goes nowhere.

## Stories

### Default

The field as a form shows it before anything is chosen; change any prop live in the Controls panel below.

<ThemedImage alt="Default" width={189} sources={{ light: require('./file-input--default-light.png').default, dark: require('./file-input--default-dark.png').default }} />

### Sizes

Pick the size that matches the other fields of the form: each one also sets the field's width and the size of its icon box (`size`).

<ThemedImage alt="Sizes" width={1019} sources={{ light: require('./file-input--sizes-light.png').default, dark: require('./file-input--sizes-dark.png').default }} />

### States

Use these to tell the user about the chosen file: **Error state** and **Warning state** recolour the border (`hasError`, `hasWarning`), **Disabled** greys the field and ignores clicks (`isDisabled`), and **Loading** shows a spinner in place of the icon (`isLoading`).

<ThemedImage alt="States" width={865} sources={{ light: require('./file-input--states-light.png').default, dark: require('./file-input--states-dark.png').default }} />

### With Accept Filter

Limit the field to the types the host can handle: the picker offers only these extensions, and a dropped file of another type is refused with an error toast (`accept`).

<ThemedImage alt="With Accept Filter" width={527} sources={{ light: require('./file-input--with-accept-filter-light.png').default, dark: require('./file-input--with-accept-filter-dark.png').default }} />

### Scaled Input

Use it when the field should line up with a full-width form column: it stretches to the width of its container (`scale`).

<ThemedImage alt="Scaled Input" width={1014} sources={{ light: require('./file-input--scaled-input-light.png').default, dark: require('./file-input--scaled-input-dark.png').default }} />

### With Button

Use a labelled button when an icon alone would not tell the user what the field does: the button takes the place of the icon and grows with the field's size (`buttonLabel`). The field is given the full width of its container here (`scale`), because at a fixed size the button is laid out past the field's own width.

<ThemedImage alt="With Button" width={416} sources={{ light: require('./file-input--with-button-light.png').default, dark: require('./file-input--with-button-dark.png').default }} />

### Document Icon

Use the document icon when the field takes a single document rather than any file: **Folder icon** is the default, **Document icon** the alternative (`isDocumentIcon`).

<ThemedImage alt="Document Icon" width={527} sources={{ light: require('./file-input--document-icon-light.png').default, dark: require('./file-input--document-icon-dark.png').default }} />

### With Path

Use this when the file comes from somewhere other than the device, such as a folder picker of the host's own: the field shows the path it is given (`fromStorage`, `path`), and a click on it or its icon calls the host instead of opening the file picker (`onClick`) — click it and watch the Actions panel.

<ThemedImage alt="With Path" width={316} sources={{ light: require('./file-input--with-path-light.png').default, dark: require('./file-input--with-path-dark.png').default }} />

### Css Customization

Every overridable variable set on one wrapper -- the variables are listed under CSS variables on this page.

- **Choose file** — the border, background, text and radius variables; hover it for `--file-input-hover-border` and press it for `--file-input-focus-border`
- **Warning state** — `--file-input-warning-border` (`hasWarning`)
- **Error state** — `--file-input-error-border` (`hasError`)
- **Disabled** — `--file-input-disabled-border` and `--file-input-placeholder-color` (`isDisabled`)

<ThemedImage alt="Css Customization" width={336} sources={{ light: require('./file-input--css-customization-light.png').default, dark: require('./file-input--css-customization-dark.png').default }} />

## Minimal example

`onInput` gives you one `File` or an array, depending on how many were chosen.

```tsx
import { useState } from "react";
import { FileInput } from "@onlyoffice/apps-ui-kit/components/file-input";
import { InputSize } from "@onlyoffice/apps-ui-kit/components/text-input";

export function AttachmentField() {
  const [names, setNames] = useState<string[]>([]);

  return (
    <FileInput
      size={InputSize.base}
      placeholder="Choose a file"
      scale
      aria-label="Attachment"
      onInput={(file) => {
        const files = Array.isArray(file) ? file : [file];
        setNames(files.map((one) => one.name));
      }}
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `size` | `InputSize` | Height of the field, which also picks the icon and button sizes: base and middle take a 15px icon, large a 16px one. Default: `InputSize.base`. |
| `accept`? | `string[]` | Extensions and MIME types the dialog offers and a drop accepts, such as `[".pdf", "image/*"]`. The default `[""]` matches only files with no MIME type, so pass it whenever the field is used. Default: `[""]`. |
| `aria-description`? | `string` | Accessible description of the control. |
| `aria-label`? | `string` | Accessible name of the control. There is none without it. |
| `buttonLabel`? | `string` | Renders a button with this label in place of the icon. |
| `className`? | `string` | Applied to the outermost element. |
| `data-test-id`? | `string` | `data-testid` of the outermost element. Default: `"file-input"`. |
| `fromStorage`? | `boolean` | Turns the control into a button that picks from somewhere else: the hidden file input is not rendered, `path` is displayed, and clicks go to `onClick`. Default: `false`. |
| `hasError`? | `boolean` | Whether the field is drawn in its error colours. Default: `false`. |
| `hasWarning`? | `boolean` | Whether the field is drawn in its warning colours. Default: `false`. |
| `id`? | `string` | Applied to the hidden `<input type="file">`, not to the wrapper. |
| `idButton`? | `string` | Applied to the outermost element. |
| `isDisabled`? | `boolean` | Whether the field is greyed and a click no longer opens the file dialog. A drop is still accepted, and Enter or Space still opens the dialog. Default: `false`. |
| `isDocumentIcon`? | `boolean` | Whether the icon is a document rather than a folder. Default: `false`. |
| `isLoading`? | `boolean` | Whether a spinner replaces the icon. It also disables the field, and it is ignored when `buttonLabel` is set, since the button has no loading form. Default: `false`. |
| `isMultiple`? | `boolean` | Whether several files may be chosen at once. Default: `true`. |
| `name`? | `string` | Ignored. Nothing reads this prop. |
| `onClick`? | `(e: React.MouseEvent) => void` | Called when the field or the icon is clicked — but only while `fromStorage` is set. Without it the click opens the file dialog and this never fires. |
| `onInput`? | `(file: File \| File[]) => void` | Called with the chosen files: a single `File` when one was picked, an array when several were. Check for an array before reading `.name`. |
| `path`? | `string` | Text shown in the field instead of the chosen file names, with `fromStorage`. |
| `placeholder`? | `string` | Placeholder of the read-only field, shown until a file is chosen. |
| `scale`? | `boolean` | Whether the field stretches to fill its container. Default: `false`. |
| `style`? | `React.CSSProperties` | Applied to the outermost element. |

</APITable>

### Enums

<APITable>

| Enum        | Members                   |
| ----------- | ------------------------- |
| `InputSize` | `base`, `middle`, `large` |

</APITable>

## Recipes

### Loading

`isLoading` swaps the icon for a spinner and disables the field. It does not survive
`buttonLabel`: the button form has no loading state.

```tsx
import { useState } from "react";
import { FileInput } from "@onlyoffice/apps-ui-kit/components/file-input";
import { InputSize } from "@onlyoffice/apps-ui-kit/components/text-input";

export function UploadField({
  upload,
}: {
  upload: (file: File) => Promise<void>;
}) {
  const [isUploading, setIsUploading] = useState(false);

  return (
    <FileInput
      size={InputSize.base}
      placeholder="Choose a file"
      scale
      isMultiple={false}
      isLoading={isUploading}
      aria-label="Upload"
      onInput={async (file) => {
        setIsUploading(true);
        await upload(Array.isArray(file) ? file[0] : file);
        setIsUploading(false);
      }}
    />
  );
}
```

### Disabled / read-only

`isDisabled` greys the field and stops a click from opening the dialog. It does not stop a drop,
or Enter and Space on the focused field (see below). The field itself is always read-only —
nothing can be typed into it.

```tsx
import { FileInput } from "@onlyoffice/apps-ui-kit/components/file-input";
import { InputSize } from "@onlyoffice/apps-ui-kit/components/text-input";

export function LockedAttachment() {
  return (
    <FileInput
      size={InputSize.base}
      placeholder="Ask an administrator"
      scale
      isDisabled
      aria-label="Attachment"
    />
  );
}
```

### Picking from somewhere else

`fromStorage` turns the control into a button: no hidden file input is rendered, `path` is shown
in the field, and clicks are handed to `onClick` so you can open a picker of your own.

```tsx
import { useState } from "react";
import { FileInput } from "@onlyoffice/apps-ui-kit/components/file-input";
import { InputSize } from "@onlyoffice/apps-ui-kit/components/text-input";

export function StorageField({ openPicker }: { openPicker: () => void }) {
  const [path] = useState("");

  return (
    <FileInput
      size={InputSize.base}
      placeholder="Choose from storage"
      scale
      fromStorage
      path={path}
      aria-label="File from storage"
      onClick={openPicker}
    />
  );
}
```

## Behaviour the types don't state

- **A rejected file raises a toast, not a callback.** Anything `accept` turns away produces the
  kit's "not supported format" message through `toastr`, so [`Toast`](../feedback/toast.md) has to
  be mounted somewhere and `TranslationProvider` set up. Your code is not told.
- **`onInput`'s argument changes shape with the count.** One file arrives as a `File`, two or
  more as `File[]`. `isMultiple` defaults to `true`, so this is the common case, not the rare one.
- **`accept` needs setting.** It is handed to `react-dropzone` 11, which reads an array of
  extensions and MIME types — `[".pdf", ".docx"]`, `["image/*"]` — for both the dialog and the
  drop. The default of `[""]` matches only a file with no MIME type, so a PDF or an image chosen
  with the default is rejected with the toast.
- **`isDisabled` and `isLoading` only stop the click.** They reach `react-dropzone` as `noClick`,
  so a dropped file is still accepted and `onInput` still fires, and Enter or Space on the
  focused field still opens the dialog.
- **`onClick` only works with `fromStorage`.** Without it the handler is never attached, because
  the click has to reach the hidden file input instead.
- **`id` and `idButton` go to different elements**: `id` to the hidden `<input type="file">`,
  `idButton` to the wrapper. The one you want for a label is usually `idButton`.
- **The component is memoised on a deep comparison.** A new object or array passed inline —
  `accept`, `style` — does not force a re-render the way it normally would, and a handler that
  closes over stale state will keep doing so until something else changes.
- **The field shows names, not paths**, joined with `", "` when there are several, and there is
  no way to clear it from the outside short of remounting.
- **The width is fixed per size** unless `scale` is set: 173px for `base`, 300px for `middle`,
  550px for `large`. The icon box at the end is 30 × 30px for `base` and `middle` and
  48 × 42px for `large`.
- `isLoading` also disables the field, and both it and `isDisabled` are passed to the inner
  [`TextInput`](./text-input.md).
- `name` is dead — the prop is declared and nothing reads it.

## CSS variables

Each is read with a fallback to a theme value, so set any of them on an ancestor. The field is
the inner [`TextInput`](./text-input.md); the icon box is the bordered square at its end.

<APITable>

| Variable                         | Default     | Effect                                                              |
| -------------------------------- | ----------- | ------------------------------------------------------------------- |
| `--file-input-border`            | theme value | Border colour of the field and the icon box at rest                 |
| `--file-input-hover-border`      | theme value | Border colour of the icon box while the pointer is over the control |
| `--file-input-focus-border`      | theme value | Border colour of the icon box while the control is pressed          |
| `--file-input-disabled-border`   | theme value | Border colour of the field and the icon box under `isDisabled`      |
| `--file-input-warning-border`    | theme value | Border colour of the field and the icon box under `hasWarning`      |
| `--file-input-error-border`      | theme value | Border colour of the field and the icon box under `hasError`        |
| `--file-input-placeholder-color` | theme value | Placeholder colour of the field under `isDisabled` or `isLoading`   |
| `--file-input-radius`            | `3px`       | Radius of the icon box's outer corners                              |

</APITable>

The field's background, text colour and radius are `TextInput`'s own `--text-input-bg`,
`--text-input-color` and `--text-input-radius`, which reach it from the same ancestor. The
icon's colour cannot be changed from outside: the icon sets `--icon-button-color` on itself, so
a wrapper's value never reaches it.

## Accessibility

- The wrapper is a `<div>` with `role="button"` and `tabIndex="0"`, both from `react-dropzone`,
  so it is reached with Tab and announced as a button. Enter and Space on it open the file
  dialog.
- **There is no accessible name unless you pass `aria-label`.** The placeholder is not a label.
  `aria-label` and `aria-description` are both applied to the wrapper.
- `aria-disabled` is `"true"` under `isDisabled` and `"false"` otherwise. The wrapper stays in
  the tab order while disabled, and Enter and Space still open the dialog.
- A rejected file is announced only through a toast, which may be missed entirely.

## Test ids

<APITable>

| Element          | `data-testid`                   |
| ---------------- | ------------------------------- |
| The wrapper      | `file-input`, or `data-test-id` |
| The hidden input | `upload-click-input`            |
| The icon         | `icon-button`                   |

</APITable>

## Related

- [`Dropzone`](../interactive-elements/dropzone.md) — the panel-sized drop area.
- [`TextInput`](./text-input.md) — the field this shows names in.
- [`Toast`](../feedback/toast.md) — where a rejected file is reported.
