# NOW

Returns the current date and time in the *MM/dd/yy hh:mm* format.

## Syntax

```javascript
expression.NOW();
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Get the current date and time in a spreadsheet.

```javascript editor-xlsx
// How do I insert today's date and the current time in a spreadsheet?

// Display the current moment as a date and time value in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.NOW(); 

worksheet.GetRange("C1").SetValue(ans);
```
