# MAXA

Returns the largest value in a set of values. Does not ignore logical values and text.

## Syntax

```javascript
expression.MAXA(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number \| string \| boolean \| (number \| string \| boolean)[] \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | Up to 255 values (number, text, logical value) for which the largest value will be returned. The first argument is required, subsequent arguments are optional. Arguments can be numbers, logical values and text representations of numbers, names, ranges, or arrays. |

## Returns

number

## Example

Find the largest value in a set that includes numbers, text, and logical values in a spreadsheet.

```javascript editor-xlsx
// How do I find the maximum value when my list contains mixed data types in a spreadsheet?

// Get the highest value from a collection of mixed data in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:A5").GetValue();
let func = Api.WorksheetFunction;
let maxA = func.MAX(23, 45, true, "text", 0.89);
worksheet.GetRange("C1").SetValue(maxA);
```
