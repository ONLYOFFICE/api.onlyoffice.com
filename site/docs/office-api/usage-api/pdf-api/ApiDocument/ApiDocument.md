# ApiDocument

Represents the ApiDocument class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddElement](./Methods/AddElement.md) | boolean | Adds a paragraph or a table or a blockLvl content control using its position in the document content. |
| [AddPage](./Methods/AddPage.md) | [ApiPage](../ApiPage/ApiPage.md) | Adds a new page to document. |
| [ApplyRedact](./Methods/ApplyRedact.md) | boolean | Applies added redact. |
| [GetAllFields](./Methods/GetAllFields.md) | [ApiField](../Enumeration/ApiField.md) | Gets list of all fields in document. |
| [GetAllParagraphs](./Methods/GetAllParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns an array of all paragraphs from the current document content. |
| [GetClassType](./Methods/GetClassType.md) | "document" | Returns a type of the ApiDocument class. |
| [GetCurrentParagraph](./Methods/GetCurrentParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Returns the current paragraph where the cursor is located. |
| [GetCurrentRun](./Methods/GetCurrentRun.md) | [ApiRun](../ApiRun/ApiRun.md) | Returns the current run where the cursor is located. |
| [GetElement](./Methods/GetElement.md) | [DocumentElement](../Enumeration/DocumentElement.md) | Returns an element by its position in the document. |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | Returns a number of elements in the current document. |
| [GetFieldByName](./Methods/GetFieldByName.md) | [ApiField](../Enumeration/ApiField.md) | Gets field by it's name. |
| [GetInternalId](./Methods/GetInternalId.md) | string | Returns an internal ID of the current document content. |
| [GetPage](./Methods/GetPage.md) | [ApiPage](../ApiPage/ApiPage.md) | Gets page by index from document. |
| [GetPagesCount](./Methods/GetPagesCount.md) | number | Gets document pages count |
| [GetText](./Methods/GetText.md) | string | Returns the inner text of the current document content object. |
| [Push](./Methods/Push.md) | boolean | Pushes a paragraph or a table to actually add it to the document. |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | Removes all the elements from the current document or from the current document element. 💡 When all elements are removed, a new empty paragraph is automatically created. If you want to add content to this paragraph, use the [ApiDocumentContent#GetElement](../ApiDocumentContent/Methods/GetElement.md) method. |
| [RemoveElement](./Methods/RemoveElement.md) | boolean | Removes an element using the position specified. |
| [RemovePage](./Methods/RemovePage.md) | boolean | Removes page by index from document |
| [SearchAndRedact](./Methods/SearchAndRedact.md) | [ApiRedactAnnotation](../ApiRedactAnnotation/ApiRedactAnnotation.md)[] | Searchs words and adds redact to it. |
