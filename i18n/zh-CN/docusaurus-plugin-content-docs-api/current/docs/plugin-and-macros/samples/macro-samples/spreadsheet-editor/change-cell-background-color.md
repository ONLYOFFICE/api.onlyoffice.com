# 更改单元格背景颜色

将单元格 **B3** 的背景颜色设置为蓝色。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
    Api.GetActiveSheet().GetRange("B3").SetFillColor(Api.CreateColorFromRGB(0, 0, 250));
})();
```

使用方法: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetFillColor](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFillColor.md), [CreateColorFromRGB](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/CreateColorFromRGB.md)

## 参考 Microsoft VBA 宏代码

``` vb
Sub example()
    Range("B3").Interior.Color = RGB(0, 0, 250)
End Sub
```

## 结果

![Background color](/assets/images/plugins/background-color.png#gh-light-mode-only)![Background color](/assets/images/plugins/background-color.dark.png#gh-dark-mode-only)
