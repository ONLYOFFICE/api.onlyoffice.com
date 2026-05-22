# GetWorksheetFunction

Returns the ApiWorksheetFunction object.

## Syntax

```javascript
expression.GetWorksheetFunction();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiWorksheetFunction](../../ApiWorksheetFunction/ApiWorksheetFunction.md)

## Example

Access and run built-in calculation functions in a spreadsheet.

```javascript editor-xlsx
// How do I use built-in math and text functions in a spreadsheet?

// Apply a built-in function to a cell value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ASC("text"));
```
