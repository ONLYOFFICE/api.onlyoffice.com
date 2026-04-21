# AVERAGE

Returns the average (arithmetic mean) of the specified arguments.

## Syntax

```javascript
expression.AVERAGE(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| number[] |  | Up to 255 numeric values for which the average value will be returned. The first argument is required, subsequent arguments are optional. Arguments can be numbers, names, or arrays of numbers. |

## Returns

number

## Example

Return the average of the absolute deviations of data points from their mean in a spreadsheet.

```javascript editor-xlsx
// How to get an average of the absolute deviations in a spreadsheet.

// Use function to get the average of the absolute deviations of data points from their mean in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.AVERAGE(123, 197, 46, 345, 67, 456);
worksheet.GetRange("B2").SetValue(ans);
```
