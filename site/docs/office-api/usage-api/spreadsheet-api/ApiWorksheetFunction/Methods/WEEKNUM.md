# WEEKNUM

Returns the week number in the year.

## Syntax

```javascript
expression.WEEKNUM(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The date-time code used for date and time calculation. |
| arg2 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number (1 or 2) that determines the type of the return value: Sunday (1) or Monday (2). |

## Returns

number

## Example

Get the week number of a date within the year in a spreadsheet.

```javascript editor-xlsx
// How do I find which week of the year a specific date belongs to in a spreadsheet?

// Calculate the numeric week position for any date in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.WEEKNUM("11/5/2018", 2); 

worksheet.GetRange("C1").SetValue(ans);
```
