---
description: "Full-width notification bar that sits at the top of a section until it is dismissed."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/snackbar/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# SnackBar

Full-width notification bar that sits at the top of a section until it is dismissed. It is the
portal's "your storage is almost full" strip — a message that stays until the user acts on it.

<ThemedImage alt="SnackBar" width={982} sources={{ light: require('./snackbar--primary-light.png').default, dark: require('./snackbar--primary-dark.png').default }} />

## Use this when / not when

- Use for a persistent, page-level notice the user has to see: a quota warning, a scheduled
  maintenance window, a campaign banner.
- Not for the result of an action the user just took — [`Toast`](./toast.md) is the
  transient one, and it stacks and dismisses itself.
- Not for a message inside a form; put the text in the field's own `errorMessage`.
- Not for progress; [`ProgressBar`](../status-components/progress-bar.md) and
  [`Loader`](../status-components/loader.md) are that.

## Import

```ts
import { SnackBar } from "@onlyoffice/apps-ui-kit/components/snackbar";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Note the capital `B`: the component is `SnackBar`, while the folder and the props type are
spelled `snackbar`/`SnackbarProps`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` — the background and the
accent stripe come from the theme class it puts on the tree.

## Stories

### Default

The bar as most pages show it: a warning icon, a header and a message, with a close cross at the end that calls `onAction`. Change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={982} sources={{ light: require('./snackbar--default-light.png').default, dark: require('./snackbar--default-dark.png').default }} />

### With Action

When the notice asks for one step, the bar offers it in place of the close cross: the underlined **Take Action** label after the message calls `onAction` (`btnText`).

<ThemedImage alt="With Action" width={982} sources={{ light: require('./snackbar--with-action-light.png').default, dark: require('./snackbar--with-action-dark.png').default }} />

### With Countdown

For a notice that should not outstay its moment: the countdown after the message ticks down from 00:05 and calls `onAction` at zero, where the host removes the bar (`countDownTime`). Here nothing removes it, so only the timer disappears.

<ThemedImage alt="With Countdown" width={982} sources={{ light: require('./snackbar--with-countdown-light.png').default, dark: require('./snackbar--with-countdown-dark.png').default }} />

### With Html Content

When the notice needs bold text or a link, pass it as HTML: it replaces the header and the message, and the markup is sanitized first, which also drops any `style` attribute (`htmlContent`).

<ThemedImage alt="With Html Content" width={982} sources={{ light: require('./snackbar--with-html-content-light.png').default, dark: require('./snackbar--with-html-content-dark.png').default }} />

### Maintenance

A scheduled-maintenance notice is an ordinary bar with its own header and message; there is no separate maintenance look, and `isMaintenance` changes nothing.

<ThemedImage alt="Maintenance" width={982} sources={{ light: require('./snackbar--maintenance-light.png').default, dark: require('./snackbar--maintenance-dark.png').default }} />

### With Additional Header Text

When the header needs a detail such as a time, the smaller **Today, 10:00** line sits right after it (`additionalHeaderText`).

<ThemedImage alt="With Additional Header Text" width={982} sources={{ light: require('./snackbar--with-additional-header-text-light.png').default, dark: require('./snackbar--with-additional-header-text-dark.png').default }} />

### Right To Left

The same bar under a right-to-left interface: the accent stripe moves to the right edge, the icon and header start from the right, and the close cross moves to the left end. The wrapper sets the direction to right-to-left, and the bar's logical properties follow it.

<ThemedImage alt="Right To Left" width={982} sources={{ light: require('./snackbar--right-to-left-light.png').default, dark: require('./snackbar--right-to-left-dark.png').default }} />

### Css Customization

Every overridable variable set on one wrapper -- the variables are listed under CSS variables on this page. The message takes the red text colour while the header keeps the heading colour.

<ThemedImage alt="Css Customization" width={416} sources={{ light: require('./snackbar--css-customization-light.png').default, dark: require('./snackbar--css-customization-dark.png').default }} />

## Minimal example

`opacity` is what makes the bar visible, and `countDownTime={-1}` is what keeps it from
dismissing itself. Both are easy to leave out and both are needed.

