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

Get the text of the specified range of characters in a spreadsheet.

```javascript editor-xlsx
// How to get a raw text from the characters in a spreadsheet.

// Retrieve a text from the character collection in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let text = characters.GetText();
worksheet.GetRange("B3").SetValue("Text: " + text);
```
