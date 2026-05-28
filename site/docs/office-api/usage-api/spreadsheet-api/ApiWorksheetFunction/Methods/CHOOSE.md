# CHOOSE

Chooses a value or action to perform from a list of values, based on an index number.

## Syntax

```javascript
expression.CHOOSE(arg1, args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The position of the value in the list of values, a numeric value greater than or equal to 1 but less than the number of values in the list of values. |
| args | Required | number \| string \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | Up to 254 values or the selected range of cells to analyze. The first argument is required, subsequent arguments are optional. Arguments can be numbers, ranges, names, or text strings. |

## Returns

number

## Example

Select one value from a list by specifying its position number in a spreadsheet.

```javascript editor-xlsx
// Return the item at a specific index from a collection of values in a spreadsheet.

// Use an index to access a particular entry in your choice options in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CHOOSE(2, 3, 4, 89, 76, 0));
```
