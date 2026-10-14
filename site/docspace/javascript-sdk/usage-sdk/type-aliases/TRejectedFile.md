---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TRejectedFile

A file the [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader) dialog refused before uploading. Nested in [TUploaderUploadError.rejectedFiles](TUploaderUploadError.md#rejectedFiles).

```ts
type TRejectedFile = object;
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `errors` | [`TUploadRejection`](TUploadRejection.md)[] | Why the file was rejected. See [TUploadRejection](TUploadRejection.md). |
| `fileName` | `string` | Name of the rejected file. |
| `fileSize` | `number` | Size of the rejected file in bytes. |
| `fileType` | `string` | MIME type of the rejected file. |

</APITable>
