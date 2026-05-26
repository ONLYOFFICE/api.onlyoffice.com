# GetSummary

返回表格的摘要描述（替代文本摘要）。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.GetSummary();
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

检索电子表格中与表格一起存储的摘要描述。

```javascript editor-xlsx
// How do I read the summary text that has been set on a table in a spreadsheet?

// Pull the table's description text to display or log it alongside other table details in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetSummary("Monthly product sales data");

worksheet.GetRange("D1").SetValue("Summary:");
worksheet.GetRange("E1").SetValue(table.GetSummary());
```
