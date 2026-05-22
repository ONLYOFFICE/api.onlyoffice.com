# GetColumnsCount

Returns a number of columns in the current range.

## Syntax

```javascript
expression.GetColumnsCount();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Count the number of columns in a selected range in a spreadsheet.

```javascript editor-xlsx
// How do I find out how many columns a range spans in a spreadsheet?

// Display the column count of a range in a nearby cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:E2");
range.SetValue("I was selected");
worksheet.GetRange("A3").SetValue("Columns count in the selected range should be 5: " + range.GetColumnsCount());
```
