---
description: "Dialog rendered in a portal, as a centred modal or a side panel, assembled from Header, Body, Footer and Container slots."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/modal-dialog/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# ModalDialog

Dialog rendered in a portal, as a centred modal or a side panel, assembled from Header, Body,
Footer and Container slots. Which of the two it is can be fixed with `displayType` or chosen
per breakpoint with `displayTypeDetailed`.

<ThemedImage alt="ModalDialog" width={1024} sources={{ light: require('./modal-dialog--primary-light.png').default, dark: require('./modal-dialog--primary-dark.png').default }} />

## Use this when / not when

- Use for a confirmation, a short form, or a detail panel that has to sit above the page.
- Not when you only need a sliding side panel with your own content and no modal variant —
  [`Aside`](./aside.md) is that component, and this one renders it internally for its
  aside display type.
- Not for a dimming layer on its own — that is [`Backdrop`](./backdrop.md).
- Not for rendering arbitrary content elsewhere in the DOM — that is
  [`Portal`](../layout/portal.md).

## Import

```ts
import {
  ModalDialog,
  ModalDialogType,
} from "@onlyoffice/apps-ui-kit/components/modal-dialog";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` above it in the tree,
for the surface, backdrop and border colours.

Note that `ModalDialogProps` is **not** exported — `index.tsx` re-exports only the values
listed above. Type a wrapper's props yourself, or import the type from its file path.


## Stories

### Default

The centered modal, for a short task that needs an answer before the page is used again. Click Show to open it and close it with the cross, Escape or a click on the dimmed page; change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={124} sources={{ light: require('./modal-dialog--default-light.png').default, dark: require('./modal-dialog--default-dark.png').default }} />

### Aside Display

A panel that slides in from the side of the window, for longer content such as settings (`displayType`). On a phone-sized window it rises from the bottom instead.

<ThemedImage alt="Aside Display" width={170} sources={{ light: require('./modal-dialog--aside-display-light.png').default, dark: require('./modal-dialog--aside-display-dark.png').default }} />

### Loading State

While the content is being fetched, the header, body and footer give way to a skeleton of the same size (`isLoading`), so the dialog does not jump when the data arrives.

<ThemedImage alt="Loading State" width={124} sources={{ light: require('./modal-dialog--loading-state-light.png').default, dark: require('./modal-dialog--loading-state-dark.png').default }} />

### Aside Loading State

The side panel's own skeleton, a header bar and rows of placeholders, shown while its content loads (`isLoading`).

<ThemedImage alt="Aside Loading State" width={170} sources={{ light: require('./modal-dialog--aside-loading-state-light.png').default, dark: require('./modal-dialog--aside-loading-state-dark.png').default }} />

### Large Modal

Large modal variant with increased width (520px) and max-height (400px).

<ThemedImage alt="Large Modal" width={124} sources={{ light: require('./modal-dialog--large-modal-light.png').default, dark: require('./modal-dialog--large-modal-dark.png').default }} />

### Huge Modal

Huge modal variant with auto max width and height. Requires autoMaxWidth to be enabled.

<ThemedImage alt="Huge Modal" width={124} sources={{ light: require('./modal-dialog--huge-modal-light.png').default, dark: require('./modal-dialog--huge-modal-dark.png').default }} />

### Auto Size Modal

Modal with automatic max width and height that adjusts to content size.

<ThemedImage alt="Auto Size Modal" width={124} sources={{ light: require('./modal-dialog--auto-size-modal-light.png').default, dark: require('./modal-dialog--auto-size-modal-dark.png').default }} />

### With Footer Border

Modal with a visible border between the body and footer sections for visual separation.

<ThemedImage alt="With Footer Border" width={124} sources={{ light: require('./modal-dialog--with-footer-border-light.png').default, dark: require('./modal-dialog--with-footer-border-dark.png').default }} />

### Non Closeable

