# ApplyChartStyle

通过样式 ID 为当前图表设置样式。

## 语法

```javascript
expression.ApplyChartStyle(nStyleId);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nStyleId | 必需 |  |  | 编辑器中可用的样式之一。 |

## 返回值

boolean

## 示例

此示例按样式 ID 设置图表的样式。

```javascript editor-xlsx
// How to update visualization of a chart setting a new style by using its ID.

// Apply new style by its ID.

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
let chart = worksheet.AddChart("'Sheet1'!$A$1:$D$3", true, "bar3D", 2, 100 * 36000, 70 * 36000, 0, 2 * 36000, 5, 3 * 36000);
chart.SetTitle("Financial Overview", 13);
chart.ApplyChartStyle(2);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
let stroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
chart.SetSeriesOutLine(stroke, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
stroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
chart.SetSeriesOutLine(stroke, 1, false);
```
