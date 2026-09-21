# IArticleButtonItem

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/items/IArticleButtonItem.ts#L87)

Describes a button item that will be embedded in the article sidebar.
Article button items are displayed as custom plugin components above the DevTools section.
A maximum of 5 items can be displayed across all plugins combined.
Each item occupies a fixed 32x32 px box, so only an icon fits — put the text in `title`.

Items are registered by a plugin implementing
[`IArticleButtonPlugin`](../plugins/IArticleButtonPlugin.md).

![articlebuttonitem](/assets/images/docspace/articlebuttonitem.png#gh-light-mode-only)![articlebuttonitem](/assets/images/docspace/articlebuttonitem.dark.png#gh-dark-mode-only)

## Examples

Article button item with a React component

```tsx
import { usePluginActions } from "@onlyoffice/docspace-plugin-sdk/react";
import { IArticleButtonItem, ToastType, UsersType } from "@onlyoffice/docspace-plugin-sdk";

function NotificationsButton() {
  const { showToast } = usePluginActions();

  return (
    <button
      type="button"
      onClick={() => showToast({ type: ToastType.info, title: "No new notifications" })}
    >
      Notifications
    </button>
  );
}

const notificationItem: IArticleButtonItem = {
  key: "notifications-item",
  component: NotificationsButton,
  usersTypes: [UsersType.owner, UsersType.docSpaceAdmin]
};
```

Article button item that loads its own state

The component owns its loading state, so no `onLoad` callback is needed:
fetch inside `useEffect` and render a placeholder until the data arrives.

```tsx
import { useEffect, useState } from "react";
import { usePluginAPI, usePluginActions } from "@onlyoffice/docspace-plugin-sdk/react";
import { IArticleButtonItem, Devices, UsersType } from "@onlyoffice/docspace-plugin-sdk";

function PendingInvitesButton() {
  const api = usePluginAPI();
  const { navigate } = usePluginActions();
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    api
      .get<{ total: number }>("/people/invites")
      .then((invites) => setCount(invites.total));
  }, []);

  if (count === null) return <span>…</span>;

  return (
    <button type="button" onClick={() => navigate("/accounts/people")}>
      Invites ({count})
    </button>
  );
}

const invitesItem: IArticleButtonItem = {
  key: "pending-invites-item",
  component: PendingInvitesButton,
  usersTypes: [UsersType.owner, UsersType.docSpaceAdmin],
  devices: [Devices.desktop, Devices.tablet]
};
```

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The unique item identifier used by the service to recognize the item |
| `component?` | `ComponentType` | A React component rendered as the article button item. The slot is a fixed 32x32 px box, so only an icon fits. Put the text in `title` (tooltip), not in a visible label. Use either `component` or `body`, not both. The component can use `usePluginActions`, `usePluginAPI` and other hooks from *@onlyoffice/docspace-plugin-sdk/react*. |
| `body?` | [`IBox`](../components/IBox.md) | **Deprecated.** Use `component` instead. The body of the article button item rendered via the IBox component tree. Use either `body` or `component`, not both. The slot is a fixed 32x32 px box, so only an icon fits. Put the text in `title` (tooltip), not in a visible label. |
| `onLoad?` | () => `Promise`\<\{ `body`: [`IBox`](../components/IBox.md); \}\> | **Deprecated.** Use a React component via `component` with `useEffect` for data loading instead. A function that is executed after the article button item is loaded. It returns a new body. If this functionality is not needed, the old body value is returned. |
| `usersTypes?` | [`UsersType`](../../enums/UsersType.md)[] | The types of users who will see the current button item in the article. Currently the following user types are available: owner, docSpaceAdmin, roomAdmin, collaborator, user. If this parameter is not specified, then the item will be displayed for all user types. |
| `devices?` | [`Devices`](../../enums/Devices.md)[] | The types of devices where the current button item will be displayed. At the moment the following device types are available: mobile, tablet, desktop. If this parameter is not specified, then the item will be displayed on all device types. |

```mdx-code-block
</APITable>
```
