---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TCustomActionEvent

Payload of [TFrameEvents.onCustomAction](TFrameEvents.md#onCustomAction).

```ts
type TCustomActionEvent = object;
```

## Example

```typescript
const events = {
  onCustomAction: ({ action, type, items }: TCustomActionEvent) => {
    if (action === "send" && type === "file") sendToCrm(items.map((file) => file.id));
  },
};
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `action` | `string` | Key of the clicked action. |
| `folderId`? | `number` \| `string` | Id of the folder or room the user is in. |
| `item`? | `object` | The item the context menu was opened for, in the form the data methods return it. Absent for `create` and for an action applied to a selection. |
| `items`? | `object`[] | Every selected item when the action was applied to a selection of items of one type, otherwise the single `item`. Absent for `create`. |
| `type` | `"file"` \| `"folder"` \| `"room"` \| `"create"` | What the action was applied to: `file`, `folder` or `room` from a context menu, `create` from the create menu. |

</APITable>
