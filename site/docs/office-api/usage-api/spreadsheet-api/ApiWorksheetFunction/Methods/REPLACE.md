# REPLACE

Replaces part of a text string with a different text string.

## Syntax

```javascript
expression.REPLACE(arg1, arg2, arg3, arg4);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text where some characters will be replaced. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The position of the character in the original text that will be replaced with the new text. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of characters in the original text that will be replaced. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text that will replace characters in the original text. |

## Returns

string

## Example

Swap part of a text value with different text at a specific position in a spreadsheet.

```javascript editor-xlsx
// How do I change a portion of text within a larger string in a spreadsheet?

// Remove a section of text and insert new content in its place in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.REPLACE("Online Office", 8, 6, "portal"));
```
