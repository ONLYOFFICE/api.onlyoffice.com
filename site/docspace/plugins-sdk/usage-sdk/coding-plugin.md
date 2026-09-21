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

The component is rendered inside the DocSpace application tree and reaches the portal through the hooks from *@onlyoffice/docspace-plugin-sdk/react*:

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
| `usePluginAPI` | A typed HTTP client scoped to the current portal. Authentication is applied automatically. See [PluginAPIClient](#pluginapiclient). |
| `usePluginActions` | Portal-side UI actions such as toasts, modals, navigation, and item updates. When calling `openInfoPanel`, always pass the tab argument. |
| `usePluginSettings` | Loads, saves, and controls the Save button of the plugin settings side panel. |
| `useCurrentFile` | Metadata of the file, folder, or room currently selected in the DocSpace UI, or `null` on surfaces without a selection (article navigation, the settings panel, a dialog opened from a class-side callback). |
| `useCurrentUser` | The profile of the authenticated user, or `null` while it is loading. |
| `usePluginRuntime` | The full plugin runtime. `currentFile` is `null` on surfaces without a selection (article navigation, the settings panel, a dialog opened from a class-side callback). Prefer the focused hooks when you only need one slice. |

`PluginSettingsClient.setSaveButton` (from `usePluginSettings`) should keep Save disabled until the user has changed something. Do not enable it based only on form validity.

### PluginAPIClient

`usePluginAPI` returns a `PluginAPIClient` scoped to the current portal. Requests go through the portal HTTP layer, so the plugin does not handle credentials. The base URL already includes the API prefix — use paths such as `"/files/@my"`, not `"/api/2.0/files/@my"`.

Absolute paths and paths that contain `..` are rejected before anything is sent. The rejection is a `PluginApiError` with `code: "INVALID_PATH"`.

Each helper resolves to the payload itself. The portal `response` envelope is unwrapped. A list endpoint that reports a total resolves to `{ total, items }`. Failures reject with `PluginApiError`.

| Method | Description |
| --- | --- |
| `request(options)` | Full request: `method`, `path`, `data`, and query `params` together. |
| `get(path, params?, options?)` | GET request. `params` become the query string. |
| `post(path, data?, options?)` | POST request with a JSON body. |
| `put(path, data?, options?)` | PUT request with a JSON body. |
| `patch(path, data?, options?)` | PATCH request with a JSON body. |
| `delete(path, data?, options?)` | DELETE request. A body is sent when the portal endpoint requires one. |

`options` (`PluginApiOptions`) on every helper:

| Option | Description |
| --- | --- |
| `params` | Query string parameters. `undefined` and `null` values are dropped. |
| `headers` | Extra request headers. Authentication headers are added by DocSpace and cannot be overridden. |
| `signal` | `AbortSignal` to cancel the request (for example from a `useEffect` cleanup). An aborted request rejects with `code: "ABORTED"`. |

``` tsx
import { useEffect, useState } from "react";
import { usePluginAPI } from "@onlyoffice/docspace-plugin-sdk/react";

type MyDocuments = { files: { id: number; title: string }[] };

function FileList() {
  const api = usePluginAPI();
  const [files, setFiles] = useState<MyDocuments["files"]>([]);

  useEffect(() => {
    const controller = new AbortController();
    api
      .get<MyDocuments>("/files/@my", { count: 20 }, { signal: controller.signal })
      .then((folder) => setFiles(folder.files));
    return () => controller.abort();
  }, []);

  return <ul>{files.map((f) => <li key={f.id}>{f.title}</li>)}</ul>;
}
```

### PluginApiError

Every rejection from `PluginAPIClient` is a `PluginApiError`. Use `isPluginApiError` from *@onlyoffice/docspace-plugin-sdk/react* to narrow a `catch` value.

| Field | Description |
| --- | --- |
| `status` | HTTP status code, or `0` when the request never reached the portal. |
| `message` | Error message (the portal message when the portal sent one). |
| `details` | The error payload the portal sent, when it sent one. |
| `code` | `"ABORTED"`, `"NETWORK"`, or `"INVALID_PATH"` when there is no HTTP status to go by. |
| `request` | The method and path that failed, for example `"PUT /files/fileops/delete"`. |

``` ts
import { isPluginApiError } from "@onlyoffice/docspace-plugin-sdk/react";

try {
  await api.get(`/files/file/${id}`);
} catch (error) {
  if (isPluginApiError(error) && error.status === 404) return null;
  throw error;
}
```

The `withPluginRuntime` HOC (higher-order component) is used by the DocSpace client to inject the runtime. Plugin authors do not need to call it or use it in their code.

*`react`* is an optional peer dependency of the SDK (version 19 or higher). Plugins that do not use React components do not need it.

`react`, `react-dom`, and *@onlyoffice/docspace-plugin-sdk/react* must stay out of the plugin bundle — DocSpace supplies them at load time. For the build configuration, see [building a plugin](building-plugin.md).

Code samples are available at [GitHub](https://github.com/ONLYOFFICE/docspace-plugins).
