---
sidebar_position: -3
---

# 调试

要调试 ONLYOFFICE 宏，请按照以下说明操作：

1. 打开**视图**选项卡并点击**宏**。

2. 在脚本中使用 **debugger** 命令：

   <!-- This code is related to macros. -->

   <!-- eslint-skip -->

   ``` ts
   debugger;
   let doc = Api.GetDocument();
   let paragraph = doc.GetElement(0);
   paragraph.AddText("Hello world!");
   ```

3. 用调试模式运行脚本：

   - **对于 ONLYOFFICE 文档**：请按 **F12** 键打开开发者控制台。
   - **对于桌面编辑器**: 请参阅在 ONLYOFFICE 桌面编辑器中的调试[说明](../../desktop-editors/usage-api/debugging/running-in-debug-mode-on-windows.md)。

4. 点击![Play icon](/assets/images/plugins/play.svg)运行脚本。

   > 请注意，**debugger** 命令仅在开发者工具开启的情况下生效。若未开启，浏览器会忽略该命令。

   ![Debugger](/assets/images/plugins/debugger.png#gh-light-mode-only)![Debugger](/assets/images/plugins/debugger.dark.png#gh-dark-mode-only)

**debugger** 命令会充当断点，脚本执行到该命令时会暂停。

如果您想在浏览器的开发者控制台中显示某些值，可以使用 **console.log()** 方法。将你想检查的值或一段消息字符串作为参数传入此方法，然后按 **F12** 按键打开开发者控制台，即可查看结果：

<!-- This code is related to macros. -->

<!-- eslint-skip -->

``` ts
console.log(123);
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Hello world!");
```
