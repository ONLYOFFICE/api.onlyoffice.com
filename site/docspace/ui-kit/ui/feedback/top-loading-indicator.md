---
description: "The thin bar at the top of the page, driven by three static calls rather than by React."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/top-loading-indicator/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# TopLoaderService

The thin bar at the top of the page, driven by three static calls rather than by React. It renders
nothing: it finds an element you put in the document by id and writes a width onto it every 50ms.

<ThemedImage alt="TopLoader" width={231} sources={{ light: require('./top-loading-indicator--primary-light.png').default, dark: require('./top-loading-indicator--primary-dark.png').default }} />

## Use this when / not when

- Use for a navigation or a fetch whose length you do not know, when the page should stay usable.
- **You must supply the element yourself**, with the literal id `ipl-progress-indicator`, and style
  it yourself. Nothing in this package renders it and no stylesheet ships with this folder, so
  without both the calls succeed silently and nothing appears.
- **It is a module-level singleton.** One bar per page, one progression at a time; a second caller
  does not get a second bar.
- Not for a determinate operation — the bar's numbers are invented from a timer, not from your
  progress. Use [`ProgressBar`](../status-components/progress-bar.md) when you know the percentage.
- Not for the first paint of the application, when there is nothing to keep usable —
  [`AppLoader`](../status-components/app-loader.md) covers the screen instead.

## Import

```ts
import { TopLoaderService } from "@onlyoffice/apps-ui-kit/components/top-loading-indicator";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

It needs no provider, and no React at all — the calls work from a router hook, an interceptor or
plain script.

## Stories

### Default

Press **Start Loading** and a thin bar grows along the top of the viewport and stops at 90%; **End Loading** runs it to the full width and clears it, **Cancel** clears it at once (`start`, `end`, `cancel`). Use it to see how long a wait looks before the work finishes.

<ThemedImage alt="Default" width={231} sources={{ light: require('./top-loading-indicator--default-light.png').default, dark: require('./top-loading-indicator--default-dark.png').default }} />

### Css Customization

`TopLoaderService` defines no CSS custom properties -- the element's own style does all of it, as the recipe "The element, and its style" on this page describes.
This story renders a static demo bar under a different id, purely for visual reference -- it is not driven by `TopLoaderService`.

<ThemedImage alt="Css Customization" width={999} sources={{ light: require('./top-loading-indicator--css-customization-light.png').default, dark: require('./top-loading-indicator--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { useEffect, useState } from "react";

import { TopLoaderService } from "@onlyoffice/apps-ui-kit/components/top-loading-indicator";

export function Page() {
  const [text, setText] = useState("");

  useEffect(() => {
    TopLoaderService.start();

    const id = setTimeout(() => {
      setText("Loaded");
      TopLoaderService.end();
    }, 1500);

    return () => {
      clearTimeout(id);
      TopLoaderService.cancel();
    };
  }, []);

  return (
    <>
      <div
        id="ipl-progress-indicator"
        style={{
          position: "fixed",
          top: 0,
          insetInlineStart: 0,
          height: 2,
          width: 0,
          background: "#4781d1",
          transition: "width 0.2s ease-in-out",
          zIndex: 9999,
        }}
      />
      <p>{text}</p>
    </>
  );
}
```

## Recipes

### Loading

`start()` opens the bar and `end()` closes it. Always pair them, and call `cancel()` when the work
is abandoned — a progression with no `end()` sits at 90% for ever.

```tsx
import { useState } from "react";

import { TopLoaderService } from "@onlyoffice/apps-ui-kit/components/top-loading-indicator";
import { Button } from "@onlyoffice/apps-ui-kit/components/button";

export function SaveButton({ save }: { save: () => Promise<void> }) {
  const [busy, setBusy] = useState(false);

  const onClick = async () => {
    setBusy(true);
    TopLoaderService.start();
    try {
      await save();
      TopLoaderService.end();
    } catch {
      TopLoaderService.cancel();
    } finally {
      setBusy(false);
    }
  };

  return <Button primary label="Save" isLoading={busy} onClick={onClick} />;
}
```

### The element, and its style

Every visible property is yours. The service writes `width` in per cent and nothing else, so the
element needs a height, a colour and a position of its own, and a `transition` on `width` if the
steps are not to jump.

```tsx
export function TopLoaderElement() {
  return (
    <div
      id="ipl-progress-indicator"
      style={{
        position: "fixed",
        top: 0,
        insetInlineStart: 0,
        width: 0,
        height: 4,
        background: "#0082c9",
        borderRadius: "0 2px 2px 0",
        boxShadow: "0 0 8px rgba(0, 130, 201, 0.5)",
        transition: "width 0.2s ease-in-out",
        zIndex: 9999,
      }}
    />
  );
}
```

## Behaviour the types don't state

- **The id is hard-coded.** `document.getElementById("ipl-progress-indicator")` is looked up on
  every tick; if the element is not there the call does nothing and reports nothing. Render it once,
  high in the tree, and leave it mounted.
- **The numbers are a timer, not your progress.** The bar goes from 0 to 50% over the first second,
  then adds 10% a second, and **stops at 90%** until `end()` is called.
- **`end()` does not leave a full bar on screen.** It animates from where it stands to 100% over one
  second, and the next tick 50ms later sets the width back to `0px`. Nothing fades it out — add a
  transition or an opacity rule of your own if the finish should be visible.
- **`cancel()` does not animate.** It stops the timer and sets the width to `0px` and
  `aria-valuenow` to `0` at once, whether the bar is still growing or already closing.
- **`end()` before `start()` is ignored**, because there is no timer to end.
- **A second `start()` does not restart the bar.** The interval is already running, so the width
  keeps being computed from the original start time; only `cancel()` then `start()` begins again.
  A `start()` during the closing animation cancels that animation and snaps the bar backwards.
- **State lives in the module, not in an instance.** Two features that both call `start()` share one
  progression, and whichever calls `end()` first finishes it for both.
- **Nothing cleans up after you.** The interval runs until `end()` completes or `cancel()` is
  called; unmounting the element leaves the timer ticking against a lookup that now returns null.
- **It is safe to import on the server**: every lookup is guarded by `typeof document`, so calls
  before hydration are no-ops rather than crashes.
- The ARIA attributes are written on the first `start()` — an element that is never started carries
  none of them.

## Accessibility

- On the first `start()` the element is given `role="progressbar"` with `aria-valuemin="0"`,
  `aria-valuemax="100"` and an `aria-valuenow` updated on every tick. It has **no accessible name**;
  add an `aria-label` to the element yourself.
- The reported value is invented by the timer, so a screen reader is told a percentage that has
  nothing to do with the work. For a wait whose length matters, announce the outcome in a live
  region instead of relying on the bar.
- Nothing here respects `prefers-reduced-motion`; the width is animated by your own CSS transition,
  which is where you can honour it.

## Test ids

<APITable>

| Element | Attribute                   |
| ------- | --------------------------- |
| The bar | `data-test-id="top-loader"` |

</APITable>

It is written on the first `start()`, and note the spelling: `data-test-id` with two hyphens, not
the `data-testid` every component in this kit uses.

## Related

- [`ProgressBar`](../status-components/progress-bar.md) — when the percentage is real.
- [`AppLoader`](../status-components/app-loader.md) — the full-screen boot loader.
- [`Loader`](../status-components/loader.md) — a spinner inside the layout.
