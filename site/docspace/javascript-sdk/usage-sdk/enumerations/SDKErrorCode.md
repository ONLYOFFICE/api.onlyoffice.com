---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/errors/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# SDKErrorCode

Error codes for [SDKError](../classes/SDKError.md). Each code identifies a specific failure category
in the SDK's iframe communication and lifecycle management.

## Example

```typescript
import { SDKError, SDKErrorCode } from '@onlyoffice/docspace-sdk-js';

try {
  await instance.getFiles();
} catch (err) {
  if (err instanceof SDKError && err.code === SDKErrorCode.Timeout) {
    console.warn('Request timed out — retry?', err.recoverable);
  }
}
```

## Enumeration Members

<APITable>

| Enumeration Member | Value | Description |
| ------ | ------ | ------ |
| `CSPViolation` | `"CSP_VIOLATION"` | The host domain is blocked by the ONLYOFFICE Apps Content Security Policy. |
| `Disconnected` | `"DISCONNECTED"` | The iframe is not connected or was disconnected while a call was in flight. |
| `InvalidConfig` | `"INVALID_CONFIG"` | The provided [TFrameConfig](../type-aliases/TFrameConfig.md) is missing required fields or has invalid values. |
| `ModeMismatch` | `"MODE_MISMATCH"` | A method was called in an incompatible [SDKMode](SDKMode.md) (e.g. [SDKInstance.upload](../classes/SDKInstance.md#upload) outside [SDKMode.Forms](SDKMode.md#Forms)). |
| `ParseError` | `"PARSE_ERROR"` | An incoming postMessage payload could not be parsed as valid JSON. |
| `Timeout` | `"TIMEOUT"` | A method call exceeded its configured timeout ([TFrameConfig.methodTimeout](../type-aliases/TFrameConfig.md#methodTimeout)). |
| `TokenResolveFailed` | `"TOKEN_RESOLVE_FAILED"` | The SDK could not resolve an OAuth access token: the [TFrameConfig.getToken](../type-aliases/TFrameConfig.md#getToken) callback threw/rejected, or neither `getToken` nor [TFrameConfig.accessToken](../type-aliases/TFrameConfig.md#accessToken) was provided in OAuth mode. |
| `UploadFailed` | `"UPLOAD_FAILED"` | A file upload failed or timed out. |

</APITable>
