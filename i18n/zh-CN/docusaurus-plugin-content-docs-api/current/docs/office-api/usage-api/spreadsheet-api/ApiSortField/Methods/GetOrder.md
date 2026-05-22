# GetOrder

返回排序顺序："xlAscending" 或 "xlDescending"。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.GetOrder();
```

`expression` - 表示 [ApiSortField](../ApiSortField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[SortOrder](../../Enumeration/SortOrder.md)

## 示例

读取电子表格中排序条件是否将值从小到大或相反排列。

```javascript editor-xlsx
// How do I tell if a sort field is set to ascending or descending in a spreadsheet?

// Verify the direction in which a column's values will be ordered after sorting in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("A3").SetValue("Apples");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
let field = sort.GetSortFields().Add(worksheet.GetRange("A1:A3"), "xlSortOnValues", "xlDescending");

worksheet.GetRange("C1").SetValue("Sort order:");
worksheet.GetRange("D1").SetValue(field.GetOrder());
```
