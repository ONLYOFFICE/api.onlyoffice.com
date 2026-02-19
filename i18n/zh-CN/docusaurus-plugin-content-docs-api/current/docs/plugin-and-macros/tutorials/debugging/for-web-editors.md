---
sidebar_position: -2
---

# 网页编辑器

要在网页编辑器中调试 ONLYOFFICE 插件，请按照以下说明操作：

1. 在您的脚本中添加 **debugger** 命令：

   ```javascript
   (function (window, undefined) {
     window.Asc.plugin.init = function () {
       this.callCommand(function () {
         debugger;
         var oDocument = Api.GetDocument();
         var oParagraph = Api.CreateParagraph();
         oParagraph.AddText("Test Example");
         oDocument.InsertContent([oParagraph]);
       });
     };
   })(window, undefined);
   ```

2. 按 **F12** 按钮打开开发者控制台。

3. 打开 **Plugins** 选项卡并运行插件。
   :::tip
   请注意，**debugger** 命令仅在开发工具打开时才有效。否则，浏览器将忽略它。
   :::
   ![Builder debugger](/assets/images/plugins/plugin-debugging.png)

### 调试概述

在开发 ONLYOFFICE 插件时，调试对于识别和解决问题至关重要。插件环境具有几个特定的特性，使得调试独一无二：

- **隔离环境 -** 插件在单独的 iframe 中运行，这意味着它们有自己的 JavaScript 上下文
- **异步通信 -** 插件通过异步 API 调用与编辑器交互
- **多个上下文 -** 您需要同时处理插件上下文和编辑器上下文
- **作用域管理 -** 变量需要在不同作用域之间仔细处理
- **跨平台考虑 -** 网页和桌面编辑器需要不同的调试方法

要有效地调试您的插件，您可以使用现代浏览器中提供的各种工具和技术。最常见的方法包括：

- 控制台日志记录，用于跟踪执行流程和变量状态
- 断点，用于逐步执行代码
- 框架检查，用于管理不同的执行上下文
- 网络监控，用于 API 调用和资源加载

#### 控制台输出

使用控制台方法检查值和应用程序状态：

```javascript
console.log("Debug:", value);
console.info("Info:", info);
console.warn("Warning:", warnValue);
console.error("Error:", errorObj);
```

:::tip
在评估表达式之前，在控制台下拉列表中选择插件的框架，以便日志和评估在正确的上下文中运行。
:::

#### 断点

1.  **编程断点 -**
    在您希望暂停执行的位置插入 debugger 语句。

    ```javascript
    (function (window, undefined) {
        window.Asc.plugin.init = function () {
            this.callCommand(function () {
                debugger;
                // Your code
            });
        };
    })(window, undefined);
    ```

    :::tip
    在运行插件脚本之前，请确保 DevTools 已打开。
    :::

2.  **Chrome DevTools 断点**

- 打开 Sources 选项卡
- 找到您的插件文件
- 单击行号以设置断点

#### 框架管理

- 插件在单独的 iframe 中运行
- 在控制台中选择适当的框架以访问插件上下文：
  - `frameEditor`: 主编辑器框架
  - `iframe_{asc_id}`: 特定插件的框架

![Developer console](/assets/images/plugins/debugging-iframes.png)

:::tip
在检查变量、设置断点或执行代码片段之前，请始终确保选择了插件 iframe。
:::

### 调试检查清单

1. 确认插件已安装并启用。
2. 确保所有文件（`index.html`、`config.json`、`assets`）都存在且可访问。
3. 验证 `config.json` 结构和路径。
4. 在继续之前检查控制台是否有错误。

### 常见问题

**CORS**

- 使用 `--cors` 标志启动本地服务器（`http-server --cors`）。
- 确保已安装并可访问 [document server](https://www.onlyoffice.com/download-docs#docs-community)。
- 在编辑器要求时，通过 HTTPS 提供插件资源。

**JWT**

- 验证 Document Server 配置中的密钥：`%ProgramFiles%\ONLYOFFICE\DocumentServer\config\local.json` (`services.CoAuthoring.secret.browser.string`)
- 确保令牌有效（未过期）且格式正确（`header.payload.signature`）。
