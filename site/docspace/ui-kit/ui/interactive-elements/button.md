---
description: "Labelled action button with an optional icon, a loading state and a tooltip, in a primary or secondary variant."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/button/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Button

Labelled action button with an optional icon, a loading state and a tooltip, in a primary or
secondary variant. It renders a real `<button>`, so form submission and keyboard activation
work natively.

<ThemedImage alt="Button" width={117} sources={{ light: require('./button--primary-light.png').default, dark: require('./button--primary-dark.png').default }} />

## Use this when / not when

- Use when the user triggers an action in place: submitting a form, confirming a dialog,
  opening a panel.
- Not for an icon-only control that has to fit a fixed slot — use
  [`IconButton`](./icon-button.md), which is sized by an `size` in pixels and keeps
  an accessible name without a visible label.
- Not for reporting an operation already in flight — [`LoadingButton`](../feedback/loading-button.md)
  is a circular progress ring with a cancel cross, which is a different control from this
  component's `isLoading`.
- Not for the "create new" entry at the top of the portal's main menu — that is
  [`MainButton`](./main-button.md).

## Import

```ts
import { Button, ButtonSize } from "@onlyoffice/apps-ui-kit/components/button";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` above it in the tree.
Without it the button still renders, but always in the light palette and without the
portal's accent colour, because the dark rules are scoped under a global `.dark` class the
provider sets.

## Stories

### Default

The secondary button, for any action that is not the main one of a view; click it to see `onClick` in the Actions panel, and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={117} sources={{ light: require('./button--default-light.png').default, dark: require('./button--default-dark.png').default }} />

### Primary Buttons

Primary buttons are used for main actions. They have a solid background color.

<ThemedImage alt="Primary Buttons" width={811} sources={{ light: require('./button--primary-buttons-light.png').default, dark: require('./button--primary-buttons-dark.png').default }} />

### Secondary Buttons

Secondary buttons are used for secondary actions. They sit on the page background with a grey border that changes colour on hover.

<ThemedImage alt="Secondary Buttons" width={811} sources={{ light: require('./button--secondary-buttons-light.png').default, dark: require('./button--secondary-buttons-dark.png').default }} />

### With Icon Buttons

Buttons can include icons alongside text. Icons are displayed before the label.

<ThemedImage alt="With Icon Buttons" width={1014} sources={{ light: require('./button--with-icon-buttons-light.png').default, dark: require('./button--with-icon-buttons-dark.png').default }} />

### Is Loading Buttons

Loading state displays a spinner and disables interaction. Use for async operations.

<ThemedImage alt="Is Loading Buttons" width={1014} sources={{ light: require('./button--is-loading-buttons-light.png').default, dark: require('./button--is-loading-buttons-dark.png').default }} />

### Scale Buttons

Scale prop makes buttons expand to 100% of their container width. Useful for mobile layouts.

<ThemedImage alt="Scale Buttons" width={1014} sources={{ light: require('./button--scale-buttons-light.png').default, dark: require('./button--scale-buttons-dark.png').default }} />

### Disabled Buttons

Disabled buttons cannot be clicked or focused: the secondary one turns grey, the primary one fades to 60% opacity (`isDisabled`).

<ThemedImage alt="Disabled Buttons" width={1014} sources={{ light: require('./button--disabled-buttons-light.png').default, dark: require('./button--disabled-buttons-dark.png').default }} />

### Clicked Buttons

The pressed look drawn while nothing presses the button (`isClicked`), for a button whose action is already under way, such as the one that opened the menu now on screen.

<ThemedImage alt="Clicked Buttons" width={1014} sources={{ light: require('./button--clicked-buttons-light.png').default, dark: require('./button--clicked-buttons-dark.png').default }} />

### Hovered Buttons

The hover look drawn while the pointer is elsewhere (`isHovered`), for a button that should light up together with the element it belongs to, such as a hovered row.

<ThemedImage alt="Hovered Buttons" width={1014} sources={{ light: require('./button--hovered-buttons-light.png').default, dark: require('./button--hovered-buttons-dark.png').default }} />

### Filled Buttons

A quiet grey button with no border, for toolbar actions that should not compete with the content (`filled`). The first row shows that an icon is repainted in the text colour, whatever colour it was drawn in.

<ThemedImage alt="Filled Buttons" width={1014} sources={{ light: require('./button--filled-buttons-light.png').default, dark: require('./button--filled-buttons-dark.png').default }} />

### Filled Stroke Buttons

An outline-style icon on a filled button: in the first row the filled button paints the icon's shapes solid, in the second it keeps the outline (`filled` with `filledStroke`). `filledStroke` changes nothing without `filled`.

