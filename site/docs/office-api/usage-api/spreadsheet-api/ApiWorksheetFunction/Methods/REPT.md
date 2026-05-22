# REPT

Repeats text a given number of times. Use this function to fill a cell with a number of instances of a text string.

## Syntax

```javascript
expression.REPT(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text that will be repeated. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A positive number specifying the number of times to repeat text. |

## Returns

string

## Example

Repeat text multiple times in a spreadsheet.

```javascript editor-xlsx
// How do I duplicate text in a cell in a spreadsheet?

// Fill a cell with copies of the same text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.REPT("Text", 3));
```
