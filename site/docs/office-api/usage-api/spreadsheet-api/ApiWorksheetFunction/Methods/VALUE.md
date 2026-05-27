# VALUE

Converts a text string that represents a number to a number.

## Syntax

```javascript
expression.VALUE(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text enclosed in quotation marks or a reference to a cell containing the text which will be converted to a number. |

## Returns

number

## Example

Convert a text string that represents a number to a number in a spreadsheet.

```javascript editor-xlsx
// The VALUE function parses numeric text and returns actual numeric values.

// Apply the function to convert numeric text strings to numbers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.VALUE("$3.50"));
```
