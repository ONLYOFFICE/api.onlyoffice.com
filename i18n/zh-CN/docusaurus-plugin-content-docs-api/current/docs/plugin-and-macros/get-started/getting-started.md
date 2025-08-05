---
sidebar_position: -1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# 入门指南

让我们来看看如何构建一个最简单的 [Hello world](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/helloworld) 插件，使你点击按钮时会插入 *Hello World!* 短句。 

## 构建插件

1. 创建一个插件文件夹。请参考[此处](../structure/manifest/manifest.md)。 插件文件夹必须包含三个插件运行所必需的文件: [config.json](../structure/manifest/manifest.md)，[index.html](../structure/entry-point.md)，[pluginCode.js](../interacting-with-editors/overview/overview.md):

   ![结构](/assets/images/plugins/plugins-structure.png)

   <Tabs>
      <TabItem value="config" label="config.json">
        ``` json
        {
          "name": "hello world",
          "guid": "asc.{0616AE85-5DBE-4B6B-A0A9-455C4F1503AD}",
          "baseUrl": "",
          "variations": [
            {
              "description": "hello world",
              "url": "index.html",
              "icons": ["resources/img/icon.png", "resources/img/icon@2x.png"],
              "isViewer": false,
              "EditorsSupport": ["word"],
              "isVisual": false,
              "isModal": true,
              "isInsideMode": false,
              "initDataType": "none",
              "initData": "",
              "isUpdateOleOnResize": true,
              "buttons": []
            },
            {
              "description": "About",
              "url": "index_about.html",
              "icons": ["resources/img/icon.png", "resources/img/icon@2x.png"],
              "isViewer": false,
              "EditorsSupport": ["word"],
              "isVisual": true,
              "isModal": true,
              "isInsideMode": false,
              "initDataType": "none",
              "initData": "",
              "isUpdateOleOnResize": true,
              "buttons": [
                {
                  "text": "Ok",
                  "primary": true
                }
              ],

              "size": [392, 147]
            }
          ]
        }
        ```
      </TabItem>
      <TabItem value="html" label="index.html">
        ``` html
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8" />
          <title>Hello world</title>
          <script type="text/javascript" src="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.js"></script>
          <script type="text/javascript" src="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins-ui.js"></script>
          <link rel="stylesheet" href="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.css">
          <script type="text/javascript" src="scripts/helloworld.js"></script>
        </head>
        <body>
        </body>
        </html>
        ```
      </TabItem>
      <TabItem value="code" label="pluginCode.js">
        ``` ts
        // Example insert text into editors (different implementations)
        ((window) => {
          const text = "Hello world!"
          window.Asc.plugin.init = () => {
            const variant = 2

            switch (variant) {
            case 0:
              // serialize command as text
              let sScript = "var oDocument = Api.GetDocument();"
              sScript += "oParagraph = Api.CreateParagraph();"
              sScript += "oParagraph.AddText('Hello world!');"
              sScript += "oDocument.InsertContent([oParagraph]);"
              this.info.recalculate = true
              this.executeCommand("close", sScript)
              break
            case 1:
              // call command without external variables
              this.callCommand(() => {
                const oDocument = Api.GetDocument()
                const oParagraph = Api.CreateParagraph()
                oParagraph.AddText("Hello world!")
                oDocument.InsertContent([oParagraph])
              }, true)
              break
            case 2:
              // call command with external variables
              Asc.scope.text = text // export variable to plugin scope
              this.callCommand(() => {
                const oDocument = Api.GetDocument()
                const oParagraph = Api.CreateParagraph()
                oParagraph.AddText(Asc.scope.text) // or oParagraph.AddText(scope.text);
                oDocument.InsertContent([oParagraph])
              }, true)
              break
            default:
              break
            }
          }

          window.Asc.plugin.button = (id) => {}
        })(window)
        ```
      </TabItem>
   </Tabs>

   在编写插件代码时，使用插件的[方法](../interacting-with-editors/overview/how-to-call-methods.md)和[事件](../interacting-with-editors/overview/how-to-attach-events.md)。 例如，在 **Hello world** 插件中，我们使用了 `init` 和 `button` 事件，以及 `callCommand` 和 `executeMethod` 方法。

   阅读[自定义](../customization/context-menu.md)文章，了解插件在编辑器中如何显示：插件可以作为右键菜单项、工具栏按钮、窗口、左侧或右侧面板及输入助手显示。您可以根据插件用途选择插件显示方式，并按照说明进行自定义。
  
