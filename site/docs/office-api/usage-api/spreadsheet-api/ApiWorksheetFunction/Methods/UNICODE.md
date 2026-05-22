# UNICODE

Returns the number (code point) corresponding to the first character of the text.

## Syntax

```javascript
expression.UNICODE(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The character for which the Unicode value will be returned. |

## Returns

number

## Example

Return the number (code point) corresponding to the first character of the text in a spreadsheet.

```javascript editor-xlsx
// The UNICODE function converts characters to their numeric Unicode values.

// Apply the function to obtain a character's code point from text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.UNICODE("example"));
```
