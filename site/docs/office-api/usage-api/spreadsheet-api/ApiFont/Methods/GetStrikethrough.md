# GetStrikethrough

Returns the strikethrough property of the specified font.

## Syntax

```javascript
expression.GetStrikethrough();
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean \| null

## Example

Get the strikethrough property of the specified font in a spreadsheet.

```javascript editor-xlsx
// How to determine a font strikethrough property in a spreadsheet.

// Get a boolean value that represents whether a font is strikethrough or not and show the value in the worksheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetStrikethrough(true);
let isStrikethrough = font.GetStrikethrough();
worksheet.GetRange("B3").SetValue("Strikethrough property: " + isStrikethrough);
```
