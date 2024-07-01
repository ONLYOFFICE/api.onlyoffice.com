Description

Sets the background color of the cell **B3** to blue.

```
(function()
{
    Api.GetActiveSheet().GetRange("B3").SetFillColor(Api.CreateColorFromRGB(0, 0, 250));
})();
```

Methods used: [GetActiveSheet](/officeapi/spreadsheetapi/api/getactivesheet), [GetRange](/officeapi/spreadsheetapi/apiworksheet/getrange), [SetFillColor](/officeapi/spreadsheetapi/apirange/setfillcolor), [CreateColorFromRGB](/officeapi/spreadsheetapi/api/createcolorfromrgb)

Reference Microsoft VBA macro code

```
Sub example()
    Range("B3").Interior.Color = RGB(0, 0, 250)
End Sub
```

Result

![Background color](/content/img/plugins/background_color.png)
