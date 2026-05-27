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

Retrieve the characters object that a font setting belongs to in a spreadsheet.

```javascript editor-xlsx
// How do I get back to the characters object from a font so I can change its text in a spreadsheet?

// Navigate from a font up to its owning characters object to update the displayed text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let font = characters.GetFont();
let parent = font.GetParent();
parent.SetText("string");
```
