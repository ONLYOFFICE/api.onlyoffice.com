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

Return the tangent of an angle in a spreadsheet.

```javascript editor-xlsx
// How to return a tangent of an angle in a spreadsheet.

// Use a function to calculate angle's tangent in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TAN(0.5));
```
