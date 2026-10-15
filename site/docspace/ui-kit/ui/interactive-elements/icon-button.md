---
description: "Icon that acts as a button, with hover and pressed colours and an optional tooltip."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/icon-button/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# IconButton

Icon that acts as a button, with hover and pressed colours and an optional tooltip. It is the
control for a row action or a toolbar, where a label would not fit.

<ThemedImage alt="IconButton" width={41} sources={{ light: require('./icon-button--primary-light.png').default, dark: require('./icon-button--primary-dark.png').default }} />

## Use this when / not when

- Use for an action that a recognisable icon explains on its own: close, copy, more, refresh.
- Not for an action with a label — [`Button`](./button.md) is a real button element,
  focusable and named, and it takes an icon too.
- Not for an icon that opens a menu of actions: that is
  [`ContextMenuButton`](./context-menu-button.md).
- Not for a decorative icon. This one keeps its hover colours whether or not anything
  happens, and shows a pointer cursor as soon as it has an `onClick` or `isClickable`.

## Import

```ts
import { IconButton } from "@onlyoffice/apps-ui-kit/components/icon-button";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` above it in the tree for
the icon's default colour and for `color="accent"`.

## Stories

### Default

<ThemedImage alt="Default" width={41} sources={{ light: require('./icon-button--default-light.png').default, dark: require('./icon-button--default-dark.png').default }} />

### With Hover State

Hover over the buttons to see the alternate icon and colour, a cue that the button reacts before it is clicked (`iconHoverName`, `hoverColor`).

<ThemedImage alt="With Hover State" width={119} sources={{ light: require('./icon-button--with-hover-state-light.png').default, dark: require('./icon-button--with-hover-state-dark.png').default }} />

### With Click State

Press and hold the button to see the alternate icon and colour that confirm the press (`iconClickName`, `clickColor`); they stay until the pointer leaves the button.

<ThemedImage alt="With Click State" width={41} sources={{ light: require('./icon-button--with-click-state-light.png').default, dark: require('./icon-button--with-click-state-dark.png').default }} />

### Sizes

Icon buttons at 16, 20, 25, 32 and 40px, so a size can be picked to match the surrounding text or row height (`size`).

<ThemedImage alt="Sizes" width={368} sources={{ light: require('./icon-button--sizes-light.png').default, dark: require('./icon-button--sizes-dark.png').default }} />

### Disabled

Disabled icon buttons ignore clicks and hover and keep their default icon and colour (`isDisabled`). They look the same as enabled ones apart from the arrow cursor, so pair them with a visible reason when the difference matters.

<ThemedImage alt="Disabled" width={119} sources={{ light: require('./icon-button--disabled-light.png').default, dark: require('./icon-button--disabled-dark.png').default }} />

### With Stroke

Stroke mode colours the outlines of the icon's shapes and leaves their own fill as drawn, which suits outline icons (`isStroke`). The two filled icons here show that: each keeps its fill and gains a grey outline.

<ThemedImage alt="With Stroke" width={119} sources={{ light: require('./icon-button--with-stroke-light.png').default, dark: require('./icon-button--with-stroke-dark.png').default }} />

### With Custom Node

A square of initials in place of an SVG icon: any React node can be the icon, rendered inline with no network request (`iconNode`).

<ThemedImage alt="With Custom Node" width={44} sources={{ light: require('./icon-button--with-custom-node-light.png').default, dark: require('./icon-button--with-custom-node-dark.png').default }} />

### With Tooltip

Hover over the button to read what it does: an icon alone rarely says so, and the button renders this tooltip itself, next to the pointer (`tooltipId`, `tooltipContent`).

<ThemedImage alt="With Tooltip" width={41} sources={{ light: require('./icon-button--with-tooltip-light.png').default, dark: require('./icon-button--with-tooltip-dark.png').default }} />

### Css Customization

The variables are listed under CSS variables on this page; here all three are set through the `style` prop, because a value set on a wrapper never arrives. Hover the button to see the hover colour.

<ThemedImage alt="Css Customization" width={48} sources={{ light: require('./icon-button--css-customization-light.png').default, dark: require('./icon-button--css-customization-dark.png').default }} />

## Minimal example

Pass the icon as a node. It needs no network request and your bundler types it.

