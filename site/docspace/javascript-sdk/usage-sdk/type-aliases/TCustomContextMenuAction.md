---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TCustomContextMenuAction

A custom context menu item. Every condition that is set must hold for the item to be shown;
conditions on the host's own data are checked in [TFrameEvents.onCustomAction](TFrameEvents.md#onCustomAction).

```ts
type TCustomContextMenuAction = object;
```

## Example

```typescript
const action: TCustomContextMenuAction = {
  key: "send-to-crm",
  label: "Send to CRM",
  icon: "https://example.com/icon.svg",
  extensions: ["docx", "pdf"],
  requireSecurity: ["Download"],
};
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `extensions` | `string`[] | File extensions the action is shown for, with or without the leading dot, case-insensitive. Applies to file actions only. |
| `icon` | `string` | URL of the action icon, or a `data:` URI. The portal fetches an `.svg` URL and inlines it, so the icon host must answer cross-origin requests with `Access-Control-Allow-Origin` (as for [TFrameConfig.stylesUrl](TFrameConfig.md#stylesUrl)) and the portal's content security policy must allow the connection; any other image URL is loaded as an image and needs the policy to allow images from its origin. |
| `key` | `string` | Unique action identifier. Returned as `action` in [TCustomActionEvent](TCustomActionEvent.md). |
| `label` | `string` | Display label in the context menu. |
| `requireSecurity` | `string`[] | Access flags of the item's `security` object that must all be `true`, for example `["Download"]` or `["EditRoom"]`. |
| `roomTypes` | [`RoomType`](../enumerations/RoomType.md)[] | Room types the action is shown for. Applies to room actions only. See [RoomType](../enumerations/RoomType.md). |
| `section` | [`TCustomActionSection`](TCustomActionSection.md)[] | Sections where the action is shown. If omitted, it is shown in every section. |

</APITable>
