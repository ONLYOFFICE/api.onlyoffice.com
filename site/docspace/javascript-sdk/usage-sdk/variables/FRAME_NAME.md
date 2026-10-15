---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/constants/index.ts
---

# FRAME\_NAME

The prefix for iframe `name` attribute. The full name is `{FRAME_NAME}__#{frameId}`.
Used internally by the postMessage protocol to route messages to the correct frame.

```ts
const FRAME_NAME: "frameDocSpace";
```

## See

[TFrameConfig.frameId](../type-aliases/TFrameConfig.md#frameId) — the unique identifier appended to this prefix.
