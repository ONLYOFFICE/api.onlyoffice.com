# GetParent

Returns the parent ApiCharacters object of the specified font.

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiCharacters](../../ApiCharacters/ApiCharacters.md)

## Example

Get the parent characters object of the specified font in a spreadsheet.

```javascript editor-xlsx
// How to determine a font object's parent in a spreadsheet.

// Get a parent of a font and add text to it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let font = characters.GetFont();
let parent = font.GetParent();
parent.SetText("string");
```
