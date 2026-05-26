# SEC

Returns the secant of an angle.

## Syntax

```javascript
expression.SEC(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle in radians for which the secant will be returned. |

## Returns

number

## Example

Return the secant of an angle in a spreadsheet.

```javascript editor-xlsx
// Get the secant value of an angle using the SEC function.

// Apply the function to calculate and display the result in a cell.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SEC(0.785398));
```
