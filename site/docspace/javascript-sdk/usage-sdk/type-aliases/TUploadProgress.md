---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TUploadProgress

Payload of [TFrameEvents.onUploadProgress](TFrameEvents.md#onUploadProgress) in [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader): one event per uploaded chunk of each file.

```ts
type TUploadProgress = object;
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `fileName` | `string` | Name of the file being uploaded. |
| `percent` | `number` | Progress of this file in percent (`0`–`100`). |
| `sessionId` | `string` | Upload session ID of the file. |
| `totalChunks` | `number` | Total number of chunks of the file. |
| `uploadedChunks` | `number` | Chunks uploaded so far. |

</APITable>
