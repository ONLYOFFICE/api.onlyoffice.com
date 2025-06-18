# ApiDocument

Represents the ApiDocument class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AcceptAllRevisionChanges](./Methods/AcceptAllRevisionChanges.md) | boolean | Accepts all changes made in review mode. |
| [AddComboBoxContentControl](./Methods/AddComboBoxContentControl.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | Adds a new combo box content control to the document. |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) | Adds a comment to the current document selection, or to the current word if no text is selected. |
| [AddDatePickerContentControl](./Methods/AddDatePickerContentControl.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | Adds a new date picker content control to the document. |
| [AddDrawingToPage](./Methods/AddDrawingToPage.md) | boolean | Adds a drawing to the specified page. 💡 This method can be a little bit slow, because it runs the document calculation process to arrange tables on the specified page. |
| [AddDropDownListContentControl](./Methods/AddDropDownListContentControl.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | Adds a new drop-down list content control to the document. |
| [AddElement](./Methods/AddElement.md) | boolean | Adds a paragraph or a table or a blockLvl content control using its position in the document content. |
| [AddEndnote](./Methods/AddEndnote.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | Adds an endnote for the selected text (or the current position if the selection doesn't exist). |
| [AddFootnote](./Methods/AddFootnote.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | Adds a footnote for the selected text (or the current position if the selection doesn't exist). |
| [AddMathEquation](./Methods/AddMathEquation.md) | boolean | Adds a math equation to the current document. |
| [AddTableOfContents](./Methods/AddTableOfContents.md) | boolean | Adds a table of content to the current document. 💡 Please note that the new table of contents replaces the existing table of contents. |
| [AddTableOfFigures](./Methods/AddTableOfFigures.md) | boolean | Adds a table of figures to the current document. |
| [ClearAllFields](./Methods/ClearAllFields.md) | boolean | Clears all forms in the document. |
| [CreateNewHistoryPoint](./Methods/CreateNewHistoryPoint.md) | boolean | Creates a new history point. |
| [CreateNumbering](./Methods/CreateNumbering.md) | [ApiNumbering](../ApiNumbering/ApiNumbering.md) | Creates an abstract multilevel numbering with a specified type. |
| [CreateSection](./Methods/CreateSection.md) | [ApiSection](../ApiSection/ApiSection.md) \| null | Creates a new document section which ends at the specified paragraph. Allows to set local parameters to the current section - page size, footer, header, columns, etc. |
| [CreateStyle](./Methods/CreateStyle.md) | [ApiStyle](../ApiStyle/ApiStyle.md) | Creates a new style with the specified type and name. If there is a style with the same name it will be replaced with a new one. |
| [DeleteBookmark](./Methods/DeleteBookmark.md) | boolean | Removes a bookmark from the document, if one exists. |
| [GetAllBookmarksNames](./Methods/GetAllBookmarksNames.md) | string[] | Returns an array with names of all bookmarks in the current document. |
| [GetAllCaptionParagraphs](./Methods/GetAllCaptionParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns all caption paragraphs of the specified type from the current document. |
| [GetAllCharts](./Methods/GetAllCharts.md) | [ApiChart](../ApiChart/ApiChart.md)[] | Returns a collection of chart objects from the document content. |
| [GetAllComments](./Methods/GetAllComments.md) | [ApiComment](../ApiComment/ApiComment.md)[] | Returns all comments from the current document. |
| [GetAllContentControls](./Methods/GetAllContentControls.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md)[] \| [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md)[] | Returns a list of all the content controls from the document. |
| [GetAllDrawingObjects](./Methods/GetAllDrawingObjects.md) | [Drawing](../Enumeration/Drawing.md)[] | Returns a collection of drawing objects from the document content. |
| [GetAllForms](./Methods/GetAllForms.md) | [ApiForm](../Enumeration/ApiForm.md)[] | Returns all existing forms in the document. |
| [GetAllHeadingParagraphs](./Methods/GetAllHeadingParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns all heading paragraphs from the current document. |
| [GetAllImages](./Methods/GetAllImages.md) | [ApiImage](../ApiImage/ApiImage.md)[] | Returns a collection of image objects from the document content. |
| [GetAllNumberedParagraphs](./Methods/GetAllNumberedParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns all numbered paragraphs from the current document. |
| [GetAllOleObjects](./Methods/GetAllOleObjects.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md)[] | Returns a collection of OLE objects from the document content. |
| [GetAllParagraphs](./Methods/GetAllParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns an array of all paragraphs from the current document content. |
| [GetAllShapes](./Methods/GetAllShapes.md) | [ApiShape](../ApiShape/ApiShape.md)[] | Returns a collection of shape objects from the document content. |
| [GetAllStyles](./Methods/GetAllStyles.md) | [ApiStyle](../ApiStyle/ApiStyle.md)[] | Returns all styles of the current document. |
| [GetAllTables](./Methods/GetAllTables.md) | [ApiTable](../ApiTable/ApiTable.md)[] | Returns an array of all tables from the current document content. |
| [GetAllTablesOnPage](./Methods/GetAllTablesOnPage.md) | [ApiTable](../ApiTable/ApiTable.md)[] | Returns a collection of tables on a given absolute page. 💡 This method can be a little bit slow, because it runs the document calculation process to arrange tables on the specified page. |
| [GetBookmark](./Methods/GetBookmark.md) | [ApiBookmark](../ApiBookmark/ApiBookmark.md) | Returns a bookmark by its name from the current document. |
| [GetBookmarkRange](./Methods/GetBookmarkRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns a bookmark range. |
| [GetClassType](./Methods/GetClassType.md) | "document" | Returns a type of the ApiDocument class. |
| [GetCommentById](./Methods/GetCommentById.md) | [ApiComment](../ApiComment/ApiComment.md) | Returns a comment from the current document by its ID. |
| [GetCommentsReport](./Methods/GetCommentsReport.md) | [CommentReport](../Enumeration/CommentReport.md) | Returns a report about all the comments added to the document. |
| [GetContent](./Methods/GetContent.md) | [DocumentElement](../Enumeration/DocumentElement.md)[] | Returns an array of document elements from the current ApiDocumentContent object. |
| [GetContentControlsByTag](./Methods/GetContentControlsByTag.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md)[] \| [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md)[] | Returns a list of all content controls in the document with the specified tag name. |
| [GetCore](./Methods/GetCore.md) | [ApiCore](../ApiCore/ApiCore.md) | Retrieves the core properties interface for the current document. This method is used to view or modify standard metadata such as title, author, and keywords. |
| [GetCurrentContentControl](./Methods/GetCurrentContentControl.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) \| null | Returns the currently selected content control. |
| [GetCurrentPage](./Methods/GetCurrentPage.md) | number | Returns the index of the current page. |
| [GetCurrentParagraph](./Methods/GetCurrentParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Returns the current paragraph where the cursor is located. |
| [GetCurrentRun](./Methods/GetCurrentRun.md) | [ApiRun](../ApiRun/ApiRun.md) | Returns the current run where the cursor is located. |
| [GetCurrentSentence](./Methods/GetCurrentSentence.md) | string | Returns the current sentence or part of the current sentence. |
| [GetCurrentVisiblePages](./Methods/GetCurrentVisiblePages.md) | number[] | Returns the indexes of the currently visible pages. |
| [GetCurrentWord](./Methods/GetCurrentWord.md) | string | Returns the current word or part of the current word. |
| [GetCustomProperties](./Methods/GetCustomProperties.md) | [ApiCustomProperties](../ApiCustomProperties/ApiCustomProperties.md) | Retrieves the custom properties from the document. |
| [GetDefaultParaPr](./Methods/GetDefaultParaPr.md) | [ApiParaPr](../ApiParaPr/ApiParaPr.md) | Returns a set of default paragraph properties in the current document. |
| [GetDefaultStyle](./Methods/GetDefaultStyle.md) | [ApiStyle](../ApiStyle/ApiStyle.md) | Returns the default style parameters for the specified document element. |
| [GetDefaultTextPr](./Methods/GetDefaultTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Returns a set of default properties for the text run in the current document. |
| [GetDocumentInfo](./Methods/GetDocumentInfo.md) | object | Returns the document information: -**Application** - the application the document was created with. -**CreatedRaw** - the date and time when the file was created. -**Created** - the parsed date and time when the file was created. -**LastModifiedRaw** - the date and time when the file was last modified. -**LastModified** - the parsed date and time when the file was last modified. -**LastModifiedBy** - the name of the user who made the latest change to the document. -**Authors** - the persons who created the file. -**Title** - the document title (this property allows you to simplify your documents classification). -**Tags** - the document tags (this property allows you to simplify your documents classification). -**Subject** - the document subject (this property allows you to simplify your documents classification). -**Comment** - the comment to the document (this property allows you to simplify your documents classification). |
| [GetElement](./Methods/GetElement.md) | [DocumentElement](../Enumeration/DocumentElement.md) | Returns an element by its position in the document. |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | Returns a number of elements in the current document. |
| [GetEndNotesFirstParagraphs](./Methods/GetEndNotesFirstParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns the first paragraphs from all endnotes in the current document. |
| [GetFinalSection](./Methods/GetFinalSection.md) | [ApiSection](../ApiSection/ApiSection.md) | Returns the document final section. |
| [GetFootnotesFirstParagraphs](./Methods/GetFootnotesFirstParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns the first paragraphs from all footnotes in the current document. |
| [GetFormKeysByRole](./Methods/GetFormKeysByRole.md) | string[] | Returns a list of all form keys attached to the specified role. |
| [GetFormValueByKey](./Methods/GetFormValueByKey.md) | null \| boolean \| string | Returns the form value for the specified key. For a group of radio buttons returns Choice, i.e. the name of the selected item. |
| [GetFormsByKey](./Methods/GetFormsByKey.md) | [ApiForm](../Enumeration/ApiForm.md)[] | Returns a list of all forms in the document with the specified key. |
| [GetFormsByRole](./Methods/GetFormsByRole.md) | [ApiForm](../Enumeration/ApiForm.md)[] | Returns a list of all forms in the document with the specified role name. |
| [GetFormsByTag](./Methods/GetFormsByTag.md) | [ApiForm](../Enumeration/ApiForm.md)[] | Returns a list of all forms in the document with the specified tag name. |
| [GetFormsData](./Methods/GetFormsData.md) | [FormData](../Enumeration/FormData.md)[] | Returns the data from all forms present in the current document. If a form was created and not assigned to any part of the document, it won't appear in this list. |
| [GetPageCount](./Methods/GetPageCount.md) | number | Returns a number of pages in the current document. 💡 This method can be slow for large documents because it runs the document calculation process before the full recalculation. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents the part of the document contained in the specified document. |
| [GetRangeBySelect](./Methods/GetRangeBySelect.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns a range object by the current selection. |
| [GetReviewReport](./Methods/GetReviewReport.md) | [ReviewReport](../Enumeration/ReviewReport.md) | Returns a report about every change which was made to the document in the review mode. |
| [GetSections](./Methods/GetSections.md) | [ApiSection](../ApiSection/ApiSection.md)[] | Returns a collection of section objects in the document. |
| [GetSelectedDrawings](./Methods/GetSelectedDrawings.md) | [ApiShape](../ApiShape/ApiShape.md)[] \| [ApiImage](../ApiImage/ApiImage.md)[] \| [ApiChart](../ApiChart/ApiChart.md)[] \| [ApiDrawing](../ApiDrawing/ApiDrawing.md)[] | Returns all the selected drawings in the current document. |
| [GetStatistics](./Methods/GetStatistics.md) | object | Returns the document statistics represented as an object with the following parameters: -**PageCount** - number of pages; -**WordsCount** - number of words; -**ParagraphCount** - number of paragraphs; -**SymbolsCount** - number of symbols; -**SymbolsWSCount** - number of symbols with spaces. |
| [GetStyle](./Methods/GetStyle.md) | [ApiStyle](../ApiStyle/ApiStyle.md) | Returns a style by its name. |
| [GetTagsOfAllContentControls](./Methods/GetTagsOfAllContentControls.md) | String[] | Returns a list of all tags that are used for all content controls in the document. |
| [GetTagsOfAllForms](./Methods/GetTagsOfAllForms.md) | String[] | Returns a list of all tags that are used for all forms in the document. |
| [GetText](./Methods/GetText.md) | string | Returns the inner text of the current document content object. |
| [GetWatermarkSettings](./Methods/GetWatermarkSettings.md) | [ApiWatermarkSettings](../ApiWatermarkSettings/ApiWatermarkSettings.md) | Returns the watermark settings in the current document. |
| [GroupDrawings](./Methods/GroupDrawings.md) | [ApiGroup](../ApiGroup/ApiGroup.md) | Groups an array of drawings in the current document. |
| [InsertContent](./Methods/InsertContent.md) | boolean | Inserts an array of elements into the current position of the document. |
| [InsertWatermark](./Methods/InsertWatermark.md) | boolean | Inserts a watermark on each document page. |
| [IsTrackRevisions](./Methods/IsTrackRevisions.md) | boolean | Checks if change tracking mode is enabled or not. |
| [Last](./Methods/Last.md) | [DocumentElement](../Enumeration/DocumentElement.md) | Returns the last document element. |
| [MoveCursorToPos](./Methods/MoveCursorToPos.md) | boolean | Moves a cursor to a specified position of the current document. If there is any selection in the document, it will be removed. |
| [Push](./Methods/Push.md) | boolean | Pushes a paragraph or a table to actually add it to the document. |
| [RejectAllRevisionChanges](./Methods/RejectAllRevisionChanges.md) | boolean | Rejects all changes made in review mode. |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | Removes all the elements from the current document or from the current document element. 💡 When all elements are removed, a new empty paragraph is automatically created. If you want to add content to this paragraph, use the [ApiDocumentContent#GetElement](../ApiDocumentContent/Methods/GetElement.md) method. |
| [RemoveElement](./Methods/RemoveElement.md) | boolean | Removes an element using the position specified. |
| [RemoveSelection](./Methods/RemoveSelection.md) | boolean | Removes the current selection. |
| [RemoveWatermark](./Methods/RemoveWatermark.md) | boolean | Removes a watermark from the current document. |
| [ReplaceCurrentImage](./Methods/ReplaceCurrentImage.md) | boolean | Replaces the current image with an image specified. |
| [ReplaceCurrentSentence](./Methods/ReplaceCurrentSentence.md) | boolean | Replaces the current sentence or part of the current sentence with the specified text. |
| [ReplaceCurrentWord](./Methods/ReplaceCurrentWord.md) | boolean | Replaces the current word or part of the current word with the specified text. |
| [ReplaceDrawing](./Methods/ReplaceDrawing.md) | boolean | Replaces a drawing with a new drawing. |
| [Search](./Methods/Search.md) | [ApiRange](../ApiRange/ApiRange.md)[] | Searches for a scope of a document object. The search results are a collection of ApiRange objects. |
| [SearchAndReplace](./Methods/SearchAndReplace.md) | boolean | Finds and replaces the text. |
| [SelectCurrentWord](./Methods/SelectCurrentWord.md) | object | Selects the current word if it is possible. |
| [SetControlsHighlight](./Methods/SetControlsHighlight.md) | boolean | Sets the highlight to the content controls from the current document. |
| [SetEvenAndOddHdrFtr](./Methods/SetEvenAndOddHdrFtr.md) | boolean | Specifies whether sections in this document will have different headers and footers for even and odd pages (one header/footer for odd pages and another header/footer for even pages). |
| [SetFormsData](./Methods/SetFormsData.md) | boolean | Sets the data to the specified forms. |
| [SetFormsHighlight](./Methods/SetFormsHighlight.md) | boolean | Sets the highlight to the forms in the document. |
| [SetTrackRevisions](./Methods/SetTrackRevisions.md) | boolean | Sets the change tracking mode. |
| [SetWatermarkSettings](./Methods/SetWatermarkSettings.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) | Sets the watermark settings in the current document. |
| [ToHtml](./Methods/ToHtml.md) | string | Converts a document to HTML. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiDocument object into the JSON object. |
| [ToMarkdown](./Methods/ToMarkdown.md) | string | Converts a document to Markdown. |
| [UpdateAllFields](./Methods/UpdateAllFields.md) | boolean | Updates all fields in the document. |
| [UpdateAllTOC](./Methods/UpdateAllTOC.md) | boolean | Updates all tables of contents in the current document. |
| [UpdateAllTOF](./Methods/UpdateAllTOF.md) | boolean | Updates all tables of figures in the current document. |
