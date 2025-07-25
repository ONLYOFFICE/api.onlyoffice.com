# ApiBlockLvlSdt

Represents the ApiBlockLvlSdt class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddCaption](./Methods/AddCaption.md) | boolean | Adds a caption paragraph after (or before) the current content control. 💡 Please note that the current content control must be in the document (not in the footer/header). And if the current content control is placed in a shape, then a caption is added after (or before) the parent shape. |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) | Adds a comment to the current block content control. 💡 Please note that the current block content control must be in the document. |
| [AddElement](./Methods/AddElement.md) | boolean | Adds a paragraph or a table or a block content control to the current container. |
| [AddText](./Methods/AddText.md) | boolean | Adds a text to the current content control. |
| [Copy](./Methods/Copy.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) | Creates a copy of an block content control. Ignores comments, footnote references, complex fields. |
| [Delete](./Methods/Delete.md) | boolean | Removes a content control and its content. If keepContent is true, the content is not deleted. |
| [GetAlias](./Methods/GetAlias.md) | string | Returns the alias attribute for the current container. |
| [GetAllContentControls](./Methods/GetAllContentControls.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md)[] \| [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md)[] | Returns a collection of content control objects in the current content control. |
| [GetAllDrawingObjects](./Methods/GetAllDrawingObjects.md) | [Drawing](../Enumeration/Drawing.md)[] | Returns a collection of drawing objects in the current content control. |
| [GetAllParagraphs](./Methods/GetAllParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns a collection of paragraph objects in the current content control. |
| [GetAllTablesOnPage](./Methods/GetAllTablesOnPage.md) | [ApiTable](../ApiTable/ApiTable.md)[] | Returns a collection of tables on a given absolute page. 💡 This method can be a little bit slow, because it runs the document calculation process to arrange tables on the specified page. |
| [GetAppearance](./Methods/GetAppearance.md) | "boundingBox" \| "hidden" | Gets the visualization of the content control. |
| [GetBackgroundColor](./Methods/GetBackgroundColor.md) | null \| Object | Returns the background color of the current content control. |
| [GetBorderColor](./Methods/GetBorderColor.md) | null \| Object | Returns the border color of the current content control. |
| [GetClassType](./Methods/GetClassType.md) | "blockLvlSdt" | Returns a type of the ApiBlockLvlSdt class. |
| [GetContent](./Methods/GetContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | Returns the content of the current container. |
| [GetDataBinding](./Methods/GetDataBinding.md) | [XmlMapping](../Enumeration/XmlMapping.md) | Retrieves the data binding of the content control. |
| [GetDataForXmlMapping](./Methods/GetDataForXmlMapping.md) | string | Returns the content control data for the XML mapping. |
| [GetDropdownList](./Methods/GetDropdownList.md) | [ApiContentControlList](../ApiContentControlList/ApiContentControlList.md) | Returns a list of values of the combo box / drop-down list content control. |
| [GetId](./Methods/GetId.md) | string | Returns a unique ID for the current content control. |
| [GetInternalId](./Methods/GetInternalId.md) | string | Returns an internal id of the current content control. |
| [GetLabel](./Methods/GetLabel.md) | string | Returns the label attribute for the current container. |
| [GetLock](./Methods/GetLock.md) | [SdtLock](../Enumeration/SdtLock.md) | Returns the lock type of the current container. |
| [GetParentContentControl](./Methods/GetParentContentControl.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| null | Returns a content control that contains the current content control. |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Returns a table that contains the current content control. |
| [GetParentTableCell](./Methods/GetParentTableCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | Returns a table cell that contains the current content control. |
| [GetPlaceholderText](./Methods/GetPlaceholderText.md) | string | Returns the placeholder text from the current content control. |
| [GetPosInParent](./Methods/GetPosInParent.md) | Number | Returns the content control position within its parent element. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents the part of the document contained in the specified content control. |
| [GetTag](./Methods/GetTag.md) | string | Returns the tag attribute for the current container. |
| [IsPicture](./Methods/IsPicture.md) | boolean | Checks whether the content control is a picture control. This method verifies if the content control is specifically a picture control. |
| [MoveCursorOutside](./Methods/MoveCursorOutside.md) | boolean | Places a cursor before/after the current content control. |
| [Push](./Methods/Push.md) | boolean | Pushes a paragraph or a table or a block content control to actually add it to the current container. |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | Clears the contents from the current content control. |
| [ReplaceByElement](./Methods/ReplaceByElement.md) | boolean | Replaces the current content control with a new element. |
| [Search](./Methods/Search.md) | [ApiRange](../ApiRange/ApiRange.md)[] | Searches for a scope of a content control object. The search results are a collection of ApiRange objects. |
| [Select](./Methods/Select.md) | boolean | Selects the current content control. |
| [SetAlias](./Methods/SetAlias.md) | boolean | Sets the alias attribute to the current container. |
| [SetAppearance](./Methods/SetAppearance.md) | None | Sets the visualization of the content control. |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | Sets the background color to the current content control. |
| [SetBorderColor](./Methods/SetBorderColor.md) | boolean | Sets the border color to the current content control. |
| [SetDataBinding](./Methods/SetDataBinding.md) | boolean | Sets the data binding for the content control. |
| [SetId](./Methods/SetId.md) | None | Specifies a unique ID for the current content control. |
| [SetLabel](./Methods/SetLabel.md) | boolean | Sets the label attribute to the current container. |
| [SetLock](./Methods/SetLock.md) | boolean | Sets the lock to the current block text content control: **"unlocked"** - content can be edited and the container can be deleted. **"contentLocked"** - content cannot be edited. **"sdtContentLocked"** - content cannot be edited and the container cannot be deleted. **"sdtLocked"** - the container cannot be deleted. |
| [SetPicture](./Methods/SetPicture.md) | boolean | Sets the content (image) for the picture content control. This method updates the picture inside a content control by setting an image from a provided URL. The URL should be an internet link to the image. |
| [SetPlaceholderText](./Methods/SetPlaceholderText.md) | boolean | Sets the placeholder text to the current content control. |
| [SetTag](./Methods/SetTag.md) | boolean | Sets the tag attribute to the current container. |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | Applies text settings to the content of the content control. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiBlockLvlSdt object into the JSON object. |
| [UpdateFromXmlMapping](./Methods/UpdateFromXmlMapping.md) | boolean | Updates the content control using the value from the XML mapping. |
