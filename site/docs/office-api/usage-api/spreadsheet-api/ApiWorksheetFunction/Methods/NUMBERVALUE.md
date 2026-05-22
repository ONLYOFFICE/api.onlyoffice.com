# NUMBERVALUE

Converts text to a number, in a locale-independent way.

## Syntax

```javascript
expression.NUMBERVALUE(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The string representing a number to convert. |
| arg2 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The character used as the decimal separator in the string. |
| arg3 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The character used as the group separator in the string. |

## Returns

number

## Example

Convert text to a number using custom decimal and thousands separators in a spreadsheet.

```javascript editor-xlsx
// How do I parse a text value as a number in a spreadsheet?

// Transform text with different regional number formats into numeric values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NUMBERVALUE("2.500,27", ",", "."));
```
