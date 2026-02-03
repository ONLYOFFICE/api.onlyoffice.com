---
sidebar_position: -1
---

# 桌面编辑器

要在桌面编辑器中调试 ONLYOFFICE 插件，请使用 `--ascdesktop-support-debug-info` 标志。根据您使用的操作系统，按照[此处](../../../desktop-editors/usage-api/debugging/running-in-debug-mode-on-windows.md)的说明进行操作。

![Debug](/assets/images/desktop/debugging.png)

### 调试工具

**开发者控制台**

- 打开开发者工具（`F12`）。
- 在框架选择器中选择插件 iframe，以便日志在正确的上下文中运行。
- 使用控制台方法检查状态：

```javascript
console.log("Debug:", value);
console.info("Info:", info);
console.warn("Warning:", warnValue);
console.error("Error:", errorObj);
```

**断点**

- 在希望暂停执行的位置插入 `debugger;`。
- 必须在插件执行前打开**开发者工具**。

```javascript
this.callCommand(function () {
  debugger;
  // code to inspect
});
```

:::tip
或者，您可以在开发者工具中手动设置调试断点：打开 Sources > 找到您的插件文件 > 点击行号以添加断点（右键单击可添加条件断点）。
:::

### 最佳实践

调试插件初始化

```javascript
(function (window, undefined) {
  window.Asc.plugin.init = function () {
    console.log("Plugin initialization started");
    try {
      // Initialization
      this.callCommand(function () {
        debugger;
        var oDocument = Api.GetDocument();
        var oParagraph = Api.CreateParagraph();
        oParagraph.AddText("Test Example");
        oDocument.InsertContent([oParagraph]);
      });
    } catch (error) {
      console.error("Initialization failed:", error);
    }
  };
})(window, undefined);
```

### 调试器用例和作用域管理

您可以通过将外部变量附加到 `Asc.scope` 对象来在插件中使用它们。

```javascript
(function (window, undefined) {
  window.Asc.plugin.init = function () {
    console.log("Plugin initialization started");
    try {
      var text = "Test Example";
      Asc.scope.text = text; // Attach text variable to asc scope
      // Initialization
      this.callCommand(function () {
        debugger;
        var oDocument = Api.GetDocument();
        var oParagraph = Api.CreateParagraph();
        oParagraph.AddText(Asc.scope.text); // Execute
        oDocument.InsertContent([oParagraph]);
      });
    } catch (error) {
      console.error("Initialization failed:", error);
    }
  };
})(window, undefined);
```
