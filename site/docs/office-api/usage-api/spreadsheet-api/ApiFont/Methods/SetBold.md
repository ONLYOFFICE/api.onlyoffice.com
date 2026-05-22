# SetBold

Sets the bold property to the specified font.
💡 This method will work only with the text format of the cell.

## Syntax

```javascript
expression.SetBold(isBold);
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isBold | Required | boolean |  | Specifies that the text characters are displayed bold. |

## Returns

This method doesn't return any data.

## Example

Make selected text characters appear bold in a spreadsheet.

```javascript editor-xlsx
// How do I apply bold formatting to specific characters in a spreadsheet?

// Turn on bold weight for a portion of cell text to make it stand out in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetBold(true);
```
