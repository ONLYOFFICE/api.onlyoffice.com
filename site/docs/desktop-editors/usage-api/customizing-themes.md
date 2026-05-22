---
sidebar_position: -2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Customizing themes

You can create custom interface themes for ONLYOFFICE Desktop Editors by adding JSON configuration files to the themes directory.

## Creating a theme file

Create a `.json` file with the following structure:

```json
{
  "name": "Amazing theme",
  "l10n": {
    "fr": "Thème incroyable",
    "de": "Geweldig thema"
  },
  "id": "theme-amazing",
  "type": "light",
  "colors": {
    "toolbar-header-document": "#446995",
    "toolbar-header-spreadsheet": "#40865c",
    "toolbar-header-presentation": "#aa5252",
    "border-color-shading": "rgba(0, 0, 0, 0.15)",
    ...
  }
}
```

For the full list of parameters and available color values, see the [color parameters](/docs/docs-api/get-started/how-it-works/customizing-themes#color-parameters) reference.

## Deploying the theme file

Place the `.json` file in the themes directory:

<Tabs>
    <TabItem value="windows" label="Windows">
        ``` bash
        copy C:\path\theme-file.json "%ProgramFiles%\ONLYOFFICE\DesktopEditors\web-apps\apps\common\main\resources\themes"
        ```
    </TabItem>
    <TabItem value="linux" label="Linux">
        ``` bash
        cp /path/theme-file.json /opt/onlyoffice/desktopeditors/web-apps/apps/common/main/resources/themes
        ```
    </TabItem>
    <TabItem value="macos" label="macOS">
        ``` bash
        cp /path/theme-file.json "/Applications/ONLYOFFICE.app/Contents/Resources/web-apps/apps/common/main/resources/themes"
        ```
    </TabItem>
</Tabs>

After placing the file, restart the application. The theme will be available in the **View** tab > **Interface Theme**.

## Applying custom themes via API

To apply a custom theme programmatically, use the `portal:uitheme` command of the [execCommand](./adding-a-dms-provider/execcommand.md) method:

```ts
window.AscDesktopEditor.execCommand("portal:uitheme", "theme-amazing");
```
