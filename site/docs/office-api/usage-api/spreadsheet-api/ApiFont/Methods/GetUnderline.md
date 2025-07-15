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

This example shows how to get the type of underline applied to the specified font.

```javascript editor-xlsx
// How to determine whether a font is underlined or not.

// Get a boolean value that represents whether a font has an underline property or not and show the value in the worksheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetUnderline("xlUnderlineStyleSingle");
let underlineType = font.GetUnderline();
worksheet.GetRange("B3").SetValue("Underline property: " + underlineType);
```
