# GetLeftHeader

Returns the left header section of this page type.

## Syntax

```javascript
expression.GetLeftHeader();
```

`expression` - A variable that represents an [ApiPage](../ApiPage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiHeaderFooter](../../ApiHeaderFooter/ApiHeaderFooter.md)

## Example

Get the left header section of a specific page type (even or first) in a spreadsheet.

```javascript editor-xlsx
// How do I set the left header for even pages in a spreadsheet?

// Access the even pages' left header to give it its own text when printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOddAndEvenPagesHeaderFooter(true);
let section = pageSetup.GetEvenPage().GetLeftHeader();
section.SetText("Confidential");
```
