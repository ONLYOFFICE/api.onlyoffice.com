# GetRowsCount

Returns a number of rows in the current range.

## Syntax

```javascript
expression.GetRowsCount();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Count the number of rows in a selected range in a spreadsheet.

```javascript editor-xlsx
// How do I find out how many rows a range spans in a spreadsheet?

// Verify the total row count of a range by displaying the result in a nearby cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:C4");
range.SetValue("I was selected");
worksheet.GetRange("A5").SetValue("Rows count in the selected range should be 4: " + range.GetRowsCount());
```
