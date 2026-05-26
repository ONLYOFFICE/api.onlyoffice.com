# GetWorksheet

Returns the Worksheet object that represents the worksheet containing the specified range. It will be available in the read-only mode.

## Syntax

```javascript
expression.GetWorksheet();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md)

## Example

Find which sheet a selected range belongs to in a spreadsheet.

```javascript editor-xlsx
// How do I identify the sheet that contains a particular range in a spreadsheet?

// Confirm the parent sheet of a range by checking its name in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:C1");
range.SetValue("1");
let oSheet = range.GetWorksheet();
worksheet.GetRange("A3").SetValue("Worksheet name: " + oSheet.GetName());
```
