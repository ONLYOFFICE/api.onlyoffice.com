# SUM

Adds all the numbers in a range of cells.

## Syntax

```javascript
expression.SUM(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string \| number \| boolean \| (string \| number \| boolean)[] |  | Up to 255 numeric values to add. The first argument is required, subsequent arguments are optional. Arguments can be numbers, logical values, text representations of numbers, ranges, or arrays. |

## Returns

number

## Example

This example shows how to add all the numbers in a range of cells.

```javascript editor-xlsx playground
// How to sum up all values from the list.

// Use a function to estimate a sum from the cells.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SUM(145, 37, 236, 69, 567, 92));
```
