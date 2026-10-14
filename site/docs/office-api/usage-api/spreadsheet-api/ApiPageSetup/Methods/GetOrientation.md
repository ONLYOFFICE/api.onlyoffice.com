# GetOrientation

Returns the page orientation used when the worksheet is printed.

## Syntax

```javascript
expression.GetOrientation();
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[PageOrientation](../../Enumeration/PageOrientation.md)

## Example

Read the page orientation used when printing a spreadsheet.

```javascript editor-xlsx
// How do I find out if a worksheet prints in portrait or landscape in a spreadsheet?

// Check the current page orientation before printing a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOrientation("xlLandscape");
let orientation = pageSetup.GetOrientation();
worksheet.GetRange("A1").SetValue("Orientation: " + orientation);
```
