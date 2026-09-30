---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TUploadRejection

One reason a file was rejected by the [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader) dialog. Nested in [TRejectedFile.errors](TRejectedFile.md#errors).

```ts
type TUploadRejection = object;
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `code` | `string` | Machine-readable reason (`"file-invalid-type"`, `"file-too-large"`, …). |
| `message` | `string` | Human-readable description. |

</APITable>
