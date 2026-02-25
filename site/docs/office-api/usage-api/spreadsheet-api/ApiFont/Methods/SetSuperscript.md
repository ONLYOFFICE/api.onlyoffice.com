# SetSuperscript

Sets the superscript property to the specified font.
💡 This method will work only with the text format of the cell.

## Syntax

```javascript
expression.SetSuperscript(isSuperscript);
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isSuperscript | Required | boolean |  | Specifies that the text characters are displayed superscript. |

## Returns

This method doesn't return any data.

## Example

This example sets the superscript property to the specified font.

```javascript editor-xlsx playground
// How to change a regular text to a superscript.

// Get a font object of characters and make it superscript.

const worksheet = Api.GetActiveSheet();
const range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
const characters = range.GetCharacters(9, 4);
const font = characters.GetFont();
font.SetSuperscript(true);

```
