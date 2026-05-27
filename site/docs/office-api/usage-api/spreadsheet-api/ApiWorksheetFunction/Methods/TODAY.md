# TODAY

Returns the current date in the *MM/dd/yy* format.

## Syntax

```javascript
expression.TODAY();
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Return the current date in the MM/dd/yy format in a spreadsheet.

```javascript editor-xlsx
// Retrieve the system date and display it with the built-in time format.

// Apply the TODAY function to insert the current date into a cell.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TODAY());
```
