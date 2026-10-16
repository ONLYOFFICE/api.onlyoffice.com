---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TEditorOpenPayload

Payload of [TFrameEvents.onEditorOpen](TFrameEvents.md#onEditorOpen): the file the frame is about to open plus the
requested action. When the user creates a new document in [SDKMode.Manager](../enumerations/SDKMode.md#Manager), the payload
is the created file and `action` is absent.

```ts
type TEditorOpenPayload = TFileInfo & object;
```

## Type Declaration

<APITable>

| Name | Type | Description |
| ------ | ------ | ------ |
| `action` | [`TEditorAction`](TEditorAction.md) | Requested editor action. Absent for a document created in [SDKMode.Manager](../enumerations/SDKMode.md#Manager). |
| `share` | `string` | Share key of the room when it was opened by an external link; empty otherwise. |

</APITable>
