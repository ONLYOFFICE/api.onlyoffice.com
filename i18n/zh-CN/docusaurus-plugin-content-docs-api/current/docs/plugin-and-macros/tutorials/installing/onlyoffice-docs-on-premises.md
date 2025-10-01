---
sidebar_position: -2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ONLYOFFICE 文档本地部署版

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="R7gvhLvGL44"/>
```

可以通过以下三种方式添加插件：sdkjs-plugins 文件夹、config.json 文件或插件管理器。

## 通过 sdkjs-plugins 文件夹添加插件 {#adding-plugins-through-the-plugin-manager-for-all-users}

将插件代码文件夹放入 **ONLYOFFICE 文档**指定路径中，路径依操作系统而异：

<Tabs>
  <TabItem value="win" label="Windows">
      ``` bash
      %ProgramFiles%\ONLYOFFICE\DocumentServer\sdkjs-plugins\
      ```
  </TabItem>
  <TabItem value="lin" label="Linux">
      ``` bash
      /var/www/onlyoffice/documentserver/sdkjs-plugins/
      ```
  </TabItem>
</Tabs>

插件将对 **ONLYOFFICE 文档部署版**的所有用户可见。[某些情况下](https://nodejs.org/docs/latest/api/fs.html#fs_availability)，可能需要重启服务。

调试时可使用共享 sdkjs-plugins 文件夹启动 ONLYOFFICE 文档：

``` sh
docker run -itd -p 80:80 -v /absolutly_path_to_work_dir:/var/www/onlyoffice/documentserver/sdkjs-plugins/plugin onlyoffice/documentserver-ee:latest
```

## 通过 config.json 添加插件

在 [ONLYOFFICE 文档配置](../../../docs-api/usage-api/config/editor/plugins.md)中，将插件的 config.json 相对路径添加到 plugins.pluginsData 参数中：

``` ts
const config = {
  editorConfig: {
    plugins: {
      autostart: [
        "asc.{0616AE85-5DBE-4B6B-A0A9-455C4F1503AD}",
        "asc.{FFE1F462-1EA2-4391-990D-4CC84940B754}",
      ],
      pluginsData: [
        "https://example.com/plugin1/config.json",
        "https://example.com/plugin2/config.json",
      ],
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

其中 **example.com** 是安装了文档管理器和文档存储服务，以及放置插件的服务器的名称。请参阅[工作原理](../../../docs-api/get-started/how-it-works/how-it-works.md)部分，以了解有关 ONLYOFFICE 文档客户端与服务器交互的更多信息。

`https://example.com/plugin1/config.json` 是插件的路径。

如果配置中已经有一个测试示例，请将 /etc/onlyoffice/documentserver-example/local.json 中的相关行替换为所需插件配置的路径。

有关在哪里可以找到配置以及可以在那里进行哪些更改的更多信息，请参阅 [ONLYOFFICE 文档 API](../../../docs-api/usage-api/config/editor/plugins.md) 文档。

### 注意事项

- 请确保 index.html 中包含对 [plugins.js](https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.js) 的引用。不要忘记将该文件添加到插件文件夹中。
- 如果插件同时存在于文件夹中并在配置文件中指定，则优先使用配置文件中指定的插件。
- 如果您希望将插件上传到 S3 或 Nginx 服务器，您需要允许来自文档服务器地址的跨域请求。或者，你也可以直接允许所有人使用你的插件：

``` sh
add_header 'Access-Control-Allow-Origin' '*';
add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
```

## 通过插件管理器为单个用户添加插件 {#adding-plugins-through-the-plugin-manager-for-a-single-user}

从 7.2 版本开始，您可以从 **ONLYOFFICE 插件市场**下载现成的插件。

按照以下步骤，使用插件管理器将插件添加到编辑器中：

1. 打开**插件**选项卡。  
2. 点击**插件管理器**。  
3. 找到你需要的插件并点击**安装**。

![插件管理器](/assets/images/plugins/plugin-manager.png)

插件将添加到当前已打开的编辑器中，并会显示在**插件**选项卡中，后续打开的所有编辑器也会显示该插件。

## 通过插件管理器为所有用户添加插件

从 7.4 版本开始，可以使用**插件管理器**工具管理 ONLYOFFICE 文档本地部署版中的插件。该工具支持安装、删除、恢复、更新等操作。例如：

<Tabs>
  <TabItem value="docker" label="Docker, DEB, and RPM">
      ``` bash
      cd /var/www/onlyoffice/documentserver/server/tools/
      ./pluginsmanager --directory="/var/www/onlyoffice/documentserver/sdkjs-plugins" --install="zotero"
      ```
  </TabItem>
  <TabItem value="win" label="Windows">
      ``` bash
      cd C:\Program Files\ONLYOFFICE\DocumentServer\bin
      documentserver-pluginsmanager.bat --install="zotero"
      ```
  </TabItem>
</Tabs>

示例中的路径为默认值，如有需要，请根据实际情况修改。

完整的服务器命令列表可参考[此处](https://helpcenter.onlyoffice.com/ONLYOFFICE-Editors/editors-User-Guides/AllEditors/Plugin-manager.aspx#servercommands)。

## 从 ONLYOFFICE 文档本地部署版中移除插件

您可以通过以下四种方式卸载插件：

**选项 1.** 从 7.4 版本开始，您可以使用**插件管理器**工具：

<Tabs>
  <TabItem value="docker" label="Docker, DEB, and RPM">
      ``` bash
      cd /var/www/onlyoffice/documentserver/server/tools/
      ./pluginsmanager --directory="/var/www/onlyoffice/documentserver/sdkjs-plugins" --remove="zotero"
      ```
  </TabItem>
  <TabItem value="win" label="Windows">
      ``` bash
      cd C:\Program Files\ONLYOFFICE\DocumentServer\bin
      documentserver-pluginsmanager.bat --remove="zotero"
      ```
  </TabItem>
</Tabs>

示例中的路径为默认路径，如有需要，请进行相应修改。

**选项 2.** 进入 sdkjs-plugins 文件夹，并从该目录中删除对应的插件文件夹。

该文件夹的路径取决于您所使用的操作系统：

<Tabs>
  <TabItem value="win" label="Windows">
      ``` bash
      %ProgramFiles%\ONLYOFFICE\DocumentServer\sdkjs-plugins\
      ```
  </TabItem>
  <TabItem value="lin" label="Linux">
      ``` bash
      /var/www/onlyoffice/documentserver/sdkjs-plugins/
      ```
  </TabItem>
</Tabs>

**选项 3.** 通过移除对应的插件，编辑 [ONLYOFFICE 文档配置文件](../../../docs-api/usage-api/config/editor/plugins.md)。编辑器下次启动后，该插件将对所有门户用户不可用：

``` ts
const config = {
  editorConfig: {
    plugins: {
      autostart: [
        "asc.{0616AE85-5DBE-4B6B-A0A9-455C4F1503AD}",
        "asc.{FFE1F462-1EA2-4391-990D-4CC84940B754}",
      ],
      pluginsData: [
        "https://example.com/plugin1/config.json",
        "https://example.com/plugin2/config.json",
      ],
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

这些插件将对所有用户移除。[在某些情况下](https://nodejs.org/docs/latest/api/fs.html#fs_availability)，需要重启服务以生效。

下表列出了默认插件的 GUID，方便查找和管理：

## 默认插件的 GUID

|                |                                        |
| -------------- | -------------------------------------- |
| 代码高亮        | \{BE5CBF95-C0AD-4842-B157-AC40FEDD9841\} |
| Mendeley       | \{BE5CBF95-C0AD-4842-B157-AC40FEDD9441\} |
| OCR            | \{440EBF13-9B19-4BD8-8621-05200E58140B\} |
| 图片编辑器      | \{07FD8DFA-DFE0-4089-AL24-0730933CC80A\} |
| 语音合成        | \{D71C2EF0-F15B-47C7-80E9-86D671F9C595\} |
| 同义词词典      | \{BE5CBF95-C0AD-4842-B157-AC40FEDD9840\} |
| 翻译           | \{7327FC95-16DA-41D9-9AF2-0E7F449F6800\} |
| YouTube        | \{38E022EA-AD92-45FC-B22B-49DF39746DB4\} |
| Zotero         | \{BFC5D5C6-89DE-4168-9565-ABD8D1E48711\} |

> 注意：在更新应用后，默认插件将会重新出现，您需要再次手动卸载。

**选项 4.** 若要卸载新添加的插件，请按照以下步骤操作：

1. 打开**插件**选项卡。
2. 进入**插件管理器**。
3. 点击对应插件下方的**移除**按钮。
