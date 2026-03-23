# GetItalic

Returns the italic property of the specified font.

## Syntax

```javascript
expression.GetItalic();
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean \| null

## Example

This example shows how to get the italic property of the specified font.

```javascript editor-xlsx
// How to know whether a font style of characters is italic.

// Get a boolean value that represents whether a font is italic or not and show the value in the worksheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetItalic(true);
let isItalic = font.GetItalic();
worksheet.GetRange("B3").SetValue("Italic property: " + isItalic);
```
