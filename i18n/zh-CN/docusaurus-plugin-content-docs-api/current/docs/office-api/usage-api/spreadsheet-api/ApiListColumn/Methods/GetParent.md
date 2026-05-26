# GetParent

返回父列表对象。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiListColumn](../ApiListColumn.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiListObject](../../ApiListObject/ApiListObject.md)

## 示例

访问电子表格中列所属的表格。

```javascript editor-xlsx
// How do I get back to the parent table from one of its columns in a spreadsheet?

// Identify which formatted table owns a given column when working with multiple tables in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let column = table.GetListColumns()[0];
let parentTable = column.GetParent();

worksheet.GetRange("D1").SetValue("Parent table name:");
worksheet.GetRange("E1").SetValue(parentTable.GetName());
```
