---
description: "Dashed upload area with a picture, a prompt and a format list, which turns into a loader while the upload runs."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/dropzone/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Dropzone

Dashed upload area with a picture, a prompt and a format list, which turns into a loader while the
upload runs. Clicking anywhere in the area, the prompt included, opens the file dialog; dropping
files on the area does the same thing without it.

<ThemedImage alt="Dropzone" width={1014} sources={{ light: require('./dropzone--primary-light.png').default, dark: require('./dropzone--primary-dark.png').default }} />

## Use this when / not when

- Use as the upload control on an empty screen or in an import dialog.
- Not to make an existing element accept a drop — [`DragAndDrop`](./drag-and-drop.md)
  wraps a row or a tile and has no interface of its own.
- Not for a single file in a form — [`FileInput`](../form-controls/file-input.md) is the field-sized
  control with a text box and a button.
- **None of the text is translated.** `linkMainText`, `linkSecondaryText` and `exstsText` are
  required strings you localise yourself, and the ARIA labels are hard-coded English that you
  cannot.
- **It uploads nothing and tracks nothing.** `isLoading` and `uploadPercent` are values you pass
  in; the component only draws them.

## Import

```ts
import Dropzone from "@onlyoffice/apps-ui-kit/components/dropzone";
```

It is a **default** export, so the name is yours to choose. The root barrel carries it by name
as well — `components/index.ts` re-exports it as `export { default as Dropzone }` — but prefer the
subpath: the barrel does not build without four optional peers, see
[Which import form](../../getting-started/installation.md#which-import-form).

Needs `ThemeProvider` above it in the tree: the border, the background and the accent on the
prompt all come from custom properties the provider's `.light` and `.dark` classes declare.


## Stories

### Default

The everyday setup: click the area to pick files or drop them onto it, and the accepted files appear in the Actions panel (`onDrop`). Change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./dropzone--default-light.png').default, dark: require('./dropzone--default-dark.png').default }} />

### Loading

Use while the picked files are being prepared or sent: a spinner replaces the text lines and the drop target, so nothing more can be clicked or dropped (`isLoading`).

<ThemedImage alt="Loading" width={1014} sources={{ light: require('./dropzone--loading-light.png').default, dark: require('./dropzone--loading-dark.png').default }} />

### Disabled

Use when uploading is not allowed right now: the area looks the same as the default, but clicks, keys and drops do nothing (`isDisabled`).

<ThemedImage alt="Disabled" width={1014} sources={{ light: require('./dropzone--disabled-light.png').default, dark: require('./dropzone--disabled-dark.png').default }} />

### Single File Upload

Use when the next step takes one file: a drop of two or more is refused whole and reported as rejected files instead of uploaded (`maxFiles`).

<ThemedImage alt="Single File Upload" width={1014} sources={{ light: require('./dropzone--single-file-upload-light.png').default, dark: require('./dropzone--single-file-upload-dark.png').default }} />

### Image Upload

Use when only some types make sense: the file dialog offers only these types, and a dropped file of any other type is refused and reported as rejected (`accept`).

<ThemedImage alt="Image Upload" width={1014} sources={{ light: require('./dropzone--image-upload-light.png').default, dark: require('./dropzone--image-upload-dark.png').default }} />

### Folder Upload

Use to upload a directory tree: a click anywhere opens a folder dialog, each file arrives with its path inside the folder, and the format line is not shown (`isFolderUpload`).

<ThemedImage alt="Folder Upload" width={1014} sources={{ light: require('./dropzone--folder-upload-light.png').default, dark: require('./dropzone--folder-upload-dark.png').default }} />

### Single Folder Upload

Use when one folder is expected: a drop holding two or more root folders is refused whole, and `onSingleUploadError` is called instead of `onDrop` (`isMultipleUpload` off in folder mode).

<ThemedImage alt="Single Folder Upload" width={1014} sources={{ light: require('./dropzone--single-folder-upload-light.png').default, dark: require('./dropzone--single-folder-upload-dark.png').default }} />

### Single File Only

Use when one file is expected and you explain a larger drop yourself: two or more files are refused whole, and `onSingleUploadError` is called instead of `onDrop` (`isMultipleUpload`).

<ThemedImage alt="Single File Only" width={1014} sources={{ light: require('./dropzone--single-file-only-light.png').default, dark: require('./dropzone--single-file-only-dark.png').default }} />

### Upload Progress

Use when the upload can report how far it has got: a progress bar with the percentage replaces the spinner and fills to the given share (`uploadPercent`).

<ThemedImage alt="Upload Progress" width={1014} sources={{ light: require('./dropzone--upload-progress-light.png').default, dark: require('./dropzone--upload-progress-dark.png').default }} />

### With Formats List

Use when the accepted formats do not fit on one line: the short line carries a `+4` pill for the rest (`formatsPlusBadgeValue`); click it to open the full list in a drop-down, and click outside to close it (`fullExstsText`).

<ThemedImage alt="With Formats List" width={1014} sources={{ light: require('./dropzone--with-formats-list-light.png').default, dark: require('./dropzone--with-formats-list-dark.png').default }} />

### With Icon

Use to make the area recognisable at a glance: the picture sits above the two lines at 50 by 50 pixels, given as an SVG component or an image URL (`icon`).

<ThemedImage alt="With Icon" width={1014} sources={{ light: require('./dropzone--with-icon-light.png').default, dark: require('./dropzone--with-icon-dark.png').default }} />

### Css Customization

Every overridable variable set on one instance -- the variables are listed under CSS variables on this page. Hover the format line, press it, and click it to open the full list for the hover, pressed and open variables; drag a file over the page, then over the area, for the two drag backgrounds.

<ThemedImage alt="Css Customization" width={1014} sources={{ light: require('./dropzone--css-customization-light.png').default, dark: require('./dropzone--css-customization-dark.png').default }} />

## Minimal example

```tsx
import Dropzone from "@onlyoffice/apps-ui-kit/components/dropzone";

export function Upload({ send }: { send: (files: File[]) => void }) {
  return (
    <Dropzone
      isLoading={false}
      accept={[".docx", ".pdf"]}
      linkMainText="Select a file"
      linkSecondaryText="or drop it here"
      exstsText="DOCX, PDF"
      onDrop={send}
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `accept` | `string \| string[]` | Accepted types, in react-dropzone 11's form: a MIME type, an extension such as `.docx`, a comma-separated list of either, or an array of them. Ignored in folder mode. Required. |
| `exstsText` | `string` | The short list of supported formats under the two lines. Not translated for you. |
| `isLoading` | `boolean` | Replaces the whole drop area with a loader. While it is set there is nothing to drop on and no file input in the DOM. Required. |
| `linkMainText` | `string` | The first, accent-coloured line. It is also the click target that opens the file dialog. Not translated for you. |
| `linkSecondaryText` | `string` | The line after it, in the body colour. Not translated for you. |
| `className`? | `string` | Added after the component's own class on the outer element. |
| `dataTestId`? | `string` | Value of `data-testid` on the outer element. Default: `"dropzone"`. |
| `formatsPlusBadgeValue`? | `number` | Drawn as a `+N` pill beside the short format list. `0` and no value both leave it out. |
| `fullExstsText`? | `string` | The full list, shown in a drop-down when the short line is clicked. Without it that line is not clickable. |
| `getFilesFromEvent`? | `(event: DropEvent) => Promise<(File \| DataTransferItem)[]> \| (File \| DataTransferItem)[]` | Replaces the component's own reader, which is what walks a dropped directory and attaches each file's path. Override it only if you need both. |
| `icon`? | `string \| SvgIconComponent` | Picture above the text: a URL, or an SVG component the dropzone renders itself. |
| `iconClassName`? | `string` | Added after the component's own class on the icon. |
| `isDisabled`? | `boolean` | Blocks clicking, the keyboard and dropping, and sets `aria-disabled`. Default: `false`. |
| `isFolderUpload`? | `boolean` | Switches to picking a directory: it replaces the file input with a `webkitdirectory` one, opens that input on any click in the area, and makes `accept` be ignored. Default: `false`. |
| `isMultipleUpload`? | `boolean` | Whether more than one file — or, in folder mode, more than one root folder — may be dropped at once. When it is `false` an over-large drop is refused whole. Default: `true`. |
| `loaderClassName`? | `string` | Added after the component's own classes on the loader or the progress bar. |
| `maxFiles`? | `number` | Largest number of files the drop library accepts; `0` means no limit. Default: `0`. |
| `onDrop`? | `FileDropHandler<File>` | Called with the accepted files. An empty result never reaches it, and neither does a drop refused by the single-upload rule. |
| `onDropRejected`? | `(fileRejections: FileRejection[]) => void` | Called with the files the drop library refused — wrong type, or more than `maxFiles`. |
| `onSingleUploadError`? | `() => void` | Called instead of `onDrop` when a single-upload rule refuses the drop. Nothing is uploaded and nothing is said to the user by the component. |
| `uploadPercent`? | `number` | Percentage for the progress bar shown in place of the plain loader while `isLoading`. Leave it out and the loader is an indeterminate spinner. |

</APITable>

## Recipes

### Loading

`isLoading` replaces the whole drop area with a loader — an indeterminate one on its own, a
progress bar when `uploadPercent` is also set. The file input is gone while it is on, so nothing
can be dropped or chosen.

```tsx
import { useState } from "react";

import Dropzone from "@onlyoffice/apps-ui-kit/components/dropzone";

export function UploadWithProgress({
  send,
}: {
  send: (files: File[], onProgress: (p: number) => void) => Promise<void>;
}) {
  const [percent, setPercent] = useState<number | undefined>(undefined);
  const [busy, setBusy] = useState(false);

  return (
    <Dropzone
      isLoading={busy}
      uploadPercent={percent}
      accept=".docx"
      linkMainText="Select a file"
      linkSecondaryText="or drop it here"
      exstsText="DOCX"
      onDrop={async (files) => {
        setBusy(true);
        setPercent(0);
        await send(files, setPercent);
        setBusy(false);
        setPercent(undefined);
      }}
    />
  );
}
```

### One file at a time

`isMultipleUpload={false}` refuses a drop of more than one file **whole** — nothing is uploaded and
`onSingleUploadError` is called instead. Say something to the reader from there; the component
does not.

```tsx
import { useState } from "react";

import Dropzone from "@onlyoffice/apps-ui-kit/components/dropzone";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

export function SingleUpload({ send }: { send: (files: File[]) => void }) {
  const [error, setError] = useState("");

  return (
    <div>
      <Dropzone
        isLoading={false}
        isMultipleUpload={false}
        accept=".csv"
        linkMainText="Select a file"
        linkSecondaryText="or drop it here"
        exstsText="CSV"
        onDrop={(files) => {
          setError("");
          send(files);
        }}
        onSingleUploadError={() => setError("Only one file at a time.")}
      />
      {error ? <Text color="#f2675a">{error}</Text> : null}
    </div>
  );
}
```

### A folder instead of files

`isFolderUpload` swaps the input for a directory picker. It also turns off the drop library's own
click and keyboard handling and **ignores `accept`**, so every file under the folder arrives.

```tsx
import Dropzone from "@onlyoffice/apps-ui-kit/components/dropzone";

export function FolderUpload({ send }: { send: (files: File[]) => void }) {
  return (
    <Dropzone
      isLoading={false}
      isFolderUpload
      accept=""
      linkMainText="Select a folder"
      linkSecondaryText="or drop it here"
      exstsText="Any file type"
      onDrop={send}
    />
  );
}
```

### The full format list

`fullExstsText` turns the short format line into a control: a chevron appears, and clicking it
opens a drop-down with the long list. `formatsPlusBadgeValue` adds the `+N` pill beside it.

```tsx
import Dropzone from "@onlyoffice/apps-ui-kit/components/dropzone";

export function UploadWithFormats({ send }: { send: (files: File[]) => void }) {
  return (
    <Dropzone
      isLoading={false}
      accept={[".docx", ".pdf", ".xlsx", ".pptx", ".odt"]}
      linkMainText="Select a file"
      linkSecondaryText="or drop it here"
      exstsText="DOCX, PDF"
      fullExstsText="DOCX, PDF, XLSX, PPTX, ODT"
      formatsPlusBadgeValue={3}
      onDrop={send}
    />
  );
}
```

## Behaviour the types don't state

- **`isLoading` unmounts the drop area.** The loader replaces it entirely, so the file input, the
  prompt and the format list are not in the DOM while an upload runs, and a drop during that time
  does nothing.
- **`accept` is react-dropzone 11's form**, not the newer object one: a MIME type, an extension
  such as `.docx`, a comma-separated list, or an array of those.
- **Folder mode ignores `accept`** and hands it to the drop library only when `isFolderUpload` is
  off. It also sets the library's `noClick` and `noKeyboard`, and puts its own click handler on the
  area, which opens a hidden `webkitdirectory` input.
- **It listens to the whole document.** `dragenter`, `dragleave` and `drop` are watched on
  `document` with a depth counter, so the area can highlight itself while a file is dragged
  anywhere on the page: a faint tint while the file is anywhere over the page, a stronger one once
  it is over the area itself. Each instance adds its own three listeners.
- **A refused single upload is silent.** With `isMultipleUpload={false}`, more than one file — or,
  in folder mode, more than one root folder — calls `onSingleUploadError` and drops everything;
  nothing reaches `onDrop` and nothing is shown.
- **`maxFiles` defaults to `0`, which means no limit.** A drop over the limit is refused whole:
  every file in it goes to `onDropRejected` with a too-many-files error, and `onDrop` is not
  called.
- **Folder mode has no format line.** With `isFolderUpload` the short list, the `+N` pill and the
  full-list drop-down are not rendered, so `exstsText`, `fullExstsText` and
  `formatsPlusBadgeValue` show nothing.
- **The icon is rendered two different ways.** A string becomes an `<img>` with the fixed English
  `alt="Upload"`; a component is called with the class and the test id as props.
- **The format line is only clickable with `fullExstsText`.** Without it the chevron, the
  drop-down and the pointer cursor are all absent.
- **The whole upload path goes through a custom file reader**, which walks a dropped directory and
  attaches each file's relative path. Replacing it with `getFilesFromEvent` replaces that too.

## CSS variables

Set these on the dropzone or any ancestor. Each one, when unset, falls back to the theme's own
value or to the default below; `className`, `iconClassName` and `loaderClassName` reach the three
parts for anything the variables do not cover.

<APITable>

| Variable                          | Default             | Effect                                                                                      |
| --------------------------------- | ------------------- | ------------------------------------------------------------------------------------------- |
| `--dropzone-border-style`         | theme, `2px dashed` | Border, as a `border` shorthand                                                             |
| `--dropzone-radius`               | `6px`               | Corner radius of the area                                                                   |
| `--dropzone-min-height`           | `150px`             | Minimum height of the area                                                                  |
| `--dropzone-gap`                  | `4px`               | Gap between the icon, the text lines and the format line, and between the items inside them |
| `--dropzone-drag-bg`              | theme               | Background while a file is dragged over the page but not yet over the area                  |
| `--dropzone-hover-bg-override`    | theme               | Background while a file is dragged over the area                                            |
| `--dropzone-text-size`            | `13px`              | Font size of the two text lines and the format line                                         |
| `--dropzone-link-secondary-color` | theme               | Colour of the second text line                                                              |
| `--dropzone-text-color`           | theme               | Colour of the format line and its chevron                                                   |
| `--dropzone-text-hover-bg`        | theme               | Format line background on hover; only with `fullExstsText`                                  |
| `--dropzone-text-pressed-bg`      | theme               | Format line background while pressed; only with `fullExstsText`                             |
| `--dropzone-text-focus-bg`        | theme               | Format line background while the full list is open                                          |
| `--dropzone-text-focus-color`     | theme               | Format text colour while the full list is open                                              |
| `--dropzone-badge-focus-color`    | theme               | `+N` pill background while the full list is open                                            |
| `--dropzone-arrow-focus-color`    | theme               | Chevron colour while the full list is open                                                  |
| `--dropzone-exsts-radius`         | `3px`               | Format line corner radius, seen on its hover, pressed and open backgrounds                  |
| `--dropzone-formats-radius`       | `6px`               | Corner radius of the full-list drop-down                                                    |
| `--dropzone-formats-shadow`       | none                | Shadow of the full-list drop-down                                                           |

</APITable>

**The drop-down has no shadow unless you set one.** Its theme shadow is declared on the drop-down
while the fallback is resolved on the outer element, where that value does not exist, so the
default comes out as no shadow at all.

## Accessibility

- The area is the drop library's `<div>` with `role="button"`, named `File upload area` or
  `Folder upload area`; the library gives it a `tabIndex` and Enter and Space handling,
  so the file dialog is reachable from the keyboard — **except in folder mode**, where the library's
  keyboard handling is switched off and only a pointer click opens the directory picker.
- **Every ARIA label here is hard-coded English**: `File upload area`, `Folder upload area`,
  `File input`, `Folder input`, `Supported file types`, and the image's `alt="Upload"`. None of them
  takes a prop, so a localised application still announces them in English.
- The prompt is the kit's `Link` with a click handler and no `href`, so it is not a focus stop of
  its own; the surrounding area is what takes focus.
- `aria-busy` follows `isLoading` and `aria-disabled` follows `isDisabled`, both on the outer
  element, and the text block is an `aria-live="polite"` region.
- The format drop-down opens on click on a `<div>` with no role and no `aria-expanded`, so it is not
  reachable or announced.

## Test ids

<APITable>

| Element              | `data-testid`                          |
| -------------------- | -------------------------------------- |
| Outer element        | `dropzone`, overridden by `dataTestId` |
| Drop area            | `dropzone-input-area`                  |
| File or folder input | `dropzone-input`                       |
| Icon                 | `dropzone-icon`                        |
| Text block           | `dropzone-text`                        |
| Prompt               | `dropzone-main-text`                   |
| Second line          | `dropzone-secondary-text`              |
| Format list          | `dropzone-file-types`                  |

</APITable>

Only the outer one is settable, and all of them are absent while `isLoading` is set.

## Related

- [`DragAndDrop`](./drag-and-drop.md) — to make an existing element accept a drop instead.
- [`ProgressBar`](../status-components/progress-bar.md) — the bar this shows while `uploadPercent` is set.
- [`FileInput`](../form-controls/file-input.md) — the field-sized single-file control.
