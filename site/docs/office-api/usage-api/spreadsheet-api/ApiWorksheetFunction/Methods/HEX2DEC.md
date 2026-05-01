# HEX2DEC

Converts a hexadecimal number to decimal.

## Syntax

```javascript
expression.HEX2DEC(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The hexadecimal number to convert. |

## Returns

number

## Example

Convert a hexadecimal number to decimal in a spreadsheet.

```javascript editor-xlsx
// How to get a decimal from hexadecimal number in a spreadsheet.

// Use a function to convert a hexadecimal number to decimal in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.HEX2DEC("FFFFFFFF9C"));
```
