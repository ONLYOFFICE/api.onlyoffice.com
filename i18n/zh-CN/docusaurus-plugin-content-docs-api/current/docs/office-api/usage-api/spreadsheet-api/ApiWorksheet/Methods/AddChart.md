# AddChart

从当前工作表的选定数据区域创建指定类型的图表。
💡 请注意，水平和垂直偏移量仅在指定列和行单元格的范围内计算。如果此值超过单元格宽度或高度，将设置其他垂直/水平位置。

## 语法

```javascript
expression.AddChart(sDataRange, bInRows, sType, nStyleIndex, nExtX, nExtY, nFromCol, nColOffset, nFromRow, nRowOffset);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sDataRange | 必需 | string |  | 将用于获取图表数据的选定单元格区域，需特别格式化并包含工作表名称。 |
| bInRows | 必需 | boolean |  | 指定是从行还是从列获取数据。如果为 true，将使用行中的数据。 |
| sType | 必需 | [ChartType](../../Enumeration/ChartType.md) |  | 用于图表显示的图表类型。 |
| nStyleIndex | 必需 | number |  | 图表颜色样式索引（可以是 **1 - 48**，如 OOXML 规范所述）。 |
| nExtX | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制单位表示的图表宽度 |
| nExtY | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位表示的图表高度。 |
| nFromCol | 必需 | number |  | 图表起始位置所在的列号。 |
| nColOffset | 必需 | [EMU](../../Enumeration/EMU.md) |  | 从 nFromCol 列到图表左侧的偏移量，以英制单位测量。 |
| nFromRow | 必需 | number |  | 图表起始位置所在的行号。 |
| nRowOffset | 必需 | [EMU](../../Enumeration/EMU.md) |  | 从 nFromRow 行到图表上部的偏移量，以英制单位测量。 |

## 返回值

[ApiChart](../../ApiChart/ApiChart.md) \| null

## 示例

此示例从工作表的选定数据区域创建指定类型的图表。

```javascript editor-xlsx
// How to add chart to the worksheet.

// Create a chart using data from a range from a worksheet.

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
