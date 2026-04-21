# PI

Returns the mathematical constant -**pi**, equal to -**3.14159265358979**, accurate to 15 digits.

## Syntax

```javascript
expression.PI();
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Return the mathematical constant pi, equal to 3.14159265358979, accurate to 15 digits in a spreadsheet.

```javascript editor-xlsx
// How to return the mathematical constant pi in a spreadsheet.

// Use a function to return a constant pi in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PI());
```
