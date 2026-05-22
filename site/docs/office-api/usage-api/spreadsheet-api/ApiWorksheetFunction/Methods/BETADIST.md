# BETADIST

Returns the cumulative beta probability density function.

## Syntax

```javascript
expression.BETADIST(arg1, arg2, arg3, arg4, arg5);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value between A and B at which to evaluate the function. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The alpha parameter of the distribution which must be greater than 0. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The beta parameter of the distribution which must be greater than 0. |
| arg4 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An optional lower bound to the interval of x (A). If omitted, it is equal to 0. |
| arg5 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An optional upper bound to the interval of x (B). If omitted, it is equal to 1. |

## Returns

number

## Example

Determine cumulative probability for beta distribution in a spreadsheet.

```javascript editor-xlsx
// How do I calculate what percentage of outcomes fall below a specific value in a spreadsheet?

// Assess the probability that a random result occurs up to a given threshold in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.BETADIST(0.4, 4, 5);
worksheet.GetRange("B2").SetValue(ans);
```
