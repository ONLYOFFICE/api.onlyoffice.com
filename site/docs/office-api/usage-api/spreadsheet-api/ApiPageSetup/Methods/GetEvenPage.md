# GetEvenPage

Returns the header and footer of the even pages of the worksheet. The returned object is meaningful when [ApiPageSetup#GetOddAndEvenPagesHeaderFooter](../../ApiPageSetup/Methods/GetOddAndEvenPagesHeaderFooter.md) is enabled.

## Syntax

```javascript
expression.GetEvenPage();
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiPage](../../ApiPage/ApiPage.md)

## Example

Get the even-page header/footer object to customize printing in a spreadsheet.

```javascript editor-xlsx
// How do I set a separate header or footer for even pages in a spreadsheet?

// Access the even pages' header and footer to give them their own content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOddAndEvenPagesHeaderFooter(true);
let evenPage = pageSetup.GetEvenPage();
evenPage.GetCenterHeader().SetText("Even page &P");
```
