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
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle in radians for which the hyperbolic cotangent will be calculated. Its absolute value must be less than *2^27*. |

## Returns

number

## Example

Calculate the hyperbolic cotangent of a number in a spreadsheet.

```javascript editor-xlsx
// What is the hyperbolic cotangent of an angle in a spreadsheet?

// Find the inverse hyperbolic tangent relationship in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COTH(0.785398));
```
