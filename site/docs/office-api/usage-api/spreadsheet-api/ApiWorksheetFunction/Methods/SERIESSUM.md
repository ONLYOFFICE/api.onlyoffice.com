# SERIESSUM

Returns the sum of a power series based on the formula.

## Syntax

```javascript
expression.SERIESSUM(arg1, arg2, arg3, arg4);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The input value to the power series. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The initial power to which x will be raised. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The step by which to increase n for each term in the series. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A set of coefficients by which each successive power of x is multiplied. |

## Returns

number

## Example

This example shows how to return the sum of a power series based on the formula.

```javascript editor-xlsx playground
// How to calculate the sum of a power series.

// Use a function to sum up a power series using a formula.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SERIESSUM(5, 2, 1, 3));
```
