# BIN2DEC

Converts a binary number to decimal.

## Syntax

```javascript
expression.BIN2DEC(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The binary number which will be convertrd. |

## Returns

number

## Example

Convert a binary number to decimal in a spreadsheet.

```javascript editor-xlsx
// How to get a decimal representation of a binary number.

// Use function to convert a binary to decimal in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BIN2DEC(1110011100));
```
