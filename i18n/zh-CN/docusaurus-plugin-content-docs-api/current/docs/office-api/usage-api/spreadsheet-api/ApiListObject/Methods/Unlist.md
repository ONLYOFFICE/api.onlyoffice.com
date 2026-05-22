# Unlist

从 ListObject 移除列表功能并将其转换为常规数据范围。
单元格数据、格式和公式保留在工作表上。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.Unlist();
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中将格式化表格转换回普通数据范围。

```javascript editor-xlsx
// How do I remove table formatting while keeping the data intact in a spreadsheet?

// Strip the table structure from a range so the data remains but the table features and named references are gone in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

worksheet.GetRange("D1").SetValue("Before unlist, table name:");
worksheet.GetRange("E1").SetValue(table.GetName());
table.Unlist();
worksheet.GetRange("D2").SetValue("Table converted to range.");
```
