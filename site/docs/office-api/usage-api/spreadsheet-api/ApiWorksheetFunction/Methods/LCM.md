# LCM

Returns the least common multiple.

## Syntax

```javascript
expression.LCM(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Up to 255 numeric values for which the least common multiple will be returned. The first argument is required, subsequent arguments are optional. |

## Returns

number

## Example

Calculate the least common multiple of integers in a spreadsheet.

```javascript editor-xlsx
// How do I find the smallest number that all values divide evenly into in a spreadsheet?

// Get the least common multiple for use in fraction operations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LCM(4, 6, 8, 8, 12, 24, 2, 1));
```
