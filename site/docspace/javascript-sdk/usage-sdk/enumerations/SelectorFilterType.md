---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/enums/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# SelectorFilterType

The content filter for selector modes ([SDKMode.RoomSelector](SDKMode.md#RoomSelector), [SDKMode.FileSelector](SDKMode.md#FileSelector)).
Passed via [TFrameConfig.selectorType](../type-aliases/TFrameConfig.md#selectorType).

## Example

```typescript
sdk.initFrame({ mode: SDKMode.FileSelector, selectorType: SelectorFilterType.RoomsOnly, ... });
```

## Enumeration Members

<APITable>

| Enumeration Member | Value | Description |
| ------ | ------ | ------ |
| `All` | `"all"` | No filter — shows rooms and user folders. |
| `RoomsOnly` | `"roomsOnly"` | Shows only rooms. |
| `UserOnly` | `"userFolderOnly"` | Shows only the current user's personal folders. API value: `"userFolderOnly"`. |

</APITable>
