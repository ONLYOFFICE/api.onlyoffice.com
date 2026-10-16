# GetFirstPage

Returns the header and footer of the first page of the worksheet. The returned object is meaningful when [ApiPageSetup#GetDifferentFirstPageHeaderFooter](../../ApiPageSetup/Methods/GetDifferentFirstPageHeaderFooter.md) is enabled.

## Syntax

```javascript
expression.GetFirstPage();
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiPage](../../ApiPage/ApiPage.md)

## Example

Get the first-page header/footer object to customize printing in a spreadsheet.

```javascript editor-xlsx
// How do I set a separate header or footer for the first page in a spreadsheet?

// Access the first page's header and footer to give them their own content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetDifferentFirstPageHeaderFooter(true);
let firstPage = pageSetup.GetFirstPage();
firstPage.GetCenterHeader().SetText("Report title");
```
