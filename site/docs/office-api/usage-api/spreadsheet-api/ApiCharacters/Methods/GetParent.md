# GetParent

Returns the parent object of the specified characters.

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents a [ApiCharacters](../ApiCharacters.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

Retrieve the parent cell that owns a specific range of characters in a spreadsheet.

```javascript editor-xlsx
// How do I find which cell a selected group of characters belongs to in a spreadsheet?

// Trace a character selection back to its containing cell to apply further formatting in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let parent = characters.GetParent();
parent.SetBorders("Bottom", "Thick", Api.CreateColorFromRGB(255, 111, 61));
```
