# ASINH

Returns the inverse hyperbolic sine of a number.

## Syntax

```javascript
expression.ASINH(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Any real number equal to or greater than 1. |

## Returns

number

## Example

Calculate the inverse hyperbolic sine of a number in a spreadsheet.

```javascript editor-xlsx
// Apply the ASINH function for hyperbolic calculations in a spreadsheet.

// Obtain the inverse hyperbolic sine result for mathematical operations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ASINH(4));
```
