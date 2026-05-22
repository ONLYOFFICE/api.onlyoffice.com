# GetRange

Returns the range of the entire column, including the header and totals rows.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.GetRange();
```

`expression` - A variable that represents a [ApiListColumn](../ApiListColumn.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Retrieve the full cell range of a table column, including its header and totals rows, in a spreadsheet.

```javascript editor-xlsx
// How do I select all cells in a table column from header to totals in a spreadsheet?

// Use the complete column range to apply formatting or read values across every row in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let column = table.GetListColumns()[0];
let fullRange = column.GetRange();

worksheet.GetRange("D1").SetValue("Full column range:");
worksheet.GetRange("E1").SetValue(fullRange.GetAddress());
```
