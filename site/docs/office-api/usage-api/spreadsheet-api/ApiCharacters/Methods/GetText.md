# GetText

Returns the text of the specified range of characters.

## Syntax

```javascript
expression.GetText();
```

`expression` - A variable that represents a [ApiCharacters](../ApiCharacters.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the plain text content of a selected group of characters in a spreadsheet.

```javascript editor-xlsx
// How do I extract just the text from a specific portion of a cell's value in a spreadsheet?

// Capture a substring of cell text for comparison or display elsewhere in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let text = characters.GetText();
worksheet.GetRange("B3").SetValue("Text: " + text);
```
