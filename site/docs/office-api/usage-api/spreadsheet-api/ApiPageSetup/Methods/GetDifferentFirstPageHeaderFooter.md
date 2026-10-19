# GetDifferentFirstPageHeaderFooter

Returns whether a different header and footer is used on the first printed page.

## Syntax

```javascript
expression.GetDifferentFirstPageHeaderFooter();
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check whether the first printed page uses a different header and footer in a spreadsheet.

```javascript editor-xlsx
// How do I find out if the first page has its own header/footer in a spreadsheet?

// Read the different-first-page header/footer setting before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetDifferentFirstPageHeaderFooter(true);
let isDifferent = pageSetup.GetDifferentFirstPageHeaderFooter();
worksheet.GetRange("A1").SetValue("Different first page header/footer: " + isDifferent);
```
