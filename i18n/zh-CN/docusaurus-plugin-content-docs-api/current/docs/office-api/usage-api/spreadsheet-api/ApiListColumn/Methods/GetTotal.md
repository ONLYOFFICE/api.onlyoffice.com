# GetTotal

返回列的汇总行单元格范围。
如果表格没有汇总行，则返回 null。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetTotal();
```

`expression` - 表示 [ApiListColumn](../ApiListColumn.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

定位电子表格中特定表格列的汇总行单元格。

```javascript editor-xlsx
// How do I find the summary cell at the bottom of a table column in a spreadsheet?

// Target the totals cell directly to read or update the column summary value in a spreadsheet.

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
let totalCell = column.GetTotal();

worksheet.GetRange("D1").SetValue("Total cell address:");
worksheet.GetRange("E1").SetValue(totalCell ? totalCell.GetAddress() : "none");
```