<ThemedImage alt="Filled Stroke Buttons" width={1014} sources={{ light: require('./button--filled-stroke-buttons-light.png').default, dark: require('./button--filled-stroke-buttons-dark.png').default }} />

### With Tooltip

Buttons can display tooltips on hover. Hover over the buttons to see the tooltip text.

<ThemedImage alt="With Tooltip" width={608} sources={{ light: require('./button--with-tooltip-light.png').default, dark: require('./button--with-tooltip-dark.png').default }} />

### Accent Buttons

An emphasised action that should stand out without taking the place of the primary one: a light accent tint with accent text, and an icon repainted in the same colour (`accent`).

<ThemedImage alt="Accent Buttons" width={1014} sources={{ light: require('./button--accent-buttons-light.png').default, dark: require('./button--accent-buttons-dark.png').default }} />

### Css Customization

Every overridable variable set on one wrapper -- the variables are listed under CSS variables on this page. Hover and press the buttons to see the hover and pressed values.

- **Secondary** — the `--button-root-*` colours, the radius, the weight and the `normal` size's height and font size
- **Primary** — the `--button-primary-*` colours
- **Disabled** — the `--button-root-*-disabled` values (`isDisabled`)
- **Disabled primary** — the `--button-primary-*-disabled` values, faded to 60% opacity by the component (`primary` with `isDisabled`)

