# ATAN

Returns the arctangent of a number in radians, in the range from *-Pi/2* to *Pi/2*.

## Syntax

```javascript
expression.ATAN(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle tangent. |

## Returns

number

## Example

Calculate the arctangent of a number in a spreadsheet.

```javascript editor-xlsx
// Find an angle in radians from a decimal value in a spreadsheet.

// Determine what angle produces a specific tangent ratio in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ATAN(0.25));
```
