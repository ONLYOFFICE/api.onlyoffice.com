# GetSuperscript

Returns the superscript property of the specified font.

## Syntax

```javascript
expression.GetSuperscript();
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean \| null

## Example

Check whether a text character is displayed as superscript in a spreadsheet.

```javascript editor-xlsx
// How do I find out if a character is raised above the text baseline in a spreadsheet?

// Read the superscript setting from a character's font and display the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetSuperscript(true);
let isSuperscript = font.GetSuperscript();
worksheet.GetRange("B3").SetValue("Superscript property: " + isSuperscript);
```
