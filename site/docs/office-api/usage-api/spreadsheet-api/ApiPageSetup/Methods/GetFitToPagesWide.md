# GetFitToPagesWide

Returns the number of pages wide the worksheet is scaled to when printed (0 means automatic).

## Syntax

```javascript
expression.GetFitToPagesWide();
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Read how many pages wide the printout is scaled to in a spreadsheet.

```javascript editor-xlsx
// How do I find out the fit-to-pages-wide setting before printing in a spreadsheet?

// Check the horizontal fit-to-page scaling (0 means automatic) in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetFitToPagesWide(1);
let wide = pageSetup.GetFitToPagesWide();
worksheet.GetRange("A1").SetValue("Fit to pages wide: " + wide);
```