```tsx
import { IconButton } from "@onlyoffice/apps-ui-kit/components/icon-button";

export function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <IconButton
      size={16}
      title="Close"
      onClick={onClose}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClose();
      }}
      iconNode={
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path
            d="M4 4l8 8M12 4l-8 8"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      }
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `className`? | `string` | Sets component class |
| `clickColor`? | `"accent" \| (string & {})` | Colour while the button is held down; same forms as `color`. |
| `color`? | `"accent" \| (string & {})` | Any CSS colour, the literal `"accent"` for the theme accent, or the name of a custom property starting with `--`, which is wrapped in `var()`. |
| `dataTestId`? | `string` | Value of `data-testid` on the button. Default: `"icon-button"`. |
| `dataTip`? | `string` | Value of the legacy `data-tip` attribute, read by an older tooltip implementation. Use `tooltipId` with `tooltipContent`, or `title`. Default: `""`. |
| `hoverColor`? | `"accent" \| (string & {})` | Colour while the pointer is over the button; same forms as `color`. |
| `iconClickName`? | `string` | URL of the icon swapped in while the button is held down. |
| `iconHoverName`? | `string` | URL of the icon swapped in while the pointer is over the button, on a device that has a pointer. |
| `iconName`? | `string` | **A URL, not an asset name.** It is handed to `react-svg` as `src`, which fetches it at runtime and inlines the response, so it has to resolve from the browser — an imported `?url`, or a path under your public directory. Ignored when `iconNode` is set. |
| `iconNode`? | `ReactNode` | The icon as JSX, rendered inline. Preferred over `iconName`: it needs no network request and is typed by your own bundler. |
| `id`? | `string` | Sets component id |
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
| `style`? | `CSSProperties` | Accepts css style |
| `tabIndex`? | `number` | Applied to the element, which is a `<div>`: without this the button is not reachable by keyboard at all. |
| `title`? | `string` | Tooltip text. Consumed by the tooltip container this component renders, so it never reaches the DOM as a `title` attribute. |
| `tooltipContent`? | `string` | Text of that tooltip. Without `tooltipId` it does nothing. |
| `tooltipId`? | `string` | Anchor id for a tooltip. Together with `tooltipContent` it makes the component render its own `Tooltip`, placed below the button. |

</APITable>

## Recipes

### Disabled

```tsx
import { IconButton } from "@onlyoffice/apps-ui-kit/components/icon-button";

export function RefreshButton({ busy }: { busy: boolean }) {
  return (
    <IconButton
      size={16}
      isDisabled={busy}
      title="Refresh"
      onClick={() => {}}
      iconNode={
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <circle
            cx="8"
            cy="8"
            r="6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      }
    />
  );
}
```

### An icon loaded from a URL

`iconName` is a URL that the browser fetches, so it has to be one your bundler produced or one
under your public directory.

```tsx
import { IconButton } from "@onlyoffice/apps-ui-kit/components/icon-button";
import trashUrl from "./trash.svg?url";

export function DeleteButton({ onDelete }: { onDelete: () => void }) {
  return (
    <IconButton
      size={16}
      iconName={trashUrl}
      color="--accent-main"
      title="Delete"
      onClick={onDelete}
    />
  );
}
```

## Behaviour the types don't state

- **`iconName` is a URL.** It goes to `react-svg` as `src`, which fetches it and inlines the
  markup, so an asset name, an import of the SVG as a component, or a build-time alias of the
  DocSpace client will not work. `iconNode` avoids the request entirely.
- **It renders a `<div>`, not a `<button>`.** There is no implicit role, no tab stop and no
  Enter or Space activation. A button anyone can use from the keyboard needs `tabIndex`,
  `onKeyDown` and a role of your own — the minimal example shows the minimum.
- **`onMouseUp` fires only for the middle and right buttons.** The component switches on
  `event.nativeEvent.button` and handles `1` and `2`, having labelled `1` as the left button;
  the left button is `0` and falls through. Use `onClick`.
- The hover and pressed icon swaps are suppressed on a touch device, which the component
  detects by `ontouchstart`.
- `isDisabled` blocks every handler including the colour swaps, and sets `aria-disabled`; the
  element stays in the tab order if you gave it one. The stylesheet changes nothing but the
  cursor, which becomes the arrow, so a disabled button keeps its default icon and colour and
  otherwise looks the same as an enabled one.
- The cursor is the pointer only when the button has an `onClick` or `isClickable`; otherwise
  it is the arrow.
- With `tooltipId` and `tooltipContent` the button renders its own `Tooltip` below itself,
  which follows the pointer on a desktop and stays put elsewhere.
- `title` never reaches the DOM — the component's tooltip container consumes it.

## CSS variables

The component declares these on its own element and writes them into its inline style from the
`size` and `color` props, so a value set on a wrapper never arrives. The props are the way to
change them; the `style` prop also works, because it is applied after them. `color` accepts
the name of a custom property (`color="--accent-main"`), which it wraps in `var()`.

<APITable>

| Variable                    | Default             | Effect                                                                                                                                                                                 |
| --------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--icon-button-color`       | theme               | Icon colour, as fill, or as stroke under `isStroke`                                                                                                                                    |
| `--icon-button-hover-color` | theme               | Icon colour while a mouse pointer is over the button; not on touch screens. Once `color` is set, the component writes the same value here, so the hover colour comes from `hoverColor` |
| `--icon-button-size`        | `20px`, from `size` | Width and height of the button                                                                                                                                                         |

</APITable>

## Accessibility

- The element is a `<div>` with no role and no accessible name. A screen reader announces
  nothing unless you add `role="button"` and a name, which the component does not do for you.
- `aria-disabled` is always set: `true` while `isDisabled`, `false` otherwise.
- `aria-label` is passed through to the element and is the way to give it a name.
- The tooltip from `title` is not an accessible name either — it is rendered by the kit's
  tooltip, not by the platform.
- For an icon-only action that has to be usable by everyone, `Button` with `aria-label` is the
  safer component.

## Test ids

<APITable>

| Element                          | `data-testid`                                |
| -------------------------------- | -------------------------------------------- |
| The button                       | `icon-button`, overridable with `dataTestId` |
| The fetched SVG, with `iconName` | `icon-button-svg`                            |

</APITable>

## Related

- [`Button`](./button.md) — a real button, with a label and an icon.
- [`ContextMenuButton`](./context-menu-button.md) — an icon that opens a menu.
- [`Tooltip`](../overlays/tooltip.md) — the tooltip `title` and `tooltipContent` feed.
