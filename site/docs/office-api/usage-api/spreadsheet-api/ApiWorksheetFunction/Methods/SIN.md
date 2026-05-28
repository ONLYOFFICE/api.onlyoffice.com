# SIN

Returns the sine of an angle.

## Syntax

```javascript
expression.SIN(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle in radians for which the sine will be returned. If your argument is in degrees, multiply it by *PI()/180*. |

## Returns

number

## Example

Return the sine of an angle in a spreadsheet.

```javascript editor-xlsx
// Calculate the sine value of an angle using the SIN function.

// Apply the function to compute and display the result in a cell.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SIN(0.5));
```
