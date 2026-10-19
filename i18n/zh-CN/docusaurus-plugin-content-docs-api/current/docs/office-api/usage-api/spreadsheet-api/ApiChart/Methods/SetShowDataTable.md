# SetShowDataTable

指定是否在图表下方显示数据表，并可选择同时显示图例项标示。

## 语法

```javascript
expression.SetShowDataTable(bShow, bShowKeys);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bShow | 必需 | boolean |  | 是否在图表下方显示或隐藏数据表。 |
| bShowKeys | 可选 | boolean | false | 是否在数据表中显示图例项标示。 |

## 返回值

boolean

## 示例

在电子表格中图表下方显示数据表。

```javascript editor-xlsx
// Show the chart's source values as a grid under the plot area, with the legend keys.

// Enable the data table with legend keys for a 3D bar chart in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue(2014);
worksheet.GetRange("C1").SetValue(2015);
worksheet.GetRange("D1").SetValue(2016);
worksheet.GetRange("A2").SetValue("Projected Revenue");
worksheet.GetRange("A3").SetValue("Estimated Costs");
worksheet.GetRange("B2").SetValue(200);
worksheet.GetRange("B3").SetValue(250);
worksheet.GetRange("C2").SetValue(240);
worksheet.GetRange("C3").SetValue(260);
worksheet.GetRange("D2").SetValue(280);
worksheet.GetRange("D3").SetValue(280);
let chart = worksheet.AddChart("'Sheet1'!$A$1:$D$3", true, "3DColumnClustered", 2, 100 * 36000, 70 * 36000, 0, 2 * 36000, 5, 3 * 36000);
chart.SetTitle("Financial Overview", 26);
chart.SetShowDataTable(true, true);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
```
