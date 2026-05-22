# CSCH

Returns the hyperbolic cosecant of an angle.

## Syntax

```javascript
expression.CSCH(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle in radians for which the hyperbolic cosecant will be calculated. Its absolute value must be less than *2^27*. |

## Returns

number

## Example

Calculate the hyperbolic cosecant for an angle in a spreadsheet.

```javascript editor-xlsx
// What is the hyperbolic cosecant value in a spreadsheet?

// Determine the inverse hyperbolic sine ratio in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CSCH(0.785398));
```
