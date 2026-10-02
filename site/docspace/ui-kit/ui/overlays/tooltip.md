---
description: "Floating hint attached to one or more anchors, rendered in a portal and positioned to stay in the viewport."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/tooltip/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Tooltip

Floating hint attached to one or more anchors, rendered in a portal and positioned to stay in
the viewport. The tooltip and its anchors are separate elements, tied together by an id.

<ThemedImage alt="Tooltip" width={116} sources={{ light: require('./tooltip--primary-light.png').default, dark: require('./tooltip--primary-dark.png').default }} />

## Use this when / not when

- Use for a short hint about a control the user is pointing at: what an icon means, why a
  button is disabled, the full text of something truncated.
- Not for an explanation the user has to read to proceed — a tooltip is not reachable by
  keyboard and disappears on scroll. [`HelpButton`](../interactive-elements/help-button.md) is the
  click-to-open equivalent.
- Not for a menu of actions: that is [`ContextMenu`](./context-menu.md) or
  [`DropDown`](./drop-down.md).
- Not as an accessible name. The tooltip is not linked to its anchor, so a screen reader never
  reads it with the control; a control that needs a name needs an `aria-label` as well.

## Import

```ts
import { Tooltip } from "@onlyoffice/apps-ui-kit/components/tooltip";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` above it in the tree for
the background and text colours.

