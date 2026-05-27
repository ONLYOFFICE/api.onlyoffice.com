# GetComment

返回表格的批注（摘要替代文本）。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetComment();
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取电子表格中存储在表格上的描述性注释。

```javascript editor-xlsx
// How do I retrieve the summary text attached to a table in a spreadsheet?

// Verify what note a table carries to understand its documented purpose in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetComment("Sales data table");

worksheet.GetRange("D1").SetValue("Comment:");
worksheet.GetRange("E1").SetValue(table.GetComment());
```
