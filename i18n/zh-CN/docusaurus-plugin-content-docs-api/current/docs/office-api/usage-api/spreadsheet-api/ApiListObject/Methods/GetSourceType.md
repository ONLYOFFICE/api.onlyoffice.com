# GetSourceType

返回表格的源类型。对于基于范围的表格，始终返回 “xlSrcRange”。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetSourceType();
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

检索电子表格中表格的数据源类型。

```javascript editor-xlsx
// How do I find out where a table gets its data from in a spreadsheet?

// Identify whether a table draws from a local range or an external connection in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

worksheet.GetRange("D1").SetValue("Source type:");
worksheet.GetRange("E1").SetValue(table.GetSourceType());
```
