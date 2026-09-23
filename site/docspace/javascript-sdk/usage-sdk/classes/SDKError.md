---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/errors/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# SDKError

The SDK's structured error class. Thrown or passed to [TFrameEvents.onAppError](../type-aliases/TFrameEvents.md#onAppError)
whenever the SDK encounters a known failure.

The `code` property identifies the failure category; `recoverable` indicates whether
the caller may retry the operation without reinitializing the frame.

## Example

```typescript
import { SDKError, SDKErrorCode } from '@onlyoffice/docspace-sdk-js';

instance.getFiles().catch((err) => {
  if (err instanceof SDKError) {
    console.error(`[${err.code}] ${err.message}`);
    if (err.recoverable) {
      scheduleRetry();
    }
  }
});
```

## Extends

- `Error`

## Constructors

### Constructor

```ts
new SDKError(
   code: SDKErrorCode, 
   message: string, 
   recoverable?: boolean
): SDKError;
```

#### Parameters

<APITable name="Constructor">

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `code` | [`SDKErrorCode`](../enumerations/SDKErrorCode.md) | `undefined` | The error category. Use a [SDKErrorCode](../enumerations/SDKErrorCode.md) value. |
| `message` | `string` | `undefined` | Human-readable description of what went wrong. |
| `recoverable` | `boolean` | `false` | Whether the operation may be retried. Default: `false`. |

</APITable>

#### Returns

`SDKError`

#### Overrides

```ts
Error.constructor
```

## Properties

<APITable name="SDKError">

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| `code` | `readonly` | [`SDKErrorCode`](../enumerations/SDKErrorCode.md) | The error category. One of the [SDKErrorCode](../enumerations/SDKErrorCode.md) string values. Use this for programmatic branching rather than parsing `message`. |
| `recoverable` | `readonly` | `boolean` | Whether the caller can retry the failed operation without reinitializing the frame. Default: `false`. |

</APITable>
