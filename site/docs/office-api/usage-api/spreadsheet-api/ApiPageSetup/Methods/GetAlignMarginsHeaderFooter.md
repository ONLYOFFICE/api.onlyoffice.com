# GetAlignMarginsHeaderFooter

Returns whether the header and footer margins are aligned with the page margins.

## Syntax

```javascript
expression.GetAlignMarginsHeaderFooter();
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check whether the header and footer are aligned with the page margins in a spreadsheet.

```javascript editor-xlsx
// How do I find out if the header and footer line up with the page margins in a spreadsheet?

// Read the current header and footer margin alignment setting before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetAlignMarginsHeaderFooter(true);
let isAligned = pageSetup.GetAlignMarginsHeaderFooter();
worksheet.GetRange("A1").SetValue("Align header/footer with margins: " + isAligned);
```
