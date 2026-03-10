# SetVertAxisMinorTickMark

指定纵轴的次刻度线。

## 语法

```javascript
expression.SetVertAxisMinorTickMark(sTickMark);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTickMark | 必需 | [TickMark](../../Enumeration/TickMark.md) |  | 刻度线外观的类型。 |

## 返回值

boolean

## 示例

此示例指定纵轴的次刻度线。

```javascript editor-xlsx
// How to add a minor tick as a out for the vertical axis labels.

// Specifies minor tick mark for the vertical axis.

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
let chart = worksheet.AddChart("'Sheet1'!$A$1:$D$3", true, "scatter", 2, 100 * 36000, 70 * 36000, 0, 2 * 36000, 5, 3 * 36000);
chart.SetTitle("Financial Overview", 13);
chart.SetVertAxisMinorTickMark("out");
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetMarkerFill(fill, 0, 0, true);
let stroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
chart.SetMarkerOutLine(stroke, 0, 0, true);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetMarkerFill(fill, 1, 0, true);
stroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
chart.SetMarkerOutLine(stroke, 1, 0, true);
```
