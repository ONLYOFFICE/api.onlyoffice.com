---
sidebar_position: -6
---

从 '@theme/Tabs' 导入 Tabs；
从 '@theme/TabItem' 导入 TabItem；


# 入门指南

让我们来学习如何构建最简单的 [Hello world](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/helloworld) 插件，该插件会在点击按钮时插入 Hello World! 文本。

## 构建插件

1. 创建插件文件夹。请按照[此处](../structure/configuration/configuration.md)描述的插件结构进行操作。插件文件夹必须包含三个必需文件才能使插件正常工作：[config.json](../structure/configuration/configuration.md)、[index.html](../structure/entry-point.md) 和 [scripts/helloworld.js](../interacting-with-editors/overview/overview.md)。最终目录结构应如下所示：

  ``` ini
  helloworld/
  ├── scripts/
      ├── helloworld.js
  ├── config.json
  ├── index.html
  ```

  ![Structure](/assets/images/plugins/plugins-structure.png)

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
     <TabItem value="code" label="scripts/helloworld.js">
       ``` ts
       // Example insert text into editors (different implementations)
       (function(window, undefined){
           
           var text = "Hello world!";

           window.Asc.plugin.init = function()
           {
               var variant = 2;

               switch (variant)
               {
                   case 0:
                   {
                       // serialize command as text
                       var sScript = "var oDocument = Api.GetDocument();";
                       sScript += "oParagraph = Api.CreateParagraph();";
                       sScript += "oParagraph.AddText('Hello world!');";
                       sScript += "oDocument.InsertContent([oParagraph]);";
                       this.info.recalculate = true;
                       this.executeCommand("close", sScript);
                       break;
                   }
                   case 1:
                   {
                       // call command without external variables
                       this.callCommand(function() {
                           var oDocument = Api.GetDocument();
                           var oParagraph = Api.CreateParagraph();
                           oParagraph.AddText("Hello world!");
                           oDocument.InsertContent([oParagraph]);
                       }, true);
                       break;
                   }
                   case 2:
                   {
                       // call command with external variables
                       Asc.scope.text = text; // export variable to plugin scope
                       this.callCommand(function() {
                           var oDocument = Api.GetDocument();
                           var oParagraph = Api.CreateParagraph();
                           oParagraph.AddText(Asc.scope.text); // or oParagraph.AddText(scope.text);
                           oDocument.InsertContent([oParagraph]);
                       }, true);
                       break;
                   }
                   default:
                       break;
               }
           };

           window.Asc.plugin.button = function(id)
           {
           };

       })(window, undefined);
       ```
     </TabItem>
  </Tabs>

  在编写插件代码时，请使用插件[方法](../interacting-with-editors/overview/how-to-call-methods.md)和[事件](../interacting-with-editors/overview/how-to-attach-events.md)。例如，在 **Hello world** 插件中，我们使用了 `init` 和 `button` 事件，以及 `callCommand` 和 `executeMethod` 方法。

  请阅读插件[自定义](../customization/context-menu.md)章节，了解插件在编辑器中的多种呈现方式：可作为上下文菜单项、工具栏按钮、窗口、左右侧面板或输入辅助工具出现。您可以选择适合您插件的呈现方式，按照指南进行自定义。

  在 index.html 文件中添加 ONLYOFFICE [样式表](../structure/styles.md)，使您的插件风格与 ONLYOFFICE 编辑器保持一致：

    ``` html
    <link rel="stylesheet" href="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.css">
    ```

2. [添加图标](../structure/icons.md) 到您的插件，使最终目录结构如下所示：

  ``` ini
  helloworld/
  ├── resources/
      ├── img/
          ├── icon.png
          ├── icon@2x.png
  ├── scripts/
      ├── helloworld.js
  ├── config.json
  ├── index.html
  ```

3. 根据需要，[本地化](../structure/localization.md)您的插件.

4. 如有需要，您可以创建包含插件信息的**关于**窗口，请在窗口中添加简短的描述和插件版本、开发公司名称及其官网链接。按照[此处](../structure/configuration/variations.md)的说明在 config.json 文件中创建**关于**窗口的变体。

![About window](/assets/images/plugins/about-variation.png)

别忘了为**关于**窗口创建 index_about.html 文件，[示例参考](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/helloworld/index_about.html)。

## 将插件连接到编辑器

### 桌面编辑器

1. 将插件文件夹内的所有文件打包成 `zip` 压缩包，并将其扩展名改为 `.plugin`（所有插件文件和子文件夹必须位于压缩包的根目录）。

2. [通过插件管理器](../tutorials/installing/onlyoffice-desktop-editors.md#adding-plugins-through-the-plugin-manager)安装插件。

3. 插件将出现在 sdkjs-plugins 目录中。该文件夹的路径取决于您使用的操作系统：

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
  
  插件 **GUID** 将作为文件夹名称使用。例如：  *\{07FD8DFA-DFE0-4089-AL24-0730933CC80A\}*。

  ![Sdkjs-plugins folder](/assets/images/plugins/sdkjs-plugins-folder.png)

  您可以编辑插件并重新加载以查看变更效果。

  要在桌面编辑器中调试插件，请按照[此处](../tutorials/developing/for-desktop-editors.md#debugging)的说明操作。

### 网页版编辑器

1. 启动文件夹分发服务。为此需要打开创建好的文件夹并执行以下命令：

   ``` sh
   npm install http-server -g
   http-server -p <port> --cors
   ```

   其中 **port** 是安装 ONLYOFFICE 文档的端口号。

   > 需要 CORS 请求才能从任意服务器加载插件文件。

2. 在任意 ONLYOFFICE 网页版编辑器中打开开发者控制台，转到**控制台**选项卡，从下拉菜单中选择**框架编辑器**，然后执行以下命令：

   ``` ts
   Asc.editor.installDeveloperPlugin("https://<documentserver>:<port>/config.json")
   ```

   其中 **documentserver** 是服务器名称， **port** 是安装 ONLYOFFICE 文档的端口号。

   ![Developer console](/assets/images/plugins/developer-console.png)

   > 请注意：请通过**插件管理器**打开您的插件，并在**我的插件**选项卡中检查其在浅色和深色主题下的显示效果。如有需要，请优化插件显示效果。

   插件将显示在**插件**选项卡中。您可以编辑插件并重新加载以查看变更。
   
   要在网页版编辑器中进行插件调试，请参阅[此处](../tutorials/developing/for-web-editors.md#debugging)。
