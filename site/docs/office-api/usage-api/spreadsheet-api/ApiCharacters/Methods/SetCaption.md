# SetCaption

Sets a string value that represents the text of the specified range of characters.

## Syntax

```javascript
expression.SetCaption(Caption);
```

`expression` - A variable that represents a [ApiCharacters](../ApiCharacters.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Caption | Required | string |  | A string value that represents the text of the specified range of characters. |

## Returns

This method doesn't return any data.

## Example

Assign a new text label to a selected range of characters within a cell in a spreadsheet.

```javascript editor-xlsx
// How do I update the visible text of a specific character range inside a cell in a spreadsheet?

// Relabel a portion of cell content without affecting the rest of the cell's text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
characters.SetCaption("string");
```
