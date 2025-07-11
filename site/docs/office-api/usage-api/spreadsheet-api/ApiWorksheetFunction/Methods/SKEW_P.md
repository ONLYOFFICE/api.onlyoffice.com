# SKEW_P

Returns the skewness of a distribution based on a population: a characterization of the degree of asymmetry of a distribution around its mean.

## Syntax

```javascript
expression.SKEW_P(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number \| [ApiName](../../ApiName/ApiName.md) \| number[] \| [ApiRange](../../ApiRange/ApiRange.md) |  | Up to 255 numeric values for which the skewness of a distribution will be returned. The first argument is required, subsequent arguments are optional. Arguments can be numbers, names, ranges, or arrays of numbers. |

## Returns

number

## Example

This example shows how to return the skewness of a distribution based on a population: a characterization of the degree of asymmetry of a distribution around its mean.

```javascript editor-xlsx
// How to calaculate the skewness of a distribution based on a population.

// Use a function to get a characterization of the degree of asymmetry of a distribution around its mean.

const worksheet = Api.GetActiveSheet();

let valueArr = [1, 0, 0, 0, 0, 1, 0, 0, 2, 3, 4, 5, 6, 8, 10, 12];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

let func = Api.GetWorksheetFunction();
let ans = func.SKEW_P(1, 0, 0, 0, 0, 1, 0, 0, 2, 3, 4, 5, 6, 8, 10, 12);

worksheet.GetRange("C1").SetValue(ans);
```
