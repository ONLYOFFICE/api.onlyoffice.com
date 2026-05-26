# ApiDocumentContent

Represents the ApiDocumentContent class.

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddElement](./Methods/AddElement.md) | boolean | Adds a paragraph or a table or a blockLvl content control using its position in the document content. |
| [AddParagraph](./Methods/AddParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Creates a new paragraph and appends it to the end of the document content. |
| [AddText](./Methods/AddText.md) | [ApiRun](../ApiRun/ApiRun.md) | Appends the specified text to the end of the document content. |
| [GetAllCharts](./Methods/GetAllCharts.md) | [ApiChart](../ApiChart/ApiChart.md)[] | Returns a collection of chart objects from the document content. |
| [GetAllDrawingObjects](./Methods/GetAllDrawingObjects.md) | [Drawing](../Enumeration/Drawing.md)[] | Returns a collection of drawing objects from the document content. |
| [GetAllImages](./Methods/GetAllImages.md) | [ApiImage](../ApiImage/ApiImage.md)[] | Returns a collection of image objects from the document content. |
| [GetAllOleObjects](./Methods/GetAllOleObjects.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md)[] | Returns a collection of OLE objects from the document content. |
| [GetAllParagraphs](./Methods/GetAllParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns an array of all paragraphs from the current document content. |
| [GetAllShapes](./Methods/GetAllShapes.md) | [ApiShape](../ApiShape/ApiShape.md)[] | Returns a collection of shape objects from the document content. |
| [GetAllTables](./Methods/GetAllTables.md) | [ApiTable](../ApiTable/ApiTable.md)[] | Returns an array of all tables from the current document content. |
| [GetClassType](./Methods/GetClassType.md) | "documentContent" | Returns a type of the ApiDocumentContent class. |
| [GetContent](./Methods/GetContent.md) | [DocumentElement](../Enumeration/DocumentElement.md)[] | Returns an array of document elements from the current ApiDocumentContent object. |
| [GetCurrentContentControl](./Methods/GetCurrentContentControl.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) \| null | Returns the currently selected content control. |
| [GetCurrentParagraph](./Methods/GetCurrentParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Returns the current paragraph where the cursor is located. |
| [GetCurrentRun](./Methods/GetCurrentRun.md) | [ApiRun](../ApiRun/ApiRun.md) | Returns the current run where the cursor is located. |
| [GetDocumentVisitor](./Methods/GetDocumentVisitor.md) | ApiDocumentVisitor | Returns a visitor object for traversing the elements of the current document. |
| [GetElement](./Methods/GetElement.md) | [DocumentElement](../Enumeration/DocumentElement.md) | Returns an element by its position in the document. |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | Returns a number of elements in the current document. |
| [GetInternalId](./Methods/GetInternalId.md) | string | Returns an internal ID of the current document content. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents the part of the document contained in the document content. |
| [GetText](./Methods/GetText.md) | string | Returns the inner text of the current document content object. |
| [IsEndnote](./Methods/IsEndnote.md) | boolean | Check if the current document content is an endnote. |
| [IsFootnote](./Methods/IsFootnote.md) | boolean | Check if the current document content is a footnote. |
| [MoveCursorToNoteReference](./Methods/MoveCursorToNoteReference.md) | boolean | Moves the cursor to the reference of this footnote/endnote in the main document. If this document content is not a footnote/endnote, does nothing. |
| [Push](./Methods/Push.md) | boolean | Pushes a paragraph or a table to actually add it to the document. |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | Removes all the elements from the current document or from the current document element. |
| [RemoveElement](./Methods/RemoveElement.md) | boolean | Removes an element using the position specified. |
| [SelectNoteReference](./Methods/SelectNoteReference.md) | boolean | Select the reference to this footnote/endnote. If this document content is not a footnote/endnote, do nothing. |
| [SetText](./Methods/SetText.md) | [ApiRun](../ApiRun/ApiRun.md) | Replaces all content of the current document content object with the specified text, |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiDocumentContent object into the JSON object. |
