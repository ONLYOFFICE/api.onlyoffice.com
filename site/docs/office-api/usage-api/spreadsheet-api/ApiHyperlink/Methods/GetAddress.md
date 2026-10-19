# GetAddress

Returns the address of the target document.

## Syntax

```javascript
expression.GetAddress();
```

`expression` - A variable that represents an [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the address of a hyperlink.

```javascript editor-xlsx
// Needed when reading the URL of a hyperlink in a cell.

// Get the address of a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];

worksheet.GetRange("A3").SetValue("Address: " + hyperlink.GetAddress());
```
