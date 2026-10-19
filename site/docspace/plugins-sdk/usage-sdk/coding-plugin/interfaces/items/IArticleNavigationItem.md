---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/release/v4.0.0/src/interfaces/items/IArticleNavigationItem.ts
---

# IArticleNavigationItem

Describes a navigation item that will be embedded in the article sidebar as a first-class
navigation entry. When the user clicks the item, DocSpace navigates to a dedicated plugin
section page where the `component` is rendered.

Items are registered by a plugin implementing
[`IArticleNavigationPlugin`](../plugins/IArticleNavigationPlugin.md). After changing an
item through `updateArticleNavigationItem`, return an
[`IMessage`](../utils.md#imessage) with
[`Actions.updateArticleNavigationItems`](../../enums/Actions.md#updatearticlenavigationitems)
to apply the change to the sidebar.

:::info
The section page is a full portal page, not a panel. The component is
rendered inside the DocSpace application tree, so it inherits the portal theme.
See the [`article-navigation` sample](https://github.com/ONLYOFFICE/docspace-plugin-sdk/tree/master/samples/article-navigation)
for a working build configuration.
:::

## Examples

Navigation item with a React section

```tsx
import { useEffect, useState } from "react";
import { usePluginAPI } from "@onlyoffice/docspace-plugin-sdk/react";
import { IArticleNavigationItem, Section, UsersType } from "@onlyoffice/docspace-plugin-sdk";

type Room = { id: number; title: string };

function RoomsOverview() {
  const api = usePluginAPI();
  const [rooms, setRooms] = useState<Room[] | null>(null);

  useEffect(() => {
    api
      .get<{ folders: Room[] }>("/files/rooms")
      .then((rooms) => setRooms(rooms.folders));
  }, []);

  if (!rooms) return <p>Loading rooms…</p>;

  return (
    <div>
      <h1>Rooms overview</h1>
      <p>{rooms.length} rooms available.</p>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>{room.title}</li>
        ))}
      </ul>
    </div>
  );
}

const overviewItem: IArticleNavigationItem = {
  key: "my-plugin-overview",
  label: "Rooms overview",
  icon: "icon.svg",
  component: RoomsOverview,
  usersTypes: [UsersType.owner, UsersType.docSpaceAdmin],
  appears: [Section.Files]
};
```

Renaming the item from inside its own section

The component mutates the item through the plugin instance and then asks DocSpace
to redraw the sidebar with `Actions.updateArticleNavigationItems`.

```tsx
import { usePluginActions } from "@onlyoffice/docspace-plugin-sdk/react";
import { IArticleNavigationItem } from "@onlyoffice/docspace-plugin-sdk";

function CounterSection() {
  const { updateArticleNavigationItems } = usePluginActions();

  const bump = () => {
    visits += 1;
    plugin.updateArticleNavigationItem({ ...counterItem, label: `Visits (${visits})` });
    updateArticleNavigationItems();
  };

  return <button type="button" onClick={bump}>Count this visit</button>;
}

let visits = 0;

const counterItem: IArticleNavigationItem = {
  key: "my-plugin-counter",
  label: "Visits (0)",
  icon: "icon.svg",
  component: CounterSection
};
```

## Properties

import APITable from '@site/src/components/APITable/APITable';

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The unique item identifier used to recognize the item. It becomes a part of the plugin section URL, so it must be unique across all the installed plugins: two items sharing the same key override each other. |
| `label` | `string` | The text label displayed next to the icon when the sidebar is expanded. |
| `icon` | `string` | The item display icon. The icon image must be uploaded to the "assets" folder. Only the image name with the extension must be specified in this field. The required icon size is 20x20 px. Otherwise, it will be compressed to this size. |
| `component` | `ComponentType` | A React component rendered on the plugin section page when this navigation item is active. The component can use `usePluginActions`, `usePluginAPI` and other hooks from `@onlyoffice/docspace-plugin-sdk/react`, and owns its own loading state — fetch in a `useEffect` and render a placeholder until the data arrives. |
| `usersTypes?` | [`UsersType`](../../enums/UsersType.md)[] | The types of users who will see this navigation item. If omitted, the item is visible to all user types. |
| `devices?` | [`Devices`](../../enums/Devices.md)[] | The device types on which this navigation item is displayed. If omitted, the item is visible on all device types. |
| `appears?` | [`Section`](../../enums/Section.md)[] | The sections in which this navigation item is displayed. If omitted, the item is visible in all sections. |

</APITable>
