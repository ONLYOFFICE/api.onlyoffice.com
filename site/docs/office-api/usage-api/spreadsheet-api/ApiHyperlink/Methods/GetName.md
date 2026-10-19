# GetName

Returns the name of the hyperlink.

## Syntax

```javascript
expression.GetName();
```

`expression` - A variable that represents an [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the name of a hyperlink.

```javascript editor-xlsx
// Needed when reading the name of a hyperlink in a cell.

// Get the name of a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];

worksheet.GetRange("A3").SetValue("Hyperlink name: " + hyperlink.GetName());
```
