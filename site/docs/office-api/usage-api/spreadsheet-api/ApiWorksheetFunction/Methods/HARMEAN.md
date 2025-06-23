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

This example shows how to return the harmonic mean of a data set of positive numbers: the reciprocal of the arithmetic mean of reciprocals.

```javascript editor-xlsx
// How to calculate the harmonic mean of a data set of positive numbers.

// Use a function to calculate harmonic mean.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.HARMEAN(28, 16, 878, 800, 1650, 2000);
worksheet.GetRange("B2").SetValue(ans);


```
