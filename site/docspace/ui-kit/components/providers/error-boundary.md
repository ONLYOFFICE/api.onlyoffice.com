---
description: "Catches what the subtree throws while rendering and shows something in its place."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/providers/error-boundary/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# ErrorBoundary

Catches what the subtree throws while rendering and shows something in its place. It is a plain
React class boundary with the kit's own [`ErrorContainer`](../../ui/layout-components/error-container.md)
as its default fallback, offered here so an application does not have to write the one class
component React still requires for this.

<ThemedImage alt="ErrorProvider" width={982} sources={{ light: require('./error-boundary--primary-light.png').default, dark: require('./error-boundary--primary-dark.png').default }} />

## Use this when / not when

- Wrap a region that can fail on its own — a panel, a route, an editor — so the rest of the page
  survives it.
- Use it at the root as well, but not only there: a boundary at the root turns any throw into a
  blank application.
- Not for errors you expect. A failed request that returns a status is a value, not a throw, and
  belongs in your own state.
- Not for anything React does not route through rendering: event handlers, `setTimeout`,
  `requestAnimationFrame` and rejected promises are never caught by a boundary, in this kit or
  any other.

## Import

```ts
import { ErrorBoundary } from "@onlyoffice/apps-ui-kit/providers/error-boundary";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs [`ThemeProvider`](./theme.md) above it if the default fallback is used —
`ErrorContainer` is a kit component and takes its colours from the document like every other.


## Stories

### Default

Default usage where children render normally without any errors.

<ThemedImage alt="Default" width={982} sources={{ light: require('./error-boundary--default-light.png').default, dark: require('./error-boundary--default-dark.png').default }} />

### With Error

When a child component throws, the default ErrorContainer fallback is rendered.

<ThemedImage alt="With Error" width={996} sources={{ light: require('./error-boundary--with-error-light.png').default, dark: require('./error-boundary--with-error-dark.png').default }} />

### With Custom Fallback

A custom ReactNode can be provided as fallback for a fully customized error UI.

<ThemedImage alt="With Custom Fallback" width={982} sources={{ light: require('./error-boundary--with-custom-fallback-light.png').default, dark: require('./error-boundary--with-custom-fallback-dark.png').default }} />

### With Render Function Fallback

A render function receives the caught error, enabling dynamic fallback UI based on the error.

<ThemedImage alt="With Render Function Fallback" width={982} sources={{ light: require('./error-boundary--with-render-function-fallback-light.png').default, dark: require('./error-boundary--with-render-function-fallback-dark.png').default }} />

## Minimal example

```tsx
import { ErrorBoundary } from "@onlyoffice/apps-ui-kit/providers/error-boundary";

function Panel() {
  return <div>panel</div>;
}

export function App() {
  return (
    <ErrorBoundary>
      <Panel />
    </ErrorBoundary>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `children`? | `ReactNode` |  |
| `fallback`? | `((error: Error) => ReactNode) \| React.ReactNode` | What to render instead of the subtree after a throw. A function receives the error. Without it the kit's own `ErrorContainer` is shown, with the error's message and an untranslated English heading. |
| `onError`? | `(error: Error, errorInfo: ErrorInfo) => void` | Called once with the error and React's component stack. Report it here; the boundary itself logs nothing. |

</APITable>

## Recipes

### A fallback of your own

Anything renderable does. This is the usual form when the region has a natural empty state.

```tsx
import { ErrorBoundary } from "@onlyoffice/apps-ui-kit/providers/error-boundary";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

export function Members({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary fallback={<Text>The member list could not be shown.</Text>}>
      {children}
    </ErrorBoundary>
  );
}
```

### A fallback that reads the error

Pass a function to show what went wrong. Weigh that against who is looking: an error message is
written for whoever wrote the code, not for whoever is using the page.

```tsx
import { ErrorBoundary } from "@onlyoffice/apps-ui-kit/providers/error-boundary";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

export function Debuggable({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary fallback={(error: Error) => <Text>{error.message}</Text>}>
      {children}
    </ErrorBoundary>
  );
}
```

### Reporting

`onError` is the only place the error is offered to you. The boundary logs nothing of its own,
so without this handler a caught error leaves no trace beyond the fallback on screen.

```tsx
import { ErrorBoundary } from "@onlyoffice/apps-ui-kit/providers/error-boundary";

export function Reported({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary
      onError={(error, info) => {
        console.error(error, info.componentStack);
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
```

## Behaviour the types don't state

- **It never recovers.** There is no reset prop and no retry: once a throw is caught, the
  boundary renders its fallback for as long as it is mounted. Remount it — a changing `key` is
  the usual way — to try the subtree again.
- **The default fallback is untranslated English.** "Something went wrong" is written into the
  component and is not a prop, so an interface in any other language shows one English heading at
  the worst possible moment. Pass `fallback` if that matters.
- **The error's `message` is shown to the reader** by that default fallback, verbatim. For a
  failure carrying anything internal, replace it rather than letting it through.
- **A throw with no error object still renders the fallback**, as
  `new Error("Unhandled exception")` — so `fallback` as a function always receives an `Error`, never `undefined`.
- **`onError` receives React's `ErrorInfo`**, whose `componentStack` is the useful half; the
  boundary does not touch it.
- **Only rendering, lifecycle and constructors are covered.** This is React's rule, not the
  kit's: an error thrown from an event handler or a timer passes straight through to the window.

## Accessibility

- The fallback replaces the subtree without moving focus. If focus was inside what threw, it
  falls back to the document body and the reader is left without a position — move it deliberately
  when the region was interactive.
- Nothing announces the swap. A fallback that matters should say what happened in text, in a
  region the reader will reach, rather than relying on the visual change alone.
- The default fallback renders [`ErrorContainer`](../../ui/layout-components/error-container.md) and
  inherits its semantics.

## Related

- [`ErrorContainer`](../../ui/layout-components/error-container.md) — what the default fallback is.
- [`ThemeProvider`](./theme.md) — needed above it for that fallback to be styled.
- [`TranslationProvider`](./translation.md) — the other provider an application mounts.