For a choice the user has to make: there is no close cross, and Escape and a click on the dimmed page do nothing (`isCloseable={false}`). Only the footer buttons close it here.

<ThemedImage alt="Non Closeable" width={124} sources={{ light: require('./modal-dialog--non-closeable-light.png').default, dark: require('./modal-dialog--non-closeable-dark.png').default }} />

### Aside Scroll Locked

The same long panel with its scrolling switched off (`isScrollLocked`), for a moment when the content must stay where it is, such as while a menu inside it is open.

<ThemedImage alt="Aside Scroll Locked" width={170} sources={{ light: require('./modal-dialog--aside-scroll-locked-light.png').default, dark: require('./modal-dialog--aside-scroll-locked-dark.png').default }} />

### Aside With Body Scroll

Aside panel with body scroll enabled, allowing content to scroll within the panel.

<ThemedImage alt="Aside With Body Scroll" width={170} sources={{ light: require('./modal-dialog--aside-with-body-scroll-light.png').default, dark: require('./modal-dialog--aside-with-body-scroll-dark.png').default }} />

### Aside Non Closeable

The side panel with no close cross; Escape and a click on the dimmed page do nothing either (`isCloseable={false}`). Only the footer buttons close it here.

<ThemedImage alt="Aside Non Closeable" width={170} sources={{ light: require('./modal-dialog--aside-non-closeable-light.png').default, dark: require('./modal-dialog--aside-non-closeable-dark.png').default }} />

### With Back Button

A panel reached from another one gets a back arrow before its title (`isBackButton`). The arrow and Backspace pressed outside a text field both call `onBackClick`; watch the Actions panel.

<ThemedImage alt="With Back Button" width={170} sources={{ light: require('./modal-dialog--with-back-button-light.png').default, dark: require('./modal-dialog--with-back-button-dark.png').default }} />

### Backdrop Click Disabled

A click on the dimmed page leaves the dialog open (`closeOnBackdropClick={false}`), so a stray click cannot throw away what the user typed. The close cross and Escape still close it.

<ThemedImage alt="Backdrop Click Disabled" width={124} sources={{ light: require('./modal-dialog--backdrop-click-disabled-light.png').default, dark: require('./modal-dialog--backdrop-click-disabled-dark.png').default }} />

### Form Dialog

A dialog that collects a value: Enter in the field or the Save button submits it (`withForm`), and `onSubmit` receives the event with the page reload already prevented; watch the Actions panel.

<ThemedImage alt="Form Dialog" width={124} sources={{ light: require('./modal-dialog--form-dialog-light.png').default, dark: require('./modal-dialog--form-dialog-dark.png').default }} />

### Two Footer Rows

Three actions do not fit one row of a 400px dialog, so the footer stacks its children (`isDoubleFooterLine`): each `<div>` inside it becomes a row of its own, here the main action above the other two.

<ThemedImage alt="Two Footer Rows" width={124} sources={{ light: require('./modal-dialog--two-footer-rows-light.png').default, dark: require('./modal-dialog--two-footer-rows-dark.png').default }} />

### Aside With Container

A side panel that swaps in a second view without closing: Open details shows the `ModalDialog.Container` slot in place of the header, body and footer (`containerVisible`), and Back returns. The slot is ignored in the centered modal.

<ThemedImage alt="Aside With Container" width={170} sources={{ light: require('./modal-dialog--aside-with-container-light.png').default, dark: require('./modal-dialog--aside-with-container-dark.png').default }} />

### Right To Left

The side panel under a right-to-left interface: it is attached to the left edge and slides in from there, the back arrow points the other way and the close cross sits on the left of the header. The dialog renders outside the story's `<div dir="rtl">`, so it takes the direction from the theme's `interfaceDirection` (the Direction toolbar).

<ThemedImage alt="Right To Left" width={170} sources={{ light: require('./modal-dialog--right-to-left-light.png').default, dark: require('./modal-dialog--right-to-left-dark.png').default }} />

