---
sidebar_position: -3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ONLYOFFICE 桌面编辑器

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="bHTia-F0K3w"/>
```

添加插件有两种方式：通过插件管理器或通过插件文件夹。

## 通过插件管理器添加插件 {#adding-plugins-through-the-plugin-manager}

从 7.4 版本开始，你可以从 **ONLYOFFICE 插件市场**下载可直接使用的插件。

### 选项 1：使用安装按钮（需要联网）

按照以下步骤，通过插件管理器将插件添加到编辑器：

1. 打开**插件**选项卡。
2. 点击**插件管理器**。
3. 找到你需要的插件并点击**安装**。

![插件管理器](/assets/images/plugins/desktop-plugin-manager.png)

### 选项 2：上传插件压缩包（无需联网）

即使处于离线状态，也可以手动添加您自己的插件：

1. 将所有[插件文件](../../structure/configuration/configuration.md)打包为一个 **zip** 压缩包，并将其扩展名改为 .plugin（所有插件文件和子文件夹必须位于压缩包的根目录）。

   > 如果您是从 [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins) 下载的插件，请先解压插件文件夹，然后仅对其中的元素进行压缩。

2. 打开**插件**选项卡中的**插件管理器**。

3. 转到**我的插件**标签页，点击**手动安装插件**按钮。

4. 选择你创建的压缩包并点击**打开**。

![手动安装插件](/assets/images/plugins/install-manually.png)

插件将被添加到当前已打开的编辑器以及之后打开的所有编辑器中，并显示在**插件**选项卡中。

## 通过插件文件夹添加插件

**步骤 1.** 在 sdkjs-plugins 目录中创建一个新文件夹。该路径取决于您使用的操作系统：

<Tabs>
  <TabItem value="win" label="Windows">
      ``` bash
      %ProgramFiles%\ONLYOFFICE\DesktopEditors\editors\sdkjs-plugins\
      ```
  </TabItem>
  <TabItem value="mac" label="macOS">
      ``` bash
      ~/Library/Application Support/asc.onlyoffice.ONLYOFFICE/data/sdkjs-plugins/
      ```
  </TabItem>
  <TabItem value="lin" label="Linux">
      ``` bash
      /opt/onlyoffice/desktopeditors/editors/sdkjs-plugins/
      ```
  </TabItem>
</Tabs>

**步骤 2.** 使用插件的 **GUID** 作为文件夹名称。你可以在 config.json 文件中找到插件的 GUID。

例如，对于**扩展评论**插件，其 guid 参数如下所示：

``` json
{
  "name": "Extended comments",
  "guid": "asc.{91EAC419-EF8B-440C-A960-B451C7DF3A37}"
}
```

因此，该插件的文件夹名称为 *\{91EAC419-EF8B-440C-A960-B451C7DF3A37\}*。

**步骤 3.** 将所有插件文件放入此文件夹中：

![插件文件夹](/assets/images/plugins/plugins_folder.png)

**步骤 4.** 启动 [ONLYOFFICE 桌面编辑器](../../../desktop-editors/get-started/overview.md)。如果一切设置正确，插件将出现在**插件**选项卡中：

![扩展评论](/assets/images/plugins/extended_comments.png)

## 从 ONLYOFFICE 桌面编辑器中移除插件

若要卸载新添加的插件，请按以下步骤操作：

1. 打开**插件**选项卡。
2. 进入**插件管理器**。
3. 点击对应插件下的**移除**按钮。

> 默认插件和通过插件文件夹添加的插件无法通过此方法移除。

如果您需要卸载默认插件，请前往 sdkjs-plugins 文件夹并从中删除相应的插件文件夹。

> 请注意，从 macOS 上的 ONLYOFFICE 桌面编辑器中移除默认插件会破坏程序完整性，可能导致应用崩溃。若非绝对必要，请不要这样做。

下表列出了默认插件的 GUID，供您查找：

## 默认插件 GUID 列表

|                |                                        |
| -------------- | -------------------------------------- |
| 代码高亮        | \{BE5CBF95-C0AD-4842-B157-AC40FEDD9841\} |
| Mendeley       | \{BE5CBF95-C0AD-4842-B157-AC40FEDD9441\} |
| OCR            | \{440EBF13-9B19-4BD8-8621-05200E58140B\} |
| 图像编辑器      | \{07FD8DFA-DFE0-4089-AL24-0730933CC80A\} |
| 语音朗读        | \{D71C2EF0-F15B-47C7-80E9-86D671F9C595\} |
| 同义词词典      | \{BE5CBF95-C0AD-4842-B157-AC40FEDD9840\} |
| 翻译           | \{7327FC95-16DA-41D9-9AF2-0E7F449F6800\} |
| YouTube        | \{38E022EA-AD92-45FC-B22B-49DF39746DB4\} |
| Zotero         | \{BFC5D5C6-89DE-4168-9565-ABD8D1E48711\} |
| 发送文档        | \{B509123E-6335-40BD-B965-91EB799346E3\} |

> 请注意，更新应用后默认插件将再次出现，你需要重新卸载它们。
