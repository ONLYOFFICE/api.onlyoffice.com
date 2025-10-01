# 高亮单元格求和

计算电子表格中所有高亮单元格的数值总和。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function () {
    let worksheet = Api.GetActiveSheet();
    let range1 = worksheet.GetRange("B1"); // 设置用于颜色参考的单元格范围
    let colorReference = range1.SetFillColor(Api.CreateColorFromRGB(91, 155, 213)); // 设置目标背景颜色；如需使用现有单元格的填充色，请将此行注释掉
    let targetedColor = range1.GetFillColor();
    let range2 = worksheet.GetRange("A1:A16"); // 设置要检查的目标范围
    let result = worksheet.GetRange("A17"); // 设置用于显示结果的单元格
    let sum = 0;
    let cellColorCode;

    range2.ForEach(function (range) {
        let cellColor = range.GetFillColor();

        if (cellColor!== "No Fill"){
            cellColorCode = cellColor.GetRGB(); // 获取单元格颜色的 RGB 编码
        } else {
            cellColorCode = null; // 如果没有填充色，则设为 null
        }

        if (cellColorCode && cellColorCode === targetedColor.GetRGB()) {
            let value = range.GetValue();
            if (!isNaN(parseFloat(value))) {
                sum += parseFloat(value); // 如果是数字，则加入总和
            }
        }
    });
    result.SetValue(`The sum: ${sum}`) // 将求和结果写入结果单元格
})();
```

使用方法: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetFillColor](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFillColor.md), [CreateColorFromRGB](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/CreateColorFromRGB.md), [GetFillColor](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetFillColor.md), [ForEach](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/ForEach.md), [GetRGB](../../../../office-api/usage-api/spreadsheet-api/ApiColor/Methods/GetRGB.md), [GetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md)

## 参考 Microsoft VBA 宏代码

``` vb
Sub SumHighlightedCells()
    Dim cell As Range
    Dim total As Double
    
    ' 遍历选区中的每个单元格
    For Each cell In Selection
        ' 检查该单元格是否包含数值
        If IsNumeric(cell.Value) Then
            total = total + cell.Value
        End If
    Next cell
    
    ' 通过消息框显示总和
    MsgBox "The sum of the highlighted cells is: " & total
End Sub
```

## 结果

![Sum of highlighted cells](/assets/images/plugins/sum-of-highlighted-cells.png#gh-light-mode-only)![Sum of highlighted cells](/assets/images/plugins/sum-of-highlighted-cells.dark.png#gh-dark-mode-only)
