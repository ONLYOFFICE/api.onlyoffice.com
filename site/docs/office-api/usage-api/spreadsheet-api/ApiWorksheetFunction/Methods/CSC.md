# CSC

Returns the cosecant of an angle.

## Syntax

```javascript
expression.CSC(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle in radians for which the cosecant will be returned. |

## Returns

number

## Example

Calculate the cosecant (reciprocal of sine) for an angle in a spreadsheet.

```javascript editor-xlsx
// What is the cosecant value in a spreadsheet?

// Determine the trigonometric cosecant ratio in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CSC(0.785398));
```
