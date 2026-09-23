---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TEditorOpenPayload

Payload of [TFrameEvents.onEditorOpen](TFrameEvents.md#onEditorOpen): the file the manager is about to open plus the
requested action. When the user creates a new document, the payload is the created file and
`action` is absent.

```ts
type TEditorOpenPayload = TFileInfo & object;
```

## Type Declaration

<APITable>

| Name | Type | Description |
| ------ | ------ | ------ |
| `action`? | [`TEditorAction`](TEditorAction.md) | Requested editor action. Absent for a freshly created document. |
| `share`? | `string` | Share key of the room when it was opened by an external link; empty otherwise. |

</APITable>
