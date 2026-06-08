# GetTotalsRowRange

Returns the range of the totals row of the table.
Returns null if the table has no totals row.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetTotalsRowRange();
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Retrieve the cell range occupied by a table's totals row in a spreadsheet.

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
