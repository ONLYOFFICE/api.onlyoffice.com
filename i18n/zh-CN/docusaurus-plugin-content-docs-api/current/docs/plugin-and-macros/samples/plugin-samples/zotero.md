# Zotero

连接 Zotero 账户，用于根据所选引用格式指南将参考文献添加到文档中。

**插件类型：** 可视化，非系统插件。

**支持编辑器：** 文档。

**类似插件：** [Mendeley](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/mendeley)，[EasyBib](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/easybib)。

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="k1vyDlQbdEU" start={154} />
```

## 安装

默认包含于 ONLYOFFICE 企业版、社区版（文档 + 工作区）及 ONLYOFFICE 云端。

您也可以从 [ONLYOFFICE 应用目录](https://www.onlyoffice.com/app-directory/en/zotero)下载该插件，并根据[桌面](../../tutorials/installing/onlyoffice-desktop-editors.md)安装说明进行安装。

## 将 ONLYOFFICE 连接到 Zotero 账户

1. 在 **插件** 选项卡找到该插件。  
2. 登录您的 Zotero 账户。  
3. 点击插件窗口中的 **Zotero API 设置**链接。如果已登录，将可继续操作；若未登录，将显示错误信息，这时点击屏幕右上角的**登录**。  
4. 点击**创建新的私钥**。  
5. 填写**密钥描述**，确保勾选了 **允许库访问** 选项，然后点击**保存密钥**。  
6. 复制新创建的密钥，粘贴到插件界面的 **API 密钥**字段，并保存。

## 使用

1. 在**插件**选项卡找到该插件。  
2. 通过作者、标题或年份搜索所需的文献目录。  
3. 选择所有需要的文献来源。  
4. 从**样式**下拉菜单中选择引用格式。  
5. 点击**插入参考文献**按钮，文献列表将插入光标所在位置。

## 已知问题

对于启用了 SELinux 的 CentOS 用户，在将 src 文件夹复制到 sdkjs-plugins 后，插件可能因文件安全上下文变量导致无法工作。恢复权限请执行：

``` sh
sudo restorecon -Rv /var/www/onlyoffice/documentserver/sdkjs-plugins/
```

然后重启服务：

``` sh
sudo supervisorctl restart ds:docservice
```

## 插件结构

GitHub 仓库地址：[zotero](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/zotero)

1. *config.json*、*index.html* 和 *code.js*

2. 图标

3. *plugin_style.css* 用于调整插件样式

4. *translations* 文件夹包含俄语、德语、西班牙语、捷克语、意大利语、日语、荷兰语、葡萄牙语、中文和法语的翻译

5. *zotero.js* 用于访问用户的 Zotero 账户

6. 第三方服务：

   - [fetch-polyfill](https://github.com/github/fetch)：实现 Fetch 标准子集的项目，足以替代传统 Web 应用中大多数 XMLHttpRequest 用法。许可协议：[MIT](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/zotero/licenses/fetch-polyfill.license)  
   - [promise-polyfill](https://github.com/taylorhakes/promise-polyfill)：适用于浏览器和 Node 的轻量级 ES6 Promise polyfill。许可协议：[MIT](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/zotero/licenses/promise-polyfill.license)  
   - [url-polyfill](https://github.com/lifaon74/url-polyfill)：为 URL 和 URLSearchParams 提供符合最新 WHATWG 规范的 polyfill。许可协议：[MIT](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/zotero/licenses/url-polyfill.license)

## 配置

``` json
{
  "name": "Zotero",
  "nameLocale": {
    "fr": "Zotero",
    "es": "Zotero",
    "pt-BR": "Zotero",
    "de": "Zotero"
  },
  "guid": "asc.{BFC5D5C6-89DE-4168-9565-ABD8D1E48711}",
  "version": "1.0.3",
  "minVersion": "7.3.3",

  "variations": [
    {
      "description": "Create bibliographies in the required style using Zotero service.",
      "descriptionLocale": {
        "fr": "Créez des bibliographies dans le style nécessaire avec Zotero.",
        "es": "Cree bibliografías en el estilo requerido utilizando el servicio Zotero.",
        "pt-BR": "Crie bibliografias no estilo desejado usando o serviço Zotero.",
        "de": "Erstellen Sie Literaturverzeichnisse im gewünschten Stil mittels Zotero."
      },
      "url": "index.html",
      "icons": ["resources/light/icon.png", "resources/light/icon@2x.png"],
      "icons2": [
        {
          "style": "light",
                        
          "100%": {
            "normal": "resources/light/icon.png"
          },
          "125%": {
            "normal": "resources/light/icon@1.25x.png"
          },
          "150%": {
            "normal": "resources/light/icon@1.5x.png"
          },
          "175%": {
            "normal": "resources/light/icon@1.75x.png"
          },
          "200%": {
            "normal": "resources/light/icon@2x.png"
          }
        },
        {
          "style": "dark",
                        
          "100%": {
            "normal": "resources/dark/icon.png"
          },
          "125%": {
            "normal": "resources/dark/icon@1.25x.png"
          },
          "150%": {
            "normal": "resources/dark/icon@1.5x.png"
          },
          "175%": {
            "normal": "resources/dark/icon@1.75x.png"
          },
          "200%": {
            "normal": "resources/dark/icon@2x.png"
          }
        }
      ],
      "isViewer": false,
      "EditorsSupport": ["word"],
      "initDataType": "text",
      "initData": "",
      "isVisual": true,
      "isModal": false,
      "isInsideMode": true,
      "initOnSelectionChanged": false,
      "store": {
        "background": {
          "light": "#2D3037",
          "dark": "#2D3037"
        },
        "screenshots": [
          "resources/store/screenshots/screen_1.png",
          "resources/store/screenshots/screen_2.png"
        ],
        "icons": {
          "light": "resources/store/icons",
          "dark": "resources/store/icons"
        },
        "categories": ["specAbilities"]
      }
    }
  ]
}
```

## 方法和事件
  
- button
- init
- onTranslate
- [executeMethod ("PasteHtml")](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/PasteHtml.md)

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
