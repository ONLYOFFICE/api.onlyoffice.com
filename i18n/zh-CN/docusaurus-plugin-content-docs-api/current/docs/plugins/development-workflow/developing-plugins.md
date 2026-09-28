---
sidebar_position: 2
description: 将正在开发的插件加载到 ONLYOFFICE Web 编辑器或桌面编辑器中，并在每次更改后重新加载。
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 开发插件

要开发插件，请在本地创建一个文件夹，并将 [index.html](../configuration/entry-point.md) 和 [config.json](../configuration/configuration.md) 文件放入其中。然后按照以下说明将该文件夹加载到编辑器中。

## Web 编辑器 {#web-editors}

1. 启用 CORS 提供插件文件夹服务。编辑器从其他源获取 `config.json` 和其他插件文件，因此服务器必须发送 CORS 标头。例如，在插件文件夹中运行以下命令：

   ```sh
   npx http-server -p 8080 --cors
   ```

2. 在 ONLYOFFICE Web 编辑器中打开任意文档。在浏览器开发者工具中，切换到 **Console** 选项卡，从下拉列表中选择 `frameEditor`，然后运行：

   ```js
   Asc.editor.installDeveloperPlugin("http://localhost:8080/config.json");
   ```

   ![开发者控制台](/assets/images/plugins/developer-console.png)

该命令返回 `true`，插件将显示在**插件**选项卡中。如果返回 `false`，则表示无法获取或解析 `config.json`。该命令不会报告原因。请检查 URL，然后参阅[插件文件被 CORS 阻止](debugging/common-errors-solutions.md#plugin-files-blocked-by-cors)。

如果您可以控制集成的编辑器配置，也可以让插件在每次打开文档时自动加载：将其 `config.json` 的 URL 添加到 [`editorConfig.plugins.pluginsData`](../../docs-api/usage-api/config/editor/plugins.md#pluginsdata) 中。请参阅[通过 config.json 添加插件](installing-and-testing/docs-on-premises-installation.md#adding-plugins-through-the-configjson-file)。

插件文件相对于 `config.json` 所在的文件夹加载。重新加载页面后，插件仍保持安装状态（在同一浏览器中且编辑器地址相同）。更改插件文件后，请重新加载页面以加载新版本。

## 桌面编辑器 {#desktop-editors}

1. 将所有插件文件打包为 `zip` 压缩包，并将扩展名更改为 `.plugin`。所有插件文件和子文件夹都必须位于压缩包的根目录。

2. [通过插件管理器](installing-and-testing/desktop-editors-installation.md#adding-plugins-through-the-plugin-manager)安装插件。插件将被复制到 `sdkjs-plugins` 目录中，文件夹名称为不带 `asc.` 前缀的插件 [`guid`](../configuration/configuration.md#guid)，例如 `{91EAC419-EF8B-440C-A960-B451C7DF3A37}`：

   <Tabs>
      <TabItem value="win" label="Windows">
         ```bash
         %LOCALAPPDATA%\ONLYOFFICE\DesktopEditors\data\sdkjs-plugins\
         ```
      </TabItem>
      <TabItem value="mac" label="macOS">
         ```bash
         ~/Library/Application\ Support/asc.onlyoffice.ONLYOFFICE/data/sdkjs-plugins/
         ```
      </TabItem>
      <TabItem value="lin" label="Linux">
         ```bash
         ~/.local/share/onlyoffice/desktopeditors/sdkjs-plugins/
         ```
      </TabItem>
   </Tabs>

   ![Sdkjs-plugins 文件夹](/assets/images/plugins/sdkjs-plugins-folder.png)

3. 为避免每次更改后都重新打包插件，请将该文件夹替换为指向开发文件夹的符号链接。关闭桌面编辑器，删除已安装的插件文件夹，然后创建链接：

   <Tabs>
      <TabItem value="win" label="Windows">
         以管理员身份运行：

         ```bash
         mklink /D "%LOCALAPPDATA%\ONLYOFFICE\DesktopEditors\data\sdkjs-plugins\{YOUR-GUID}" "C:\path\to\your\plugin"
         ```
      </TabItem>
      <TabItem value="mac" label="macOS">
         ```bash
         ln -s /path/to/your/plugin ~/Library/Application\ Support/asc.onlyoffice.ONLYOFFICE/data/sdkjs-plugins/{YOUR-GUID}
         ```
      </TabItem>
      <TabItem value="lin" label="Linux">
         ```bash
         ln -s /path/to/your/plugin ~/.local/share/onlyoffice/desktopeditors/sdkjs-plugins/{YOUR-GUID}
         ```
      </TabItem>
   </Tabs>

更改插件文件后，请重新打开文档以加载新版本。

## 后续步骤 {#next-steps}

要暂停并检查插件代码，请参阅[调试插件](debugging/debugging-plugins.md)。