2. 将 ONLYOFFICE [样式表](../structure/styles.md)添加到 *index.html* 文件中，使你的插件符合 ONLYOFFICE 编辑器的界面风格：

``` html
<link rel="stylesheet" href="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.css">
```

3. 如有需要，可以[本地化](../structure/localization.md)插件。

4. 为你的插件创建一个详细的**关于**窗口。在其中添加插件的简要描述、版本、开发公司名称以及网站链接。请按照[此处](../structure/manifest/variations.md)的说明，在*config.json*文件中创建一个**关于**配置项。

   ![“关于”窗口](/assets/images/plugins/about-variation.png)

   别忘了为**关于**窗口创建 *index_about.html* 文件。

## 将插件连接到编辑器

### 连接到桌面编辑器

1. 将插件文件夹内的所有插件文件打包为一个 `zip` 压缩包并将其扩展名改为 `.plugin` (所有插件文件和子文件夹必须都位于压缩包根目录)。

2. [通过插件管理器](../tutorials/installing/onlyoffice-desktop-editors.md#adding-plugins-through-the-plugin-manager)安装插件。

3. 插件将显示在 *sdkjs-plugins* 目录中。该文件夹路径取决于您使用的操作系统：

   <Tabs>
      <TabItem value="win" label="Windows">
         ``` bash
         C:\Users\<username>\AppData\Local\ONLYOFFICE\DesktopEditors\data\sdkjs-plugins\
         ```
      </TabItem>
      <TabItem value="mac" label="macOS">
         ``` bash
         Users/<username>/Library/Application Support/asc.onlyoffice.ONLYOFFICE/sdkjs-plugins
         ```
      </TabItem>
      <TabItem value="lin" label="Linux">
         ``` bash
         home/<username>/.local/share/onlyoffice/desktopeditors/sdkjs-plugins/
         ```
      </TabItem>
   </Tabs>
   
   插件的 **GUID（全局唯一标识符）**将被用作文件夹名称。例如，*\{07FD8DFA-DFE0-4089-AL24-0730933CC80A\}*。

   ![Sdkjs-plugins 文件夹](/assets/images/plugins/sdkjs-plugins-folder.png)

   您可以编辑插件并重新加载以查看更改效果。

   要在桌面编辑器中调试插件，请按照[此处](../tutorials/developing/for-desktop-editors.md#debugging)的说明。

### 连接到 Web 编辑器

1. 发布插件文件夹。为此，打开已创建的文件夹并运行以下命令：

   ``` sh
   npm install http-server -g
   http-server -p <port> --cors
   ```

   其中 **port** 是安装 ONLYOFFICE 文档的端口号。

   > 需要启用 CORS 请求使插件文件可以从任何服务器加载。

2. 在任意 ONLYOFFICE 网页编辑器中打开开发者控制台，切换到**控制台**标签，从下拉列表中选择**编辑器框架**并运行以下命令：

   ``` ts
   Asc.editor.installDeveloperPlugin("https://<documentserver>:<port>/config.json")
   ```

   其中 **documentserver** 是服务器名称，**port** 是安装 ONLYOFFICE 文档的端口号。

   ![开发者控制台](/assets/images/plugins/developer-console.png)

   > 请注意，可以在**插件管理器**中打开你的插件，并在**我的插件**标签页下查看插件在浅色和深色主题下的显示效果。如有必要，可优化插件显示。

   插件会显示在**插件**标签页中。 您可以编辑插件并重新加载以查看更改。

   有关在网页编辑器中调试插件的说明，请参考[此处](../tutorials/developing/for-web-editors.md#debugging)。
