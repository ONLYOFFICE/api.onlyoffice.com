# GetType

使用 \{@link ChartType\} 枚举中的图表类型名称返回图表对象的类型。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ChartType](../../Enumeration/ChartType.md)

## 示例

在电子表格中使用图表类型名称读取图表类型，并将其显示在标题中。

```javascript editor-xlsx
// Useful for confirming a chart's type before applying type-specific formatting in a spreadsheet.

// Confirm the chart type programmatically to use its name as a label in a spreadsheet.

const worksheet = Api.GetActiveSheet();

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
const chart = worksheet.AddChart("'Sheet1'!$A$1:$D$3", true, "3DColumnClustered", 2, 100 * 36000, 70 * 36000, 0, 2 * 36000, 5, 3 * 36000);

chart.SetTitle('This is the ' + chart.GetType() + ' chart', 30);
```
