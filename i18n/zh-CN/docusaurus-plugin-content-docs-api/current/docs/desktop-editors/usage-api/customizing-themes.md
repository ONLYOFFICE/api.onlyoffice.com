---
sidebar_position: -2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 自定义主题

您可以通过将 JSON 配置文件添加到主题目录来为 ONLYOFFICE 桌面编辑器创建自定义界面主题。

## 创建主题文件

创建一个具有以下结构的 `.json` 文件：

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

有关完整的参数列表和可用颜色值，请参阅[颜色参数](/docs/docs-api/get-started/how-it-works/customizing-themes#color-parameters)参考。

## 部署主题文件

将 `.json` 文件放置到主题目录中：

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

放置文件后，请重新启动应用程序。主题将在 **视图** 选项卡 > **界面主题** 中可用。

## 通过 API 应用自定义主题

要以编程方式应用自定义主题，请使用 [execCommand](./adding-a-dms-provider/execcommand.md) 方法的 `portal:uitheme` 命令：

```ts
window.AscDesktopEditor.execCommand("portal:uitheme", "theme-amazing");
```
