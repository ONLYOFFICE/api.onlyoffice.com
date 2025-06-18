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

This example shows how to return the mathematical constant pi, equal to 3.14159265358979, accurate to 15 digits.

```javascript editor-xlsx
// How to return the mathematical constant pi.

// Use a function to return a constant pi.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.PI());
```
