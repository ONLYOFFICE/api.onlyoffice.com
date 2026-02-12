# TAN

Returns the tangent of an angle.

## Syntax

```javascript
expression.TAN(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle in radians for which the tangent will be returned. If the argument is in degrees, multiply it by *PI()/180*. |

## Returns

number

## Example

This example shows how to return the tangent of an angle.

```javascript editor-xlsx playground
// How to return a tangent of an angle.

// Use a function to calculate angle's tangent.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TAN(0.5));
```