### Css Customization

Every overridable variable in use -- the variables are listed under CSS variables on this page, which also says which ones must be set on `body` or `:root` rather than on the dialog. This example puts the colours on each dialog's `style` prop and sets the page-level ones on `body` while a dialog is open.

- **Show** — the modal with `withFooterBorder`: colors from its `style` prop, and radius, width, height cap, paddings, gaps, backdrop and a centered title with no line under it from the page
- **Show Aside** — the side panel with `withBorder`, for `--modal-dialog-aside-border` and `--modal-dialog-aside-default-width`

<ThemedImage alt="Css Customization" width={286} sources={{ light: require('./modal-dialog--css-customization-light.png').default, dark: require('./modal-dialog--css-customization-dark.png').default }} />

## Minimal example

The four slots must be direct children of `ModalDialog`; see the behaviour notes below.

Two things about `visible` that the example below encodes. It only toggles CSS classes, so
mounting the dialog conditionally is what actually closes it — and inside that conditional
the prop is always `true`, which is why it is written bare rather than as `visible={visible}`.

```tsx
import { useState } from "react";
import { Button, ButtonSize } from "@onlyoffice/apps-ui-kit/components/button";
import { ModalDialog } from "@onlyoffice/apps-ui-kit/components/modal-dialog";

export function DeleteRoomDialog({ onDelete }: { onDelete: () => void }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button label="Delete room" onClick={() => setVisible(true)} />
      {visible ? (
        <ModalDialog visible onClose={() => setVisible(false)}>
          <ModalDialog.Header>Delete room?</ModalDialog.Header>
          <ModalDialog.Body>
            The room and everything in it will be moved to Trash.
          </ModalDialog.Body>
          <ModalDialog.Footer>
            <Button
              primary
              scale
              size={ButtonSize.normal}
              label="Delete"
              onClick={() => {
                onDelete();
                setVisible(false);
              }}
            />
            <Button
              scale
              size={ButtonSize.normal}
              label="Cancel"
              onClick={() => setVisible(false)}
            />
          </ModalDialog.Footer>
        </ModalDialog>
      ) : null}
    </>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `children` | `(ReactElement<unknown, string \| JSXElementConstructor<any>> \| null)[] \| ReactElement<unknown, string \| JSXElementConstr…` | Displays the child elements |
| `aria-describedby`? | `string` | `id` of the element describing the dialog, announced after the name. |
| `aria-label`? | `string` | Accessible name of the dialog, landing on the element that carries `role="dialog"`. Prefer `aria-labelledby` when the heading is already on screen; a dialog with neither is announced as an unnamed dialog. |
| `aria-labelledby`? | `string` | `id` of the element naming the dialog — usually the heading passed to `ModalDialog.Header`, given an `id` of its own. |
| `autoMaxHeight`? | `boolean` | **`MODAL-ONLY`** Sets max-height: auto |
| `autoMaxWidth`? | `boolean` | **`MODAL-ONLY`** Sets max-width: auto |
| `backdropVisible`? | `boolean` | Controls the visibility of the backdrop overlay |
| `blur`? | `number` | Sets backdrop blur value |
| `className`? | `string` | Additional CSS classes |
| `closeOnBackdropClick`? | `boolean` | Whether a click on the backdrop closes the dialog. Unlike `isCloseable`, this stops only that one route; the cross and Escape keep working. Default: `true`. |
| `containerVisible`? | `boolean` | **`ASIDE-ONLY`** Allows embedding modal as aside dialog inside parent container. Default: `false`. |
| `dataTestId`? | `string` | Test id |
| `displayType`? | `ModalDialogType` | Displays type. Default: `ModalDialogType.modal`. |
| `displayTypeDetailed`? | `ModalDialogTypeDetailed` | Detailed display type for each dimension |
| `embedded`? | `boolean` | Enables embedded mode |
| `hideContent`? | `boolean` | Hides modal content. Default: `false`. |
| `id`? | `string` | Unique identifier for the modal |
| `isCloseable`? | `boolean` | Whether the user may close the dialog at all. Every route to `onClose` — the header's cross, Escape, a backdrop click — runs through one guard, so `false` stops all three and leaves closing entirely to the caller. Default: `true`. |
| `isDoubleFooterLine`? | `boolean` | Displays double line in footer |
| `isHuge`? | `boolean` | **`MODAL-ONLY`** Sets predefined huge size. Default: `false`. |
| `isInvitePanelLoader`? | `boolean` | Shows invite panel loader |
| `isLarge`? | `boolean` | **`MODAL-ONLY`** Sets width: 520px and max-height: 400px. Default: `false`. |
| `isLoading`? | `boolean` | Shows loader in body. Default: `false`. |
| `isScrollLocked`? | `boolean` | **`ASIDE-ONLY`** Locks the scroll in body section |
| `modalSwipeOffset`? | `number` | Offset for modal swipe animation |
| `onClose`? | `(e?: React.MouseEvent) => void` | Callback function when modal is closed |
| `onSubmit`? | `(event: React.FormEvent<HTMLFormElement>) => void` | Form submit handler |
| `ref`? | `RefObject<HTMLDivElement \| null>` | Reference to the modal element |
| `scrollbarCreateContext`? | `boolean` | Makes the body's scrollbar publish itself through `ScrollbarContext`, so a descendant can scroll it. Off unless something inside needs that. |
| `sheetRef`? | `RefObject<HTMLDivElement \| null>` | Reference to the inner sheet/content element (`<div id="modal-dialog">`) |
| `style`? | `CSSProperties` | Custom styles for the modal |
| `visible`? | `boolean` | Controls modal visibility |
| `withBodyScroll`? | `boolean` | **`ASIDE-ONLY`** Enables body scroll. Default: `false`. |
| `withBodyScrollForcibly`? | `boolean` | Forces body scroll regardless of display type |
| `withBorder`? | `boolean` | Draws a one-pixel border on the dialog's inline-start edge, where an aside meets the page. Set `--modal-dialog-aside-border` to recolour it. Default: `false`. |
| `withFooterBorder`? | `boolean` | **`MODAL-ONLY`** Displays border between body and footer |
| `withForm`? | `boolean` | Wraps content in form element |
| `withoutHeaderMargin`? | `boolean` | Removes default margin from header. Default: `false`. |
| `withoutPadding`? | `boolean` | Removes default padding from body. Default: `false`. |
| `zIndex`? | `number` | CSS z-index for modal layering. Default: `310`. |

</APITable>

#### Inherited from `AsideHeaderProps`

Declared by [`components/aside/aside-header`](./aside-header.md) and accepted here too.

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `headerComponent`? | `ReactNode` | Arbitrary node rendered after the icons and before the close cross, for a control that is not an icon. |
| `headerHeight`? | `string` | Height of the header as a CSS length, applied through the `--aside-header-custom-height` custom property. Without it the header is 53px. |
| `headerIcons`? | `HeaderIcon[]` | Extra icon buttons between the title and the close cross. Each needs a `key`, an `onClick` and either `iconNode` (JSX, preferred) or `url` — a URL fetched at runtime, not an asset name. |
| `isBackButton`? | `boolean` | Whether a back arrow is rendered before the title. It is mirrored in RTL. Default: `false`. |
| `onBackClick`? | `() => void` | Called by the back arrow. |
| `onCloseClick`? | `() => void` | Called by the close cross. |
| `withoutBorder`? | `boolean` | Hides the bottom border, which otherwise spans the full width of the panel regardless of the header's own side margins. |

</APITable>

### Enums

<APITable>

| Enum              | Members          |
| ----------------- | ---------------- |
| `ModalDialogType` | `modal`, `aside` |

</APITable>

## Recipes

### Open / close (controlled)

`visible` alone does not mount or unmount anything — see the behaviour notes. Render the
dialog conditionally as well when its body has effects, subscriptions or fetches.

```tsx
import { useState } from "react";
import { Button } from "@onlyoffice/apps-ui-kit/components/button";
import { ModalDialog } from "@onlyoffice/apps-ui-kit/components/modal-dialog";

