# ASINH

Returns the inverse hyperbolic sine of a number.

## Syntax

```javascript
expression.ASINH(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Any real number equal to or greater than 1. |

## Returns

number

## Example

This example shows how to return the inverse hyperbolic sine of a number.

```javascript editor-xlsx playground
// How to get an inverse hyperbolic sine.

// Use function to get an inverse hyperbolic sine of a number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ASINH(4));
```
