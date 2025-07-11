# BETA_DIST

Returns the beta probability distribution function.

## Syntax

```javascript
expression.BETA_DIST(arg1, arg2, arg3, arg4, arg5, arg6);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value between A and B at which to evaluate the function. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The alpha parameter of the distribution which must be greater than 0. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The beta parameter of the distribution which must be greater than 0. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | Specifies if this is the cumulative distribution function (**true**) or the probability density function (**false**). |
| arg5 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An optional lower bound to the interval of x (A). If omitted, it is equal to 0. |
| arg6 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An optional upper bound to the interval of x (B). If omitted, it is equal to 1. |

## Returns

number

## Example

This example shows how to return the cumulative beta probability density function.

```javascript editor-xlsx
// How to get a result from cumulative beta probability density function.

// Use function to get the cumulative beta probability density function.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.BETA_DIST(0.4, 4, 5, false);
worksheet.GetRange("B2").SetValue(ans);
```
