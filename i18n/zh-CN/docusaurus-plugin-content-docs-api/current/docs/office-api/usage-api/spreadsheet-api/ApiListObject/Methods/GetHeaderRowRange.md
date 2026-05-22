# GetHeaderRowRange

返回表格标题行的范围。
如果表格没有标题行，则返回 null。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.GetHeaderRowRange();
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

定位电子表格中构成表格标题行的单元格。

```javascript editor-xlsx
// How do I get the range occupied by a table's column headings in a spreadsheet?

// Identify which cells hold the column labels so you can read or style them separately in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let headerRange = table.GetHeaderRowRange();
worksheet.GetRange("D1").SetValue("Header range:");
worksheet.GetRange("E1").SetValue(headerRange.GetAddress());
```
