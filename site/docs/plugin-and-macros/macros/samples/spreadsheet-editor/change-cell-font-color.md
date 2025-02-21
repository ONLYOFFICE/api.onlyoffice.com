# Change cell font color

## Description

Sets the font color of the cell **B4** to red.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
    Api.GetActiveSheet().GetRange("B4").SetFontColor(Api.CreateColorFromRGB(255, 0, 0));
})();
```

Methods used: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetFontColor](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFontColor.md)

## Reference Microsoft VBA macro code

``` vb
Sub example()
    Range("B4").Font.Color = RGB(255, 0, 0)
End Sub
```

## Result

![Font color](/assets/images/plugins/font-color.png#gh-light-mode-only)![Font color](/assets/images/plugins/font-color.dark.png#gh-dark-mode-only)
