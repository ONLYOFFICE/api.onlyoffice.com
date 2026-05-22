# Delete

从表格中删除行。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiListRow](../ApiListRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从电子表格中的表格移除特定数据行。

```javascript editor-xlsx
// How do I delete a row from a table without affecting the rest of the data in a spreadsheet?

// Target a single row by its position and erase it so the table shrinks accordingly in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
worksheet.GetRange("A4").SetValue("Bananas");
worksheet.GetRange("B4").SetValue(80);
let table = worksheet.AddListObject("xlSrcRange", "A1:B4");

let row = table.GetListRows()[1];
row.Delete();

worksheet.GetRange("D1").SetValue("Row count after delete:");
worksheet.GetRange("E1").SetValue(table.GetListRows().length);
```
