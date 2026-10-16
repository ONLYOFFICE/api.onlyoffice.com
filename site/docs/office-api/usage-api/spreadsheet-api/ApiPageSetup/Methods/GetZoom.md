# GetZoom

Returns the scaling factor (in percent) used when the worksheet is printed.

## Syntax

```javascript
expression.GetZoom();
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Read the print scaling factor (zoom) of a worksheet in a spreadsheet.

```javascript editor-xlsx
// How do I find out the print scaling percentage before printing in a spreadsheet?

// Check the current print zoom level of a worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetZoom(80);
let zoom = pageSetup.GetZoom();
worksheet.GetRange("A1").SetValue("Print zoom: " + zoom + "%");
```
