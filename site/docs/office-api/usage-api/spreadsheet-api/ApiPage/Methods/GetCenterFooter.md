# GetCenterFooter

Returns the center footer section of this page type.

## Syntax

```javascript
expression.GetCenterFooter();
```

`expression` - A variable that represents an [ApiPage](../ApiPage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiHeaderFooter](../../ApiHeaderFooter/ApiHeaderFooter.md)

## Example

Get the center footer section of a specific page type (even or first) in a spreadsheet.

```javascript editor-xlsx
// How do I set the center footer for even pages in a spreadsheet?

// Access the even pages' center footer to give it its own text when printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOddAndEvenPagesHeaderFooter(true);
let section = pageSetup.GetEvenPage().GetCenterFooter();
section.SetText("Page &P of &N");
```
