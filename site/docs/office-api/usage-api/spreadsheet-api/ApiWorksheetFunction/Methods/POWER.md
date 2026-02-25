# POWER

Returns the result of a number raised to a power.

## Syntax

```javascript
expression.POWER(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The base number. It can be any real number. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The exponent to which the base number is raised. |

## Returns

number

## Example

This example shows how to return the result of a number raised to a power.

```javascript editor-xlsx playground
// How to raise a number to a power.

// Use a function to calculate the result after raising a number to the power.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.POWER(23, 4));
```
