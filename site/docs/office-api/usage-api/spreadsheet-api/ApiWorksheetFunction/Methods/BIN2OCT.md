# BIN2OCT

Converts a binary number to octal.

## Syntax

```javascript
expression.BIN2OCT(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The binary number which will be convertrd. |
| arg2 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of characters to use. |

## Returns

number

## Example

Transform binary notation into octal format in a spreadsheet.

```javascript editor-xlsx
// How do I change a binary code into octal notation for legacy systems in a spreadsheet?

// Translate base-2 values to base-8 representation for Unix and file permissions in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BIN2OCT(1110011100, 4));
```
