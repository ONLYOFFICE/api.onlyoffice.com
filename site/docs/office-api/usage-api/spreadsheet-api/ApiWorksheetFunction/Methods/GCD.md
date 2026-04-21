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

Calculate the greatest common divisor in a spreadsheet.

```javascript editor-xlsx
// How to find the greatest common divisor in a spreadsheet.

// Use a function to calculate the greatest common divisor in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.GCD(28, 16, 878, 800, 1650, 2000));
```
