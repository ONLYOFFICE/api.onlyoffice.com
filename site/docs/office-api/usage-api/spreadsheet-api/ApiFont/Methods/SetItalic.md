# SetItalic

Sets the italic property to the specified font.
💡 This method will work only with the text format of the cell.

## Syntax

```javascript
expression.SetItalic(isItalic);
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isItalic | Required | boolean |  | Specifies that the text characters are displayed italic. |

## Returns

This method doesn't return any data.

## Example

Apply italic formatting to selected text characters in a spreadsheet.

```javascript editor-xlsx
// How do I make specific characters appear in italics in a spreadsheet?

// Slant a portion of cell text by enabling the italic style in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetItalic(true);
```
