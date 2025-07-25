# PDURATION

Returns the number of periods required by an investment to reach a specified value.

## Syntax

```javascript
expression.PDURATION(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The interest rate per period. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The present value of the investment. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The desired future value of the investment. |

## Returns

number

## Example

This example shows how to return the number of periods required by an investment to reach a specified value.

```javascript editor-xlsx
// How to get periods required to get a value of an investment.

// Use a function to get the number of periods required by an investment to reach a specified value.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.PDURATION("2.50%", 2000, 2200));
```
