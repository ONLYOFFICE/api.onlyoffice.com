# SetSeriesFill

设置指定图表系列的填充。

## 语法

```javascript
expression.SetSeriesFill(oFill, nSeries, bAll);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oFill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充系列的填充类型。 |
| nSeries | 必需 | number |  | 图表系列的索引。 |
| bAll | 可选 | boolean | false | 指定填充是否应用于所有系列。 |

## 返回值

boolean

## 示例

此示例设置指定图表系列的填充。

```javascript editor-xlsx
// How to color chart series.

// Add background solid fill color for a chart seria.

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
```
