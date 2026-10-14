---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TUploaderUploadError

Payload of [TFrameEvents.onUploadError](TFrameEvents.md#onUploadError) in [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader): the batch failed or some files were refused.

```ts
type TUploaderUploadError = object;
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `error` | `string` | Error message. |
| `rejectedFiles`? | [`TRejectedFile`](TRejectedFile.md)[] | Files refused by the dialog's validation, when the error is a validation failure. See [TRejectedFile](TRejectedFile.md). |

</APITable>
