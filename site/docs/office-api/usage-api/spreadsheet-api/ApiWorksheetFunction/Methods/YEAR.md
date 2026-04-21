# YEAR

Returns the year of a date, an integer in the range 1900-9999.

## Syntax

```javascript
expression.YEAR(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number in the date-time code, or a result of other formulas or functions. |

## Returns

number

## Example

Return the year of a date, an integer in the range 1900-9999 in a spreadsheet.

```javascript editor-xlsx
// How to return the year of a date in a spreadsheet.

// Use a function to get a year from a date object in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.YEAR("3/16/2018");

worksheet.GetRange("C1").SetValue(ans);
```
