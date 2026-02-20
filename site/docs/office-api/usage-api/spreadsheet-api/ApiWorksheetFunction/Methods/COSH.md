# COSH

Returns the hyperbolic cosine of a number.

## Syntax

```javascript
expression.COSH(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Any real number for which the hyperbolic cosine will be returned. |

## Returns

number

## Example

This example shows how to get the hyperbolic cosine of a number.

```javascript editor-xlsx playground
// How to find a hyperbolic cosine.

// Use function to get the hyperbolic cosine of an angle.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COSH(3));
```
