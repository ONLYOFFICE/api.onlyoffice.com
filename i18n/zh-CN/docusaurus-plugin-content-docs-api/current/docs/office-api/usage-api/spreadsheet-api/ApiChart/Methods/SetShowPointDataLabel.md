# SetShowPointDataLabel

指定数据标签的显示选项。

## 语法

```javascript
expression.SetShowPointDataLabel(nSeriesIndex, nPointIndex, bShowSerName, bShowCatName, bShowVal, bShowPercent);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSeriesIndex | 必需 | number |  | 用于构建图表的数据数组中的系列索引。 |
| nPointIndex | 必需 | number |  | 此系列中的数据点索引。 |
| bShowSerName | 必需 | boolean |  | 是否显示或隐藏用于构建图表数据的源表列名。 |
| bShowCatName | 必需 | boolean |  | 是否显示或隐藏用于构建图表数据的源表行名。 |
| bShowVal | 必需 | boolean |  | 是否显示或隐藏图表数据值。 |
| bShowPercent | 必需 | boolean |  | 是否显示或隐藏数据值的百分比（适用于堆叠图表类型）。 |

## 返回值

boolean

## 示例

此示例指定图表数据标签的显示选项。

```javascript editor-xlsx
// How to hide chart data labels using options.

// Show only values as chart lables with series index equal to 1 from the array of the data used to build the chart from.

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
chart.SetShowPointDataLabel(1, 0, false, false, true, false);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
```
