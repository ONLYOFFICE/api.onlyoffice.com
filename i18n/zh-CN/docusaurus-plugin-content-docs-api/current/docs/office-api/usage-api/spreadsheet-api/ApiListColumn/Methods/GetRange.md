# GetRange

返回整个列的范围，包括标题行和汇总行。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.GetRange();
```

`expression` - 表示 [ApiListColumn](../ApiListColumn.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

检索电子表格中表格列的完整单元格范围，包括其标题行和汇总行。

```javascript editor-xlsx
// How do I select all cells in a table column from header to totals in a spreadsheet?

// Use the complete column range to apply formatting or read values across every row in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let column = table.GetListColumns()[0];
let fullRange = column.GetRange();

worksheet.GetRange("D1").SetValue("Full column range:");
worksheet.GetRange("E1").SetValue(fullRange.GetAddress());
```
