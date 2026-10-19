---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/enums/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# Theme

The UI color theme. Passed via [TFrameConfig.theme](../type-aliases/TFrameConfig.md#theme).

## Example

```typescript
sdk.init({ theme: Theme.Dark, ... });
```

## Enumeration Members

<APITable>

| Enumeration Member | Value | Description |
| ------ | ------ | ------ |
| `Base` | `"Base"` | Light theme. |
| `Dark` | `"Dark"` | Dark theme. |
| `System` | `"System"` | Follows the OS / browser preferred color scheme. |

</APITable>
