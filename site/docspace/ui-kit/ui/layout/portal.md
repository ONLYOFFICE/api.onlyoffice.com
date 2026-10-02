---
description: "Renders a node into another part of the document, after mount, keeping it inside the React tree."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/portal/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Portal

Renders a node into another part of the document, after mount, keeping it inside the React
tree. It is the escape hatch the kit's own overlays use to get out of `overflow: hidden`.

<ThemedImage alt="Portal" width={618} sources={{ light: require('./portal--primary-light.png').default, dark: require('./portal--primary-dark.png').default }} />

## Use this when / not when

- Use for something of yours that has to escape a clipping or stacking ancestor: a popover
  anchored to a cell, a layer over a scrolling region.
- Not for the kit's overlays. [`ModalDialog`](../overlays/modal-dialog.md),
  [`DropDown`](../overlays/drop-down.md) and [`Tooltip`](../overlays/tooltip.md) already render
  through one; wrapping them again does nothing useful.
- Not to position anything. This component renders no element and no styles — the node you pass
  positions itself.
- Not in a server-rendered tree, when the content has to be in the first HTML: it renders
  nothing on the server and nothing on the first client render.

## Import

```ts
import { Portal } from "@onlyoffice/apps-ui-kit/components/portal";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

No provider needed.


## Stories

### Default

The content passed in `element` shows inside the dashed container that owns it, not beside the text it was declared next to (`appendTo`). Switch `visible` in the Controls panel below to unmount and mount it again.

<ThemedImage alt="Default" width={618} sources={{ light: require('./portal--default-light.png').default, dark: require('./portal--default-dark.png').default }} />

### Hidden

The container stays empty: with `visible` off the content is not hidden but not mounted at all, so nothing of it reaches the DOM.

<ThemedImage alt="Hidden" width={340} sources={{ light: require('./portal--hidden-light.png').default, dark: require('./portal--hidden-dark.png').default }} />

### Custom Container

Portal rendering into a specific custom container element instead of document.body.

<ThemedImage alt="Custom Container" width={1014} sources={{ light: require('./portal--custom-container-light.png').default, dark: require('./portal--custom-container-dark.png').default }} />

### Multiple Portals

Three portals share one container: each is appended after the last, and the portals do nothing about overlap, so every node carries its own position.

<ThemedImage alt="Multiple Portals" width={556} sources={{ light: require('./portal--multiple-portals-light.png').default, dark: require('./portal--multiple-portals-dark.png').default }} />

### Toggle Visibility

Click Show Portal and Close to open and close the content from outside and from inside it. Each close unmounts the content (`visible`), so state held inside it starts over on the next open.

<ThemedImage alt="Toggle Visibility" width={340} sources={{ light: require('./portal--toggle-visibility-light.png').default, dark: require('./portal--toggle-visibility-dark.png').default }} />

### Into Document Body

With no `appendTo`, the content leaves the dashed box it is declared in and lands at the end of the page body, centred on the window by its own fixed position.

<ThemedImage alt="Into Document Body" width={628} sources={{ light: require('./portal--into-document-body-light.png').default, dark: require('./portal--into-document-body-dark.png').default }} />

### Css Customization

Portal has no styles of its own, so the README lists no CSS variables for it: the `--portal-popup-*` variables set here belong to this page's demo popup, and are set on the container the portal appends to so the content picks them up there.

<ThemedImage alt="Css Customization" width={614} sources={{ light: require('./portal--css-customization-light.png').default, dark: require('./portal--css-customization-dark.png').default }} />

## Minimal example

The content goes in `element`, not in children, and lands at the end of `document.body`.

```tsx
import { Portal } from "@onlyoffice/apps-ui-kit/components/portal";

export function FloatingNotice({ text }: { text: string }) {
  return (
    <Portal
      element={
        <div
          style={{
            position: "fixed",
            insetBlockEnd: 16,
            insetInlineEnd: 16,
            zIndex: 500,
          }}
        >
          {text}
        </div>
      }
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `element` | `ReactNode` | What to render in the container. It is a node, not children: the component renders nothing of its own around it. |
| `appendTo`? | `HTMLElement \| null` | Element to append the content to. It is read on every render, so a value that is null on the first render — a ref — falls back to `document.body`; hold the container in state instead. Default: `null`. |
| `visible`? | `boolean` | Whether the content is rendered. Turning it off unmounts the content, so anything it held is lost. Default: `true`. |

</APITable>

## Recipes

### Open and close, controlled

```tsx
import { useState } from "react";
import { Button } from "@onlyoffice/apps-ui-kit/components/button";
import { Portal } from "@onlyoffice/apps-ui-kit/components/portal";

export function DetailsLayer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button label="Details" onClick={() => setOpen(!open)} />
      <Portal
        visible={open}
        element={
          <div
            style={{ position: "fixed", inset: "20% 20% auto", zIndex: 500 }}
          >
            <Button label="Close" onClick={() => setOpen(false)} />
          </div>
        }
      />
    </>
  );
}
```

### Into a container of your own

The container has to exist when the portal renders, so keep it in state rather than in a ref.

```tsx
import { useState } from "react";
import { Portal } from "@onlyoffice/apps-ui-kit/components/portal";

export function SidebarSlot({ label }: { label: string }) {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  return (
    <div>
      <div ref={setContainer} style={{ position: "relative" }} />
      <Portal appendTo={container} element={<span>{label}</span>} />
    </div>
  );
}
```

## Behaviour the types don't state

- **It renders nothing until after mount.** Mounting is recorded in an effect, so the first
  render — and the whole server render — produces `null`, and the content appears one render
  later. Anything that measures it has to wait a frame.
- **`appendTo` is read at render time and not remembered.** A ref whose `current` is still null
  on that render silently falls back to `document.body`, which is why the container belongs in
  state.
- **`visible={false}` unmounts the content** rather than hiding it, so state inside it is lost
  and any animation out has to happen before you flip the prop.
- The node is appended at the end of the container, after everything already in it, and nothing
  is done about stacking — give it a `z-index` of its own.
- React context still reaches the content: providers above the `Portal` apply inside it, and so
  does event bubbling through the React tree, though not through the DOM.
- The component renders no wrapper element, so there is nothing to give a class or a test id to.

## Accessibility

- The content leaves its place in the DOM order, so screen-reader and tab order follow
  `document.body`, not your layout. Move focus into it deliberately when it opens and back when
  it closes.
- Nothing here marks the rest of the page inert or handles Escape. A layer that must be modal
  needs [`ModalDialog`](../overlays/modal-dialog.md), which does both.

## Test ids

The component renders no element of its own, so it carries no `data-testid`. Put one on the
node you pass as `element`.

## Related

- [`ModalDialog`](../overlays/modal-dialog.md) — a dialog that already portals itself.
- [`DropDown`](../overlays/drop-down.md) — a menu that portals unless you turn it off.
- [`Tooltip`](../overlays/tooltip.md) — always portalled, into `document.body`.
