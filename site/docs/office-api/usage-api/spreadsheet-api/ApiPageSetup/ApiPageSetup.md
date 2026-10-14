# ApiPageSetup

Class representing the page setup (print layout) of a worksheet.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| AlignMarginsHeaderFooter | boolean | Returns or sets whether the header and footer margins are aligned with the page margins. |
| BottomMargin | number | Returns or sets the bottom margin size measured in millimeters. |
| CenterFooter | string | Returns or sets the center part of the (odd) footer. |
| CenterHeader | string | Returns or sets the center part of the (odd) header. |
| CenterHorizontally | boolean | Returns or sets whether the worksheet is centered horizontally on the page when printed. |
| CenterVertically | boolean | Returns or sets whether the worksheet is centered vertically on the page when printed. |
| DifferentFirstPageHeaderFooter | boolean | Returns or sets whether a different header and footer is used on the first printed page. |
| EvenPage | [ApiPage](../ApiPage/ApiPage.md) | Returns the header and footer of the even pages. |
| FirstPage | [ApiPage](../ApiPage/ApiPage.md) | Returns the header and footer of the first page. |
| FirstPageNumber | number \| null | Returns or sets the first page number (null means automatic). |
| FitToPagesTall | number | Returns or sets the number of pages tall the worksheet is scaled to when printed (0 means automatic). |
| FitToPagesWide | number | Returns or sets the number of pages wide the worksheet is scaled to when printed (0 means automatic). |
| FooterMargin | number | Returns or sets the distance from the bottom of the page to the footer, in millimeters. |
| HeaderMargin | number | Returns or sets the distance from the top of the page to the header, in millimeters. |
| LeftFooter | string | Returns or sets the left part of the (odd) footer. |
| LeftHeader | string | Returns or sets the left part of the (odd) header. |
| LeftMargin | number | Returns or sets the left margin size measured in millimeters. |
| OddAndEvenPagesHeaderFooter | boolean | Returns or sets whether different headers and footers are used on odd and even printed pages. |
| Orientation | [PageOrientation](../Enumeration/PageOrientation.md) | Returns or sets the page orientation. |
| PaperSize | [PaperSize](../Enumeration/PaperSize.md) | Returns or sets the paper size. |
| Parent | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | Returns the parent worksheet of the page setup. |
| PrintArea | string | Returns or sets the range to be printed (empty string prints the whole sheet). |
| PrintGridlines | boolean | Returns or sets whether the cell gridlines are printed. |
| PrintHeadings | boolean | Returns or sets whether the row and column headings are printed. |
| PrintTitleColumns | string | Returns or sets the columns repeated at the left of each printed page. |
| PrintTitleRows | string | Returns or sets the rows repeated at the top of each printed page. |
| RightFooter | string | Returns or sets the right part of the (odd) footer. |
| RightHeader | string | Returns or sets the right part of the (odd) header. |
| RightMargin | number | Returns or sets the right margin size measured in millimeters. |
| ScaleWithDocHeaderFooter | boolean | Returns or sets whether the header and footer are scaled with the document when printing. |
| TopMargin | number | Returns or sets the top margin size measured in millimeters. |
| Zoom | number | Returns or sets the print scaling factor in percent (10-400). |

## Methods

