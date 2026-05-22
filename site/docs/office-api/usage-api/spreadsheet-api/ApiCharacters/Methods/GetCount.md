# GetCount

Returns a value that represents a number of objects in the collection.

## Syntax

```javascript
expression.GetCount();
```

`expression` - A variable that represents a [ApiCharacters](../ApiCharacters.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Count the number of characters in a selected text range within a cell in a spreadsheet.

```javascript editor-xlsx
// How do I find out how many characters are in a specific portion of a cell's text in a spreadsheet?

// Measure the length of a character selection taken from a cell value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let count = characters.GetCount();
worksheet.GetRange("B3").SetValue("Number of characters: " + count);
```
