# GetBold

Returns the bold property of the specified font.

## Syntax

```javascript
expression.GetBold();
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean \| null

## Example

Get the bold property of the specified font in a spreadsheet.

```javascript editor-xlsx
// How to know whether a font style of characters is bold in a spreadsheet.

// Get a boolean value that represents whether a font is bold or not and show the value in the worksheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetBold(true);
let isBold = font.GetBold();
worksheet.GetRange("B3").SetValue("Bold property: " + isBold);
```
