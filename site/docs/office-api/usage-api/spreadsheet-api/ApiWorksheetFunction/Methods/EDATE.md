# EDATE

Returns the serial number of the date which comes the indicated number of months before or after the start date.

## Syntax

```javascript
expression.EDATE(arg1, arg2);
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

Calculate a date that is a specified number of months before or after a given date in a spreadsheet.

```javascript editor-xlsx
// How do I find a date by adding or subtracting months from a starting date in a spreadsheet?

// Shift a date forward or backward by a number of months in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.EDATE("3/16/2018", 7); 

worksheet.GetRange("C1").SetValue(ans);
```
