# AGGREGATE

Returns an aggregate in a list or database.

## Syntax

```javascript
expression.AGGREGATE(arg1, arg2, arg3, args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A numeric value that specifies which function to use: **1** - AVERAGE, **2** - COUNT, **3** - COUNTA, **4** - MAX, **5** - MIN, **6** - PRODUCT, **7** - STDEV.S, **8** - STDEV.P, **9** - SUM, **10** - VAR.S, **11** - VAR.P, **12** - MEDIAN, **13** - MODE.SNGL, **14** - LARGE, **15** - SMALL, **16** - PERCENTILE.INC, **17** - QUARTILE.INC, **18** - PERCENTILE.EXC, **19** - QUARTILE.EXC. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A numeric value that specifies which values should be ignored: **0** or omitted - nested SUBTOTAL and AGGREGATE functions, **1** - hidden rows, nested SUBTOTAL and AGGREGATE functions, **2** - error values, nested SUBTOTAL and AGGREGATE functions, **3** - hidden rows, error values, nested SUBTOTAL and AGGREGATE functions, **4** - nothing, **5** - hidden rows, **6** - error values, **7** - hidden rows and error values. |
| arg3 | Required | number \| [ApiRange](../../ApiRange/ApiRange.md) \| number[] |  | The first numeric value for which the aggregate value will be returned. |
| args | Required | number \| [ApiRange](../../ApiRange/ApiRange.md) \| number[] |  | Up to 253 numeric values or a range of cells containing the values for which the aggregate value will be returned. Arguments can be numbers, ranges, or arrays of numbers. |

## Returns

number

## Example

This example shows how to return an aggregate in a list or database.

```javascript editor-xlsx
// How to get an aggregate of a numbers and display it in the worksheet.

// Get a function that gets an aggregate from a list of numbers.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.AGGREGATE(9, 4, 10, 30, 50, 5));
```
