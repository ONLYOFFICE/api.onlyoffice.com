# GetRange

Returns the range the hyperlink is attached to.

## Syntax

```javascript
expression.GetRange();
```

`expression` - A variable that represents an [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

Get the range a hyperlink is attached to.

```javascript editor-xlsx
// Useful for getting the cell range of a hyperlink.

// Get the range of a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("B2", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];
let range = hyperlink.GetRange();

worksheet.GetRange("A4").SetValue("Hyperlink range address: " + range.GetAddress());
```
