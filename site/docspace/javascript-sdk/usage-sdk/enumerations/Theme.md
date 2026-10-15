---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/enums/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# Theme

The UI color theme. Passed via [TFrameConfig.theme](../type-aliases/TFrameConfig.md#theme).

## Example

```typescript
sdk.initFrame({ theme: Theme.Dark, ... });
```

## Enumeration Members

<APITable>

| Enumeration Member | Value | Description |
| ------ | ------ | ------ |
| `Base` | `"Base"` | Light theme. |
| `Dark` | `"Dark"` | Dark theme. |
| `System` | `"System"` | Follows the OS / browser preferred color scheme. |

</APITable>
