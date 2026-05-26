# SIGN

Returns the sign of a number: - **1** if the number is positive, - **0** if the number is zero, or - **-1** if the number is negative.

## Syntax

```javascript
expression.SIGN(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Any real number. |

## Returns

number

## Example

Return the sign of a number: 1 if the number is positive, 0 if the number is zero, or -1 if the number is negative in a spreadsheet.

```javascript editor-xlsx
// Determine the sign of a number using the SIGN function.

// Apply the function to display the sign value in a cell.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SIGN(12));
```
