---
description: "Corner badge that reports every background operation of the portal and lists them when there is more than one."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/operations-progress-button/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# OperationsProgressButton

:::warning[Portal only]

<ThemedImage alt="OperationsProgressButton" width={64} sources={{ light: require('./operations-progress-button--primary-light.png').default, dark: require('./operations-progress-button--primary-dark.png').default }} />

Works only inside an ONLYOFFICE Apps portal: it needs the portal's API client, stores and translations, and is not part of the [public API](../../getting-started/installation-and-setup.md#public-and-portal-internal).

:::

Corner badge that reports every background operation of the portal and lists them when there
is more than one. It is the disc that appears while files upload, convert, copy or move, with
the tooltip that names what is running.

## Use this when / not when

- **This component is portal-internal.** Its wording comes from the portal's `Common`
  translations, its operation names from the portal's `OPERATIONS_NAME`, and each entry has to
  hand it a `showPanel` callback into a panel the portal owns. Outside DocSpace it renders a
  disc whose tooltip is empty.
- Use inside the portal for the whole queue of background operations at once.
- For one operation of your own, use [`FloatingButton`](../interactive-elements/floating-button.md)
  directly — it is what this component draws, and it takes a percentage and a click handler.
- For progress inside a panel or a row, use [`ProgressBar`](../status-components/progress-bar.md).
- There is no visibility prop. The badge is on screen exactly while `operations` or
  `panelOperations` has an entry, and it removes itself after a completed run.

## Import

```ts
import OperationsProgressButton from "@onlyoffice/apps-ui-kit/components/operations-progress-button";
```

