# 高亮显示重复值

在选定区域中使用不同颜色高亮显示重复项，帮助快速识别重复值。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function () 
{
    // 非重复值单元格的背景色
    let whiteFill = Api.CreateColorFromRGB(255, 255, 255);
    // 当前使用的颜色索引
    let uniqueColorIndex = 0;
    // 用于高亮重复值的颜色列表
    let uniqueColors = [Api.CreateColorFromRGB(255, 255, 0),
        Api.CreateColorFromRGB(204, 204, 255),
        Api.CreateColorFromRGB(0, 255, 0),
        Api.CreateColorFromRGB(0, 128, 128),
        Api.CreateColorFromRGB(192, 192, 192),
        Api.CreateColorFromRGB(255, 204, 0)];

    // 获取用于重复值的颜色
    function getColor() {
        // 如果所有唯一颜色都用完了，就从头开始
        if (uniqueColorIndex === uniqueColors.length) {
            uniqueColorIndex = 0;
        }
        return uniqueColors[uniqueColorIndex++];
    }

    // 获取当前活动工作表
    let activeSheet = Api.ActiveSheet;
    // 获取活动工作表中的选区
    let selection = activeSheet.Selection;
    // 储存单元格数值及其重复次数的映射表
    let mapValues = {};
    // 所有选中单元格的范围数组
    let arrRanges = [];
    // 遍历选区
    selection.ForEach(function (range) {
        // 获取单元格中的数值
        let value = range.GetValue();
        if (!mapValues.hasOwnProperty(value)) {
            mapValues[value] = 0;
        }
        mapValues[value] += 1;
        arrRanges.push(range);
    });
    let value;
    let mapColors = {};
    // 遍历所有选中单元格，如果值重复次数大于 1，则设置高亮颜色
    for (let i = 0; i < arrRanges.length; ++i) {
        value = arrRanges[i].GetValue();
        if (mapValues[value] > 1) {
            if (!mapColors.hasOwnProperty(value)) {
                mapColors[value] = getColor();
            }
            arrRanges[i].SetFillColor(mapColors[value]);
        } else {
            arrRanges[i].SetFillColor(whiteFill);
        }
    }
})();
```

使用方法: [CreateColorFromRGB](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/CreateColorFromRGB.md), [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [ForEach](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/ForEach.md), [GetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [SetFillColor](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFillColor.md)

## 参考 Microsoft VBA 宏代码

[这个 VBA 宏](https://www.extendoffice.com/documents/excel/3772-excel-highlight-duplicate-values-in-different-colors.html)被当做基准使用。

``` vb
Sub example()
    Dim xRg As Range
    Dim xTxt As String
    Dim xCell As Range
    Dim xChar As String
    Dim xCellPre As Range
    Dim xCIndex As Long
    Dim xCol As Collection
    Dim I As Long
    On Error Resume Next
    If ActiveWindow.RangeSelection.Count > 1 Then
      xTxt = ActiveWindow.RangeSelection.AddressLocal
    Else
      xTxt = ActiveSheet.UsedRange.AddressLocal
    End If
    Set xRg = Application.InputBox("please select the data range:", "Kutools for Excel", xTxt, , , , , 8)
    If xRg Is Nothing Then Exit Sub
    xCIndex = 2
    Set xCol = New Collection
    For Each xCell In xRg
      On Error Resume Next
      xCol.Add xCell, xCell.Text
      If Err.Number = 457 Then
        xCIndex = xCIndex + 1
        Set xCellPre = xCol(xCell.Text)
        If xCellPre.Interior.ColorIndex = xlNone Then xCellPre.Interior.ColorIndex = xCIndex
        xCell.Interior.ColorIndex = xCellPre.Interior.ColorIndex
      ElseIf Err.Number = 9 Then
        MsgBox "Too many duplicate companies!", vbCritical, "Kutools for Excel"
        Exit Sub
      End If
      On Error GoTo 0
    Next
End Sub
```

## 结果

![Highlight duplicates](/assets/images/plugins/highlight-duplicates.png#gh-light-mode-only)![Highlight duplicates](/assets/images/plugins/highlight-duplicates.dark.png#gh-dark-mode-only)
