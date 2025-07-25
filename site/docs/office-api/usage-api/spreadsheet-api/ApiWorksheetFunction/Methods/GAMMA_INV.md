# GAMMA_INV

Returns the inverse of the gamma cumulative distribution: if p = GAMMA.DIST(x,...), then GAMMA.INV(p,...) = x.

## Syntax

```javascript
expression.GAMMA_INV(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The probability associated with the gamma distribution, a number between 0 and 1, inclusive. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The alpha parameter of the distribution, a positive number. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The beta parameter of the distribution, a positive number. If this parameter is equal to 1, the function returns the standard gamma distribution. |

## Returns

number

## Example

This example shows how to return the inverse of the gamma cumulative distribution: if p = GAMMA.DIST(x,...), then GAMMA.INV(p,...) = x.

```javascript editor-xlsx
// How to calculate the inverse of the gamma cumulative distribution.

// Use a function to get the inverse of the gamma cumulative distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.GAMMA_INV(0.4, 9, 2);
worksheet.GetRange("B2").SetValue(ans);


```
