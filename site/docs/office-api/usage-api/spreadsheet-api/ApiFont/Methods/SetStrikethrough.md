# SetStrikethrough

Sets the strikethrough property to the specified font.
💡 This method will work only with the text format of the cell.

## Syntax

```javascript
expression.SetStrikethrough(isStrikethrough);
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isStrikethrough | Required | boolean |  | Specifies that the text characters are displayed strikethrough. |

## Returns

This method doesn't return any data.

## Example

Draw a horizontal line through selected text characters in a spreadsheet.

```javascript editor-xlsx
// How do I add a strikethrough effect to part of the text in a spreadsheet?

// Mark a run of characters as crossed out to indicate deleted content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetStrikethrough(true);
```
