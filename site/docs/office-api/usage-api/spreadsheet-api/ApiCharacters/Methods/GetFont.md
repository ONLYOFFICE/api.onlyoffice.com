# GetFont

Returns the ApiFont object that represents the font of the specified characters.

## Syntax

```javascript
expression.GetFont();
```

`expression` - A variable that represents a [ApiCharacters](../ApiCharacters.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiFont](../../ApiFont/ApiFont.md)

## Example

Get the font object that represents the font of the specified characters in a spreadsheet.

```javascript editor-xlsx
// How to get font style of the array of characters in a spreadsheet.

// Use font of the specified characters to set their style in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetBold(true);
```
