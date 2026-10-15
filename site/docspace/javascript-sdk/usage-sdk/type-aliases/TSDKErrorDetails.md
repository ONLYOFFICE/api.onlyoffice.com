---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/errors/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TSDKErrorDetails

Extra details attached to an [SDKError](../classes/SDKError.md).
Set for [SDKErrorCode.ApiError](../enumerations/SDKErrorCode.md#ApiError); absent for every other code.

```ts
type TSDKErrorDetails = object;
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `data`? | `object` | The portal's error payload: `message`, `name`, `code`, `status`. |
| `status`? | `number` | HTTP status of the failed portal request (`401`, `403`, `404`, …). Absent when the portal did not report one. |

</APITable>
