# GetHeaderRowRange

Returns the range of the header row of the table.
Returns null if the table has no header row.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetHeaderRowRange();
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Locate the cells that make up the header row of a table in a spreadsheet.

```javascript editor-xlsx
// How do I get the range occupied by a table's column headings in a spreadsheet?

// Identify which cells hold the column labels so you can read or style them separately in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let headerRange = table.GetHeaderRowRange();
worksheet.GetRange("D1").SetValue("Header range:");
worksheet.GetRange("E1").SetValue(headerRange.GetAddress());
```
