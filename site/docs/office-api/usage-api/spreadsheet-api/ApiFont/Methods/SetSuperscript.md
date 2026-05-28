# SetSuperscript

Sets the superscript property to the specified font.
💡 This method will work only with the text format of the cell.

## Syntax

```javascript
expression.SetSuperscript(isSuperscript);
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isSuperscript | Required | boolean |  | Specifies that the text characters are displayed superscript. |

## Returns

This method doesn't return any data.

## Example

Raise selected text characters above the baseline as superscript in a spreadsheet.

```javascript editor-xlsx
// How do I format part of the text as superscript in a spreadsheet?

// Lift a run of characters upward to create superscript notation in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
const characters = range.GetCharacters(9, 4);
const font = characters.GetFont();
font.SetSuperscript(true);
```
