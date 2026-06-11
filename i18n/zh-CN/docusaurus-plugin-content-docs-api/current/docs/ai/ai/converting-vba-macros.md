---
sidebar_position: 0
---

# 转换 VBA 宏

ONLYOFFICE 宏与 Microsoft 宏不同，因为后者使用 Visual Basic for Applications (VBA) 脚本语言。JavaScript 更加灵活，可在任何平台上使用（这一点很重要，因为 ONLYOFFICE 编辑器支持 Windows、Linux 和 macOS）。

这意味着在 Microsoft Office 中创建的宏与 ONLYOFFICE 宏不兼容。您可以通过以下两种方式将其转换以在 ONLYOFFICE 中使用：

- [自动转换](#automatic-conversion-using-ai-plugin) — 使用适用于 ONLYOFFICE 的 AI 插件（推荐用于快速转换）。

- [手动转换](#manual-conversion-of-vba-macros) — 使用 [ONLYOFFICE Office API](../../office-api/get-started/overview.md) 以 JavaScript 重写逻辑。

## 使用 AI 插件自动转换 {#automatic-conversion-using-ai-plugin}

从 9.0 版本开始，您可以使用 ONLYOFFICE 内置的 AI 插件，自动将 VBA 代码转换为与 ONLYOFFICE 宏兼容的 JavaScript 代码：

1. 配置 AI 插件。详情请参见 [配置 AI 插件](../../../../../../../site/docs/ai/ai/ai-plugin.md#configuring)。
2. 打开 **视图** 选项卡，点击 **宏**。
3. 在 **宏** 窗口中点击 **AI** 图标，选择 **从 VBA 转换**。

    ![AI plugin](/assets/images/plugins/ai-plugin.png#gh-light-mode-only)![AI plugin](/assets/images/plugins/ai-plugin.dark.png#gh-dark-mode-only)

4. 在 **从 VBA 转换宏** 窗口中插入 VBA 代码，点击 **创建**。生成的宏示例将插入到 **宏** 窗口中。

    ![Convert VBA](/assets/images/plugins/convert-vba.png#gh-light-mode-only)![Convert VBA](/assets/images/plugins/convert-vba.dark.png#gh-dark-mode-only)

5. 检查代码，并根据需要进行调整。

    :::warning
    虽然 AI 插件可以生成完整且可运行的宏，但并不总是完美无误。请务必仔细检查输出结果并进行充分测试，尤其是对于复杂的宏。
    :::

6. 点击 ![Play icon](/assets/images/plugins/play.svg) 测试脚本。

例如，以下 VBA 宏可取消合并活动工作表中所有已合并的单元格：

```vb
Sub UnmergeAllCells()
    ActiveSheet.Cells.UnMerge
End Sub
```

您可以将此 VBA 代码粘贴到 AI 插件转换器中。插件将返回以下 JavaScript 宏：

```ts
(function(){
    // This code will unmerge all the merged cells in the active worksheet

    // Get the active sheet
    const oWorksheet = Api.GetActiveSheet();

    // Get all cells in the worksheet by getting the used range
    const oUsedRange = oWorksheet.GetUsedRange();

    // Check if there is any used range
    if (oUsedRange) {
        // Unmerge all cells in the used range
        oUsedRange.UnMerge();
    }

    // Alternative approach: Get the entire sheet range and unmerge
    // This ensures all possible merged cells are unmerged
    const oRange = oWorksheet.GetRange("A1:XFD1048576");
    oRange.UnMerge();
})();
```

运行此宏，验证它是否成功取消合并工作表中所有已合并的单元格。

### 请求处理流程

当 AI 插件处理 VBA 转换请求时，将按照以下执行流程进行：
1. **VBA 输入分析：** 解析所提供的 VBA 代码，检测其逻辑（范围、公式、循环、条件和操作）。
2. **Office API 映射：** 将 VBA 操作映射到等效的 ONLYOFFICE Office API 方法。
3. **JavaScript 宏生成：** 生成与 ONLYOFFICE 宏兼容的 JavaScript 宏。
4. **结果插入：** 将生成的脚本插入到 **宏** 窗口中供审查。
5. **验证与调整：** 您对脚本进行审查、测试并根据需要进行调整，尤其是对于复杂或 VBA 特有的行为。

如果 VBA 转换失败，插件将输出错误信息，或生成一个带有注释说明失败原因的宏。

## 手动转换 VBA 宏 {#manual-conversion-of-vba-macros}

如果 AI 生成的版本无法正常工作，或者您希望完全理解和控制宏的行为，可以手动转换 VBA 宏：

1. 分析原始 VBA 宏的逻辑。
2. 在 [ONLYOFFICE Office API](../../office-api/get-started/overview.md) 中查找等效的方法和事件。
3. 用 JavaScript 重写宏。
4. 直接在 ONLYOFFICE 编辑器中进行测试。

例如：

```vb
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

该宏计算 **A** 列三个单元格区域中的值之和，并将结果写入 **B** 列的三个单元格中。

使用 ONLYOFFICE 宏可以实现相同的结果。如果您同时了解 VBA 和 JavaScript，代码几乎完全相同：

```ts
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

同样的方法适用于任何其他 VBA 宏。
