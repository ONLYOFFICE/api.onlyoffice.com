# GetListRows

返回表格中所有数据行的数组，不包括标题行和汇总行。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetListRows();
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiListRow](../../ApiListRow/ApiListRow.md)[]

## 示例

检索电子表格中属于表格的所有数据行。

```javascript editor-xlsx
// How do I get each data row of a table as a separate object in a spreadsheet?

// Count the entries in a table without including its header or totals row in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let rows = table.GetListRows();
worksheet.GetRange("D1").SetValue("Number of data rows:");
worksheet.GetRange("E1").SetValue(rows.length);
```
