# GetRange

返回跨表格所有列的整行范围。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.GetRange();
```

`expression` - 表示 [ApiListRow](../ApiListRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

检索电子表格中表格行占用的完整单元格范围。

```javascript editor-xlsx
// How do I get the cells that make up a single row of a table in a spreadsheet?

// Access the row's range to read its address or apply formatting across every cell in that row in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let row = table.GetListRows()[0];
let rowRange = row.GetRange();

worksheet.GetRange("D1").SetValue("Row range address:");
worksheet.GetRange("E1").SetValue(rowRange.GetAddress());
```
