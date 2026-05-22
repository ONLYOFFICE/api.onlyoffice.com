# NETWORKDAYS

Returns the number of whole workdays between two dates.

## Syntax

```javascript
expression.NETWORKDAYS(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A serial date number that represents the start date. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A serial date number that represents the end date. |
| arg3 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| number[] |  | An optional range or array of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays. |

## Returns

number

## Example

Count working days between two dates in a spreadsheet.

```javascript editor-xlsx
// Calculate business days, excluding weekends in a spreadsheet.

// Determine workdays for project scheduling in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.NETWORKDAYS("3/16/2018", "12/31/2018"); 

worksheet.GetRange("C1").SetValue(ans);
```
