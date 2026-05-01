# SetSize

Sets the font size property to the specified font.
💡 This method will work only with the text format of the cell.

## Syntax

```javascript
expression.SetSize(Size);
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Size | Required | number |  | Font size. |

## Returns

This method doesn't return any data.

## Example

Set the font size property to the specified font in a spreadsheet.

```javascript editor-xlsx
// How to change the font size in a spreadsheet.

// Get a font object of characters and resize it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetSize(18);
```
