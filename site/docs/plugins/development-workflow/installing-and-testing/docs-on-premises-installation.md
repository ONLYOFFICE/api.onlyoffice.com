---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Docs (on-premises) installation

There are three ways to add plugins to ONLYOFFICE Docs on-premises: through the plugin manager, through the `sdkjs-plugins` folder, or through the `config.json` file.

## Adding plugins through the plugin manager for all users

Starting from version 7.4, the **pluginsmanager** utility can be used to manage plugins in ONLYOFFICE Docs on-premises. Commands are available for installing, removing, restoring, updating, and more. For example:

<Tabs>
  <TabItem value="docker" label="Docker, DEB, and RPM">
    ```bash
    cd /usr/bin
    ./documentserver-pluginsmanager.sh --directory="/var/www/onlyoffice/documentserver/sdkjs-plugins" --install="zotero"
    ```
  </TabItem>
  <TabItem value="win" label="Windows">
    ```bash
    cd "C:\Program Files\ONLYOFFICE\DocumentServer\bin"
    documentserver-pluginsmanager.bat --directory="%ProgramFiles%\ONLYOFFICE\DocumentServer\sdkjs-plugins" --install="zotero"
    ```
  </TabItem>
</Tabs>

:::info
The `--directory` parameter specifies the plugin folder location. The paths in the examples are default values — modify them if your installation uses a different location.
:::

A full list of server commands can be found in the [ONLYOFFICE Help Center](https://helpcenter.onlyoffice.com/ONLYOFFICE-Editors/editors-User-Guides/AllEditors/Plugin-manager.aspx#servercommands).

## Adding plugins through the plugin manager for a single user

Starting from version 7.2, you can download ready-to-use plugins from the **ONLYOFFICE Plugin Marketplace**:

1. Open the **Plugins** tab.
2. Click **Plugin Manager**.
3. Find the plugin you need and click **Install**.

![Plugins manager](/assets/images/plugins/plugin-manager.png#gh-light-mode-only)![Plugins manager](/assets/images/plugins/plugin-manager.dark.png#gh-dark-mode-only)

The plugin will be added to the currently open editor and all editors opened afterwards.

## Adding plugins through the sdkjs-plugins folder

Place the plugin folder in the ONLYOFFICE Docs `sdkjs-plugins` directory. The path depends on the operating system:

<Tabs>
  <TabItem value="lin" label="Linux">
    ```bash
    /var/www/onlyoffice/documentserver/sdkjs-plugins/
    ```
  </TabItem>
  <TabItem value="win" label="Windows">
    ```bash
    %ProgramFiles%\ONLYOFFICE\DocumentServer\sdkjs-plugins\
    ```
  </TabItem>
</Tabs>

The plugin will be available to all users of ONLYOFFICE Docs on-premises. In some cases a service restart is required.

For debugging, mount the shared `sdkjs-plugins` folder when starting ONLYOFFICE Docs:

```sh
docker run -itd -p 80:80 -v /absolute_path_to_work_dir:/var/www/onlyoffice/documentserver/sdkjs-plugins/plugin onlyoffice/documentserver-ee:latest
```

## Adding plugins through the config.json file

In the [ONLYOFFICE Docs config](../../../../docs-api/usage-api/config/editor/plugins), add the URL to your plugin's `config.json` file in the `plugins.pluginsData` parameter:

```ts
const config = {
  editorConfig: {
    plugins: {
      autostart: [
        "asc.{0616AE85-5DBE-4B6B-A0A9-455C4F1503AD}",
      ],
      pluginsData: [
        "https://example.com/plugin1/config.json",
      ],
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

where `example.com` is the server where your plugin files are hosted.

:::note
- The `index.html` file must always include the link to [plugins.js](https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.js).
- If a plugin is in both the `sdkjs-plugins` folder and `pluginsData`, the config entry takes precedence.
- If you host the plugin on S3 or Nginx, enable CORS from your document server address:
  ```nginx
  add_header 'Access-Control-Allow-Origin' '*';
  add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
  ```
:::

## Removing plugins

**Option 1.** Use the `pluginsmanager` utility (v7.4+):

<Tabs>
  <TabItem value="docker" label="Docker, DEB, and RPM">
    ```bash
    cd /usr/bin
    ./documentserver-pluginsmanager.sh --directory="/var/www/onlyoffice/documentserver/sdkjs-plugins" --remove="zotero"
    ```
  </TabItem>
  <TabItem value="win" label="Windows">
    ```bash
    cd "C:\Program Files\ONLYOFFICE\DocumentServer\bin"
    documentserver-pluginsmanager.bat --directory="%ProgramFiles%\ONLYOFFICE\DocumentServer\sdkjs-plugins" --remove="zotero"
    ```
  </TabItem>
</Tabs>

**Option 2.** Delete the plugin folder from the `sdkjs-plugins` directory (paths above).

**Option 3.** Remove the corresponding URL from `plugins.pluginsData` in the editor config.

**Option 4.** In the editor, go to **Plugins → Plugin Manager** and click **Remove**.

:::note
After an app update, default plugins reappear and must be uninstalled again.
:::

## Default plugin GUIDs

| Plugin         | GUID                                       |
| -------------- | ------------------------------------------ |
| Highlight code | \{BE5CBF95-C0AD-4842-B157-AC40FEDD9841\}   |
| Mendeley       | \{BE5CBF95-C0AD-4842-B157-AC40FEDD9441\}   |
| OCR            | \{440EBF13-9B19-4BD8-8621-05200E58140B\}   |
| Photo editor   | \{07FD8DFA-DFE0-4089-A124-0730933CC80A\}   |
| Speech         | \{D71C2EF0-F15B-47C7-80E9-86D671F9C595\}   |
| Thesaurus      | \{BE5CBF95-C0AD-4842-B157-AC40FEDD9840\}   |
| Translator     | \{7327FC95-16DA-41D9-9AF2-0E7F449F6800\}   |
| YouTube        | \{38E022EA-AD92-45FC-B22B-49DF39746DB4\}   |
| Zotero         | \{BFC5D5C6-89DE-4168-9565-ABD8D1E48711\}   |

## Additional resources

- [For web editors](../developing/for-web-editors.md) — Development workflow
- [Test environment setup](./test-environment-setup.md)
