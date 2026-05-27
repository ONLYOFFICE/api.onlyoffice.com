# OCT2DEC

Converts an octal number to decimal.

## Syntax

```javascript
expression.OCT2DEC(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The octal number to convert. |

## Returns

number

## Example

Convert an octal number to decimal in a spreadsheet.

```javascript editor-xlsx
// How do I convert an octal value to decimal in a spreadsheet?

// Change an octal number into its decimal equivalent in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.OCT2DEC(7777777634));
```
