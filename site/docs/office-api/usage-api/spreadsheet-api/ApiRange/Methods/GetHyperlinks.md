# GetHyperlinks

Returns a collection of all the hyperlinks in the range.

## Syntax

```javascript
expression.GetHyperlinks();
```

`expression` - A variable that represents an [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

ApiHyperlinks

## Example

Get all the hyperlinks from the range.

```javascript editor-xlsx
// Useful for retrieving hyperlinks within a specific cell range.

// Get all hyperlinks from the range.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");
worksheet.SetHyperlink("C1", "https://helpcenter.onlyoffice.com", null, "Help Center", "ONLYOFFICE Help");

let hyperlinks = worksheet.GetRange("A1").GetHyperlinks();

worksheet.GetRange("A3").SetValue("Hyperlinks in A1: " + hyperlinks.length);
worksheet.GetRange("A4").SetValue("Address: " + hyperlinks[0].GetAddress());
```
