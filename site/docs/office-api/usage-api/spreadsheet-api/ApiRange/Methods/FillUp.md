# FillUp

Copies the contents and formatting of the bottom row of the range into the remaining rows.
If the range has only one row, the method succeeds but makes no changes.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.FillUp();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Repeat the content of the bottom row across all rows above it in a spreadsheet.

```javascript editor-xlsx
// How do I propagate values and formulas upward through a column range in a spreadsheet?

// Extend data from the last row into every empty row above it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B5").SetValue("Alice");
worksheet.GetRange("C5").SetValue(1);
worksheet.GetRange("D5").SetValue("=C5+D6");

let range = worksheet.GetRange("B2:D5");
range.FillUp();
```
