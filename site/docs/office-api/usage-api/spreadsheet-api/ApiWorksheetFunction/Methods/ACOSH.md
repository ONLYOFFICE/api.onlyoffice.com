# ACOSH

Returns the inverse hyperbolic cosine of a number.

## Syntax

```javascript
expression.ACOSH(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Any real number equal to or greater than 1. |

## Returns

number

## Example

This example shows how to return the inverse hyperbolic cosine of a number.

```javascript editor-xlsx playground
// How to get an inverse hyperbolic cosine of a number and display it in the worksheet.

// Get a function that gets inverse hyperbolic cosine of a number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ACOSH(3.25));
```
