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

Apply an underline style to selected text characters in a spreadsheet.

```javascript editor-xlsx
// How do I add underlining to part of the text in a spreadsheet?

// Decorate a run of characters with a chosen underline style in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
const characters = range.GetCharacters(9, 4);
const font = characters.GetFont();
font.SetUnderline("xlUnderlineStyleSingle");
```
