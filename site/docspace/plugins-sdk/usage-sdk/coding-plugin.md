---
sidebar_position: -4
---

# Coding plugin

Develop a plugin. Follow the plugin structure described [here](plugin-structure.md).

- Write code for each [plugin type](coding-plugin/interfaces/plugins/index.md) using the corresponding variables, methods and [items](coding-plugin/interfaces/items/index.md). Put the scripts into the *src* folder. Specify the required [Plugin](coding-plugin/interfaces/plugins/IPlugin.md) interface for each plugin to be embedded in the portal:

  - [context menu](coding-plugin/interfaces/plugins/IContextMenuPlugin.md)
  - [info panel](coding-plugin/interfaces/plugins/IInfoPanelPlugin.md)
  - [main button](coding-plugin/interfaces/plugins/IMainButtonPlugin.md)
  - [article button](coding-plugin/interfaces/plugins/IArticleButtonPlugin.md)
  - [article navigation](coding-plugin/interfaces/plugins/IArticleNavigationPlugin.md)

  ![Plugin structure](/assets/images/docspace/plugin-structure.png#gh-light-mode-only)![Plugin structure](/assets/images/docspace/plugin-structure.dark.png#gh-dark-mode-only)

- Specify [plugin messages](coding-plugin/interfaces/utils.md) that will be returned by the items. Use the appropriate [events](coding-plugin/enums/Actions.md) that will be processed on the portal side.

- Learn which [plugin components](coding-plugin/interfaces/components/index.md) can be used for the DocSpace plugin interface and add them to your scripts. You can also pass a React component through the `component` or `dialogBodyComponent` property instead of a declarative [IBox](coding-plugin/interfaces/components/IBox.md) tree.

## React components

An item can render a React component instead of a declarative [IBox](coding-plugin/interfaces/components/IBox.md) tree. Pass the component through:

- `component` on [IInfoPanelItem](coding-plugin/interfaces/items/IInfoPanelItem.md), [IArticleButtonItem](coding-plugin/interfaces/items/IArticleButtonItem.md), [IArticleNavigationItem](coding-plugin/interfaces/items/IArticleNavigationItem.md), [IMediaViewer](coding-plugin/interfaces/components/IMediaViewer.md), and [ISettings](coding-plugin/interfaces/settings/ISettings.md)
- `dialogBodyComponent` on [IModalDialog](coding-plugin/interfaces/components/IModalDialog.md)

The component is rendered inside the DocSpace application tree. Import the hooks from *@onlyoffice/docspace-plugin-sdk/react*:

``` tsx
import {
  usePluginAPI,
  usePluginActions,
  usePluginSettings,
  useCurrentFile,
  useCurrentUser,
  usePluginRuntime,
} from "@onlyoffice/docspace-plugin-sdk/react";
```

| Hook | Description |
| --- | --- |
| `usePluginAPI` | A typed HTTP client scoped to the current portal. Authentication is applied automatically. |
| `usePluginActions` | Portal-side UI actions such as toasts, modals, navigation, and item updates. |
| `usePluginSettings` | Loads, saves, and controls the Save button of the plugin settings dialog. |
| `useCurrentFile` | Metadata of the file, folder, or room currently selected in the DocSpace UI, or `null`. |
| `useCurrentUser` | The profile of the authenticated user, or `null` while it is loading. |
| `usePluginRuntime` | The full plugin runtime. Prefer the focused hooks when you only need one slice. |

The `withPluginRuntime` HOC (higher-order component) is used by the DocSpace client to inject the runtime. Plugin authors do not need to call it or use it in their code.

*`react`* is an optional peer dependency of the SDK (version 19 or higher). Plugins that do not use React components do not need it.

`react`, `react-dom`, and *@onlyoffice/docspace-plugin-sdk/react* must stay out of the plugin bundle — DocSpace supplies them at load time. For the build configuration, see [building a plugin](building-plugin.md).

Code samples are available at [GitHub](https://github.com/ONLYOFFICE/docspace-plugins).
