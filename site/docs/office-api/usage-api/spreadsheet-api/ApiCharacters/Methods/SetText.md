# SetText

Sets the text for the specified characters.

## Syntax

```javascript
expression.SetText(Text);
```

`expression` - A variable that represents a [ApiCharacters](../ApiCharacters.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Text | Required | string |  | The text to be set. |

## Returns

This method doesn't return any data.

## Example

Set the text for the specified characters in a spreadsheet.

```javascript editor-xlsx
// Update characters collection by setting a new text in a spreadsheet.

// Set text for the characters of the range in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
characters.SetText
```
