---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Desktop Editors installation

Download ONLYOFFICE Desktop Editors from [onlyoffice.com/download-desktop.aspx](https://www.onlyoffice.com/download-desktop.aspx) and run the installer for your platform.

## Adding a plugin for testing

### Option 1. Plugin Manager (recommended)

1. Open the **Plugins** tab.
2. Click **Plugin Manager → Available plugins**.
3. Click **Install plugin manually** and choose your `.plugin` archive.

### Option 2. Plugin folder

Place your plugin folder directly in the `sdkjs-plugins` directory:

<Tabs>
  <TabItem value="win" label="Windows">
    ```bash
    %ProgramFiles%\ONLYOFFICE\DesktopEditors\editors\sdkjs-plugins\
    ```
  </TabItem>
  <TabItem value="mac" label="macOS">
    ```bash
    /Applications/ONLYOFFICE.app/Contents/Resources/editors/sdkjs-plugins/
    ```
  </TabItem>
  <TabItem value="lin" label="Linux">
    ```bash
    /opt/onlyoffice/desktopeditors/editors/sdkjs-plugins/
    ```
  </TabItem>
</Tabs>

Use the plugin **GUID** from `config.json` as the folder name (e.g., `{91EAC419-EF8B-440C-A960-B451C7DF3A37}`). Restart Desktop Editors after placing the folder.

## Removing a plugin

1. Open **Plugins → Plugin Manager**.
2. Click **Remove** under the plugin.

:::note
Plugins added via the plugin folder must be removed manually by deleting the folder from `sdkjs-plugins`.
:::

## Additional resources

- [For desktop editors](../developing/for-desktop-editors.md) — Development workflow
- [Test environment setup](./test-environment-setup.md)
