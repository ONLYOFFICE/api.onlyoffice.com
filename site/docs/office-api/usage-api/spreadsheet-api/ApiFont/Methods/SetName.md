# SetName

Sets the font name property to the specified font.\
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

This example sets the font name property to the specified font.

```javascript editor-xlsx
// How to change name of a font.

// Get a font object of characters and set a new name for it.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetName("Font 1");
let fontName = font.GetName();
worksheet.GetRange("B3").SetValue("Font name: " + fontName);
```
