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

Read the print page orientation of the active sheet in a spreadsheet.

```javascript editor-xlsx
// How do I check whether a sheet is set to portrait or landscape in a spreadsheet?

// Retrieve the orientation setting and display it in a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageOrientation = worksheet.GetPageOrientation();
worksheet.GetRange("A1").SetValue("Page orientation: ");
worksheet.GetRange("C1").SetValue(pageOrientation);
```
