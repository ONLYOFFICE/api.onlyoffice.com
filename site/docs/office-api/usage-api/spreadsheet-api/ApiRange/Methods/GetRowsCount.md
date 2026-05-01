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

Get a count of rows in the specified range in a spreadsheet.

```javascript editor-xlsx
// How to get a count of rows in the range in a spreadsheet.

// Get a count of rows in the range and display it in another cell.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:C4");
range.SetValue("I was selected");
worksheet.GetRange("A5").SetValue("Rows count in the selected range should be 4: " + range.GetRowsCount());
```
