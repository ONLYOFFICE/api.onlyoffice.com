---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TCustomActionsConfig

Configuration for custom context menu actions, passed to [SDKInstance.setCustomActions](../classes/SDKInstance.md#setcustomactions).

```ts
type TCustomActionsConfig = object;
```

## Example

```typescript
await instance.setCustomActions({
  contextMenu: {
    file: [
      { key: "export", label: "Export to CRM" },
    ],
    folder: [
      { key: "share", label: "Share folder" },
    ],
  },
});
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `contextMenu`? | [`TCustomContextMenuActions`](TCustomContextMenuActions.md) | Context menu actions grouped by entity type. See [TCustomContextMenuActions](TCustomContextMenuActions.md). |

</APITable>
