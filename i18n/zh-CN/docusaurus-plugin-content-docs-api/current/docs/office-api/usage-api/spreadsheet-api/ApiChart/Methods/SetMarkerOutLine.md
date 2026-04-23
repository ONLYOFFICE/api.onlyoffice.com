# SetMarkerOutLine

设置指定图表系列中标记的轮廓。

## 语法

```javascript
expression.SetMarkerOutLine(oStroke, nSeries, nMarker, bAllMarkers);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStroke | 必需 | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | 用于创建标记轮廓的笔触。 |
| nSeries | 必需 | number |  | 图表系列的索引。 |
| nMarker | 必需 | number |  | 指定图表系列中标记的索引。 |
| bAllMarkers | 可选 | boolean | false | 指定轮廓是否应用于指定图表系列中的所有标记。 |

## 返回值

boolean

## 示例

此示例设置指定图表系列中标记的轮廓。

```javascript editor-xlsx
// Create the "scatter" chart and set an outline of the specified width and color to its markers.

// How to use the ApiStroke object as an outline of the chart markers.

// How to outline the markers of the ApiChart object.

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
let chart = worksheet.AddChart("'Sheet1'!$A$1:$D$3", true, "scatter", 2, 100 * 36000, 70 * 36000, 0, 2 * 36000, 7, 3 * 36000);
chart.SetTitle("Financial Overview", 13);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetMarkerFill(fill, 0, 0, true);
let stroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
chart.SetMarkerOutLine(stroke, 0, 0, true);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetMarkerFill(fill, 1, 0, true);
chart.SetMarkerOutLine(stroke, 1, 0, true);
```
