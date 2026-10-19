# GetOddAndEvenPagesHeaderFooter

Returns whether different headers and footers are used on odd and even printed pages.

## Syntax

```javascript
expression.GetOddAndEvenPagesHeaderFooter();
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check whether odd and even pages use different headers and footers in a spreadsheet.

```javascript editor-xlsx
// How do I find out if odd and even pages have separate headers/footers in a spreadsheet?

// Read the odd/even page header/footer setting before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOddAndEvenPagesHeaderFooter(true);
let isDifferent = pageSetup.GetOddAndEvenPagesHeaderFooter();
worksheet.GetRange("A1").SetValue("Different odd/even headers and footers: " + isDifferent);
```
