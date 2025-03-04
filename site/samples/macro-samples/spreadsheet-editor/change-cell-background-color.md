# Change cell background color

Sets the background color of the cell **B3** to blue.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
    Api.GetActiveSheet().GetRange("B3").SetFillColor(Api.CreateColorFromRGB(0, 0, 250));
})();
```

Methods used: [GetActiveSheet](../../../docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetFillColor](../../../docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFillColor.md), [CreateColorFromRGB](../../../docs/office-api/usage-api/spreadsheet-api/Api/Methods/CreateColorFromRGB.md)

## Reference Microsoft VBA macro code

``` vb
Sub example()
    Range("B3").Interior.Color = RGB(0, 0, 250)
End Sub
```

## Result

![Background color](/assets/images/plugins/background-color.png#gh-light-mode-only)![Background color](/assets/images/plugins/background-color.dark.png#gh-dark-mode-only)
