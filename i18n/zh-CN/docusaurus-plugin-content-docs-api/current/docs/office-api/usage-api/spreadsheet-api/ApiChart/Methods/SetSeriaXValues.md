# SetSeriaXValues

将指定范围的 X 轴值设置到指定系列。仅用于散点图。

## 语法

```javascript
expression.SetSeriaXValues(sRange, nSeria);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRange | 必需 | string |  | 包含系列 X 轴值的工作表单元格范围。例如：「'sheet 1'!$A$2:$A$5」- 必须是单个单元格、行或列，「A1:A5」- 必须是单个单元格、行或列，「Example series」。 |
| nSeria | 必需 | number |  | 图表系列的索引。 |

## 返回值

boolean

## 示例

此示例将指定范围的 X 轴值设置到指定系列。仅用于散点图。

```javascript editor-xlsx
// How to add values to the horizontal axis of series for scatter charts from the indicated range using addresses.

// Fill seria's x-axis of scatter charts with values from the worksheet cells.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue(2014);
worksheet.GetRange("C1").SetValue(2015);
worksheet.GetRange("D1").SetValue(2016);
worksheet.GetRange("A2").SetValue("Projected Revenue");
worksheet.GetRange("A3").SetValue("Estimated Costs");
worksheet.GetRange("B2").SetValue(200);
worksheet.GetRange("B3").SetValue(250);
worksheet.GetRange("B4").SetValue(2017);
worksheet.GetRange("C2").SetValue(240);
worksheet.GetRange("C3").SetValue(260);
worksheet.GetRange("C4").SetValue(2018);
worksheet.GetRange("D2").SetValue(280);
worksheet.GetRange("D3").SetValue(280);
worksheet.GetRange("D4").SetValue(2019);
let chart = worksheet.AddChart("'Sheet1'!$A$1:$D$3", true, "scatter", 2, 100 * 36000, 70 * 36000, 0, 2 * 36000, 7, 3 * 36000);
chart.SetTitle("Financial Overview", 13);
chart.SetSeriaXValues("'Sheet1'!$B$4:$D$4", 0);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetMarkerFill(fill, 0, 0, true);
let stroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
chart.SetMarkerOutLine(stroke, 0, 0, true);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetMarkerFill(fill, 1, 0, true);
stroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
chart.SetMarkerOutLine(stroke, 1, 0, true);
```
