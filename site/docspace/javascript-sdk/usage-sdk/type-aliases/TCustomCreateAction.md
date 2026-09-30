---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TCustomCreateAction

A custom item of the create ("+") menu. Clicking it fires [TFrameEvents.onCustomAction](TFrameEvents.md#onCustomAction)
with `type: "create"` and the id of the folder the user is in. In [SDKMode.Manager](../enumerations/SDKMode.md#Manager) the create
menu is the **New** button of the filter toolbar on desktop, shown with [TFrameConfig.showFilter](TFrameConfig.md#showFilter),
and the floating create button on mobile devices; the rooms list has no create menu, its button creates a room.

```ts
type TCustomCreateAction = object;
```

## Example

```typescript
const action: TCustomCreateAction = {
  key: "upload-from-crm",
  label: "Upload from CRM",
  section: ["my-documents"],
};
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `icon`? | `string` | URL of the action icon. The portal's content security policy must allow images from its origin. |
| `key` | `string` | Unique action identifier. Returned as `action` in [TCustomActionEvent](TCustomActionEvent.md). |
| `label` | `string` | Display label in the create menu. |
| `section`? | [`TCustomActionSection`](TCustomActionSection.md)[] | Sections where the action is shown. If omitted, it is shown in every section that has a create menu. |

</APITable>
