# COTH

Returns the hyperbolic cotangent of a number.

## Syntax

```javascript
expression.COTH(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle in radians for which the hyperbolic cotangent will be calculated. Its absolute value must be less than &lt;em&gt;2^27&lt;/em&gt;. |

## Returns

number

## Example

This example shows how to get the hyperbolic cotangent of a number.

```javascript editor-xlsx
// How to find a hyperbolic cotangent.

// Use function to get the hyperbolic cotangent of an angle.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.COTH(0.785398));
```