The following table lists the available methods.

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetAlignMarginsHeaderFooter](./Methods/GetAlignMarginsHeaderFooter.md) | boolean | Returns whether the header and footer margins are aligned with the page margins. |
| [GetBottomMargin](./Methods/GetBottomMargin.md) | number | Returns the size of the bottom margin. |
| [GetCenterFooter](./Methods/GetCenterFooter.md) | string | Returns the center part of the footer used when the worksheet is printed. |
| [GetCenterHeader](./Methods/GetCenterHeader.md) | string | Returns the center part of the header used when the worksheet is printed. |
| [GetCenterHorizontally](./Methods/GetCenterHorizontally.md) | boolean | Returns whether the worksheet is centered horizontally on the page when printed. |
| [GetCenterVertically](./Methods/GetCenterVertically.md) | boolean | Returns whether the worksheet is centered vertically on the page when printed. |
| [GetDifferentFirstPageHeaderFooter](./Methods/GetDifferentFirstPageHeaderFooter.md) | boolean | Returns whether a different header and footer is used on the first printed page. |
| [GetEvenPage](./Methods/GetEvenPage.md) | [ApiPage](../ApiPage/ApiPage.md) | Returns the header and footer of the even pages of the worksheet. The returned object is meaningful when [ApiPageSetup#GetOddAndEvenPagesHeaderFooter](../ApiPageSetup/Methods/GetOddAndEvenPagesHeaderFooter.md) is enabled. |
| [GetFirstPage](./Methods/GetFirstPage.md) | [ApiPage](../ApiPage/ApiPage.md) | Returns the header and footer of the first page of the worksheet. The returned object is meaningful when [ApiPageSetup#GetDifferentFirstPageHeaderFooter](../ApiPageSetup/Methods/GetDifferentFirstPageHeaderFooter.md) is enabled. |
| [GetFirstPageNumber](./Methods/GetFirstPageNumber.md) | number \| null | Returns the first page number used when the worksheet is printed. Returns null when the page numbering is automatic. |
| [GetFitToPagesTall](./Methods/GetFitToPagesTall.md) | number | Returns the number of pages tall the worksheet is scaled to when printed (0 means automatic). |
| [GetFitToPagesWide](./Methods/GetFitToPagesWide.md) | number | Returns the number of pages wide the worksheet is scaled to when printed (0 means automatic). |
| [GetFooterMargin](./Methods/GetFooterMargin.md) | number | Returns the distance from the bottom of the page to the footer. |
| [GetHeaderMargin](./Methods/GetHeaderMargin.md) | number | Returns the distance from the top of the page to the header. |
| [GetLeftFooter](./Methods/GetLeftFooter.md) | string | Returns the left part of the footer used when the worksheet is printed. |
| [GetLeftHeader](./Methods/GetLeftHeader.md) | string | Returns the left part of the header used when the worksheet is printed. |
| [GetLeftMargin](./Methods/GetLeftMargin.md) | number | Returns the size of the left margin. |
| [GetOddAndEvenPagesHeaderFooter](./Methods/GetOddAndEvenPagesHeaderFooter.md) | boolean | Returns whether different headers and footers are used on odd and even printed pages. |
| [GetOrientation](./Methods/GetOrientation.md) | [PageOrientation](../Enumeration/PageOrientation.md) | Returns the page orientation used when the worksheet is printed. |
| [GetPaperSize](./Methods/GetPaperSize.md) | [PaperSize](../Enumeration/PaperSize.md) | Returns the paper size used when the worksheet is printed. |
| [GetParent](./Methods/GetParent.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | Returns the worksheet that owns this page setup. |
| [GetPrintArea](./Methods/GetPrintArea.md) | string | Returns the range to be printed (the print area) as a string, or an empty string when the whole sheet is printed. |
| [GetPrintGridlines](./Methods/GetPrintGridlines.md) | boolean | Returns whether cell gridlines are printed with the worksheet. |
| [GetPrintHeadings](./Methods/GetPrintHeadings.md) | boolean | Returns whether row and column headings are printed with the worksheet. |
| [GetPrintTitleColumns](./Methods/GetPrintTitleColumns.md) | string | Returns the columns that are repeated at the left of each printed page, or an empty string if none. |
| [GetPrintTitleRows](./Methods/GetPrintTitleRows.md) | string | Returns the rows that are repeated at the top of each printed page, or an empty string if none. |
| [GetRightFooter](./Methods/GetRightFooter.md) | string | Returns the right part of the footer used when the worksheet is printed. |
| [GetRightHeader](./Methods/GetRightHeader.md) | string | Returns the right part of the header used when the worksheet is printed. |
| [GetRightMargin](./Methods/GetRightMargin.md) | number | Returns the size of the right margin. |
| [GetScaleWithDocHeaderFooter](./Methods/GetScaleWithDocHeaderFooter.md) | boolean | Returns whether the header and footer are scaled with the document when it is scaled for printing. |
| [GetTopMargin](./Methods/GetTopMargin.md) | number | Returns the size of the top margin. |
| [GetZoom](./Methods/GetZoom.md) | number | Returns the scaling factor (in percent) used when the worksheet is printed. |
| [SetAlignMarginsHeaderFooter](./Methods/SetAlignMarginsHeaderFooter.md) | boolean | Sets whether the header and footer margins are aligned with the page margins. |
| [SetBottomMargin](./Methods/SetBottomMargin.md) | boolean | Sets the size of the bottom margin. |
| [SetCenterFooter](./Methods/SetCenterFooter.md) | boolean | Sets the center part of the footer used when the worksheet is printed. |
| [SetCenterHeader](./Methods/SetCenterHeader.md) | boolean | Sets the center part of the header used when the worksheet is printed. |
| [SetCenterHorizontally](./Methods/SetCenterHorizontally.md) | boolean | Sets whether the worksheet is centered horizontally on the page when printed. |
| [SetCenterVertically](./Methods/SetCenterVertically.md) | boolean | Sets whether the worksheet is centered vertically on the page when printed. |
| [SetDifferentFirstPageHeaderFooter](./Methods/SetDifferentFirstPageHeaderFooter.md) | boolean | Sets whether a different header and footer is used on the first printed page. |
| [SetFirstPageNumber](./Methods/SetFirstPageNumber.md) | boolean | Sets the first page number used when the worksheet is printed. |
| [SetFitToPagesTall](./Methods/SetFitToPagesTall.md) | boolean | Sets the number of pages tall the worksheet is scaled to when printed (0 means automatic). Setting this property turns on the "fit to page" mode. |
| [SetFitToPagesWide](./Methods/SetFitToPagesWide.md) | boolean | Sets the number of pages wide the worksheet is scaled to when printed (0 means automatic). Setting this property turns on the "fit to page" mode. |
| [SetFooterMargin](./Methods/SetFooterMargin.md) | boolean | Sets the distance from the bottom of the page to the footer. |
| [SetHeaderMargin](./Methods/SetHeaderMargin.md) | boolean | Sets the distance from the top of the page to the header. |
| [SetLeftFooter](./Methods/SetLeftFooter.md) | boolean | Sets the left part of the footer used when the worksheet is printed. |
| [SetLeftHeader](./Methods/SetLeftHeader.md) | boolean | Sets the left part of the header used when the worksheet is printed. |
| [SetLeftMargin](./Methods/SetLeftMargin.md) | boolean | Sets the size of the left margin. |
| [SetOddAndEvenPagesHeaderFooter](./Methods/SetOddAndEvenPagesHeaderFooter.md) | boolean | Sets whether different headers and footers are used on odd and even printed pages. |
| [SetOrientation](./Methods/SetOrientation.md) | boolean | Sets the page orientation used when the worksheet is printed. |
| [SetPaperSize](./Methods/SetPaperSize.md) | boolean | Sets the paper size used when the worksheet is printed. |
| [SetPrintArea](./Methods/SetPrintArea.md) | boolean | Sets the range to be printed (the print area). Pass an empty string to clear it and print the whole sheet. |
| [SetPrintGridlines](./Methods/SetPrintGridlines.md) | boolean | Sets whether cell gridlines are printed with the worksheet. |
| [SetPrintHeadings](./Methods/SetPrintHeadings.md) | boolean | Sets whether row and column headings are printed with the worksheet. |
| [SetPrintTitleColumns](./Methods/SetPrintTitleColumns.md) | boolean | Sets the columns that are repeated at the left of each printed page. Pass an empty string to clear them. |
| [SetPrintTitleRows](./Methods/SetPrintTitleRows.md) | boolean | Sets the rows that are repeated at the top of each printed page. Pass an empty string to clear them. |
| [SetRightFooter](./Methods/SetRightFooter.md) | boolean | Sets the right part of the footer used when the worksheet is printed. |
| [SetRightHeader](./Methods/SetRightHeader.md) | boolean | Sets the right part of the header used when the worksheet is printed. |
| [SetRightMargin](./Methods/SetRightMargin.md) | boolean | Sets the size of the right margin. |
| [SetScaleWithDocHeaderFooter](./Methods/SetScaleWithDocHeaderFooter.md) | boolean | Sets whether the header and footer are scaled with the document when it is scaled for printing. |
| [SetTopMargin](./Methods/SetTopMargin.md) | boolean | Sets the size of the top margin. |
| [SetZoom](./Methods/SetZoom.md) | boolean | Sets the scaling factor (in percent) used when the worksheet is printed. Setting this property turns off the "fit to page" mode. |