It is a **default** export, so the name is yours to choose. The root barrel carries it by name
as well — `components/index.ts` re-exports it as `export { default as OperationsProgressButton }` — but prefer the
subpath: the barrel does not build without four optional peers, see
[Which import form](../../getting-started/installation-and-setup.md#which-import-form).

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme`, and
`TranslationProvider` from `@onlyoffice/apps-ui-kit/providers/translation` carrying the
`Common` namespace: the tooltip is built from `Processes`, `StoppedOperation`,
`ErrorUploadingFiles`, `ErrorOperation`, `SuccessOperation` and `DropToLocation`, and without
them it is empty and an i18n error is logged.

## Stories

### Default

One running operation: the ring shows how far it has got and the tooltip names it. Change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={64} sources={{ light: require('./operations-progress-button--default-light.png').default, dark: require('./operations-progress-button--default-dark.png').default }} />

### Upload In Progress

Lets the user stop a running operation: hover the button to reveal the cancel cross beside it (`showCancelButton`); clicking it calls `cancelUpload`.

<ThemedImage alt="Upload In Progress" width={64} sources={{ light: require('./operations-progress-button--upload-in-progress-light.png').default, dark: require('./operations-progress-button--upload-in-progress-dark.png').default }} />

### With Alert

Tells the user something went wrong without opening anything: the button gets a warning badge (`operationsAlert`); hover it to read the operation's label and how many files failed (`errorCount`).

<ThemedImage alt="With Alert" width={64} sources={{ light: require('./operations-progress-button--with-alert-light.png').default, dark: require('./operations-progress-button--with-alert-dark.png').default }} />

### Completed Operation

The button clears itself away once the work is done: it shows a tick (`operationsCompleted`) and slides out of view 4 seconds later, then calls `clearOperationsData`. Keep the pointer over it to hold it on screen.

<ThemedImage alt="Completed Operation" width={64} sources={{ light: require('./operations-progress-button--completed-operation-light.png').default, dark: require('./operations-progress-button--completed-operation-dark.png').default }} />

### Multiple Operations

Keeps several operations behind one button: it shows three dots and the tooltip counts them. Click it to open the list:

- **Uploading files**, **Copying documents** — secondary operations, each with a spinner (`operations`)
- **Moving folder** — an operation with its own panel, with a progress ring and a cancel cross; click the row to open its panel (`panelOperations`, `showPanel`)

<ThemedImage alt="Multiple Operations" width={74} sources={{ light: require('./operations-progress-button--multiple-operations-light.png').default, dark: require('./operations-progress-button--multiple-operations-dark.png').default }} />

### Stopped Operation

Shows that the user aborted an operation rather than that it failed: the button gets a stop sign even though the operation is also marked as failed (`operationsStopped`), and the tooltip says it was stopped.

<ThemedImage alt="Stopped Operation" width={64} sources={{ light: require('./operations-progress-button--stopped-operation-light.png').default, dark: require('./operations-progress-button--stopped-operation-dark.png').default }} />

### Opens Panel On Click

Leads the user to the details of a single operation: click the button to open the operation's own panel (`showPanel`), and hover it to read a second line under the label (`description`).

<ThemedImage alt="Opens Panel On Click" width={64} sources={{ light: require('./operations-progress-button--opens-panel-on-click-light.png').default, dark: require('./operations-progress-button--opens-panel-on-click-dark.png').default }} />

### Drag Preview

Tells the user where dragged files will land: while a drag is in progress (`isDragging`) a preview button rises in the middle, and its tooltip names the folder under the pointer (`dropTargetFolderName`).

<ThemedImage alt="Drag Preview" width={155} sources={{ light: require('./operations-progress-button--drag-preview-light.png').default, dark: require('./operations-progress-button--drag-preview-dark.png').default }} />

### Right To Left

In a right-to-left layout the button sits in the bottom-left corner instead of the bottom-right, and its tooltip opens towards the middle of the screen.

<ThemedImage alt="Right To Left" width={64} sources={{ light: require('./operations-progress-button--right-to-left-light.png').default, dark: require('./operations-progress-button--right-to-left-dark.png').default }} />

### Css Customization

Every overridable variable set on one wrapper -- the variables are listed under CSS variables on this page. The button shows the three `--floating-*` variables; click it to open the list, which shows the rest: **Moving files** is finished and failed, **Moving to trash** was aborted. Hover **Moving files**' clear icon for `--ops-progress-icon-hover`.

<ThemedImage alt="Css Customization" width={71} sources={{ light: require('./operations-progress-button--css-customization-light.png').default, dark: require('./operations-progress-button--css-customization-dark.png').default }} />

## Minimal example

```tsx
import OperationsProgressButton from "@onlyoffice/apps-ui-kit/components/operations-progress-button";

export function UploadBadge({
  percent,
  openUploadPanel,
}: {
  percent: number;
  openUploadPanel: (open: boolean) => void;
}) {
  return (
    <OperationsProgressButton
      panelOperations={[
        {
          operation: "upload",
          label: "Uploading files",
          alert: false,
          completed: percent >= 100,
          percent,
          showPanel: openUploadPanel,
        },
      ]}
    />
  );
}
```

## Props


<APITable name="Props">

| Property | Type | Description |
| --- | --- | --- |
| `cancelSecondaryOperationById`? | `(operation: string, operationId: string) => void` | Called with the operation and the id of its first item, from a row's own cancel. |
| `cancelUpload`? | `(t: (key: string, interpolation?: Record<string, string \| number> \| undefined) => string \| undefined) => void` | Called with the translation function when the cancel cross is clicked. |
| `clearDropPreviewLocation`? | `() => void` | Called when the drag preview button is done with, to forget the drop target. |
| `clearOperationsData`? | `(operationId?: string \| null, operation?: string \| null, operationItem?: Operation) => void` | Called once the hide animation ends, to drop the secondary operations. |
| `clearPanelOperationsData`? | `(operation?: string \| null) => void` | Called once the hide animation ends, to drop the panel operations. |
| `dropTargetFolderName`? | `null \| string` | Name of the folder under the pointer, shown by the drag preview button. |
| `isDragging`? | `boolean` | Whether a drag is in progress, which raises the drag preview button. |
| `isInfoPanelVisible`? | `boolean` | Whether the info panel is open, which moves the button 424px in from the trailing edge. |
| `mainButtonVisible`? | `boolean` | Whether the mobile main button is on screen, which lifts this one clear of it. |
| `needErrorChecking`? | `boolean` | Whether a completed run may still hold errors, which stops the button from auto-hiding. |
| `onCancelOperation`? | `(callback: () => void) => void` | Ignored. Nothing reads this prop; the cross calls `cancelUpload`. |
| `onOpenPanel`? | `() => void` | Ignored. Nothing reads this prop; the panel is opened through `Operation.showPanel`. |
| `operations`? | `Operation[]` | Secondary operations: copy, move, delete and the rest. Listed without a ring. Default: `[]`. |
| `operationsAlert`? | `boolean` | Whether any operation failed: the badge becomes a warning triangle. |
| `operationsCanceled`? | `boolean` | Whether an upload was cancelled. Treated as stopped. |
| `operationsCompleted`? | `boolean` | Whether everything is finished: the button plays its hide animation and then clears. Default: `false`. |
| `operationsStopped`? | `boolean` | Whether an operation was aborted. Treated as stopped, which wins over alert and completed. Default: `false`. |
| `panelOperations`? | `Operation[]` | Operations that own a panel — the upload. Their progress is the one the ring shows. Default: `[]`. |
| `percent`? | `number` | Ignored. Nothing reads this prop; the ring reads the first operation's `percent`. |
| `showCancelButton`? | `boolean` | Whether the cancel cross is offered. Only while there is exactly one operation. |

</APITable>

An `Operation` is:

<APITable name="Props">

| Field                 | Type                                              | Effect                                                                           |
| --------------------- | ------------------------------------------------- | -------------------------------------------------------------------------------- |
| `operation`           | `string`                                          | Key of `OPERATIONS_NAME`; picks the icon. An unknown value gets the generic one. |
| `label`               | `string`                                          | Row text, and the tooltip while this is the only operation.                      |
| `description`         | `string`                                          | Second tooltip line. Its presence suppresses the error and success wording.      |
| `alert`               | `boolean`                                         | Required. The warning triangle.                                                  |
| `completed`           | `boolean`                                         | Required. Starts the hide animation.                                             |
| `stopped`, `canceled` | `boolean`                                         | Aborted by the user; wins over `alert` and `completed`.                          |
| `percent`             | `number`                                          | 0–100, drawn only for the first operation and only while there is one.           |
| `showPanel`           | `(open: boolean) => void`                         | Opens this operation's panel. Without it the badge is inert.                     |
| `items`               | `Array<{ operationId: string; percent: number }>` | The first `operationId` is what the row's cancel is called with.                 |
| `errorCount`          | `number`                                          | Count in the upload's error wording.                                             |
| `iconUrl`             | `string`                                          | Image drawn instead of the built-in icon.                                        |
| `id`                  | `string`                                          | Key of the row; otherwise one is built from the operation.                       |
| `dragged`             | `string \| null`                                  | Identity of the drag that started an upload, so the drop animation plays once.   |

</APITable>

## Recipes

### Several operations at once

Two or more entries — across both arrays — turn the badge into a menu: the icon becomes an
ellipsis, clicking opens a list with one row per operation, and the ring stops showing a
percentage.

```tsx
import OperationsProgressButton from "@onlyoffice/apps-ui-kit/components/operations-progress-button";

export function OperationsBadge({
  openUploadPanel,
  cancelCopy,
}: {
  openUploadPanel: (open: boolean) => void;
  cancelCopy: (operation: string, operationId: string) => void;
}) {
  return (
    <OperationsProgressButton
      panelOperations={[
        {
          operation: "upload",
          label: "Uploading files",
          alert: false,
          completed: false,
          percent: 60,
          showPanel: openUploadPanel,
        },
      ]}
      operations={[
        {
          operation: "copy",
          label: "Copying 12 files",
          alert: false,
          completed: false,
          items: [{ operationId: "copy-1", percent: 30 }],
        },
      ]}
      cancelSecondaryOperationById={cancelCopy}
    />
  );
}
```

### Finished, failed and aborted

The three terminal states are flags on the component, not on the entries: `operationsCompleted`
hides the badge after a delay, `operationsAlert` draws the warning triangle, and
`operationsStopped` or `operationsCanceled` wins over both.

```tsx
import OperationsProgressButton from "@onlyoffice/apps-ui-kit/components/operations-progress-button";

export function UploadOutcome({
  failed,
  openUploadPanel,
  clearUpload,
}: {
  failed: boolean;
  openUploadPanel: (open: boolean) => void;
  clearUpload: () => void;
}) {
  return (
    <OperationsProgressButton
      panelOperations={[
        {
          operation: "upload",
          label: "Uploading files",
          alert: failed,
          completed: true,
          errorCount: failed ? 2 : undefined,
          showPanel: openUploadPanel,
        },
      ]}
      operationsAlert={failed}
      operationsCompleted
      needErrorChecking={failed}
      clearPanelOperationsData={clearUpload}
    />
  );
}
```

## Behaviour the types don't state

- **The badge decides for itself when to disappear.** A completed run plays a hide animation
  after 4 seconds — 8 with a panel operation, 1 when the single operation has no panel — and
  `clearOperationsData` and `clearPanelOperationsData` are called when that animation ends.
  Nothing is removed from your state until you do it there. `needErrorChecking` and hovering
  both stop the animation.
- **It is `position: fixed` in the viewport's bottom trailing corner**, 24px in, `z-index` 400
  (200 at tablet and below). `isInfoPanelVisible` moves it to 424px, `mainButtonVisible` lifts
  it to 88px from the bottom on small screens. None of it is relative to a parent.
- **The ring's percentage is `panelOperations[0].percent`, or `operations[0].percent`** — the
  `percent` prop is declared and never read. With two or more operations no percentage is
  drawn at all.
- **The list only ever shows a ring for panel operations.** Secondary operations are rendered
  with `withoutProgress`, so a copy or a move shows its label and its icon and no bar.
- **Each row carries its own status badge** over its icon: a tick once it is `completed`, a
  warning once it is `alert`, a stop sign once it is aborted — `stopped` on a secondary
  operation, `canceled` on a panel one. The stop sign wins over the other two.
- **A row without `showPanel` is inert**, and so is the whole badge when the single operation
  lacks one: the cursor stays an arrow and the click does nothing.
- **The tooltip is a [`HelpButton`](../interactive-elements/help-button.md)**, which on a touch device opens
  on tap and closes itself 3.5 seconds later. With two or more operations it only counts them
  (`Processes`); with one it says the operation was stopped under `operationsStopped`, shows
  its bare label under `operationsCanceled`, and otherwise names it with its outcome.
- **It renders a second, separate button while a drag is in progress**: a preview disc
  centred above the bottom edge naming the folder under the pointer, which then flies into the
  corner when the drop starts an upload. `dropTargetFolderName`, `isDragging` and
  `clearDropPreviewLocation` are only about that one.
- **The cancel cross is offered only for a single operation** and calls `cancelUpload(t)` —
  with the translation function, not with the operation. `onCancelOperation` is declared and
  never read.
- **`operations` defaults to `[]` but is read as `operations[0]` in places**, so an entry in
  `panelOperations` alone is the supported shape for a single operation.
- The dropdown is a [`DropDown`](../overlays/drop-down.md) of fixed width 344px with a
  [`Backdrop`](../overlays/backdrop.md) at `z-index: 210` behind it; the container is raised to
  211 while it is open.

## CSS variables

Set them on any ancestor.

<APITable name="CSS-variables">

| Variable                         | Default        | Effect                                                                              |
| -------------------------------- | -------------- | ----------------------------------------------------------------------------------- |
| `--ops-progress-dropdown-bg`     | theme grey     | Background of the list.                                                             |
| `--ops-progress-dropdown-hover`  | theme grey     | Background of a row that can open a panel, on hover.                                |
| `--ops-progress-dropdown-margin` | `8px`          | Gap between the list and the badge.                                                 |
| `--ops-progress-list-padding`    | `0px 8px`      | Padding of one row.                                                                 |
| `--ops-progress-bar-padding`     | `8px 16px`     | Inner padding of one row's content.                                                 |
| `--ops-progress-wrapper-margin`  | `4px`          | Space under one row's content.                                                      |
| `--ops-progress-items-gap`       | `8px`          | Gap between a row's icon and its label.                                             |
| `--ops-progress-label-gap`       | `8px`          | Gap between a row's label and its arrow.                                            |
| `--ops-progress-icon-color`      | white          | Fill of a finished row's clear icon and of a panel row's cancel cross.              |
| `--ops-progress-icon-hover`      | theme grey     | Fill of those icons on hover.                                                       |
| `--ops-progress-success-icon`    | theme positive | Nothing visible: the theme colour is set over it on a row's tick.                   |
| `--ops-progress-error-icon`      | theme negative | Exclamation mark inside a failed row's warning; the warning keeps the theme colour. |
| `--ops-progress-stopped-icon`    | theme warning  | Colour of an aborted row's stop sign.                                               |

</APITable>

The three status variables colour the badges on the rows of the list, not the corner badge.

The badge itself is a [`FloatingButton`](../interactive-elements/floating-button.md) and takes its
variables too.

## Accessibility

- **The badge is a `<div>` with a click handler**, from
  [`FloatingButton`](../interactive-elements/floating-button.md): no role, no `tabIndex`, no key handler, so
  neither the panel nor the list can be opened from the keyboard.
- Its `aria-label` is the icon's name plus the word "button", in English whatever the
  interface language.
- The progress is conveyed by the ring alone — no `role="progressbar"`, no `aria-valuenow`,
  and nothing announces that an operation finished.
- The list is a [`DropDown`](../overlays/drop-down.md) with no `role="menu"` and no focus
  management; Escape does not close it, though a click on the backdrop does.
- The tooltip is the only place the operation is named, and it is opened by hover or tap.

## Test ids

The component sets none, and neither do its rows. Query it through the ids
[`FloatingButton`](../interactive-elements/floating-button.md) renders — `floating-button`,
`floating-button-progress`, `floating-button-alert` — or by the tooltip's text.

## Related

- [`FloatingButton`](../interactive-elements/floating-button.md) — the disc itself, for a single operation
  of your own.
- [`ProgressBar`](../status-components/progress-bar.md) — the linear form, for progress inside a panel.
- [`HelpButton`](../interactive-elements/help-button.md) — the tooltip wrapper this component opens on hover.
