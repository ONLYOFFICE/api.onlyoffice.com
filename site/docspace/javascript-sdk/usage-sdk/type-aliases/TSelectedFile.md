---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TSelectedFile

The [SDKMode.FileSelector](../enumerations/SDKMode.md#FileSelector) payload of [TFrameEvents.onSelectCallback](TFrameEvents.md#onSelectCallback): a single object, not an array.

```ts
type TSelectedFile = object;
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `documentType`? | `string` \| `null` | Editor document type derived from `fileType`; `null` when unknown. |
| `fileExst`? | `string` | File extension (e.g. `".docx"`). |
| `fileType`? | `number` | Numeric file type. |
| `id` | `string` \| `number` | File ID. |
| `inPublic`? | `boolean` | Whether the file sits in a public room. |
| `path`? | `string`[] | Folder path titles from the root to the file. |
| `requestTokens`? | [`TRequestTokenInfo`](TRequestTokenInfo.md)[] | External links when the file sits in a public room; absent otherwise. |
| `title` | `string` | File title with extension. |

</APITable>
