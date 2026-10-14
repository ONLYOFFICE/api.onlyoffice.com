---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

# TManagerSection

Sections of [SDKMode.Manager](../enumerations/SDKMode.md#Manager) a custom action can be limited to, named after the root folder
the user is in: `rooms`, `archive`, `my-documents`, `recent`, `favorites`, `shared` (shared with me) and `trash`.

```ts
type TManagerSection = 
  | "rooms"
  | "archive"
  | "my-documents"
  | "recent"
  | "favorites"
  | "shared"
  | "trash";
```
