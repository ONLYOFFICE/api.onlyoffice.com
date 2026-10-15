---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

# TFrameMode

String literal union of all [SDKMode](../enumerations/SDKMode.md) values.

Accepted by [TFrameConfig.mode](TFrameConfig.md#mode). Using the [SDKMode](../enumerations/SDKMode.md) enum constants
is preferred, but plain string literals (e.g. `"manager"`, `"editor"`) are equally valid.

```ts
type TFrameMode = `${SDKMode}`;
```

## Example

```typescript
sdk.initFrame({ frameId: 'ds-frame', src: 'https://portal.example.com', mode: 'manager' });
// equivalent to:
sdk.initFrame({ frameId: 'ds-frame', src: 'https://portal.example.com', mode: SDKMode.Manager });
```
