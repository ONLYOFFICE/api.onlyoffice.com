# TIME

Converts hours, minutes and seconds given as numbers to a serial number, formatted with the time format.

## Syntax

```javascript
expression.TIME(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number from 0 to 23 representing the hour. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number from 0 to 59 representing the minute. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number from 0 to 59 representing the second. |

## Returns

number

## Example

Convert hours, minutes and seconds given as numbers to a serial number, formatted with the time format in a spreadsheet.

```javascript editor-xlsx
// Create a serial number from time components for use in spreadsheet calculations.

// Apply the TIME function with hour, minute, and second parameters.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TIME(23, 4, 39));
```
