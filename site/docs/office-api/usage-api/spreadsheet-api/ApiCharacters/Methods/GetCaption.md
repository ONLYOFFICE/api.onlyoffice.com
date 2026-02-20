# GetCaption

Returns a string value that represents the text of the specified range of characters.

## Syntax

```javascript
expression.GetCaption();
```

`expression` - A variable that represents a [ApiCharacters](../ApiCharacters.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get a string value that represents the text of the specified range of characters.

```javascript editor-xlsx playground
// Get a value that represents the label text for the pivot field.

// How to get and display caption of the text.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let caption = characters.GetCaption();
worksheet.GetRange("B3").SetValue("Caption: " + caption);
```
