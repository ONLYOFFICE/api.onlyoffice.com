# DAY

Returns the day of the date given in the numerical format, a number from 1 to 31.

## Syntax

```javascript
expression.DAY(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number in the date-time code. |

## Returns

number

## Example

Return the day of the date given in the numerical format, a number from 1 to 31 in a spreadsheet.

```javascript editor-xlsx
// How to get a day from a date in a spreadsheet.

// Use function to get day from provided date in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.DAY("2018/3/16"); 

worksheet.GetRange("C1").SetValue(ans);
```
