# GetParent

返回父 Sort 对象。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiSortFields](../ApiSortFields.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiSort](../../ApiSort/ApiSort.md)

## 示例

检索电子表格中拥有排序列集合的总体排序设置对象。

```javascript editor-xlsx
// How do I access the main sort settings from a list of sort columns in a spreadsheet?

// Trace back from the sort columns to the parent sort object to inspect its orientation or other properties in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
let sortFields = sort.GetSortFields();
let parentSort = sortFields.GetParent();

worksheet.GetRange("C1").SetValue("Parent orientation:");
worksheet.GetRange("D1").SetValue(parentSort.GetOrientation());
```
