---
sidebar_position: -2
---

# 网页编辑器插件

如要为 ONLYOFFICE 网页编辑器开发插件，请按以下步骤操作：

1. 在本地创建一个文件夹，并将 [index.html](../../structure/entry-point.md) 和 [config.json](../../structure/manifest/manifest.md) 文件放入其中。

2. 启动文件夹的分发服务。在插件目录下运行以下命令：

   ``` sh
   npm install http-server -g
   http-server -p <port> --cors
   ```

   其中 **port** 是您安装 ONLYOFFICE 文档所使用的端口号。

   > 由于插件文件可能来自任意服务器，因此需要开启 CORS 请求。

3. 打开任一 ONLYOFFICE 网页端编辑器的开发者控制台，切换至**控制台**选项卡，从下拉列表中选择**框架编辑器**，并运行以下命令：

   ``` sh
   Asc.editor.installDeveloperPlugin("https://<documentserver>:<port>/config.json");
   ```

   其中 **documentserver** 是服务器地址，**port** 是您安装 ONLYOFFICE 文档所使用的端口。

   ![开发者控制台](/assets/images/plugins/developer-console.png)

   插件将在**插件**选项卡中显示。你可以编辑插件并重新加载以查看更改。

## 调试

如需在网页端编辑器中调试插件，请按以下步骤操作：

1. 在脚本中添加 **debugger** 命令：

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

   ``` ts
   (function debugger(window, undefined){

    var text = "Hello world!";

    window.Asc.plugin.init = function init()
    {
        debugger;
        var variant = 2;

        switch (variant)
        {}
    };

    window.Asc.plugin.button = function button(id)
    {
    };

    })(window, undefined);
   ```

2. 按下 **F12** 打开浏览器开发者工具。

3. 打开**插件**选项卡并运行插件。

   > 请注意，只有在开发者工具开启时，**debugger** 命令才会生效。否则浏览器会忽略它。

   ![调试工具](/assets/images/plugins/plugin-debugging.png)
