---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/enums/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# EditorType

The editor/viewer platform layout. Used in two config fields:
- [TFrameConfig.type](../type-aliases/TFrameConfig.md#type) — the iframe platform type (affects CSS and touch behavior).
- [TFrameConfig.editorType](../type-aliases/TFrameConfig.md#editorType) — the editor UI layout sent to the ONLYOFFICE Apps backend.

## Example

```typescript
sdk.initFrame({ mode: SDKMode.Editor, type: EditorType.Mobile, editorType: EditorType.Mobile, ... });
```

## Enumeration Members

<APITable>

| Enumeration Member | Value | Description |
| ------ | ------ | ------ |
| `Desktop` | `"desktop"` | Standard desktop/laptop layout. Default value. |
| `Embedded` | `"embedded"` | Compact layout for embedding into third-party web pages. |
| `Mobile` | `"mobile"` | Touch-optimized layout for tablets and smartphones. Sets `position: fixed` and `overflow: hidden` on the iframe. |

</APITable>