export function DetailsDialog() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button label="Details" onClick={() => setVisible(true)} />
      {visible ? (
        <ModalDialog visible onClose={() => setVisible(false)}>
          <ModalDialog.Header>Details</ModalDialog.Header>
          <ModalDialog.Body>Everything worth knowing.</ModalDialog.Body>
        </ModalDialog>
      ) : null}
    </>
  );
}
```

### Loading

The header, body and footer are not rendered while `isLoading` is on — a skeleton shaped like
the current display type takes their place.

```tsx
import { ModalDialog } from "@onlyoffice/apps-ui-kit/components/modal-dialog";

export function UserDialog({
  user,
  isLoading,
  onClose,
}: {
  user?: { name: string };
  isLoading: boolean;
  onClose: () => void;
}) {
  return (
    <ModalDialog visible isLoading={isLoading} onClose={onClose}>
      <ModalDialog.Header>Profile</ModalDialog.Header>
      <ModalDialog.Body>{user?.name}</ModalDialog.Body>
    </ModalDialog>
  );
}
```

### A side panel on small screens

```tsx
import {
  ModalDialog,
  ModalDialogType,
} from "@onlyoffice/apps-ui-kit/components/modal-dialog";

export function ResponsiveDialog({ onClose }: { onClose: () => void }) {
  return (
    <ModalDialog
      visible
      onClose={onClose}
      displayType={ModalDialogType.modal}
      displayTypeDetailed={{
        mobile: ModalDialogType.aside,
        tablet: ModalDialogType.aside,
        desktop: ModalDialogType.modal,
      }}
    >
      <ModalDialog.Header>Filters</ModalDialog.Header>
      <ModalDialog.Body>…</ModalDialog.Body>
    </ModalDialog>
  );
}
```

### A form dialog

```tsx
import type { FormEvent, ReactNode } from "react";
import { Button, ButtonSize } from "@onlyoffice/apps-ui-kit/components/button";
import { ModalDialog } from "@onlyoffice/apps-ui-kit/components/modal-dialog";

