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

Return the inverse hyperbolic sine of a number in a spreadsheet.

```javascript editor-xlsx
// How to get an inverse hyperbolic sine in a spreadsheet.

// Use function to get an inverse hyperbolic sine of a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ASINH(4));
```
