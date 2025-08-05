---
sidebar_position: -2
---

# 转换 VBA 宏

ONLYOFFICE 宏与 Microsoft 宏有所不同，Microsoft 宏使用的是 Visual Basic for Applications（VBA）脚本语言，而 ONLYOFFICE 宏使用的 JavaScript 语言则更加灵活，可用于任何平台。因此， ONLYOFFICE 编辑器可以支持在 Windows，Linux 和 macOS 平台使用。

如果您此前在 Microsoft Office 中使用了宏功能，可能会遇到一些不便，因为这些宏与 ONLYOFFICE 不兼容。不过，您可以将之前使用的宏转换为适用于新编辑器的版本。

这一过程并不复杂。我们来看以下示例：

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
