# GetSortFields

返回排序字段集合。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.GetSortFields();
```

`expression` - 表示 [ApiSort](../ApiSort.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiSortFields](../../ApiSortFields/ApiSortFields.md)

## 示例

检索电子表格中为格式化表格定义的排序条件列表。

```javascript editor-xlsx
// How do I access all the columns and rules that control how a table is sorted in a spreadsheet?

// Read the full set of sort fields to inspect or modify ordering rules before sorting in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("B2").SetValue(150);
worksheet.GetRange("A3").SetValue("Apples");
worksheet.GetRange("B3").SetValue(100);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let sort = table.GetSort();
let sortFields = sort.GetSortFields();

worksheet.GetRange("D1").SetValue("Sort fields count:");
worksheet.GetRange("E1").SetValue(sortFields.GetCount());
```
