# HARMEAN

Returns the harmonic mean of a data set of positive numbers: the reciprocal of the arithmetic mean of reciprocals.

## Syntax

```javascript
expression.HARMEAN(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) \| number[] \| [ApiName](../../ApiName/ApiName.md) |  | Up to 255 numeric values for which the harmonic mean will be calculated. Arguments can be numbers, names, ranges, or arrays of numbers. |

## Returns

number

## Example

Calculate the harmonic mean of a set of positive numbers in a spreadsheet.

```javascript editor-xlsx
// How do I find the harmonic average for my data in a spreadsheet?

// Get the reciprocal of the average of reciprocals in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.HARMEAN(28, 16, 878, 800, 1650, 2000);
worksheet.GetRange("B2").SetValue(ans);
```
