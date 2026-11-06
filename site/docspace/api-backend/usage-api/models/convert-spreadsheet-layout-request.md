# ConvertSpreadsheetLayoutRequest
How a spreadsheet converted to PDF is laid out on the page. A field left out takes the document service default.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **ignorePrintArea** | **Boolean** | Whether the print area chosen in the spreadsheet is ignored; false converts only that area. | [optional] [example: `false`] [nullable] |
| **orientation** | **String** | The page orientation of the output PDF file: portrait or landscape. | [optional] [example: `landscape`] [nullable] |
| **fitToHeight** | **Integer** (int32) | The number of pages the converted area is fitted into in height; 0 does not fit it. | [optional] [example: `0`] [nullable] |
| **scale** | **Integer** (int32) | The scale of the output PDF file, in percent. | [optional] [example: `100`] [nullable] |
| **fitToWidth** | **Integer** (int32) | The number of pages the converted area is fitted into in width; 0 does not fit it. | [optional] [example: `1`] [nullable] |
| **headings** | **Boolean** | Whether the row and column headings are printed in the output PDF file. | [optional] [example: `false`] [nullable] |
| **gridLines** | **Boolean** | Whether the grid lines are printed in the output PDF file. | [optional] [example: `false`] [nullable] |
| **margins** | [**ConvertSpreadsheetMarginsRequest**](convert-spreadsheet-margins-request.md) | The margins of the output PDF file. | [optional] |
| **pageSize** | [**ConvertSpreadsheetPageSizeRequest**](convert-spreadsheet-page-size-request.md) | The page size of the output PDF file. | [optional] |
