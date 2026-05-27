# Delete

Deletes the ApiCharacters object.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiCharacters](../ApiCharacters.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

Remove a specific sequence of characters from a cell's text in a spreadsheet.

```javascript editor-xlsx
// How do I erase a portion of text inside a cell by position in a spreadsheet?

// Trim unwanted characters out of a cell value without replacing the entire contents in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
characters.Delete();
```
