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

This example shows how to return the average of the absolute deviations of data points from their mean.

```javascript editor-xlsx
// How to get an average of the absolute deviations.

// Use function to get the average of the absolute deviations of data points from their mean.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.AVEDEV(78, 98, 123, 45, 70, 67, 3, 9, 289));
```
