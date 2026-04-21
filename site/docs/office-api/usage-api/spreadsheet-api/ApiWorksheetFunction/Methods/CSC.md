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

Get the cosecant of an angle in a spreadsheet.

```javascript editor-xlsx
// How to return cosecant in a spreadsheet.

// Use function to get the cosecant of an angle in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CSC(0.785398));
```
