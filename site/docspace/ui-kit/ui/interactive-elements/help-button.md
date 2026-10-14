---
description: "Info icon that opens an explanation on click, for a label that needs more than a label."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/help-button/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# HelpButton

Info icon that opens an explanation on click, for a label that needs more than a label. Unlike
a tooltip it stays open, so the text inside can hold a link.

<ThemedImage alt="HelpButton" width={28} sources={{ light: require('./help-button--primary-light.png').default, dark: require('./help-button--primary-dark.png').default }} />

## Use this when / not when

- Use next to a field or a setting whose meaning is not obvious, for a sentence or two the user
  opens deliberately.
- Not for a hint on hover — that is [`Tooltip`](../overlays/tooltip.md), which this component uses
  underneath.
- Not for a whole page of help. An explanation that long belongs in an
  [`Aside`](../overlays/aside.md) or a link out.
- Not as a form control's description. Text the user should read without asking belongs under
  the field, in [`FieldContainer`](../form-controls/field-container.md).

## Import

```ts
import { HelpButton } from "@onlyoffice/apps-ui-kit/components/help-button";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` for the icon and the
tooltip's colours. A **string** tooltip is shown by the shared tooltip, which means
[`RootTooltip`](../overlays/tooltip.md) has to be mounted somewhere in the application; a node is
shown by a tooltip this component renders itself and needs nothing.

## Stories

### Default

The info icon with a short explanation beside it; click the icon to open it, and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={28} sources={{ light: require('./help-button--default-light.png').default, dark: require('./help-button--default-dark.png').default }} />

### Custom Style

An icon larger or in another colour stands out next to a heading rather than a field label. Click each icon to open its tooltip.

<ThemedImage alt="Custom Style" width={136} sources={{ light: require('./help-button--custom-style-light.png').default, dark: require('./help-button--custom-style-dark.png').default }} />

### With Custom Content

An explanation that needs a heading or a list goes in as a React node, which opens in the component's own tooltip with no shared tooltip mounted.

<ThemedImage alt="With Custom Content" width={28} sources={{ light: require('./help-button--with-custom-content-light.png').default, dark: require('./help-button--with-custom-content-dark.png').default }} />

### Tooltip Positions

The side matters when the icon sits at the edge of a form or next to other controls. Click each icon to see its tooltip open on the side written under it.

<ThemedImage alt="Tooltip Positions" width={262} sources={{ light: require('./help-button--tooltip-positions-light.png').default, dark: require('./help-button--tooltip-positions-dark.png').default }} />

### With Text Content

Plain text needs no tooltip of its own: a string is shown by the application's shared tooltip, so it appears only where `RootTooltip` is mounted once, as it is here. Click the icon to open it.

<ThemedImage alt="With Text Content" width={28} sources={{ light: require('./help-button--with-text-content-light.png').default, dark: require('./help-button--with-text-content-dark.png').default }} />

### With Custom Anchor

When the label itself should open the explanation, pass it as children in place of the icon. Click **Storage** to open a tooltip no wider than 240px (`tooltipMaxWidth`).

<ThemedImage alt="With Custom Anchor" width={62} sources={{ light: require('./help-button--with-custom-anchor-light.png').default, dark: require('./help-button--with-custom-anchor-dark.png').default }} />

### Opens On Hover

A one-line hint with nothing to click inside can open on hover instead (`openOnClick={false}`). Point at the icon to open it; the tooltip closes when the pointer leaves.

<ThemedImage alt="Opens On Hover" width={28} sources={{ light: require('./help-button--opens-on-hover-light.png').default, dark: require('./help-button--opens-on-hover-dark.png').default }} />

### Css Customization

The tooltip's variables passed through `tooltipStyle` -- the variables are listed under CSS variables on this page. Click either icon to see the custom colours; the second tooltip's longer text wraps at 180px.

<ThemedImage alt="Css Customization" width={80} sources={{ light: require('./help-button--css-customization-light.png').default, dark: require('./help-button--css-customization-dark.png').default }} />

## Minimal example

Give it an `id`: without one the anchor is renamed on every render.

