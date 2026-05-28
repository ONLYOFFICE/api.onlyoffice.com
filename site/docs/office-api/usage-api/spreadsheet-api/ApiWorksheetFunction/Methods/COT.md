# COT

Returns the cotangent of an angle.

## Syntax

```javascript
expression.COT(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle in radians for which the cotangent will be returned. |

## Returns

number

## Example

Calculate the cotangent of an angle in a spreadsheet.

```javascript editor-xlsx
// What is the reciprocal tangent value in a spreadsheet?

// Find the inverted tangent ratio for a given angle in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COT(0.785398));
```
