# GetListColumns

返回表格中所有列的数组。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.GetListColumns();
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiListColumn](../../ApiListColumn/ApiListColumn.md)[]

## 示例

检索电子表格中属于表格的所有列。

```javascript editor-xlsx
// How do I get each column of a table as a separate object in a spreadsheet?

// Count or iterate the columns of a table to inspect their names and settings in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let columns = table.GetListColumns();
worksheet.GetRange("D1").SetValue("Number of columns:");
worksheet.GetRange("E1").SetValue(columns.length);
worksheet.GetRange("D2").SetValue("First column name:");
worksheet.GetRange("E2").SetValue(columns[0].GetName());
```