`RootTooltip`, `TooltipContainer` and `withTooltip` come from the same folder and are described
under [Sub-components](#sub-components).


## Stories

### Default

The basic setup: the anchor names the tooltip with `data-tooltip-id` and carries its text in `data-tooltip-content`. Hover the link to see the tooltip follow the pointer (`float`); change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={75} sources={{ light: require('./tooltip--default-light.png').default, dark: require('./tooltip--default-dark.png').default }} />

### Custom Styling

For a tooltip that has to stand out from the theme: hover the link to see slight transparency (`opacity`), a narrower width limit (`maxWidth`) and the arrow pointing at the link (`noArrow={false}`).

<ThemedImage alt="Custom Styling" width={155} sources={{ light: require('./tooltip--custom-styling-light.png').default, dark: require('./tooltip--custom-styling-dark.png').default }} />

### Click To Show

For touch screens and hints the user asks for: click the link to open the tooltip on its right and click again to close it; hovering does nothing (`openOnClick`).

<ThemedImage alt="Click To Show" width={65} sources={{ light: require('./tooltip--click-to-show-light.png').default, dark: require('./tooltip--click-to-show-dark.png').default }} />

### Rich Content

For a hint that needs more than one line of plain text: hover the link to see a bold title taken from the anchor's text, with an address and a title below it (`getContent`).

<ThemedImage alt="Rich Content" width={148} sources={{ light: require('./tooltip--rich-content-light.png').default, dark: require('./tooltip--rich-content-dark.png').default }} />

### Shared By Many Anchors

For a list where every row needs its own hint: hover each name to see one tooltip show that member's details, looked up from the index the anchor carries (`getContent`).

<ThemedImage alt="Shared By Many Anchors" width={974} sources={{ light: require('./tooltip--shared-by-many-anchors-light.png').default, dark: require('./tooltip--shared-by-many-anchors-dark.png').default }} />

### Fixed Content

For content written once in the markup rather than on each anchor: hover the link, which has no `data-tooltip-content`, to see the tooltip's own children.

<ThemedImage alt="Fixed Content" width={75} sources={{ light: require('./tooltip--fixed-content-light.png').default, dark: require('./tooltip--fixed-content-dark.png').default }} />

### Anchored By Selector

For anchors that cannot carry a `data-tooltip-id`: hover either link to see the tooltip below it; both are found by their class (`anchorSelect`). The selector is matched across the whole page.

<ThemedImage alt="Anchored By Selector" width={106} sources={{ light: require('./tooltip--anchored-by-selector-light.png').default, dark: require('./tooltip--anchored-by-selector-dark.png').default }} />

### Clickable Content

For a tooltip with a link inside: hover the anchor, then move the pointer into the tooltip; it stays open, so the link can be clicked (`clickable`).

<ThemedImage alt="Clickable Content" width={75} sources={{ light: require('./tooltip--clickable-content-light.png').default, dark: require('./tooltip--clickable-content-dark.png').default }} />

### Delayed Appearance

For anchors the pointer often crosses on its way elsewhere: rest the pointer on the link for a second before the tooltip appears; passing over it shows nothing (`delayShow`).

<ThemedImage alt="Delayed Appearance" width={142} sources={{ light: require('./tooltip--delayed-appearance-light.png').default, dark: require('./tooltip--delayed-appearance-dark.png').default }} />

### Controlled Open

For a tooltip the host decides to show, such as after a failed action: click the button to open the tooltip and again to close it; hovering no longer does either (`isOpen`).

<ThemedImage alt="Controlled Open" width={153} sources={{ light: require('./tooltip--controlled-open-light.png').default, dark: require('./tooltip--controlled-open-dark.png').default }} />

### Opened From Code

For a tooltip shown at a moment only the code knows: click **Open** to see the tooltip below it and **Close** to hide it; hovering either button shows nothing (`imperativeModeOnly` with `ref`).

<ThemedImage alt="Opened From Code" width={210} sources={{ light: require('./tooltip--opened-from-code-light.png').default, dark: require('./tooltip--opened-from-code-dark.png').default }} />

### Css Customization

Every overridable variable set on one tooltip -- the variables are listed under CSS variables on this page. The tooltip renders in a portal outside the story's markup, so the variables go on its own `style` prop, which lands on the wrapper around it. Hover the link to see all of them at once; the stacking order has no visible effect here.

<ThemedImage alt="Css Customization" width={183} sources={{ light: require('./tooltip--css-customization-light.png').default, dark: require('./tooltip--css-customization-dark.png').default }} />

## Minimal example

One tooltip serves every anchor that names its `id`. The anchor carries the text.

```tsx
import { Tooltip } from "@onlyoffice/apps-ui-kit/components/tooltip";

export function StorageHint() {
  return (
    <>
      <span data-tooltip-id="storage" data-tooltip-content="12.4 GB of 20 GB">
        Storage
      </span>
      <Tooltip id="storage" />
    </>
  );
}
```

## Props


<APITable name="Props">

| Property | Type | Description |
| --- | --- | --- |
| `afterHide`? | `() => void` | Called after the tooltip has been hidden. |
| `afterShow`? | `() => void` | Called after the tooltip has been shown. |
| `anchorSelect`? | `string` | CSS selector for the anchors, as an alternative to `data-tooltip-id`. It is matched against the whole document, not a subtree. |
| `children`? | `ChildrenType` | Fixed content, used for every anchor that has no `data-tooltip-content` of its own. `getContent` wins over it. |
| `className`? | `string` | Applied to the wrapper around the tooltip, not to the tooltip itself. |
| `clickable`? | `boolean` | Keeps the tooltip open while the pointer is over it, so links inside it can be reached. |
| `color`? | `string` | Background colour, written as `--tooltip-bg-color` on the wrapper by an effect. It is only ever set: clearing the prop leaves the last colour in place. |
| `dataTestId`? | `string` | Value of `data-testid` on the wrapper. Default: `"tooltip"`. |
| `delayShow`? | `number` | Delay before the tooltip appears, in milliseconds. |
| `fallbackAxisSideDirection`? | `TFallbackAxisSideDirection` | Whether to allow fallback to the perpendicular axis of the preferred placement |
| `float`? | `boolean` | Follows the pointer instead of sitting at a fixed side of the anchor. |
| `getContent`? | `({ content, activeAnchor, }: TGetTooltipContent) => React.ReactNode \| string` | Sets a callback function that generates the tip content dynamically |
| `id`? | `string` | Identifier the anchors point at with `data-tooltip-id`. Without it the tooltip has nothing to attach to, unless `anchorSelect` names the anchors instead. |
| `imperativeModeOnly`? | `boolean` | Stops the tooltip reacting to anchors at all, leaving `ref.current.open()` and `close()` as the only way to show it. |
| `isOpen`? | `boolean` | Forces the tooltip open or closed. Passing it makes the tooltip controlled — the hover and click handlers no longer open or close it on their own. |
| `maxWidth`? | `string` | Maximum width as a CSS length. The default is 320px. |
| `noArrow`? | `boolean` | Whether the arrow pointing at the anchor is hidden. Default: `true`. |
| `noUserSelect`? | `boolean` | Stops the tooltip's text being selected. |
| `offset`? | `number` | Distance between the anchor and the tooltip, in pixels. Default: `4`. |
| `opacity`? | `Property.Opacity` | Opacity of the tooltip. The library's own default is 0.9. Default: `1`. |
| `openOnClick`? | `boolean` | Opens on click instead of on hover, and closes on the next click. It replaces the hover behaviour rather than adding to it. |
| `place`? | `PlacesType` | Preferred side of the anchor. It is only a preference: the tooltip flips and shifts to stay in the viewport. Default: `"top"`. |
| `ref`? | `RefObject<TooltipRefProps \| null>` | Imperative handle with `open()` and `close()`, from react-tooltip. |
| `setIsOpen`? | `(value: boolean) => void` | Called when the tooltip wants to open or close itself. Pair it with `isOpen` to keep a controlled tooltip in sync with hover and click. |
| `style`? | `CSSProperties` | Applied to that same wrapper. Use `tooltipStyle` for the tooltip. |
| `tooltipStyle`? | `CSSProperties` | Applied to the tooltip itself, unlike `style`. |
| `zIndex`? | `number` | Stacking order of the wrapper. Setting it also makes the wrapper `position: relative`. |

</APITable>

## Recipes

### Open and close, controlled

`isOpen` takes the tooltip over: it no longer opens on hover, and `afterHide` is where the
library reports a close it performed itself.

```tsx
import { useState } from "react";
import { Button } from "@onlyoffice/apps-ui-kit/components/button";
import { Tooltip } from "@onlyoffice/apps-ui-kit/components/tooltip";

export function ExplainedAction() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span data-tooltip-id="why">
        <Button label="Publish" isDisabled onClick={() => setOpen(!open)} />
      </span>
      <Tooltip id="why" isOpen={open} afterHide={() => setOpen(false)}>
        Publishing needs at least one file in the room.
      </Tooltip>
    </>
  );
}
```

### Rich content, built from the anchor

`getContent` receives the anchor's `data-tooltip-content` and the element itself, so one
tooltip can render every row of a list.

```tsx
import { Text } from "@onlyoffice/apps-ui-kit/components/text";
import { Tooltip } from "@onlyoffice/apps-ui-kit/components/tooltip";

export function MemberHints({ names }: { names: string[] }) {
  return (
    <>
      {names.map((name) => (
        <span key={name} data-tooltip-id="member" data-tooltip-content={name}>
          {name.slice(0, 2)}
        </span>
      ))}
      <Tooltip
        id="member"
        place="bottom"
        maxWidth="240px"
        clickable
        getContent={({ content }) => (
          <Text fontSize="12px" fontWeight={600}>
            {content}
          </Text>
        )}
      />
    </>
  );
}
```

## Behaviour the types don't state

- **The tooltip renders into `document.body`, and only after mount.** It goes through the kit's
  `Portal`, so nothing of it exists during a server render and its position in your JSX does not
  affect where it appears.
- **Anchors are found by attribute, across the whole document.** An anchor is any element with
  `data-tooltip-id="<id>"`; its `data-tooltip-content` is the text. `anchorSelect` is the other
  way in, and it is matched globally too — a selector such as `.row` will pick up rows rendered
  by anyone.
- **It closes on Escape, on scroll, on resize and on a click outside the anchor**, all four
  always on. A tooltip cannot be kept open across a scroll. The one exception is
  `imperativeModeOnly`, which turns all four off: such a tooltip closes only when code calls
  `close()`.
- **`openOnClick` replaces hover rather than adding to it.** With it set, hovering does nothing
  and a second click closes the tooltip.
- **`color` is applied in an effect and never removed.** Passing it once and clearing it later
  leaves the last colour on the element; the CSS variables below are the way back.
- `style` and `className` land on the wrapper the portal renders, not on the tooltip — the
  tooltip's own style is `tooltipStyle`, and its width is `maxWidth`.
- `place` is a preference: the tooltip flips through twelve fallback placements and shifts along
  the axis to stay on screen, so it can end up anywhere.
- The default offset is 4px and the default max width 320px; the system tooltip described below
  is allowed 800px instead.

## Sub-components

### `RootTooltip`

Mounts two shared tooltips into `#root`, or `document.body` if there is none, and publishes the
first on `window.__systemTooltipRef`:

- `system-tooltip` — imperative only, opened by `withTooltip` from the hover of a wrapped
  component;
- `info-tooltip` — opens on click, for anchors that point at it by id.

**Nothing in the kit mounts it.** A `title` on any component wrapped in `withTooltip` —
[`Button`](../interactive-elements/button.md) among them — silently does nothing until you render
`<RootTooltip />` once, near the root of the application.

```tsx
import { RootTooltip } from "@onlyoffice/apps-ui-kit/components/tooltip";

export function AppTooltips() {
  return <RootTooltip />;
}
```

### `withTooltip` and `TooltipContainer`

`withTooltip(Component)` returns the component with `title` and `tooltipContent` added, which it
consumes: it attaches hover handlers, creates a 1×1 hidden anchor at the pointer and opens the
system tooltip after 700ms. `TooltipContainer` is the same wrapper around a plain element,
useful for giving a hint to markup of your own.

- Only a **string** produces a tooltip. `tooltipContent` of any other node type leaves the
  element with no tooltip at all, and `tooltipContent` wins over `title` when both are given.
- `tooltipPlace` and `tooltipFitToContent` have been removed from `WithTooltipProps`: they were
  declared, stripped before forwarding and read nowhere, so passing one now fails to compile
  rather than doing nothing. `omitTooltipProps` still strips them, so a caller that has not
  caught up does not put them on the DOM. The placement is the
  system tooltip's `bottom-start`.
- Under `NODE_ENV=test` the wrapper skips all of this and renders a native `title` attribute
  instead, so a test asserts on `title`, not on a floating element.
- The handlers you pass are called in addition to the wrapper's own, except `onMouseMove`, which
  is dropped once a tooltip is active.

## CSS variables

Set these on an ancestor of the tooltip's wrapper — it is in the portal, so `:root` is the
usual place — or on the wrapper itself through the `style` prop, which is the way to reach one
tooltip only.

<APITable name="CSS-variables">

| Variable                    | Default                         | Effect                            |
| --------------------------- | ------------------------------- | --------------------------------- |
| `--tooltip-bg`              | theme surface                   | Background of the tooltip         |
| `--tooltip-color`           | theme text                      | Text colour                       |
| `--tooltip-radius`          | `6px`                           | Corner radius                     |
| `--tooltip-shadow`          | `0 2px 4px rgba(0, 0, 0, 0.15)` | Shadow                            |
| `--tooltip-inner-padding`   | `8px 12px`                      | Padding                           |
| `--tooltip-text-size`       | `12px`                          | Font size                         |
| `--tooltip-layer`           | `999`                           | Stacking order                    |
| `--tooltip-max-width-value` | `320px`                         | Width cap, in place of `maxWidth` |

</APITable>

The width cap is never wider than the window: it is `min(100vw, …)` of the value.
`--tooltip-max-width` is not an override: the stylesheet declares it on the wrapper, so one set
on an ancestor is ignored, and it is what `maxWidth` writes. `--tooltip-max-width-value` wins
over both.

## Accessibility

- The floating element has `role="tooltip"`, set by react-tooltip, so it is announced as a
  tooltip once it is shown. Nothing ties it to the anchor, though: there is no
  `aria-describedby` and no id relationship, so a screen reader does not read it with the
  anchor.
- It opens on hover and on click, never on focus, so a keyboard user cannot see it at all.
  Anything a user must know belongs in the text or in an `aria-label`.
- Escape closes it, which is the one convention it does follow — except under
  `imperativeModeOnly`.
- `clickable` keeps it open while the pointer is inside, which is required if it contains a
  link — without it the link cannot be reached.

## Test ids

<APITable name="Test-ids">

| Element                        | `data-testid`                            |
| ------------------------------ | ---------------------------------------- |
| The wrapper around a tooltip   | `tooltip`, overridable with `dataTestId` |
| `RootTooltip`'s system tooltip | `system-tooltip-container`               |
| `RootTooltip`'s info tooltip   | `info-tooltip-container`                 |

</APITable>

## Related

- [`Portal`](../layout/portal.md) — how the tooltip leaves the flow of your markup.
- [`HelpButton`](../interactive-elements/help-button.md) — a hint the user opens deliberately.
- [`IconButton`](../interactive-elements/icon-button.md) — `tooltipId` and `tooltipContent` on it render one
  of these.
