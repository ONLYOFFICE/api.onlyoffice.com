# MAX

Returns the largest value in a set of values. Ignores logical values and text.

## Syntax

```javascript
expression.MAX(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number \| number[] \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | Up to 255 numeric values for which the largest number will be returned. The first argument is required, subsequent arguments are optional. Arguments can be numbers, names, ranges, or arrays of numbers. |

## Returns

number

## Example

Return the largest value in a set of values. Ignores logical values and text in a spreadsheet.

```javascript editor-xlsx
// How to get a maximum number from a list of numbers in a spreadsheet.

// Use a function to find a maximum from a list in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let max = func.MAX(123, 197, 46, 354, 67, 456);
worksheet.GetRange("C1").SetValue(max);
```
