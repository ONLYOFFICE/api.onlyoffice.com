---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TUploadError

Payload of [TFrameEvents.onUploadError](TFrameEvents.md#onUploadError) in [SDKMode.Forms](../enumerations/SDKMode.md#Forms) and [SDKMode.Personal](../enumerations/SDKMode.md#Personal):
the file transferred with [SDKInstance.upload](../classes/SDKInstance.md#upload) that the frame could not store.

```ts
type TUploadError = object;
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `fileName` | `string` | Name of the rejected file. |
| `message` | `string` | Error message reported by the frame. |
| `uploadId`? | `number` | Correlation ID the SDK assigned to the `upload` call. |

</APITable>
