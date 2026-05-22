# GCD

Returns the greatest common divisor.

## Syntax

```javascript
expression.GCD(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Up to 255 numeric values for which the greatest common divisor will be returned. The first argument is required, subsequent arguments are optional. |

## Returns

number

## Example

Find the greatest common divisor of multiple numbers in a spreadsheet.

```javascript editor-xlsx
// How do I determine the largest number that divides all my values evenly in a spreadsheet?

// Get the highest common factor for a set of integers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.GCD(28, 16, 878, 800, 1650, 2000));
```
