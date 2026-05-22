# GetTotalsCalculation

返回列的汇总计算类型。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.GetTotalsCalculation();
```

`expression` - 表示 [ApiListColumn](../ApiListColumn.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlTotalsCalculation](../../Enumeration/XlTotalsCalculation.md)

## 示例

读取电子表格中分配给表格列汇总行的汇总函数。

```javascript editor-xlsx
// How do I check whether a column is set to sum, average, or count in its totals row in a spreadsheet?

// Verify the calculation type before changing it to ensure consistency across table columns in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetShowTotals(true);

let column = table.GetListColumns()[1];
column.SetTotalsCalculation("xlTotalsCalculationSum");

worksheet.GetRange("D1").SetValue("Totals calculation:");
worksheet.GetRange("E1").SetValue(column.GetTotalsCalculation());
```
