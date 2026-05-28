# SetHorAxisTickLabelPosition

指定横轴刻度标签的位置。

## 语法

```javascript
expression.SetHorAxisTickLabelPosition(sTickLabelPosition);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTickLabelPosition | 必需 | [TickLabelPosition](../../Enumeration/TickLabelPosition.md) |  | 图表横轴刻度标签位置的类型。 |

## 返回值

boolean

## 示例

将分类标签移动到相对于电子表格中图表水平轴的不同位置。

```javascript editor-xlsx
// How do I control where the tick labels sit along the horizontal axis of a chart in a spreadsheet?

// Reposition the axis labels above, below, or beside the horizontal axis of a chart in a spreadsheet.

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
chart.SetHorAxisTickLabelPosition("high");
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
```
