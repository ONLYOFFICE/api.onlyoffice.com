# WORKDAY

Returns the serial number of the date before or after a specified number of workdays.

## Syntax

```javascript
expression.WORKDAY(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A serial date number that represents the start date. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of nonweekend and non-holiday days before or after the start date. A positive value for days yields a future date; a negative value yields a past date. |
| arg3 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | An optional range or array of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays. |

## Returns

number

## Example

Find the date that is a specified number of workdays before or after a given date in a spreadsheet.

```javascript editor-xlsx
// How do I calculate a new date by adding or subtracting workdays in a spreadsheet?

// Determine a future or past workday date based on a number of working days in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.WORKDAY("12/7/1981", 56); 

worksheet.GetRange("C1").SetValue(ans);
```
