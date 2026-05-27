# GetRng

返回排序应用于的数据正文范围。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetRng();
```

`expression` - 表示 [ApiSort](../ApiSort.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

检索电子表格中表格排序将重新排序的单元格范围。

```javascript editor-xlsx
// How do I find out which cells are included in the sort operation in a spreadsheet?

// Identify the exact data area affected by a sort in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let sort = table.GetSort();
let rng = sort.GetRng();

worksheet.GetRange("D1").SetValue("Sort range:");
worksheet.GetRange("E1").SetValue(rng ? rng.GetAddress() : "none");
```
