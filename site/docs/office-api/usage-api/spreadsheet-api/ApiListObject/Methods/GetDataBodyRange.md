# GetDataBodyRange

Returns the range of the data rows in the table, excluding the header row and totals row.
Returns null if the table has no data rows.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetDataBodyRange();
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Find the data area of a table, excluding its header and totals rows, in a spreadsheet.

```javascript editor-xlsx
// How do I get the range that contains only the data rows of a table in a spreadsheet?

// Isolate the cells holding actual values so you can process them without touching header or totals in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let dataRange = table.GetDataBodyRange();
worksheet.GetRange("D1").SetValue("Data body range:");
worksheet.GetRange("E1").SetValue(dataRange.GetAddress());
```
