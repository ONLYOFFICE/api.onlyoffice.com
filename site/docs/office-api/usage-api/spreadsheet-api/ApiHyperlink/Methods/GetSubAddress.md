# GetSubAddress

Returns the subaddress of the target document.

## Syntax

```javascript
expression.GetSubAddress();
```

`expression` - A variable that represents an [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the subaddress of a hyperlink.

```javascript editor-xlsx
// Needed when reading the internal location of a hyperlink in a cell.

// Get the subaddress of a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "", "Sheet1!B5", "Go to B5", "Internal link");

let hyperlink = worksheet.GetHyperlinks()[0];

worksheet.GetRange("A3").SetValue("SubAddress: " + hyperlink.GetSubAddress());
```