<ThemedImage alt="Css Customization" width={544} sources={{ light: require('./button--css-customization-light.png').default, dark: require('./button--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { useState } from "react";
import { Button, ButtonSize } from "@onlyoffice/apps-ui-kit/components/button";

export function SaveRow() {
  const [isSaving, setIsSaving] = useState(false);

  const save = async () => {
    setIsSaving(true);
    try {
      await fetch("/api/settings", { method: "POST" });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Button
        primary
        scale
        size={ButtonSize.normal}
        label="Save"
        isLoading={isSaving}
        onClick={save}
      />
      <Button scale size={ButtonSize.normal} label="Cancel" />
    </div>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `accent`? | `boolean` | Sets the button accent (tinted accent background with accent border/text) |
| `aria-busy`? | `"false" \| "true"` | ARIA busy state |
| `aria-disabled`? | `"false" \| "true"` | ARIA disabled state |
| `aria-label`? | `string` | ARIA label for accessibility |
| `children`? | `ReactNode` | Rendered in place of `label` when `label` is empty or unset. A non-empty `label` wins and the children are dropped. |
| `className`? | `string` | Custom CSS class |
| `filled`? | `boolean` | Renders on a neutral grey surface with no border, for toolbar-style actions. |
| `filledStroke`? | `boolean` | Used together with `filled`: strokes the icon's path instead of filling it, for outline-style icons. |
| `icon`? | `ReactNode` | Icon node element |
| `id`? | `string` | HTML id attribute |
| `isClicked`? | `boolean` | Sets the button to show a clicked state |
| `isDisabled`? | `boolean` | Sets the button to show a disabled state |
| `isHovered`? | `boolean` | Sets the button to show a hovered state |
| `isLoading`? | `boolean` | Sets a button to show a loader icon |
| `label`? | `string` | Button text |
| `minWidth`? | `string` | Sets the minimal button width |
| `onClick`? | `(e: React.MouseEvent<HTMLElement>) => void` | Sets the action initiated upon clicking the button |
| `primary`? | `boolean` | Sets the button primary |
| `ref`? | `Ref<HTMLElement>` | Ref to access the DOM element or React component instance |
| `scale`? | `boolean` | Scales the width of the button to 100% |
| `size`? | `ButtonSize` | Height of the button: `extraSmall` 24px, `small` 32px, `normal` 40px, `medium` 44px. Each is a `--button-height-*` custom property the consumer can override. Default: `ButtonSize.normal`. |
| `style`? | `CSSProperties` | Custom CSS styles |
| `tabIndex`? | `number` | Button tab index |
| `testId`? | `string` | HTML data-testid attribute. Default: `"button"`. |
| `title`? | `string` | Tooltip text. Consumed by the `withTooltip` wrapper the folder exports, so it becomes the tooltip's content and never reaches the DOM as a `title` attribute. |
| `tooltipText`? | `string` | Tooltip text |
| `type`? | `"button" \| "reset" \| "submit"` | HTML button type attribute |

</APITable>

#### Added by the wrapper the folder exports

The `index` module exports a wrapped component, so these are accepted on top of the props above.

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `onMouseEnter`? | `MouseEventHandler` | Called in addition to the handler that opens the tooltip, after it. |
| `onMouseLeave`? | `MouseEventHandler` | Called in addition to the handler that closes the tooltip, after it. |
| `onMouseMove`? | `MouseEventHandler` | Passed through only while the element has no tooltip. Once one is active the wrapper's own handler replaces it and this is dropped. |
| `tooltipContent`? | `ReactNode` | Tooltip content, used instead of `title` when both are set. Only a string produces a tooltip: the wrapper needs text for the anchor, so any other node leaves the element with no tooltip at all. |

</APITable>

### Enums

<APITable>

| Enum         | Members                                   |
| ------------ | ----------------------------------------- |
| `ButtonSize` | `extraSmall`, `small`, `normal`, `medium` |

</APITable>

## Recipes

### Loading

`isLoading` is yours to drive around the await — the button does not track the promise.

```tsx
import { useState } from "react";
import { Button } from "@onlyoffice/apps-ui-kit/components/button";

export function DeleteButton({ onDelete }: { onDelete: () => Promise<void> }) {
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <Button
      primary
      label="Delete"
      isLoading={isDeleting}
      onClick={async () => {
        setIsDeleting(true);
        try {
          await onDelete();
        } finally {
          setIsDeleting(false);
        }
      }}
    />
  );
}
```

### Disabled

```tsx
import { Button } from "@onlyoffice/apps-ui-kit/components/button";

export function SubmitButton({ isValid }: { isValid: boolean }) {
  return <Button primary label="Submit" isDisabled={!isValid} />;
}
```

### With an icon

`icon` takes a node, and the node is yours: the package does not publish its icon set, so
import the SVG through your own bundler. There is no `iconName` prop.

```tsx
import DownloadIcon from "./icons/download.svg?react";
import { Button } from "@onlyoffice/apps-ui-kit/components/button";

export function DownloadButton({ onDownload }: { onDownload: () => void }) {
  return (
    <Button label="Download" icon={<DownloadIcon />} onClick={onDownload} />
  );
}
```

### A row of buttons in a dialog footer

Primary first, then the secondary action; `scale` makes them share the width evenly.

```tsx
import { Button, ButtonSize } from "@onlyoffice/apps-ui-kit/components/button";

export function DialogFooter({
  onConfirm,
  onCancel,
}: {
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div style={{ display: "flex", gap: 8, width: "100%" }}>
      <Button
        primary
        scale
        size={ButtonSize.normal}
        label="Delete"
        onClick={onConfirm}
      />
      <Button
        scale
        size={ButtonSize.normal}
        label="Cancel"
        onClick={onCancel}
      />
    </div>
  );
}
```

## Behaviour the types don't state

- **`type="reset"` does nothing.** The component narrows it to
  `type === "submit" ? "submit" : "button"`, so a reset button renders as a plain button and
  never resets its form. Only `"submit"` and the default `"button"` are real.
- **`aria-label`, `aria-disabled` and `aria-busy` are computed and overwrite what you pass.**
  They are spread onto the element before the component sets its own, so `aria-label` always
  ends up equal to `label`, `aria-disabled` is set only when `isDisabled`, and `aria-busy`
  only when `isLoading`. A custom `aria-label` alongside a `label` is discarded.
- **`isLoading` also disables the button.** The element gets `disabled={isDisabled || isLoading}`,
  and the content is hidden with `visibility: hidden` while the loader is laid over it
  absolutely — so the button keeps its width and the layout does not jump.
- **The label never wraps.** The root is
  `white-space: nowrap; overflow: hidden; text-overflow: ellipsis`. A label wider than the button is clipped with an ellipsis, and
  neither `scale` nor `minWidth` helps: both size the button against its container, never
  against its text. Give the button a width of its own if the label must fit.
- **There are two independent tooltips.** `tooltipText` is rendered by the component itself,
  always below the button (`place="bottom"`, `offset={10}`, floating). `title` and
  `tooltipContent` are handled by the `withTooltip` wrapper that `index.tsx` exports. Setting
  both shows two tooltips; pick one.
- **The props type is closed.** `ButtonProps` does not extend `ButtonHTMLAttributes`, so
  `name`, `form`, `autoFocus` and friends are TypeScript errors even though the component
  spreads unknown props onto the element at runtime.
- **The variants are not mutually exclusive in the type.** `primary`, `filled` and `accent`
  can all be passed together; the stylesheet decides, and `accent` — declared last — wins.
  Pass one.

## CSS variables

Set these on an ancestor to retheme the button. Everything else the stylesheet defines is
private to it.

<APITable>

| Variable                                        | Default                           | Effect                                                        |
| ----------------------------------------------- | --------------------------------- | ------------------------------------------------------------- |
| `--accent-button`                               | theme accent                      | Primary background and border, base hover border, accent text |
| `--accent-button-tint`                          | `--accent-button` at 10%          | Background of the `accent` variant                            |
| `--accent-button-tint-hover`                    | `--accent-button` at 18%          | Its hover background                                          |
| `--accent-button-tint-active`                   | `--accent-button` at 26%          | Its active background                                         |
| `--button-height-xs` / `-sm` / `-md` / `-lg`    | `24px` / `32px` / `40px` / `44px` | Height per `ButtonSize`                                       |
| `--button-font-size-xs` / `-sm` / `-md` / `-lg` | `12px` / `13px` / `14px` / `16px` | Font size per `ButtonSize`                                    |
| `--button-root-border-radius`                   | `3px`                             | Corner radius (the `accent` variant uses `6px` regardless)    |
| `--button-text-weight`                          | `600`                             | Label weight                                                  |

</APITable>

Each state colour also has an override. The secondary variant reads the `--button-root-*` set,
the primary one the matching `--button-primary-*` set; the `filled` and `accent` variants read
none of them, because their colours are set on the button itself and a wrapper cannot change them.

<APITable>

| Variable                                                                   | Default | Effect                                                                                                                                  |
| -------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `--button-root-bg`, `--button-root-color`, `--button-root-border`          | theme   | Secondary background, text colour and border; the border is a `border` shorthand                                                        |
| `--button-root-bg-hover`, `-color-hover`, `-border-hover`                  | theme   | The same three on hover and under `isHovered`                                                                                           |
| `--button-root-bg-active`, `-color-active`, `-border-active`               | theme   | The same three while pressed; background and text colour also under `isClicked`                                                         |
| `--button-root-bg-disabled`, `-color-disabled`, `-border-disabled`         | theme   | The same three while disabled or loading; under `isDisabled` only the border's width and style apply and the line takes the text colour |
| `--button-primary-bg`, `--button-primary-color`, `--button-primary-border` | theme   | Primary background, text colour and border; the border is a `border` shorthand and is kept on hover                                     |
| `--button-primary-bg-hover`, `-color-hover`                                | theme   | Primary background and text colour on hover and under `isHovered`                                                                       |
| `--button-primary-bg-active`, `-color-active`, `-border-active`            | theme   | Primary background and text colour while pressed and under `isClicked`; the border takes a colour, not a shorthand                      |
| `--button-primary-bg-disabled`, `-color-disabled`, `-border-disabled`      | theme   | The same three while disabled or loading                                                                                                |

</APITable>

**There is no destructive variant.** The stylesheet has nothing red: a delete confirmation is
an ordinary `primary` button, and making it red means overriding `--accent-button`. Put it on
the button itself — `style` is forwarded to the `<button>` element, so
`style={{ "--accent-button": "#f21c0e" } as CSSProperties}` is enough, and it needs no wrapper
element. Do not set it on the dialog or the panel around the button: that recolours everything
accented inside, the close button included.

Reach for a wrapper element only when the variable has to cover several buttons at once, and
not inside a row that shares its width — a wrapped `scale` button stops being an equal flex
item and shrinks to its label.

## Accessibility

- Renders a native `<button>`, so Enter and Space activate it and it takes part in tab order
  without help. Both are covered by the component's tests.
- `aria-label` is taken from `label`, `aria-disabled` is set while `isDisabled`, and
  `aria-busy` while `isLoading`.
- **An icon-only button has no accessible name.** With no `label` there is no `aria-label`
  either, and a custom one would be overwritten. Give it a `label`, or use
  [`IconButton`](./icon-button.md).
- **The focus ring is removed and not replaced** (`:focus { outline: none }`), so keyboard
  focus is invisible unless the consuming application styles it. Add a `:focus-visible` rule
  of your own if the button is reachable by keyboard.

## Test ids

<APITable>

| Element         | `data-testid` | Override |
| --------------- | ------------- | -------- |
| Root `<button>` | `button`      | `testId` |

</APITable>

The root also carries `data-size` with the current `ButtonSize`, which is what the
component's own size tests assert against.

## Related

- [`IconButton`](./icon-button.md) — icon-only control for a fixed-size slot.
- [`LoadingButton`](../feedback/loading-button.md) — circular progress ring with a cancel
  cross, for an operation already running.
- [`MainButton`](./main-button.md) — the portal's main-menu "create new" button.
