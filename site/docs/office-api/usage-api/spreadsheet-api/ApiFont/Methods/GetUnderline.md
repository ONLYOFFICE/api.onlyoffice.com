# GetUnderline

Returns the type of underline applied to the specified font.

## Syntax

```javascript
expression.GetUnderline();
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[XlUnderlineStyle](../../Enumeration/XlUnderlineStyle.md) \| null

## Example

Retrieve the underline style applied to a text character in a spreadsheet.

```javascript editor-xlsx
// How do I find out which underline style is used on a piece of text in a spreadsheet?

// Read the underline setting from a character's font and display the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetUnderline("xlUnderlineStyleSingle");
let underlineType = font.GetUnderline();
worksheet.GetRange("B3").SetValue("Underline property: " + underlineType);
```
