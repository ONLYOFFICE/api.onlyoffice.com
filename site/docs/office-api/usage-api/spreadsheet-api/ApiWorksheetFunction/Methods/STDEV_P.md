# STDEV_P

Calculates standard deviation based on the entire population given as arguments (ignores logical values and text).

## Syntax

```javascript
expression.STDEV_P(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number[] \| number \| [ApiName](../../ApiName/ApiName.md) \| [ApiRange](../../ApiRange/ApiRange.md) |  | Up to 255 numeric values for which the standard deviation will be calculated. The first argument is required, subsequent arguments are optional. Arguments can be numbers, names, ranges, or arrays of numbers. |

## Returns

number

## Example

This example shows how to calculate standard deviation based on the entire population given as arguments (ignores logical values and text).

```javascript editor-xlsx
// How to calculate standard deviation based on the entire population.

// Use a function to get the standard deviation.

const worksheet = Api.GetActiveSheet();

let valueArr = [
  3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 13, 14, 3, 5, 17, 18,
];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

let func = Api.GetWorksheetFunction();
let ans = func.STDEV_P(3,2,3,4,5,6,7,8,9,10,11,12,0,1,13,14,3,5,17,18); 

worksheet.GetRange("C1").SetValue(ans);
```
