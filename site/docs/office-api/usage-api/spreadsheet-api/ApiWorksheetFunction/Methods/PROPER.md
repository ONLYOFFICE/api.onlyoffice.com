# PROPER

Converts a text string to proper case: the first letter in each word to uppercase, and all other letters to lowercase.

## Syntax

```javascript
expression.PROPER(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text enclosed in quotation marks, a formula that returns text, or a reference to a cell containing text to partially capitalize. |

## Returns

string

## Example

Format text so the first letter of each word is uppercase in a spreadsheet.

```javascript editor-xlsx
// How do I capitalize the first letter of every word in a spreadsheet?

// Convert mixed-case text to proper case format in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PROPER("dAVID CONNOR"));
```
