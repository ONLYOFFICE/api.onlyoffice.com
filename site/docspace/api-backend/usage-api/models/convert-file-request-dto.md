# ConvertFileRequestDto
What to convert, where to keep the result, and the parameters the document service is handed. Everything below the first two fields is the contract of the document service itself, named and shaped exactly as it names it, so that the portal passes the request on rather than translating it. What the portal can read off the file - its format, its name and the key of its revision - is not asked for and cannot be overridden.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **fileId** | **Integer** (int32) | The id of the portal file to convert, as reported by a folder listing such as `GET api/2.0/files/{folderId}`. | [required] [example: `1234`] |
| **folderId** | **Integer** (int32) | The id of the folder to save the converted file in, as reported by a folder listing such as `GET api/2.0/files/{folderId}`. | [optional] [example: `5678`] [nullable] |
| **codePage** | **Integer** (int32) | The encoding of a csv or txt source, as a code page number: 1251 for Cyrillic, 65001 for UTF-8, and so on. Leaving it out lets the document service guess, which garbles non-latin text. | [optional] [example: `65001`] [nullable] |
| **delimiter** | **Integer** (int32) | The character separating the values of a csv source: 0 - none, 1 - tab, 2 - semicolon, 3 - colon, 4 - comma, 5 - space. | [optional] [example: `4`] [nullable] |
| **documentLayout** | [**ConvertDocumentLayoutRequest**](convert-document-layout-request.md) | The layout of forms printed as pdf documents or images. | [optional] |
| **documentRenderer** | [**ConvertDocumentRendererRequest**](convert-document-renderer-request.md) | How the text of a pdf, xps or oxps source is read back. | [optional] |
| **outputtype** | **String** | The extension of the format to convert to, without the dot. The formats a source can become are listed under `extsConvertible` in `GET api/2.0/files/settings`, keyed by the source extension, both with a leading dot there. | [required] [example: `pdf`] [nullable] |
| **password** | **String** | The password of the source document, for a document that is protected with one. | [optional] [example: `qwerty`] [nullable] |
| **region** | **String** | The culture code whose currency, date and time formats a spreadsheet converted to PDF is shown in. | [optional] [example: `en-US`] [nullable] |
| **thumbnail** | [**ConvertThumbnailRequest**](convert-thumbnail-request.md) | How a thumbnail is fitted, when the target format is an image. | [optional] |
| **spreadsheetLayout** | [**ConvertSpreadsheetLayoutRequest**](convert-spreadsheet-layout-request.md) | How a spreadsheet is laid out on the page, when it is converted to PDF. | [optional] |
| **pdf** | [**ConvertPdfRequest**](convert-pdf-request.md) | The PDF settings, used when the target format is PDF. | [optional] |
