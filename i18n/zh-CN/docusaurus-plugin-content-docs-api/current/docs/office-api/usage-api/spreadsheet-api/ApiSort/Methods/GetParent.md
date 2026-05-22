# GetParent

返回父列表对象。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiSort](../ApiSort.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiListObject](../../ApiListObject/ApiListObject.md)

## 示例

检索电子表格中拥有给定排序对象的格式化表格。

```javascript editor-xlsx
// How do I trace a sort back to the table it belongs to in a spreadsheet?

// Access the parent table from a sort object to read its properties in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
let parentTable = sort.GetParent();

worksheet.GetRange("C1").SetValue("Parent table name:");
worksheet.GetRange("D1").SetValue(parentTable.GetName());
```
