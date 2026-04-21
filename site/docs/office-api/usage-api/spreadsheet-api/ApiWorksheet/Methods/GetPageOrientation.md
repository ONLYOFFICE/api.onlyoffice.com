# GetPageOrientation

Returns the page orientation.

## Syntax

```javascript
expression.GetPageOrientation();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[PageOrientation](../../Enumeration/PageOrientation.md)

## Example

Get the page orientation in a spreadsheet.

```javascript editor-xlsx
// How to get orientation of the sheet in a spreadsheet.

// Get a sheet orientation using the worksheet API in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageOrientation = worksheet.GetPageOrientation();
worksheet.GetRange("A1").SetValue("Page orientation: ");
worksheet.GetRange("C1").SetValue(pageOrientation);
```
