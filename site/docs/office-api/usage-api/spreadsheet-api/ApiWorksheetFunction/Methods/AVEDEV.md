# AVEDEV

Returns the average of the absolute deviations of data points from their mean.

## Syntax

```javascript
expression.AVEDEV(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| number[] |  | Up to 255 numeric values for which the average of the absolute deviations will be returned. The first argument is required, subsequent arguments are optional. Arguments can be numbers, names, or arrays of numbers. |

## Returns

number

## Example

Return the average of the absolute deviations of data points from their mean in a spreadsheet.

```javascript editor-xlsx
// How to get an average of the absolute deviations in a spreadsheet.

// Use function to get the average of the absolute deviations of data points from their mean in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.AVEDEV(78, 98, 123, 45, 70, 67, 3, 9, 289));
```
