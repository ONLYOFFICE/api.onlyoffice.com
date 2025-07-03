# TANH

Returns the hyperbolic tangent of a number.

## Syntax

```javascript
expression.TANH(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Any real number for which the hyperbolic tangent will be returned. |

## Returns

number

## Example

This example shows how to return the hyperbolic tangent of a number.

```javascript editor-xlsx
// How to return the hyperbolic tangent of a number.

// Use a function to calculate angle's hyperbolic tangent.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.TANH(6));
```