export function RenameDialog({
  onSubmit,
  onClose,
  children,
}: {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <ModalDialog visible withForm onSubmit={onSubmit} onClose={onClose}>
      <ModalDialog.Header>Rename</ModalDialog.Header>
      <ModalDialog.Body>{children}</ModalDialog.Body>
      <ModalDialog.Footer>
        <Button
          primary
          scale
          size={ButtonSize.normal}
          type="submit"
          label="Save"
        />
        <Button
          scale
          size={ButtonSize.normal}
          label="Cancel"
          onClick={onClose}
        />
      </ModalDialog.Footer>
    </ModalDialog>
  );
}
```

## Behaviour the types don't state

- **`visible` does not mount or unmount anything.** The dialog and all of its children are
  rendered into the document whether `visible` is true or false; the prop only toggles CSS
  classes. Effects, subscriptions and fetches inside the body therefore run while the dialog
  is invisible. Render `<ModalDialog>` conditionally when that matters.
- **The four slots render nothing by themselves.** `ModalDialog.Header`, `.Body`, `.Footer`
  and `.Container` are marker components that return `null`; the dialog scans its children
  for their display names and renders the content itself. Consequences: a slot must be a
  **direct** child, a slot wrapped in a fragment or in a component of your own disappears
  without an error, and any child that is not one of the four is dropped. If two slots of the
  same kind are given, the last one wins.
- **Escape and Backspace are handled on `window`.** Escape closes whenever `visible` is
  true, wherever focus is. Backspace calls `onBackClick` under the same conditions, skipped
  only when the event target is an `<input>` or a `<textarea>` — a contenteditable or a
  third-party editor inside the dialog will still trigger it.
- **`embedded` disables closing altogether**, ahead of `isCloseable`: the close button is
  gone, Escape does nothing, and `onClose` is never called. `isCloseable={false}` does the
  same for the button, Escape and the backdrop click but leaves embedded behaviour aside;
  `closeOnBackdropClick={false}` stops only the backdrop click.
- **`isLoading` replaces the whole content, not just the body.** Header, body and footer give
  way to a skeleton shaped like the current display type — `DialogModalSkeleton` for the modal,
  `DialogAsideSkeleton` for the side panel. The slots' children are not rendered at all while
  it is on, so state inside them is lost on each toggle.
- **`withForm` wraps the content in a `<form>` and prevents its default submit** before calling
  `onSubmit`, so a `type="submit"` button in the footer never reloads the page.
- **`isHuge` does nothing on its own.** It only caps the width at 730px, and the modal keeps its
  fixed 400px width until `autoMaxWidth` lets it grow with its content.
- **`ModalDialog.Container` needs both `displayType="aside"` and `containerVisible`.** In the
  modal display type it is dropped even with `containerVisible` set.
- **The dialog renders through a portal into `document.body`**, so it is not affected by a
  parent's `overflow` or stacking context; layering is controlled by `zIndex` on the backdrop,
  310 by default.
- **The footer is a flex row and its buttons share it.** Give each button `scale` and the two
  come out the same width, because each asks for the full row and they shrink against one
  another. Wrapping one of them in an element of your own — to scope a CSS variable, say —
  takes it out of that arrangement: the wrapper sizes to its content and the other button
  takes the rest of the row. Put the variable on the button instead; `Button` forwards
  `style` to its `<button>`. Only `isDoubleFooterLine` expects wrapper elements, one per line.
- **`withFooterBorder` defaults differently per display type** — `true` for aside, `false`
  for modal — unless you pass it.
- **Anything the component does not read itself is forwarded last** to the internal modal and
  overrides the value the component computed, `modalSwipeOffset` included.
- **Swipe-to-close is mobile-touch only** and only starts on the element with the literal id
  `modal-header-swipe`; dragging it down more than 120px calls `onClose`.

## Sub-components

<APITable>

| Slot                    | Renders                                                        | Notes                                                                          |
| ----------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `ModalDialog.Header`    | The dialog title row, with the close and optional back buttons | Optional; without it there is no header element at all                         |
| `ModalDialog.Body`      | The scrollable content area                                    | `withoutPadding` removes its padding; `withBodyScroll` (aside) makes it scroll |
| `ModalDialog.Footer`    | The action row                                                 | Put the primary button first, then the secondary one                           |
| `ModalDialog.Container` | An extra pane beside the body                                  | Aside display type only, and only with `containerVisible`                      |

</APITable>

Three skeletons ship alongside for the loading state of a dialog you build yourself:
`DialogAsideSkeleton`, `DialogModalSkeleton` and `DialogReassignmentSkeleton`.

## CSS variables

Two groups, and where you set them matters. The first four are read inside the dialog, so they
can go on the `style` prop. The rest are read on the dialog's outer element, above the layer
`style` and `className` reach, and the dialog renders into `document.body`, so a wrapper around
it cannot carry them either: set them on `body` or `:root`.

<APITable>

| Variable                      | Default     | Effect                                                                    |
| ----------------------------- | ----------- | ------------------------------------------------------------------------- |
| `--modal-dialog-bg`           | theme-based | Background of the dialog                                                  |
| `--modal-dialog-color`        | theme-based | Text colour of the dialog                                                 |
| `--modal-dialog-divider`      | theme-based | Line between the body and the footer, with `withFooterBorder`             |
| `--modal-dialog-aside-border` | theme-based | Border on the edge where the side panel meets the page, with `withBorder` |

</APITable>

Page-level:

<APITable>

| Variable                                 | Default         | Effect                                                                       |
| ---------------------------------------- | --------------- | ---------------------------------------------------------------------------- |
| `--modal-dialog-backdrop`                | theme-based     | Background of the dimmed page behind the dialog                              |
| `--modal-dialog-radius`                  | `6px`           | Corner radius of the modal; on a phone, of its top corners only              |
| `--modal-dialog-horizontal-padding`      | `16px`          | Side padding of the body and the footer                                      |
| `--modal-dialog-vertical-padding`        | `16px`          | Top and bottom padding of the footer, and bottom padding of the modal's body |
| `--modal-dialog-buttons-gap`             | `8px`           | Gap between the footer buttons; at tablet width and below it is always 10px  |
| `--modal-dialog-header-offset`           | `16px`          | Gap between the modal's header and body                                      |
| `--modal-dialog-default-width`           | `400px`         | Width of the modal                                                           |
| `--modal-dialog-default-max-height`      | `280px`         | Height cap of the modal                                                      |
| `--modal-dialog-lg-width`                | `520px`         | Width of the modal with `isLarge`                                            |
| `--modal-dialog-lg-max-height`           | `400px`         | Height cap of the modal with `isLarge`                                       |
| `--modal-dialog-xl-max-width`            | `730px`         | Width cap of the modal with `isHuge` and `autoMaxWidth`                      |
| `--modal-dialog-aside-default-width`     | `480px`         | Width of the side panel above phone width                                    |
| `--modal-dialog-header-justify`          | `space-between` | How the header's items are spread along it                                   |
| `--modal-dialog-header-border-display`   | `""` (shown)    | `none` hides the line under the header                                       |
| `--modal-dialog-header-title-position`   | `static`        | CSS position of the title, `absolute` to centre it                           |
| `--modal-dialog-header-title-inset`      | `auto`          | Distance of an absolute title from the header's start edge                   |
| `--modal-dialog-header-title-transform`  | `none`          | Transform of the title, such as `translateX(-50%)` to centre it              |
| `--modal-dialog-header-title-text-align` | `start`         | Text alignment of the title                                                  |

</APITable>

## Accessibility

- `role="dialog"` and `aria-modal="true"` sit on the dialog surface, the `#modal-dialog`
  element. They used to sit on the click-to-close layer, which spans the whole viewport.
