---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts
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
sdk.init({ frameId: 'ds-frame', src: 'https://portal.example.com', mode: 'manager' });
// equivalent to:
sdk.init({ frameId: 'ds-frame', src: 'https://portal.example.com', mode: SDKMode.Manager });
```
