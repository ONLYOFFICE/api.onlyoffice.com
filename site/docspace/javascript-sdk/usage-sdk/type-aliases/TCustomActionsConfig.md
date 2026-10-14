---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TCustomActionsConfig

Custom actions of a frame, set with [TFrameConfig.customActions](TFrameConfig.md#customActions) or [SDKInstance.setCustomActions](../classes/SDKInstance.md#setcustomactions).

```ts
type TCustomActionsConfig = object;
```

## Example

```typescript
await instance.setCustomActions({
  contextMenu: {
    file: [{ key: "send", label: "Send to CRM" }],
    room: [{ key: "share-contacts", label: "Share to CRM contacts" }],
  },
  createMenu: [{ key: "upload-from-crm", label: "Upload from CRM" }],
});
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `contextMenu`? | [`TCustomContextMenuActions`](TCustomContextMenuActions.md) | Context menu actions grouped by entity type. See [TCustomContextMenuActions](TCustomContextMenuActions.md). |
| `createMenu`? | [`TCustomCreateAction`](TCustomCreateAction.md)[] | Items added to the create ("+") menu. Available in [SDKMode.Manager](../enumerations/SDKMode.md#Manager) and [SDKMode.Personal](../enumerations/SDKMode.md#Personal). |

</APITable>
