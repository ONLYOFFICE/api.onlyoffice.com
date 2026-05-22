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

Extract the day number (1-31) from a date in a spreadsheet.

```javascript editor-xlsx
// What day of the month does a date represent in a spreadsheet?

// Pull the day component from a date value in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.DAY("2018/3/16"); 

worksheet.GetRange("C1").SetValue(ans);
```
