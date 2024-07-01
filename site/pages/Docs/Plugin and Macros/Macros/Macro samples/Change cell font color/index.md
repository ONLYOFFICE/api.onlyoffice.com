Description

Sets the font color of the cell **B4** to red.

```
(function()
{
    Api.GetActiveSheet().GetRange("B4").SetFontColor(Api.CreateColorFromRGB(255, 0, 0));
})();
```

Methods used: [GetActiveSheet](/officeapi/spreadsheetapi/api/getactivesheet), [GetRange](/officeapi/spreadsheetapi/apiworksheet/getrange), [SetFontColor](/officeapi/spreadsheetapi/apirange/setfontcolor)

Reference Microsoft VBA macro code

```
Sub example()
    Range("B4").Font.Color = RGB(255, 0, 0)
End Sub
```

Result

![Font color](/content/img/plugins/font_color.png)
