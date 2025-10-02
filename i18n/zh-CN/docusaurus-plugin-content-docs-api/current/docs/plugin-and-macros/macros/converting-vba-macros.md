---
sidebar_position: -2
---

# 转换 VBA 宏

ONLYOFFICE 宏与 Microsoft 宏有所不同，Microsoft 宏使用的是 Visual Basic for Applications（VBA）脚本语言，而 ONLYOFFICE 宏使用的 JavaScript 语言则更加灵活，可用于任何平台。因此， ONLYOFFICE 编辑器可以支持在 Windows，Linux 和 macOS 平台使用。

如果您此前在 Microsoft Office 中使用了宏功能，可能会遇到一些不便，因为这些宏与 ONLYOFFICE 不兼容。不过，您可以将之前使用的宏转换为适用于新编辑器的版本。

- [自动转换](#automatic-conversion-using-ai-plugin) — 使用 ONLYOFFICE 的 AI 插件进行自动转换（推荐用于快速转换）。

- [手动转换](#manual-conversion-of-vba-macros) — 使用 [ONLYOFFICE Office API](../../office-api/get-started/overview.md) 用 JavaScript 重写逻辑。

## 使用 AI 插件进行自动转换 {#automatic-conversion-using-ai-plugin}

如果您希望加快转换过程，从 9.0 版本开始，您可以使用 ONLYOFFICE 内置的 AI 插件自动将 VBA 代码转换为与 ONLYOFFICE 宏兼容的 JavaScript：

1. 配置 AI 插件。详细的配置步骤可以见于[此处]：(https://helpcenter.onlyoffice.com/docs/userguides/ai/configuration.aspx).
2. 打开**视图**选项卡，点击**宏**。
3. 在**宏**窗口中点击 **AI** 图标，选择**从 VBA 转换**。

    ![AI 插件](/assets/images/plugins/ai-plugin.png#gh-light-mode-only)![AI 插件](/assets/images/plugins/ai-plugin.dark.png#gh-dark-mode-only)

4. 在**从 VBA 转换宏**窗口中插入 VBA 代码，然后点击**创建**。生成的宏示例将被插入到**宏**窗口中。

    ![转换 VBA](/assets/images/plugins/convert-vba.png#gh-light-mode-only)![转换 VBA](/assets/images/plugins/convert-vba.dark.png#gh-dark-mode-only)

5. 审查代码，如有必要可进行调整。

    > 尽管 AI 插件可以生成完整且可运行的宏，但它并不总是完美的。请务必仔细检查输出内容，并进行彻底测试，尤其是对于复杂的宏。

6. 点击 ![播放图标](/assets/images/plugins/play.svg) 测试脚本。

例如，您有一个简单的 VBA 宏，用于取消活动工作表中所有合并单元格的合并：

``` vba
Sub UnmergeAllCells()
    ActiveSheet.Cells.UnMerge
End Sub
```

您可以将此 VBA 代码粘贴到 AI 插件转换器中。插件将返回以下 JavaScript 宏：

``` ts
(function(){
    // 此代码将取消活动工作表中所有合并单元格的合并
    
    // 获取当前工作表
    var oWorksheet = Api.GetActiveSheet();
    
    // 通过获取工作表的已使用范围来获取工作表中的所有单元格
    var oUsedRange = oWorksheet.GetUsedRange();
    
    // 检查是否有已使用范围
    if (oUsedRange) {
        // 取消已使用范围中所有单元格的合并
        oUsedRange.UnMerge();
    }
    
    // 替代方法：获取整个工作表范围并取消合并
    // 这样可以确保所有可能的合并单元格都被取消合并
    var oRange = oWorksheet.GetRange("A1:XFD1048576");
    oRange.UnMerge();
})();
```

运行该宏，检查它是否成功取消了工作表中所有合并单元格的合并。

## 手动转换 VBA 宏 {#manual-conversion-of-vba-macros}

如果 AI 生成的版本无法正常工作，或者您希望完全了解并管理宏，您可以手动转换 VBA 宏：

1. 分析原始 VBA 宏的逻辑。
2. 在 [ONLYOFFICE Office API](../../office-api/get-started/overview.md) 中查找等效的方法和事件。
3. 用 JavaScript 重写宏。
4. 直接在 ONLYOFFICE 编辑器中进行测试。

过程并不复杂。请看以下示例：

``` vb
Sub Example()
    Dim myRange
    Dim result
    Dim Run As Long
 
    For Run = 1 To 3
        Select Case Run
        Case 1
            result = "=SUM(A1:A100)"
        Case 2
            result = "=SUM(A1:A300)"
        Case 3
            result = "=SUM(A1:A25)"
        End Select
        ActiveSheet.range("B" & Run) = result
    Next Run
End Sub
```

该宏会对 **A** 列中三个单元格范围的数值进行求和，并将结果分别写入 **B** 列的三个单元格中。

使用 ONLYOFFICE 宏也可以实现完全相同的功能。如果您了解 Visual Basic for Applications 和 JavaScript，会发现它们的代码几乎一致且易于理解：

<!-- 下面的代码与宏相关。 -->

<!-- eslint-skip -->

``` ts
(function()
{
  for (let run = 1; run <= 3; run += 1) {
    let result = "";
    switch (run) {
    case 1:
      result = "=SUM(A1:A100)";
      break;
    case 2:
      result = "=SUM(A1:A300)";
      break;
    case 3:
      result = "=SUM(A1:A25)";
      break;
    default:
      break;
    }
    Api.GetActiveSheet().GetRange(`B${run}`).Value = result;
  }
})();
```

同样地，任何其他 Visual Basic for Applications 脚本都可以转换为与 ONLYOFFICE 宏兼容的 JavaScript 代码。未来，我们希望在编辑器中添加一个转换工具，以便自动转换这些宏。