```tsx
import { HelpButton } from "@onlyoffice/apps-ui-kit/components/help-button";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

export function QuotaHelp() {
  return (
    <HelpButton
      id="quota-help"
      tooltipContent={
        <Text fontSize="12px">
          The room's quota counts every version of every file in it.
        </Text>
      }
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `afterHide`? | `() => void` | Called after the tooltip has been hidden. Not called for a string tooltip. |
| `afterShow`? | `() => void` | Called after the tooltip has been shown. Not called for a string tooltip. |
| `children`? | `ReactNode` | Anchor to use instead of the info icon. The whole element becomes the thing the tooltip opens from. |
| `dataTestId`? | `string` | Value of `data-testid` on the wrapper. Default: `"help-button"`. |
| `dataTip`? | `string` | Sets the data-tip attribute for the component. |
| `getContent`? | `(params: TGetTooltipContent) => React.ReactNode` | Builds the tooltip's content. Returning a string routes the text through the shared tooltip; returning a node makes the component render one of its own. |
| `iconNode`? | `ReactNode` | Icon to draw instead of the kit's info glyph. |
| `id`? | `string` | Id of the anchor element, which the tooltip is matched against by a CSS selector. Without it a fresh id is generated on **every** render, so pass one for a button that re-renders. |
| `isOpen`? | `boolean` | Forces the tooltip open or closed. Only for a tooltip rendered by this component. |
| `noUserSelect`? | `boolean` | Stops the tooltip's text being selected. |
| `offset`? | `number` | Distance between the anchor and the tooltip, in pixels. |
| `offsetBottom`? | `number` | Ignored. Nothing reads this prop. |
| `offsetLeft`? | `number` | Ignored. Nothing reads this prop. |
| `offsetRight`? | `number` | Ignored. Nothing reads this prop. |
| `offsetTop`? | `number` | Ignored. Nothing reads this prop. |
| `openOnClick`? | `boolean` | Whether the tooltip opens on click rather than on hover. Default: `true`. |
| `place`? | `TTooltipPlace` | Side of the anchor the tooltip prefers. Default: `"top"`. |
| `style`? | `CSSProperties` | Applied to the wrapper around the anchor. |
| `tooltipContent`? | `ReactNode` | Content of the tooltip. A string is shown by the shared tooltip, which needs `RootTooltip` mounted; any other node makes the component render its own `Tooltip` instead. |
| `tooltipId`? | `string` | Ignored. Nothing reads this prop. |
| `tooltipMaxWidth`? | `string` | Maximum width of the tooltip as a CSS length. |
| `tooltipProps`? | `TooltipProps` | Ignored. Nothing reads this prop. |
| `tooltipStyle`? | `CSSProperties` | Applied to the tooltip itself. |

</APITable>

#### Inherited from `IconButtonProps`

Declared by [`components/icon-button`](./icon-button.md) and accepted here too.

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `className`? | `string` | Sets component class |
| `clickColor`? | `"accent" \| (string & {})` | Colour while the button is held down; same forms as `color`. |
| `color`? | `"accent" \| (string & {})` | Any CSS colour, the literal `"accent"` for the theme accent, or the name of a custom property starting with `--`, which is wrapped in `var()`. |
| `hoverColor`? | `"accent" \| (string & {})` | Colour while the pointer is over the button; same forms as `color`. |
| `iconClickName`? | `string` | URL of the icon swapped in while the button is held down. |
| `iconHoverName`? | `string` | URL of the icon swapped in while the pointer is over the button, on a device that has a pointer. |
| `iconName`? | `string` | **A URL, not an asset name.** It is handed to `react-svg` as `src`, which fetches it at runtime and inlines the response, so it has to resolve from the browser — an imported `?url`, or a path under your public directory. Ignored when `iconNode` is set. |
| `isClickable`? | `boolean` | Shows the pointer cursor without an `onClick`, for a button whose click is handled by an ancestor. Default: `false`. |
| `isDisabled`? | `boolean` | Greys the icon and stops every handler, including the hover and click icon swaps. It sets `aria-disabled`, not the `disabled` property — there is no button element to carry one. Default: `false`. |
| `isFill`? | `boolean` | Colours the icon by filling its shapes. Turn it off for an outline icon and use `isStroke` instead. Default: `true`. |
| `isStroke`? | `boolean` | Colours the icon by stroking its paths, which wins over `isFill`. Default: `false`. |
| `onClick`? | `(e: React.MouseEvent<HTMLDivElement>) => void` | Sets a button callback function triggered when the button is clicked |
| `onKeyDown`? | `(e: React.KeyboardEvent<HTMLDivElement>) => void` | Called on a key press. The element is a `<div>` with no button role, so Enter and Space do nothing unless this handler implements them. |
| `onMouseDown`? | `(e: React.MouseEvent<HTMLDivElement>) => void` | Sets a button callback function triggered when the cursor moves down |
| `onMouseEnter`? | `(e: React.MouseEvent) => void` | Sets a button callback function triggered when the cursor enters the area |
| `onMouseLeave`? | `(e: React.MouseEvent) => void` | Sets a button callback function triggered when the cursor leaves the icon |
| `onMouseUp`? | `(e: React.MouseEvent<HTMLDivElement>) => void` | Called when a mouse button is released over the icon — but only for the middle and right buttons, which is a defect in the component rather than a design. Use `onClick` for the left button. |
| `size`? | `IconSize \| InputSize \| number` | Size of the button on both axes. A number is pixels; the `InputSize` members all resolve to 15px; any other string is used as a CSS length. Default: `20`. |
| `tabIndex`? | `number` | Applied to the element, which is a `<div>`: without this the button is not reachable by keyboard at all. |
| `title`? | `string` | Tooltip text. Consumed by the tooltip container this component renders, so it never reaches the DOM as a `title` attribute. |

</APITable>

## Recipes

### Open and close, controlled

`isOpen` works only for the tooltip this component renders — that is, when the content is a
node rather than a string.

```tsx
import { useState } from "react";
import { Button } from "@onlyoffice/apps-ui-kit/components/button";
import { HelpButton } from "@onlyoffice/apps-ui-kit/components/help-button";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

