# FV

Returns the future value of an investment based on periodic, constant payments and a constant interest rate.

## Syntax

```javascript
expression.FV(arg1, arg2, arg3, arg4, arg5);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The total number of payment periods in the investment. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The payment made each period; it cannot change over the life of the investment. |
| arg4 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The present value, or the lump-sum amount that a series of future payments is worth now. If omitted, it is equal to 0. |
| arg5 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A value representing the timing of payment: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted. |

## Returns

number

## Example

This example shows how to return the future value of an investment based on periodic, constant payments and a constant interest rate.

```javascript editor-xlsx
// How to get the future value of an investment.

// Use a function to get future value of an investment based on different parameters.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.FV(0.1/12, 2*12, -500, 10000));
```
