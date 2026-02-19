---
sidebar_position: -2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 添加插件

**ONLYOFFICE 桌面编辑器** 允许开发者通过插件添加与 OOXML 格式无直接关联的特定功能。您可以使用 [ONLYOFFICE 应用目录](https://www.onlyoffice.com/app-directory/en) 中的现成插件，也可以参考我们的 [插件和宏 API 文档](../../plugin-and-macros/structure/getting-started.md) 创建自己的插件。

添加插件有两种方式：通过插件管理器和通过插件文件夹。

## 通过插件管理器添加插件

从 7.4 版本开始，您可以从 **ONLYOFFICE 插件市场** 下载现成的插件。

### 选项 1：使用安装按钮（需要互联网连接）

按照以下步骤通过插件管理器向编辑器添加插件：

1. 打开 **插件** 选项卡。
2. 点击 **插件管理器**。
3. 找到所需插件并点击 **安装**。

![插件管理器](/assets/images/plugins/desktop-plugin-manager.png)

### 选项 2：上传插件归档文件（无需互联网连接）

如果您想添加自己的插件，即使处于离线状态，也可以手动进行：

1. 将插件文件夹中的所有 [插件文件](../../plugin-and-macros/structure/configuration/configuration.md) 打包成 **zip** 归档文件，并将其扩展名改为 *.plugin*（所有插件文件和子文件夹必须位于归档文件的根目录）。

   > 如果您从 [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins) 下载插件，请先解压插件文件夹，然后仅归档其中的元素。

2. 在 **插件** 选项卡上打开 **插件管理器**。

3. 进入 **我的插件** 选项卡，点击 **手动安装插件** 按钮。

4. 选择您创建的归档文件并点击 **打开**。

![手动安装插件](/assets/images/plugins/install-manually.png)

该插件将添加到已打开的编辑器以及之后打开的所有编辑器中，并显示在 **插件** 选项卡内。

## 通过插件文件夹添加插件

**步骤 1.** 在 *sdkjs-plugins* 目录中创建一个新文件夹。该文件夹的路径取决于您使用的操作系统：

<Tabs>
  <TabItem value="win" label="Windows">
    ``` bash
    %UserProfile%\AppData\Local\ONLYOFFICE\DesktopEditors\data\sdkjs-plugins
    ```
  </TabItem>
  <TabItem value="mac" label="macOS">
    ``` bash
    ~/Library/Application\ Support/asc.onlyoffice.ONLYOFFICE/data/sdkjs-plugins
    ```
  </TabItem>
  <TabItem value="lin" label="Linux">
    ``` bash
    ~/.local/share/onlyoffice/desktopeditors/sdkjs-plugins
    ```
  </TabItem>
</Tabs>

**步骤 2.** 使用插件的 **GUID** 作为文件夹名称。您可以在 *config.json* 文件中找到插件的 GUID。

例如，对于 **扩展评论** 插件，*guid* 参数如下所示：

``` json
{
  "name": "Extended comments",
  "guid": "asc.{91EAC419-EF8B-440C-A960-B451C7DF3A37}"
}
```

因此，该插件的文件夹名称将是 *\{91EAC419-EF8B-440C-A960-B451C7DF3A37\}*。

**步骤 3.** 将所有插件文件放入此文件夹：

![插件文件夹](/assets/images/desktop/plugins_folder.png)

**步骤 4.** 启动 ONLYOFFICE 桌面编辑器。如果一切操作正确，插件将显示在 **插件** 选项卡中：

![扩展评论](/assets/images/desktop/extended_comments.png)

## 从 ONLYOFFICE 桌面编辑器中移除插件

要卸载新添加的插件，请按以下方式操作：

1. 打开 **插件** 选项卡。
2. 进入 **插件管理器**。
3. 点击相应插件下方的 **移除** 按钮。

> 此选项不适用于默认插件和通过插件文件夹添加的插件。

如果需要卸载默认插件，请进入 *sdkjs-plugins* 文件夹并从此目录中删除相应的插件文件夹。

> 请注意，在 macOS 上从 ONLYOFFICE 桌面编辑器中删除默认插件会破坏软件包的完整性，并可能导致应用程序崩溃。请谨慎操作，除非绝对必要，否则不要这样做。

下表包含默认插件的 GUID，方便您查找：

## 默认插件的 GUID

| 插件名称       | GUID                                      |
| -------------- | ----------------------------------------- |
| 代码高亮       | \{BE5CBF95-C0AD-4842-B157-AC40FEDD9841\} |
| Mendeley       | \{BE5CBF95-C0AD-4842-B157-AC40FEDD9441\} |
| OCR            | \{440EBF13-9B19-4BD8-8621-05200E58140B\} |
| 照片编辑器     | \{07FD8DFA-DFE0-4089-AL24-0730933CC80A\} |
| 语音           | \{D71C2EF0-F15B-47C7-80E9-86D671F9C595\} |
| 同义词词典     | \{BE5CBF95-C0AD-4842-B157-AC40FEDD9840\} |
| 翻译器         | \{7327FC95-16DA-41D9-9AF2-0E7F449F6800\} |
| YouTube        | \{38E022EA-AD92-45FC-B22B-49DF39746DB4\} |
| Zotero         | \{BFC5D5C6-89DE-4168-9565-ABD8D1E48711\} |
| 发送           | \{B509123E-6335-40BD-B965-91EB799346E3\} |

> 请注意，应用程序更新后，默认插件会重新出现，您需要再次卸载它们。
