# ATANH

Returns the inverse hyperbolic tangent of a number.

## Syntax

```javascript
expression.ATANH(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Any real number between -1 and 1 excluding -1 and 1. |

## Returns

number

## Example

Calculate the inverse hyperbolic tangent of a number in a spreadsheet.

```javascript editor-xlsx
// Compute the inverse hyperbolic tangent of a value in a spreadsheet.

// Recover the original input from its hyperbolic tangent in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ATANH(0.5));
```
