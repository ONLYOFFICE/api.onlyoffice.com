# GetIndex

返回列在表格内的从 1 开始的索引。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetIndex();
```

`expression` - 表示 [ApiListColumn](../ApiListColumn.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

查找电子表格中格式化表格内列的位置编号。

```javascript editor-xlsx
// How do I get the index of a specific table column in a spreadsheet?

// Determine where a column sits inside a table by reading its one-based position number.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let column = table.GetListColumns()[1];

worksheet.GetRange("D1").SetValue("Column index:");
worksheet.GetRange("E1").SetValue(column.GetIndex());
```
