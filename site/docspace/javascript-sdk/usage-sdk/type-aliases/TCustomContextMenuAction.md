---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TCustomContextMenuAction

A custom context menu action registered via [SDKInstance.setCustomActions](../classes/SDKInstance.md#setcustomactions).
Displayed in the file/folder context menu in [SDKMode.Forms](../enumerations/SDKMode.md#Forms).

```ts
type TCustomContextMenuAction = object;
```

## Example

```typescript
const action: TCustomContextMenuAction = {
  key: "send-to-crm",
  label: "Send to CRM",
  icon: "https://example.com/icon.svg",
  section: ["completed-forms"],
};
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `icon`? | `string` | URL of the action icon. Optional. |
| `key` | `string` | Unique action identifier. Returned in [TFrameEvents.onCustomAction](TFrameEvents.md#onCustomAction). |
| `label` | `string` | Display label in the context menu. |
| `section`? | [`TFormsSection`](TFormsSection.md)[] | Sections where this action is visible. If omitted, shown in all sections. |

</APITable>
