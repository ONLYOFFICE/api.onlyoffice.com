# MONTH

Returns the month, a number from 1 (January) to 12 (December).

## Syntax

```javascript
expression.MONTH(arg1-);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1- | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number in the date-time code. |

## Returns

number

## Example

Return the month, a number from 1 (January) to 12 (December) in a spreadsheet.

```javascript editor-xlsx
// How to get the month from a date in a spreadsheet.

// Use a function to get a month in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.MONTH("3/16/2018"); 

worksheet.GetRange("C1").SetValue(ans);
```
