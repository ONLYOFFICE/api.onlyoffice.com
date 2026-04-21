# SetUnderline

Sets an underline of the type specified in the request to the current font.
💡 This method will work only with the text format of the cell.

## Syntax

```javascript
expression.SetUnderline(Underline);
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Underline | Required | [XlUnderlineStyle](../../Enumeration/XlUnderlineStyle.md) |  | Underline type. |

## Returns

This method doesn't return any data.

## Example

Set an underline of the type specified in the request to the font in a spreadsheet.

```javascript editor-xlsx
// How to change a regular text to an underlined one in a spreadsheet.

// Get a font object of characters and make it underlined in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
const characters = range.GetCharacters(9, 4);
const font = characters.GetFont();
font.SetUnderline("xlUnderlineStyleSingle");
```
