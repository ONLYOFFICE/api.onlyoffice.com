# SetName

Sets the font name property to the specified font.
💡 This method will work only with the text format of the cell.

## Syntax

```javascript
expression.SetName(FontName);
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| FontName | Required | string |  | Font name. |

## Returns

This method doesn't return any data.

## Example

Change the typeface used for specific text characters in a spreadsheet.

```javascript editor-xlsx
// How do I assign a different font family to part of the text in a spreadsheet?

// Switch selected characters to a named typeface and confirm the change in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetName("Font 1");
let fontName = font.GetName();
worksheet.GetRange("B3").SetValue("Font name: " + fontName);
```
