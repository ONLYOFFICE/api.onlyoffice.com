# OCT2BIN

Converts an octal number to binary.

## Syntax

```javascript
expression.OCT2BIN(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The octal number to convert. |
| arg2 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of characters to use. |

## Returns

number

## Example

Convert an octal number to its binary representation in a spreadsheet.

```javascript editor-xlsx
// How do I change an octal value to binary in a spreadsheet?

// Transform a base-8 number into a base-2 format in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.OCT2BIN(7777777634));
```
