---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TRequestTokenInfo

One external link of a selected room or file, attached to selector payloads.

```ts
type TRequestTokenInfo = object;
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | Link ID. |
| `primary` | `boolean` | Whether this is the primary link. |
| `requestToken` | `string` | The share key — the value for [TFrameConfig.requestToken](TFrameConfig.md#requestToken). |
| `title` | `string` | Link title. |

</APITable>
