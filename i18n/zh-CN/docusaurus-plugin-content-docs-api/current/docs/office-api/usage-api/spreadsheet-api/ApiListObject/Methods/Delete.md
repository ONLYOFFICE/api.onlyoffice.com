# Delete

删除 ListObject 对象并清除单元格格式。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

移除格式化表格并清除电子表格中的样式。

```javascript editor-xlsx
// How do I completely delete a table, including its formatting, in a spreadsheet?

// Wipe out a table and leave behind clean, unstyled cells when the table structure is no longer needed in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

worksheet.GetRange("D1").SetValue("Before delete, table name:");
worksheet.GetRange("E1").SetValue(table.GetName());
table.Delete();
worksheet.GetRange("D2").SetValue("Table deleted.");
```
