---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TCustomContextMenuActions

Custom context menu actions grouped by the entity type they apply to.
Passed via [TCustomActionsConfig.contextMenu](TCustomActionsConfig.md#contextMenu).

```ts
type TCustomContextMenuActions = object;
```

## Example

```typescript
const contextMenu: TCustomContextMenuActions = {
  file: [{ key: "export", label: "Export to CRM" }],
  folder: [{ key: "share", label: "Share folder" }],
};
await instance.setCustomActions({ contextMenu });
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `file`? | [`TCustomContextMenuAction`](TCustomContextMenuAction.md)[] | Custom actions for file context menus. |
| `folder`? | [`TCustomContextMenuAction`](TCustomContextMenuAction.md)[] | Custom actions for folder context menus. |

</APITable>
