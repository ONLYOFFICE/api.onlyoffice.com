---
sidebar_position: -1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 适用于桌面编辑器的插件

若要为 ONLYOFFICE 桌面编辑器开发插件，请按照以下说明操作。

1. 在您的计算机上创建一个文件夹，并将 [index.html](../../fundamentals/configuration/entry-point.md) 和 [config.json](../../fundamentals/configuration/configuration.md) 文件放入其中。

2. 将插件文件夹中的所有插件文件打包为 `zip` 压缩包，并将扩展名更改为 `.plugin`（插件文件和子文件夹必须都位于压缩包的根目录）。

3. [通过插件管理器](../installing-and-testing/desktop-editors-installation.md#adding-plugins-through-the-plugin-manager)安装插件。

   插件将出现在 `sdkjs-plugins` 目录中。该文件夹的路径取决于您使用的操作系统：

   <Tabs>
      <TabItem value="win" label="Windows">
            ``` bash
            C:\Users\<username>\AppData\Local\ONLYOFFICE\DesktopEditors\data\sdkjs-plugins\
            ```
      </TabItem>
      <TabItem value="mac" label="macOS">
            ``` bash
            ~/Library/Application\ Support/asc.onlyoffice.ONLYOFFICE/data/sdkjs-plugins/
            ```
      </TabItem>
      <TabItem value="lin" label="Linux">
            ``` bash
            home/<username>/.local/share/onlyoffice/desktopeditors/sdkjs-plugins/
            ```
      </TabItem>
   </Tabs>
   
   插件的 **GUID** 将作为文件夹名称。例如：`{07FD8DFA-DFE0-4089-AL24-0730933CC80A}`。

   ![Sdkjs-plugins 文件夹](/assets/images/plugins/sdkjs-plugins-folder.png)

   你可以编辑插件并重新加载以查看更改。
