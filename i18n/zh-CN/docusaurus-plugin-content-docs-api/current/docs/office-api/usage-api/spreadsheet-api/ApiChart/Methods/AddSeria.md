# AddSeria

向当前图表添加新系列。

## 语法

```javascript
expression.AddSeria(sNameRange, sValuesRange, sXValuesRange);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sNameRange | 必需 | string |  | 系列名称。可以是单元格范围或普通文本。例如：「'sheet 1'!$A$2:$A$5」- 必须是单个单元格、行或列，「A1:A5」- 必须是单个单元格、行或列，「Example series」。 |
| sValuesRange | 必需 | string |  | 包含系列值的工作表单元格范围。例如：「'sheet 1'!$A$2:$A$5」- 必须是单个单元格、行或列，「A1:A5」- 必须是单个单元格、行或列。 |
| sXValuesRange | 可选 | string |  | 包含系列 X 轴值的工作表单元格范围。仅用于散点图。例如：「'sheet 1'!$A$2:$A$5」- 必须是单个单元格、行或列，「A1:A5」- 必须是单个单元格、行或列。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例向图表添加新系列。

```javascript editor-xlsx
// How to add a new series to create a chart.

// Add a new series to update a chart.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue(2014);
worksheet.GetRange("C1").SetValue(2015);
worksheet.GetRange("D1").SetValue(2016);
worksheet.GetRange("A2").SetValue("Projected Revenue");
worksheet.GetRange("A3").SetValue("Estimated Costs");
worksheet.GetRange("A4").SetValue("Cost price");
worksheet.GetRange("B2").SetValue(200);
worksheet.GetRange("B3").SetValue(250);
worksheet.GetRange("B4").SetValue(50);
worksheet.GetRange("C2").SetValue(240);
worksheet.GetRange("C3").SetValue(260);
worksheet.GetRange("C4").SetValue(120);
worksheet.GetRange("D2").SetValue(280);
worksheet.GetRange("D3").SetValue(280);
worksheet.GetRange("D4").SetValue(160);
let chart = worksheet.AddChart("'Sheet1'!$A$1:$D$3", true, "bar3D", 2, 100 * 36000, 70 * 36000, 0, 2 * 36000, 7, 3 * 36000);
chart.SetTitle("Financial Overview", 13);
chart.AddSeria("Cost price", "'Sheet1'!$B$4:$D$4");
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
```
