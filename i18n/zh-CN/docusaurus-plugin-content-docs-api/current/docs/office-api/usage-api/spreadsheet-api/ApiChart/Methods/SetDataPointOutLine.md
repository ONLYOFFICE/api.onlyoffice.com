# SetDataPointOutLine

设置指定图表系列中数据点的轮廓。

## 语法

```javascript
expression.SetDataPointOutLine(oStroke, nSeries, nDataPoint, bAllSeries);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStroke | 必需 | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | 用于创建数据点轮廓的笔触。 |
| nSeries | 必需 | number |  | 图表系列的索引。 |
| nDataPoint | 必需 | number |  | 指定图表系列中数据点的索引。 |
| bAllSeries | 必需 | boolean |  | 指定轮廓是否应用于所有系列中的指定数据点。 |

## 返回值

boolean

## 示例

此示例展示如何设置数据点的轮廓。

```javascript editor-xlsx
// Sets the outline to the data point in the specified chart series.

// How to set data point outline using a stroke.

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
let chart = worksheet.AddChart("'Sheet1'!$A$1:$D$3", true, "bar3D", 2, 100 * 36000, 70 * 36000, 0, 2 * 36000, 7, 3 * 36000);
chart.SetTitle("Financial Overview", 13);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
let stroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
chart.SetDataPointOutLine(stroke, 1, 0, false);
```
