# GetSize

Returns the font size property of the specified font.

## Syntax

```javascript
expression.GetSize();
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number \| null

## Example

Get the font size property of the specified font in a spreadsheet.

```javascript editor-xlsx
// How to determine a font size of characters in a spreadsheet.

// Get the size of a font and display it in the worksheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetSize(18);
let size = font.GetSize();
worksheet.GetRange("B3").SetValue("Size property: " + size);
```
