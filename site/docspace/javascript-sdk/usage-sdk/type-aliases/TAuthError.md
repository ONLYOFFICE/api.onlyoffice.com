---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TAuthError

Payload of [TFrameEvents.onAuthError](TFrameEvents.md#onAuthError).

```ts
type TAuthError = object;
```

## Example

```typescript
const onAuthError = (error: TAuthError) => {
  console.warn(`[${error.code}] ${error.message}`);
  instance.destroyFrame();
};
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `code`? | [`TAuthErrorCode`](TAuthErrorCode.md) \| `string` | The failure category. See [TAuthErrorCode](TAuthErrorCode.md). A portal newer than the SDK may send a code that is not listed. |
| `message` | `string` | Human-readable description of the failure. |

</APITable>