- **Name it with `aria-labelledby` or `aria-label`.** Both reach the element carrying the role.
  Prefer `aria-labelledby` pointing at the heading you already render in
  `ModalDialog.Header` — give that heading an `id` — and fall back to `aria-label` when there
  is no visible title. A dialog with neither is announced as an unnamed dialog.
- `aria-describedby` reaches the same element, for the sentence that explains what the dialog
  is asking.
- **Focus is not managed.** The component neither moves focus into the dialog when it opens
  nor traps it, and because the markup stays in the document while `visible` is false, its
  controls remain in the tab order of the page behind it. Conditional rendering — as in the
  examples above — is what keeps that from happening.
- The close button carries `aria-label="close"`; `isCloseable={false}` and `embedded` remove it.

## Test ids

<APITable>

| Element             | `data-testid` | Override     |
| ------------------- | ------------- | ------------ |
| Outer modal element | `modal`       | `dataTestId` |

</APITable>

The inner sheet also carries the literal element id `modal-dialog`, which the swipe handler
and `sheetRef` rely on.

## Related

- [`Aside`](./aside.md) — the sliding side panel on its own, and the source of the
  header props this component accepts.
- [`Backdrop`](./backdrop.md) — the dimming layer by itself.
- [`Portal`](../layout/portal.md) — rendering content outside the parent DOM tree.
