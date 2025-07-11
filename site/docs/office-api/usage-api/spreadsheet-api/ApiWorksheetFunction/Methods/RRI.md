# RRI

Returns an equivalent interest rate for the growth of an investment.

## Syntax

```javascript
expression.RRI(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of periods for the investment. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The present value of the investment. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The future value of the investment. |

## Returns

number

## Example

This example shows how to return an equivalent interest rate for the growth of an investment.

```javascript editor-xlsx
// How to get an investment growth interest rate.

// Use a function to an equivalent interest rate for the increase of an investment.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.RRI(12, 10000, 20000));
```
