# ApiDocument

Class representing a document.

## Methods

The following table lists the available methods.

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddPage](./Methods/AddPage.md) | [ApiPage](../ApiPage/ApiPage.md) | Adds a new page to document. |
| [ApplyRedact](./Methods/ApplyRedact.md) | boolean | Applies added redact. |
| [GetAllFields](./Methods/GetAllFields.md) | [ApiField](../Enumeration/ApiField.md)[] | Gets list of all fields in document. |
| [GetCalculateOrder](./Methods/GetCalculateOrder.md) | string[] | Gets document calculate fields order |
| [GetClassType](./Methods/GetClassType.md) | "document" | Returns a type of the ApiDocument class. |
| [GetFieldByName](./Methods/GetFieldByName.md) | [ApiField](../Enumeration/ApiField.md) \| null \| undefined | Gets field by it's name. |
| [GetPage](./Methods/GetPage.md) | [ApiPage](../ApiPage/ApiPage.md) | Gets page by index from document. |
| [GetPagesCount](./Methods/GetPagesCount.md) | number | Gets document pages count |
| [GetSelectedText](./Methods/GetSelectedText.md) | string | Gets selected text in document |
| [GetSelection](./Methods/GetSelection.md) | [DocSelection](../Enumeration/DocSelection.md) \| null \| undefined | Gets document selection info |
| [GetSelectionQuads](./Methods/GetSelectionQuads.md) | [DocQuads](../Enumeration/DocQuads.md) | Gets document selection quads by page |
| [GetStyle](./Methods/GetStyle.md) | ApiStyle \| null | Returns the document style by its name. |
| [Merge](./Methods/Merge.md) | boolean | Merges pdf files to current document in specified position. |
| [RemovePage](./Methods/RemovePage.md) | boolean | Removes a page from the document by its index. |
| [SearchAndRedact](./Methods/SearchAndRedact.md) | [ApiRedactAnnotation](../ApiRedactAnnotation/ApiRedactAnnotation.md)[] | Searchs words and adds redact to it. |
| [SetCalculateOrder](./Methods/SetCalculateOrder.md) | boolean | Sets document calculate fields order |
| [SetSelection](./Methods/SetSelection.md) | boolean | Sets document selection |
| [Split](./Methods/Split.md) | [PdfFile](../PdfFile/PdfFile.md) | Splits current pdf file with specified pages. |
