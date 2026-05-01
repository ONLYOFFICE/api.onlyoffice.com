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

Return the inverse hyperbolic tangent in a spreadsheet.

```javascript editor-xlsx
// How to get return the inverse hyperbolic tangent in a spreadsheet.

// Use function to get an inverse hyperbolic tangent in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ATANH(0.5));
```
