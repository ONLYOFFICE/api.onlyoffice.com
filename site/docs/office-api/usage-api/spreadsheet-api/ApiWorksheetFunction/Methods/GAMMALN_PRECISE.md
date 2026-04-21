# GAMMALN_PRECISE

Returns the natural logarithm of the gamma function.

## Syntax

```javascript
expression.GAMMALN_PRECISE(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value for which the natural logarithm of the gamma function will be calculated, a positive number. |

## Returns

number

## Example

Return the natural logarithm of the gamma function in a spreadsheet.

```javascript editor-xlsx
// How to calculate the natural logarithm of the gamma function in a spreadsheet.

// Use a function to calculate the natural logarithm of the gamma function value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAMMALN_PRECISE(0.5);
worksheet.GetRange("B2").SetValue(ans);
```
