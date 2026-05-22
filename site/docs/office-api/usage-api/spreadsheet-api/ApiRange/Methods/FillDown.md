# FillDown

Copies the contents and formatting of the top row of the range into the remaining rows.
If the range has only one row, the method succeeds but makes no changes.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.FillDown();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Repeat the content of the top row across all rows below it in a spreadsheet.

```javascript editor-xlsx
// How do I propagate values and formulas downward through a column range in a spreadsheet?

// Extend data from the first row into every empty row beneath it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B2").SetValue("Alice");
worksheet.GetRange("C2").SetValue(1);
worksheet.GetRange("D2").SetValue("=C2+D1");

let range = worksheet.GetRange("B2:D5");
range.FillDown();
```
