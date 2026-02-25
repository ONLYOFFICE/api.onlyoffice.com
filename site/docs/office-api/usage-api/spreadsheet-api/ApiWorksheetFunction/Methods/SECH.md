# SECH

Returns the hyperbolic secant of an angle.

## Syntax

```javascript
expression.SECH(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle in radians for which the hyperbolic secant will be returned. |

## Returns

number

## Example

This example shows how to return the hyperbolic secant of an angle.

```javascript editor-xlsx playground
// How to get angle's hyperbolic secant.

// Use a function to calculate the hyperbolic secant of an angle.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SECH(0.785398));
```