export function ControlledHelp() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button label="Explain" onClick={() => setOpen(!open)} />
      <HelpButton
        id="explain-help"
        isOpen={open}
        afterHide={() => setOpen(false)}
        tooltipContent={<Text fontSize="12px">Only owners may do this.</Text>}
      />
    </>
  );
}
```

### An anchor of your own

`children` replaces the icon, and the whole element becomes what the tooltip opens from.

```tsx
import { HelpButton } from "@onlyoffice/apps-ui-kit/components/help-button";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

export function LabelWithHelp() {
  return (
    <HelpButton
      id="storage-help"
      place="right"
      tooltipMaxWidth="240px"
      tooltipContent={
        <Text fontSize="12px">Storage is counted across all your rooms.</Text>
      }
    >
      <span style={{ textDecoration: "underline dotted" }}>Storage</span>
    </HelpButton>
  );
}
```

## Behaviour the types don't state

- **There are two tooltips, and the type of your content picks which.** A string — from
  `tooltipContent` or returned by `getContent` — is handed to the shared `info-tooltip` through
  data attributes, so nothing appears unless [`RootTooltip`](../overlays/tooltip.md) is mounted.
  Anything else makes the component render its own [`Tooltip`](../overlays/tooltip.md), which
  needs no such thing. `isOpen`, `afterShow`, `afterHide`, `offset` and `tooltipMaxWidth` only
  reach the second one.
- **Without an `id` the anchor changes on every render.** The component falls back to a fresh
  generated id each time it renders, and the tooltip finds its anchor by a selector built from
  that id — so a button inside something that re-renders loses its tooltip.
- **It opens on click by default,** not on hover, and the tooltip is `clickable`, which is what
  lets a link inside it be reached. It stays open until the next click on the icon, Escape, a
  click elsewhere, a scroll or a window resize. With `openOnClick` off it opens on hover and
  closes when the pointer leaves.
- `place` is a preference: when that side has no room the tooltip flips to another one.
- The icon is the kit's info glyph at 12px, in the theme's grey, unless you pass `iconNode`, and
  it is an [`IconButton`](./icon-button.md) — a `<div>`, so not focusable and not
  activated by Enter. **`iconName` is ignored:** the component always hands `IconButton` an
  `iconNode`, its own glyph when you give none, and `IconButton` reads `iconName` only without
  one.
- `tooltipId`, `tooltipProps`, `offsetTop`, `offsetRight`, `offsetBottom` and `offsetLeft` are
  declared and never read.
- The component renders a wrapper `<div>` of its own around the anchor, with no display or size
  of its own; put it in a flex row next to the label.

## CSS variables

HelpButton has no stylesheet of its own; these belong to the [`Tooltip`](../overlays/tooltip.md)
it renders for node content. That tooltip lives in a portal, outside the HelpButton's wrapper,
so a value set around the component never reaches it: pass the variables in `tooltipStyle`,
which lands on the tooltip box itself, or set them on `:root`. A string tooltip is drawn by the
shared `RootTooltip`, which `tooltipStyle` does not reach.

<APITable>

| Variable                    | Default                             | Effect                                                                      |
| --------------------------- | ----------------------------------- | --------------------------------------------------------------------------- |
| `--tooltip-bg`              | theme surface                       | Background of the tooltip                                                   |
| `--tooltip-color`           | theme text                          | Text colour of the tooltip                                                  |
| `--tooltip-max-width-value` | `--tooltip-max-width`, i.e. `320px` | Widest the tooltip grows before its text wraps; wins over `tooltipMaxWidth` |

</APITable>

The rest of the tooltip's variables are listed in its README. The icon's colour is not a
variable you can set from outside: `IconButton` writes `--icon-button-color` on the icon
element itself, so use the `color` prop.

## Accessibility

- The anchor is an `IconButton`, which renders a `<div>` with no role, no tab stop and no key
  handler. The explanation is unreachable from the keyboard and unannounced by a screen reader.
- Give the wrapper a `tabIndex` and a `role` of your own, or put the same text in the page where
  it does not need opening, when the content matters.
- Once open, the tooltip closes on Escape.
- The tooltip is not linked to anything by `aria-describedby`; nothing here reaches the
  accessibility tree.

## Test ids

<APITable>

| Element     | `data-testid`                                |
| ----------- | -------------------------------------------- |
| The wrapper | `help-button`, overridable with `dataTestId` |

</APITable>

The icon inside carries `icon-button` from [`IconButton`](./icon-button.md).

## Related

- [`Tooltip`](../overlays/tooltip.md) — what this renders, and `RootTooltip`, which a string
  tooltip needs.
- [`IconButton`](./icon-button.md) — the icon itself, and the props inherited from it.
- [`FieldContainer`](../form-controls/field-container.md) — where a help button usually sits.
