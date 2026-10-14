---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TUploaderUploadResult

One element of the [TFrameEvents.onUploadSuccess](TFrameEvents.md#onUploadSuccess) payload in [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader):
the portal's API envelope around the stored file.

```ts
type TUploaderUploadResult = object;
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `count`? | `number` | Number of items in `response`. |
| `response`? | [`TUploadedFile`](TUploadedFile.md) | The stored file. See [TUploadedFile](TUploadedFile.md). |
| `status`? | `number` | HTTP status of the portal's response. |
| `statusCode`? | `number` | HTTP status of the portal's response (duplicate of `status`). |

</APITable>