```tsx
import { SnackBar } from "@onlyoffice/apps-ui-kit/components/snackbar";

export function QuotaBar({ onDismiss }: { onDismiss: () => void }) {
  return (
    <SnackBar
      opacity={1}
      showIcon
      headerText="Storage almost full"
      text="Free up space or upgrade your plan to keep working."
      countDownTime={-1}
      sectionWidth={0}
      onAction={onDismiss}
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `countDownTime` | `number` | Milliseconds until the countdown fires `onAction`. Pass `-1` for no countdown at all: `0` fires it on the first frame. |
| `sectionWidth` | `number` | Minimum width of the iframe on a tablet or wider, in pixels. It does nothing without `htmlContent`. |
| `additionalHeaderText`? | `string` | Smaller line drawn next to the header. |
| `backgroundImg`? | `string` | CSS `background-image` value of the bar — a whole shorthand such as `url(/banner.png)`, not a bare path. |
| `btnText`? | `string` | Label of the inline action, drawn as underlined text after the message. Setting it removes the close cross. |
| `fontSize`? | `string` | Font size of the countdown, as a CSS length. It does not reach the message, whose size is fixed by `--snackbar-text-size`. |
| `fontWeight`? | `number` | Font weight of the countdown. It does not reach the message either. |
| `headerText`? | `string` | Bold line above the message. Without it the heading element is still rendered, hidden with `display: none`. |
| `htmlContent`? | `string` | HTML injected instead of `text`, sanitized with `xss`. Under `isCampaigns` it is read as the `src` of an iframe instead. |
| `isCampaigns`? | `boolean` | Whether the bar is a campaign banner: `htmlContent` becomes an iframe URL and the only thing drawn over it is a close cross. |
| `isMaintenance`? | `boolean` | Ignored. Nothing reads this prop, and it reaches the DOM as an unknown attribute. |
| `onAction`? | `(e?: React.MouseEvent) => void` | Called by the action text, by the close cross, when the countdown reaches zero and when a click lands in an iframe. The event is only passed on a real click. |
| `onClose`? | `() => void` | Ignored. Nothing reads this prop; the close cross calls `onAction`. |
| `onLoad`? | `() => void` | Called once the bar is mounted. Under `isCampaigns` the iframe's own load is what reveals the cross. |
| `opacity`? | `number` | Opacity of the bar. Without it the bar renders fully transparent — the stylesheet falls back to `0`. |
| `showIcon`? | `boolean` | Whether the warning icon is drawn before the header. |
| `skipBlur`? | `boolean` | Whether the window `blur` listener is skipped. It is on by default and turns a click inside an iframe into an `onAction` half a second later. |
| `style`? | `CSSProperties` | Applied to the outermost element as inline style. It is merged after the opacity and background variables, so it can override them. |
| `text`? | `ReactNode` | Message of the bar, rendered under the header. Ignored when `htmlContent` is set. |
| `textAlign`? | `"match-parent" \| TextAlignValue` | Text alignment of the header and the message. |

</APITable>

`BarConfig` is `SnackbarProps` plus `parentElementId`, and is only used by the static
`SnackBar.show` described below.

## Recipes

### Dismissing it

The bar never removes itself: `onAction` is a notification, and rendering it is your decision.
The same handler is called by the cross, by the action text and by the countdown, so there is
one place to put the state change.

```tsx
import { useState } from "react";
import { SnackBar } from "@onlyoffice/apps-ui-kit/components/snackbar";

export function MaintenanceBar() {
  const [shown, setShown] = useState(true);

  if (!shown) return null;

  return (
    <SnackBar
      opacity={1}
      headerText="Scheduled maintenance"
      text="The portal will be unavailable on Sunday, 2:00–4:00 AM."
      countDownTime={-1}
      sectionWidth={0}
      onAction={() => setShown(false)}
    />
  );
}
```

### An action instead of a cross

Passing `btnText` replaces the close cross with an underlined label. There is then no cross at
all, so the only way out of the bar is the action itself.

```tsx
import { SnackBar } from "@onlyoffice/apps-ui-kit/components/snackbar";

export function UpdateBar({ onUpdate }: { onUpdate: () => void }) {
  return (
    <SnackBar
      opacity={1}
      showIcon
      headerText="Update available"
      text="A new version is ready to install."
      btnText="Update now"
      countDownTime={-1}
      sectionWidth={0}
      onAction={onUpdate}
    />
  );
}
```

### Auto-dismiss

`countDownTime` is in **milliseconds** and draws an `mm:ss` counter next to the message. When
it reaches zero the counter disappears and `onAction` fires.

```tsx
import { useState } from "react";
import { SnackBar } from "@onlyoffice/apps-ui-kit/components/snackbar";

