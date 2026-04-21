# FALSE

Returns the -**false** logical value.

## Syntax

```javascript
expression.FALSE();
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Return the false logical value in a spreadsheet.

```javascript editor-xlsx
// How to get false value in a spreadsheet.

// Use function to get a boolean false in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.FALSE(); //returns false, doesnt require arguments
worksheet.GetRange("C1").SetValue(ans);
```
