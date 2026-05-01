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

Return the hyperbolic secant of an angle in a spreadsheet.

```javascript editor-xlsx
// How to get angle's hyperbolic secant in a spreadsheet.

// Use a function to calculate the hyperbolic secant of an angle in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SECH(0.785398));
```
