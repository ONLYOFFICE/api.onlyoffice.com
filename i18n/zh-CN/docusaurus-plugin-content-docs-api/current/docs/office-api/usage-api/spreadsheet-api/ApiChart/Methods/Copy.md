# Copy

创建指定图表的副本。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiChart](../../ApiChart/ApiChart.md)

## 示例

在工作表上复制图表并将副本放在电子表格中原始图表旁边。

```javascript editor-xlsx
// How do I make a copy of a chart in a spreadsheet?

// Clone a chart and add the copy to the sheet at a different cell anchor in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue(2014);
worksheet.GetRange("C1").SetValue(2015);
worksheet.GetRange("D1").SetValue(2016);
worksheet.GetRange("A2").SetValue("Projected Revenue");
worksheet.GetRange("B2").SetValue(200);
worksheet.GetRange("C2").SetValue(240);
worksheet.GetRange("D2").SetValue(280);
let chart = worksheet.AddChart("'Sheet1'!$A$1:$D$2", true, "bar3D", 2, 100 * 36000, 70 * 36000, 0, 2 * 36000, 7, 3 * 36000);

let copyChart = chart.Copy();
worksheet.AddDrawing(copyChart, 6, 2 * 36000, 7, 3 * 36000);
```
