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
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A numeric value that specifies which function to use: **1** - AVERAGE, **2** - COUNT, **3** - COUNTA, **4** - MAX, **5** - MIN, |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A numeric value that specifies which values should be ignored: **0** or omitted - nested SUBTOTAL and AGGREGATE functions, |
| arg3 | Required | number \| [ApiRange](../../ApiRange/ApiRange.md) \| number[] |  | The first numeric value for which the aggregate value will be returned. |
| args | Required | number \| [ApiRange](../../ApiRange/ApiRange.md) \| number[] |  | Up to 253 numeric values or a range of cells containing the values for which the aggregate value will be returned. |

## Returns

number

## Example

Summarize numbers while skipping errors and hidden rows in a spreadsheet.

```javascript editor-xlsx
// Use the AGGREGATE function to calculate totals with filtering options in a spreadsheet.

// Get a single result value by choosing which calculation method to apply in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.AGGREGATE(9, 4, 10, 30, 50, 5));
```
