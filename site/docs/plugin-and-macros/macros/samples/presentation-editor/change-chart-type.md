---
sidebar_position: 
---

## Description

Changes the chart type of all the charts in the spreadsheet.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    const chartType = "area"; //Declare unique chart type
    const worksheet = Api.GetActiveSheet();
    const charts = worksheet.GetAllCharts(); //Get all charts from the worksheet

    charts.forEach(chart => {
        //Change each chart type
        chart.GetAllSeries().forEach(series => series.ChangeChartType(chartType));
    });
})();
```

Methods used: GetActiveSheet, GetAllCharts, GetAllSeries, ChangeChartType

## Reference Microsoft VBA macro code

<!-- code generated with AI -->

```vb
Sub ChangeAllChartTypes()
    Dim ws As Worksheet
    Dim ch As ChartObject
    
    ' Set the worksheet to the active sheet
    Set ws = ActiveSheet
    
    ' Loop through all chart objects in the worksheet
    For Each ch In ws.ChartObjects
        ' Change the chart type (Modify as needed)
        ch.Chart.ChartType = xlColumnClustered
    Next ch
    
    ' Notify user
    MsgBox "All chart types have been changed successfully!", vbInformation
End Sub
```

## Result

<!-- imgpath -->

![](/assets/images/plugins/change-chart-type.png)
