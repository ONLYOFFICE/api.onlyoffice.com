# STDEVPA

Calculates standard deviation based on the entire population, including logical values and text.\
Text and the -**false** logical value have the value 0; the -**true** logical value has the value 1.

## Syntax

```javascript
expression.STDEVPA(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number[] \| number \| string \| boolean \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | Up to 255 values for which the standard deviation will be calculated. The first argument is required, subsequent arguments are optional. Arguments can be numbers, logical values, text strings, names, ranges, or arrays. |

## Returns

number

## Example

This example shows how to calculate standard deviation based on the entire population, including logical values and text. Text and the false logical value have the value 0; the true logical value has the value 1.

```javascript editor-xlsx
// How to calculate standard deviation based on the entire population considering logical and text data types.

// Use a function to get the standard deviation.

const worksheet = Api.GetActiveSheet();

let valueArr = [1, 0, 0, false, 5, 1, 0, 0, 2, true, 6, 7, 6, 8, 10, 12];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

let func = Api.GetWorksheetFunction();
let ans = func.STDEVPA(1, 0, 0, false, 5, 1, 0, 0, 2, true, 6, 7, 6, 8, 10, 12); //includes logical values

worksheet.GetRange("C1").SetValue(ans);
```
