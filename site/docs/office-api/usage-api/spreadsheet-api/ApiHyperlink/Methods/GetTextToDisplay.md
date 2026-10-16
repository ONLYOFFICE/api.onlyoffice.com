# GetTextToDisplay

Returns the text displayed for the hyperlink.

## Syntax

```javascript
expression.GetTextToDisplay();
```

`expression` - A variable that represents an [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the display text of a hyperlink.

```javascript editor-xlsx
// Needed when reading the text shown in a cell for a hyperlink.

// Get the display text of a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];

worksheet.GetRange("A3").SetValue("Text to display: " + hyperlink.GetTextToDisplay());
```
