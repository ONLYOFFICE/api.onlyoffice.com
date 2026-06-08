# PI

Returns the mathematical constant - **pi**, equal to - **3.14159265358979**, accurate to 15 digits.

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

Insert the mathematical constant pi into a cell in a spreadsheet.

```javascript editor-xlsx
// How do I get the value of pi for mathematical calculations in a spreadsheet?

// Use pi to calculate circles, circumference, and other geometric formulas in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PI());
```
