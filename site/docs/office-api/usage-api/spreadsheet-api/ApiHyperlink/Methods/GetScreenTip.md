# GetScreenTip

Returns the screen tip text for the hyperlink.

## Syntax

```javascript
expression.GetScreenTip();
```

`expression` - A variable that represents an [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the screen tip text of a hyperlink.

```javascript editor-xlsx
// Needed when reading the tooltip of a hyperlink in a cell.

// Get the screen tip text of a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE website", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];

worksheet.GetRange("A3").SetValue("Screen tip: " + hyperlink.GetScreenTip());
```
