# Delete

从表格中删除列。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiListColumn](../ApiListColumn.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从电子表格中的格式化表格移除列。

```javascript editor-xlsx
// How do I delete a specific column from a table in a spreadsheet?

// Shrink a table by permanently dropping one of its columns along with all its data.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("C1").SetValue("Stock");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("C2").SetValue(50);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
worksheet.GetRange("C3").SetValue(30);
let table = worksheet.AddListObject("xlSrcRange", "A1:C3");

let column = table.GetListColumns()[2];
column.Delete();

worksheet.GetRange("E1").SetValue("Column count after delete:");
worksheet.GetRange("F1").SetValue(table.GetListColumns().length);
```
