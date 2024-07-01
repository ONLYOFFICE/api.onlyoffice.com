Description

Adds a new chart to the selected cell range.

```
(function()
{
    Api.GetActiveSheet().AddChart("'Sheet1'!$C$5:$D$7", true, "bar", 2, 105 * 36000, 105 * 36000, 0, 0, 9, 0);
})();
```

Methods used: [GetActiveSheet](/officeapi/spreadsheetapi/api/getactivesheet), [AddChart](/officeapi/spreadsheetapi/apiworksheet/addchart)

Reference Microsoft VBA macro code

```
Sub example()
    With ActiveSheet.ChartObjects.Add(Left:=300, Width:=300, Top:=10, Height:=300)
        .Chart.SetSourceData Source:=Sheets("Sheet1").Range("C5:D7")
    End With
End Sub
```

Result

![Chart](/content/img/plugins/add_chart.png)
