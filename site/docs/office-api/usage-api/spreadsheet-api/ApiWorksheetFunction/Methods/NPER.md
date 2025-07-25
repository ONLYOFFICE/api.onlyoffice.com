# NPER

Returns the number of periods for an investment based on periodic, constant payments and a constant interest rate.

## Syntax

```javascript
expression.NPER(arg1, arg2, arg3, arg4, arg5);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The payment made each period; it cannot change over the life of the investment. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Te present value, or the lump-sum amount that a series of future payments is worth now. |
| arg4 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The future value, or a cash balance which will be attained after the last payment is made. If omitted, zero is used. |
| arg5 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted. |

## Returns

number

## Example

This example shows how to return the number of periods for an investment based on periodic, constant payments and a constant interest rate.

```javascript editor-xlsx
// How to get the number of periods for an investment.

// Use a function to get the number of periods for an investment based on different parameters.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.NPER(0.1/12, -500, 10000, 0));
```
