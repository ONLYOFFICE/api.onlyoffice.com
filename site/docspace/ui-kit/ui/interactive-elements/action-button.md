---
description: "Small tinted button for a secondary action, optionally rendered as another element."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/action-button/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# ActionButton

Small tinted button for a secondary action, optionally rendered as another element. It is the
"clear filter" of a toolbar: accent text on a quiet background, no border.

<ThemedImage alt="ActionButton" width={102} sources={{ light: require('./action-button--primary-light.png').default, dark: require('./action-button--primary-dark.png').default }} />

## Use this when / not when

- Use for a secondary action next to content — clearing a filter, adding one more row,
  toggling a panel.
- Not for the primary action of a screen or a dialog; [`Button`](./button.md) has the
  sizes, the primary look and `isLoading`.
- Not for an icon on its own — [`IconButton`](./icon-button.md) is that, though it is
  not keyboard-operable, and this one is.
- Not for navigation between pages unless you also pass `as="a"`, in which case
  [`Link`](../navigation/link.md) may be the better fit.

## Import

```ts
import { ActionButton } from "@onlyoffice/apps-ui-kit/components/action-button";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` for the accent text colour
and the hover background.


## Stories

### Default

The plain text button for a secondary action; click it to see `onClick` in the Actions panel, and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={102} sources={{ light: require('./action-button--default-light.png').default, dark: require('./action-button--default-dark.png').default }} />

### With Icon

An icon before the label makes the action easier to spot in a busy toolbar; the icon takes the text colour (`icon`).

<ThemedImage alt="With Icon" width={122} sources={{ light: require('./action-button--with-icon-light.png').default, dark: require('./action-button--with-icon-dark.png').default }} />

### As Link

The same look for an action that navigates: the button becomes a link and takes `href` (`as`).

<ThemedImage alt="As Link" width={102} sources={{ light: require('./action-button--as-link-light.png').default, dark: require('./action-button--as-link-dark.png').default }} />

### Disabled State

An action that is not available yet stays in place but fades and ignores clicks (`disabled`); it works only on the default `button`.

<ThemedImage alt="Disabled State" width={122} sources={{ light: require('./action-button--disabled-state-light.png').default, dark: require('./action-button--disabled-state-dark.png').default }} />

## Minimal example

```tsx
import { ActionButton } from "@onlyoffice/apps-ui-kit/components/action-button";

export function ClearFilter({ onClear }: { onClear: () => void }) {
  return <ActionButton label="Clear filter" onClick={onClear} />;
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `as`? | `C` | Renders as the given element or component. Defaults to `button`. |
| `className`? | `string` | Applied to the rendered element, after the component's own class. |
| `icon`? | `ReactNode` | Icon node rendered before the label text. It is drawn at 12px and filled with the text colour. |
| `label`? | `ReactNode` | Text of the button. Anything else you pass as `children` is dropped. |

</APITable>

Everything else you pass is forwarded to the rendered element, so a `<button>` takes
`disabled`, `type` and `onClick`, and `as="a"` takes `href` and `target`.

## Recipes

### With an icon

`icon` takes a node, not a name. It is drawn at 12×12 before the label and its paths are filled
with the button's own colour, so an SVG whose `path` has no hardcoded `fill` follows the theme.

```tsx
import { ActionButton } from "@onlyoffice/apps-ui-kit/components/action-button";

export function AddRow({ onAdd }: { onAdd: () => void }) {
  return (
    <ActionButton
      label="Add row"
      onClick={onAdd}
      icon={
        <svg viewBox="0 0 12 12" aria-hidden="true">
          <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      }
    />
  );
}
```

### As a link

`as` swaps the element, and the props of that element are then accepted and type-checked.

```tsx
import { ActionButton } from "@onlyoffice/apps-ui-kit/components/action-button";

export function DocsLink() {
  return (
    <ActionButton
      as="a"
      href="https://helpcenter.onlyoffice.com"
      target="_blank"
      rel="noreferrer"
      label="Open the help centre"
    />
  );
}
```

### Disabled / read-only

There is no `isDisabled` prop: as a `<button>` it takes the DOM's own `disabled`, which the
stylesheet fades to half opacity.

```tsx
import { ActionButton } from "@onlyoffice/apps-ui-kit/components/action-button";

export function SaveAction({ dirty }: { dirty: boolean }) {
  return <ActionButton label="Save changes" disabled={!dirty} />;
}
```

Note that `disabled` only exists on a `<button>`. Under `as="a"` nothing stops the click, and
the style does not change either.

## Behaviour the types don't state

- **This is a real `<button>`.** Unlike most of this kit it is focusable, activated by Enter
  and Space, and takes `disabled` — there is nothing to add for keyboard support.
- **`type` defaults to `submit`, as it does for any `<button>`.** Inside a form, pass
  `type="button"` unless submitting is what you want.
- **`label` is what is rendered, not `children`.** The component destructures `label` and does
  not render `children` at all, so a node passed as a child disappears.
- **The component brings no width and no margin.** It is `inline-flex` with `6px 10px` of
  padding and an `8px` gap, so a row of them needs its own gap.
- **Hover and press change only the background.** It darkens on hover — on devices that
  have hover, so not after a tap on a touch screen — and again while pressed; the text colour
  stays. Under `disabled` the button also shows a not-allowed cursor.
- **The dark colours come from a `.dark` ancestor**, the class `ThemeProvider` puts on
  `<body>` for the dark theme. Outside one the button keeps its light colours whatever the page looks like.
- **`ref` reaches the rendered element**, whichever `as` selects.
- **The label does not wrap or truncate.** A long label stretches the button until its parent
  clips it.
- **`as` accepts a component as well as a tag name**, and the props of whatever you pass are
  checked against it — `as={Link}` from a router works, and `to` is then required.
- The component emits **no `data-testid`**. Query it by its role and name, or pass an `id`.

## CSS variables

The colours are theme tokens defined on the component's own class rather than public knobs;
there is no `--action-button-*` variable to set from outside. To restyle one, pass a
`className` — it is applied after the component's own class.

## Accessibility

- The default element is a `<button>`, so the role, the focus ring, Enter/Space and `disabled`
  all come from the platform.
- **`label` is the accessible name.** A button with only an `icon` and no `label` has no name
  at all — pass `aria-label` in that case, or use [`Button`](./button.md).
- The icon is not hidden from assistive technology. If it carries no meaning of its own, mark
  the SVG `aria-hidden`.
- `as="a"` produces a link, which is announced as a link and activated by Enter only. Do not
  use it for something that is not navigation.

## Test ids

The component sets none. Pass `data-testid` yourself — it is forwarded to the rendered element
like any other unknown prop.

## Related

- [`Button`](./button.md) — the full-size button, with sizes, the primary look and a loader.
- [`IconButton`](./icon-button.md) — an icon on its own, without the label or the background.
- [`Link`](../navigation/link.md) — text that navigates.
