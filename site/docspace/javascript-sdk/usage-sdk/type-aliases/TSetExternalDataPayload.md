---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TSetExternalDataPayload

Payload the ONLYOFFICE Apps iframe sends when it asks the host to persist a value in external storage.
Passed to [TFrameEvents.onSetExternalData](TFrameEvents.md#onSetExternalData).

The shape of `value` is defined by the integrator — typically an object with key/value pairs
scoped to the current user in the integrator's storage.

```ts
type TSetExternalDataPayload = object;
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | Identifier defined by the integrator. Addresses the record to write. |
| `value` | `unknown` | Data to persist under `key`. Opaque to the SDK; typically an object with user-scoped key/value pairs. |

</APITable>
