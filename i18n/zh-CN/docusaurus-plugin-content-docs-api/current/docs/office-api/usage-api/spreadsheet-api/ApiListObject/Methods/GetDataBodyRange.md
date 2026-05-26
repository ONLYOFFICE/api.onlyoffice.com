# GetDataBodyRange

返回表格中数据行的范围，不包括标题行和汇总行。
如果表格没有数据行，则返回 null。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.GetDataBodyRange();
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

查找电子表格中表格的数据区域，不包括其标题行和汇总行。

```javascript editor-xlsx
// How do I get the range that contains only the data rows of a table in a spreadsheet?

// Isolate the cells holding actual values so you can process them without touching header or totals in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let dataRange = table.GetDataBodyRange();
worksheet.GetRange("D1").SetValue("Data body range:");
worksheet.GetRange("E1").SetValue(dataRange.GetAddress());
```
