# GetTotalsRowRange

返回表格汇总行的范围。
如果表格没有汇总行，则返回 null。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.GetTotalsRowRange();
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

检索电子表格中表格汇总行占用的单元格范围。

```javascript editor-xlsx
// How do I find where the totals row sits inside a table in a spreadsheet?

// Confirm whether a totals row is visible before reading its position in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetShowTotals(true);

let totalsRange = table.GetTotalsRowRange();
worksheet.GetRange("D1").SetValue("Totals row range:");
worksheet.GetRange("E1").SetValue(totalsRange ? totalsRange.GetAddress() : "none");
```
