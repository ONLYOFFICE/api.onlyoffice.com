# GetSort

返回此列表对象的 Sort 对象。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetSort();
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiSort](../../ApiSort/ApiSort.md)

## 示例

检索电子表格中附加到表格的排序设置。

```javascript editor-xlsx
// How do I access the sorting configuration of a table in a spreadsheet?

// Inspect the current sort order of a table before applying or overriding it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let sort = table.GetSort();
worksheet.GetRange("D1").SetValue("Sort orientation:");
worksheet.GetRange("E1").SetValue(sort.GetOrientation());
```
