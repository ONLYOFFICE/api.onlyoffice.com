# ISPMT

Returns the interest paid during a specific period of an investment.

## Syntax

```javascript
expression.ISPMT(arg1, arg2, arg3, arg4);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The period for which the interest will be retuned. It must be in the range from 1 to the total number of payments. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The total number of payment periods in an investment. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The present value, or the lump-sum amount that a series of future payments is worth now. |

## Returns

number

## Example

This example shows how to return the interest paid during a specific period of an investment.

```javascript editor-xlsx
// How to get the investment interest paid during a specific period.

// Use a function to get an interest paid during a specific period.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ISPMT(0.1/12, 1, 2*12, 2000));
```
