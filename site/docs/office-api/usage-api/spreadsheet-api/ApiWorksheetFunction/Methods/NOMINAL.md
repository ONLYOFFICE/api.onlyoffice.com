# NOMINAL

Returns the annual nominal interest rate.

## Syntax

```javascript
expression.NOMINAL(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The effective interest rate of the security. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of compounding periods per year. |

## Returns

number

## Example

This example shows how to return the annual nominal interest rate.

```javascript editor-xlsx
// How to calculate the annual nominal interest rate.

// Use a function to get the annual nominal interest rate.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NOMINAL(0.7, 4));
```
