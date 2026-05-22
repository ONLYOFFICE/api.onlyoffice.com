# SetSubscript

Sets the subscript property to the specified font.
💡 This method will work only with the text format of the cell.

## Syntax

```javascript
expression.SetSubscript(isSubscript);
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isSubscript | Required | boolean |  | Specifies that the text characters are displayed subscript. |

## Returns

This method doesn't return any data.

## Example

Lower selected text characters below the baseline as subscript in a spreadsheet.

```javascript editor-xlsx
// How do I format part of the text as subscript in a spreadsheet?

// Shift a run of characters downward to create subscript notation in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
const characters = range.GetCharacters(9, 4);
const font = characters.GetFont();
font.SetSubscript(true);
```
