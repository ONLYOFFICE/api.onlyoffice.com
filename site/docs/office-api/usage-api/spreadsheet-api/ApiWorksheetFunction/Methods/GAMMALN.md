# GAMMALN

Returns the natural logarithm of the gamma function.

## Syntax

```javascript
expression.GAMMALN(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value for which the natural logarithm of the gamma function will be calculated, a positive number. |

## Returns

number

## Example

Calculate the natural logarithm of a gamma function value in a spreadsheet.

```javascript editor-xlsx
// How do I find the natural logarithm of a gamma function in a spreadsheet?

// Get the logarithmic equivalent of a gamma function result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAMMALN(0.5);
worksheet.GetRange("B2").SetValue(ans);
```
