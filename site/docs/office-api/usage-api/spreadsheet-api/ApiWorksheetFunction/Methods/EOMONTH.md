# EOMONTH

Returns the serial number of the last day of the month before or after the specified number of months.

## Syntax

```javascript
expression.EOMONTH(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A serial date number that represents the start date. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of months before or after the start date. |

## Returns

number

## Example

Return the serial number of the last day of the month before or after the specified number of months in a spreadsheet.

```javascript editor-xlsx
// How to get a date of the last day of the month before or after specified months in a spreadsheet.

// Use function to get the serial number of the last day of the month before or after the specified number of months in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.EOMONTH("3/16/2018", 10); 

worksheet.GetRange("C1").SetValue(ans);
```