export function TimedBar() {
  const [shown, setShown] = useState(true);

  if (!shown) return null;

  return (
    <SnackBar
      opacity={1}
      text="This notice closes in 30 seconds."
      countDownTime={30000}
      sectionWidth={0}
      onAction={() => setShown(false)}
    />
  );
}
```

## Behaviour the types don't state

- **Without `opacity` the bar is invisible.** The stylesheet is `opacity: var(--opacity, 0)`
  and the variable is only set from the prop, so a bar rendered without it occupies its space
  and shows nothing. Pass `opacity={1}`.
- **`countDownTime` is milliseconds, and anything above `-1` starts a countdown.** `0` is not
  "no countdown": the counter completes on the first frame and calls `onAction` immediately,
  which is why a bar with `countDownTime={0}` can look like it closes itself.
- **`onClose` is never called** — the cross calls `onAction`, like everything else. So does the
  countdown, and so does a click that lands inside an iframe.
- **Clicking anywhere in an iframe dismisses the bar.** A `blur` listener on `window` checks
  whether the focused element is an `<iframe>` and, half a second later, calls `onAction`. Set
  `skipBlur` to turn that off.
- **`btnText` and the cross are exclusive.** The cross is only rendered when `btnText` is
  empty, so a bar with an action has no other way to be dismissed.
- **`fontSize` and `fontWeight` do not reach the message.** The message carries
  `font-size: … !important` from `--snackbar-text-size`; the two props only style the countdown.
- **`htmlContent` means two different things.** On its own it replaces the whole text block
  — icon, header, message, action label and countdown — with HTML run through the `xss`
  sanitizer, and only the close cross is kept beside it; together with `isCampaigns` it is used
  as the `src` of an `<iframe>` and nothing else is drawn but a close cross.
- **`sectionWidth` only matters with `htmlContent`** — it is the iframe's `min-width` from the
  tablet breakpoint up, and is ignored by the text layout.
- **The bar takes the full width of its parent and has no margin of its own.** It is
  `position: relative`, `width: 100%`, with `12px 20px` of padding inside and a 4px accent
  stripe on the leading edge.
- **`isMaintenance` does nothing.** It is declared, never read, and — like every other
  undestructured prop — spread onto the wrapper `<div>`, where React reports it as an unknown
  attribute.
- The component is a **class component**, so it takes no `ref` and none of the hooks-era
  helpers apply to it.

### The static `SnackBar.show` / `SnackBar.close`

`SnackBar.show(config)` mounts a second React root into the element named by
`config.parentElementId`, or into a `<div id="snackbar">` it appends to `document.body`, and
stores the config on `window.snackbar`. It is how the portal shows a bar from outside React.

Prefer rendering `<SnackBar/>` yourself. If you do call it:

- every call creates a **new root on the same node** — React warns, and nothing unmounts the
  previous tree;
- without `parentElementId` every call appends **another** `<div id="snackbar">`, so the
  document ends up with duplicate ids;
- `SnackBar.close()` does nothing unless the last config had a `parentElementId`, and even then
  it only removes `#snackbar-container` from the DOM — the React root stays mounted and leaks.

## CSS variables

Set them on any ancestor.

<APITable>

| Variable                     | Default        | Effect                                                          |
| ---------------------------- | -------------- | --------------------------------------------------------------- |
| `--snackbar-background`      | theme token    | Background colour of the bar.                                   |
| `--snackbar-text-color`      | theme token    | Colour of the message, the extra header line and the countdown. |
| `--snackbar-accent-color`    | warning colour | Colour of the stripe on the leading edge.                       |
| `--snackbar-accent-width`    | `4px`          | Width of that stripe.                                           |
| `--snackbar-text-size`       | `12px`         | Font size of the header and the message.                        |
| `--snackbar-content-padding` | `12px 20px`    | Padding of the content and of the cross.                        |
| `--snackbar-icon-fill`       | warning colour | Fill of the icon drawn by `showIcon`.                           |

</APITable>

The header does not follow `--snackbar-text-color`: it is a `Heading`, which keeps its own
colour (`--heading-text-color`). The action label and the cross are fixed colours no variable
reaches.

`--opacity` and `--background-image` are written by the component from `opacity` and
`backgroundImg`; set those props rather than the variables.

## Accessibility

- **The bar is a plain `<div>`**: no `role="status"`, no `aria-live`, so a screen reader is not
  told when it appears. Wrap it in your own live region if the message matters.
- The close cross is a real `<button>`, so it is focusable — but it has **`type="submit"`**,
  which submits the surrounding form if the bar is rendered inside one, and it has no
  accessible name at all.
- **The action text is not a button.** `btnText` renders a `<p>` with a click handler: it
  cannot be focused or activated from the keyboard.
- `htmlContent` is injected as HTML. It is sanitized with `xss`, but anything you interpolate
  into it is still your responsibility.

## Test ids

<APITable>

| Element          | `data-testid`              |
| ---------------- | -------------------------- |
| The bar          | `snackbar-container`       |
| The message      | `snackbar-message`         |
| The header       | `snackbar-header`          |
| The extra header | `snackbar-additional-info` |
| The icon         | `snackbar-icon`            |
| Injected HTML    | `snackbar-html-content`    |
| Campaign iframe  | `snackbar-iframe`          |

</APITable>

None of them can be overridden by a prop. The bar also carries the literal DOM id
`snackbar-container`.

## Related

- [`Toast`](./toast.md) — the transient notification, stacked and self-dismissing.
- [`Text`](../data-display/text.md) — what the message and the action label are built from.
- [`Heading`](../data-display/heading.md) — what `headerText` is rendered as.
