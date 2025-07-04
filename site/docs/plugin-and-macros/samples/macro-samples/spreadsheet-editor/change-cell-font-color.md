# Change cell font color

Sets the font color of the cell **B4** to red.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
    Api.GetActiveSheet().GetRange("B4").SetFontColor(Api.CreateColorFromRGB(255, 0, 0));
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetFontColor](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFontColor.md)

## Reference Microsoft VBA macro code

``` vb
Sub example()
    Range("B4").Font.Color = RGB(255, 0, 0)
End Sub
```

## Result

![Font color](/assets/images/plugins/font-color.png#gh-light-mode-only)![Font color](/assets/images/plugins/font-color.dark.png#gh-dark-mode-only)
