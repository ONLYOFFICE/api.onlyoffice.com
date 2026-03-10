# SetSeriaValues

将指定范围的值设置到指定系列。

## 语法

```javascript
expression.SetSeriaValues(sRange, nSeria);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRange | 必需 | string |  | 包含系列值的工作表单元格范围。例如：「'sheet 1'!$A$2:$A$5」- 必须是单个单元格、行或列，「A1:A5」- 必须是单个单元格、行或列，「Example series」。 |
| nSeria | 必需 | number |  | 图表系列的索引。 |

## 返回值

boolean

## 示例

此示例将指定范围的值设置到指定系列。

```javascript editor-xlsx
// How to add values to series from the indicated range using addresses.

// Fill series with values obtained from the worksheet cells.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue(2014);
worksheet.GetRange("C1").SetValue(2015);
worksheet.GetRange("D1").SetValue(2016);
worksheet.GetRange("A2").SetValue("Projected Revenue");
worksheet.GetRange("A3").SetValue("Estimated Costs");
worksheet.GetRange("B2").SetValue(200);
worksheet.GetRange("B3").SetValue(250);
worksheet.GetRange("B4").SetValue(260);
worksheet.GetRange("C2").SetValue(240);
worksheet.GetRange("C3").SetValue(260);
worksheet.GetRange("C4").SetValue(270);
worksheet.GetRange("D2").SetValue(280);
worksheet.GetRange("D3").SetValue(280);
worksheet.GetRange("D4").SetValue(300);
let chart = worksheet.AddChart("'Sheet1'!$A$1:$D$3", true, "bar3D", 2, 100 * 36000, 70 * 36000, 0, 2 * 36000, 7, 3 * 36000);
chart.SetTitle("Financial Overview", 13);
chart.SetSeriaValues("'Sheet1'!$B$4:$D$4", 1);
chart.SetShowPointDataLabel(1, 0, false, false, true, false);
chart.SetShowPointDataLabel(1, 1, false, false, true, false);
chart.SetShowPointDataLabel(1, 2, false, false, true, false);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
```
