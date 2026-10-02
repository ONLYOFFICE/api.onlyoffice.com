---
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/docs/Hooks.mdx"
---

import APITable from '@site/src/components/APITable/APITable';

# Hooks

Eleven hooks, barrelled in `hooks/index.ts` and re-exported from the package root. They are
the behaviours the components needed often enough to extract — responsive breakpoints,
event subscription, animation phases and the virtual-keyboard handling mobile Safari makes
necessary.

```tsx
import { useIsMobile } from "@onlyoffice/apps-ui-kit/hooks/use-is-mobile";

// or, and the only form a DocSpace plugin can use:
import { useIsMobile } from "@onlyoffice/apps-ui-kit";
```

## Responsive

<APITable>

| Hook            | Returns   | Notes                                                     |
| --------------- | --------- | --------------------------------------------------------- |
| `useIsMobile`   | `boolean` | Subscribes to the `mobile` media query                    |
| `useIsDesktop`  | `boolean` | Subscribes to the `desktop` media query                   |

</APITable>

Both seed their state synchronously, so the first render is already correct rather than
flashing the desktop layout. Use these instead of calling `isMobile()` from
`utils/device` inside a component: the utility reads the viewport once and never tells you
when it changes.

```tsx
import { useIsMobile } from "@onlyoffice/apps-ui-kit/hooks/use-is-mobile";

function Toolbar() {
  const isMobile = useIsMobile();
  return isMobile ? <CompactToolbar /> : <FullToolbar />;
}
```

## Events and lifecycle

### `useEventListener(eventName, handler, element?, options?)`

Type-safe event subscription with automatic cleanup, against `window` by default or any
element, `document` or `MediaQueryList` you pass. The handler reference is kept stable, so
an inline arrow function does not re-subscribe on every render.

```tsx
useEventListener("scroll", () => console.log(window.scrollY));
useEventListener("click", onClick, buttonRef);
```

### `useClickOutside(ref, handler, options?, ...deps)`

Fires when a click lands outside the referenced element — the standard way to close a
dropdown, popover or modal. It lives in `utils/use-click-outside` rather than `hooks/`,
but it is re-exported from the root like the rest.

### `useDebounce(callback, delay)`

Returns a debounced version of the callback and clears its timer on unmount. Typed for the
search-input case it was written for: the callback takes a `string`.

### `useUnmount(fn)`

Runs `fn` once, on unmount. `fn` is wrapped in an effect event, so it always sees the
latest props and state without being listed as a dependency.

### `useIsomorphicLayoutEffect`

`useLayoutEffect` in the browser, `useEffect` on the server. Use it wherever a layout
effect would otherwise log the SSR warning.

### `useViewEffect({ view, setView, currentDeviceType })`

Keeps a row/table view selection in sync with the device: forces `row` on a mobile or
tablet viewport and `table` otherwise, re-checking whenever the section width changes. It
reads that width from the `utils/context` provider, and does nothing while `view` is
neither `"row"` nor `"table"`. A default export, re-exported by name.

## Animation and positioning

### `useAnimation(isActive)`

Drives a CSS animation through `none` → `start` → `progress` → `finish` and dispatches
custom events at each transition, so a progress bar can advance on a timer and still settle
when the real work finishes.

### `useCloseOnAnchorCovered({ anchorRef, onClose, isElementCovered?, enabled? })`

Closes a popup when its anchor scrolls out of view or is covered by another element. It
runs a `requestAnimationFrame` loop rather than an `IntersectionObserver`, because being
covered by an overlay is not an intersection change. `isElementCovered` is exported
separately if you need the predicate on its own.

## Virtual keyboard

Two hooks for the mobile case where the on-screen keyboard overlaps the layout viewport.
Both read `window.visualViewport`, both no-op on a non-touch device, and both treat
sub-pixel deltas as "no keyboard" — those appear mid-animation in some browsers.

### `useVirtualKeyboardInset(enabled?)`

Returns how many CSS pixels of the viewport's bottom the keyboard covers, so an in-flow
container can reserve that space as `padding-bottom` and keep its bottom-anchored content
reachable.

### `useKeyboardAwareSheet(sheetRef, enabled)`

The fixed-position counterpart: offsets a `ModalDialog` bottom sheet's `bottom` style so
the sheet rides above the keyboard instead of being hidden behind it.
