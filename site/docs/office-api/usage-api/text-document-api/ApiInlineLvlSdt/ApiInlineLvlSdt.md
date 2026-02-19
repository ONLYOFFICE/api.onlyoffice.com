# ApiInlineLvlSdt

Represents the ApiInlineLvlSdt class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) | Adds a comment to the current inline content control. 💡 Please note that this inline content control must be in the document. |
| [AddElement](./Methods/AddElement.md) | boolean | Adds an element to the inline text content control. |
| [AddListItem](./Methods/AddListItem.md) | boolean | Adds an item to a combo box list or drop-down list. |
| [AddText](./Methods/AddText.md) | boolean | Adds text to the current content control. |
| [Copy](./Methods/Copy.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | Creates a copy of an inline content control. Ignores comments, footnote references, complex fields. |
| [Delete](./Methods/Delete.md) | boolean | Removes a content control and its content. If keepContent is true, the content is not deleted. |
| [GetAlias](./Methods/GetAlias.md) | string | Returns the alias attribute for the current container. |
| [GetAppearance](./Methods/GetAppearance.md) | "boundingBox" \| "hidden" | Returns the visualization type of the content control. |
| [GetBackgroundColor](./Methods/GetBackgroundColor.md) | [ApiColor](../ApiColor/ApiColor.md) | Returns the background color of the current content control. |
| [GetBorderColor](./Methods/GetBorderColor.md) | [ApiColor](../ApiColor/ApiColor.md) | Returns the border color of the current content control. |
| [GetClassType](./Methods/GetClassType.md) | "inlineLvlSdt" | Returns a type of the ApiInlineLvlSdt class. |
| [GetDataBinding](./Methods/GetDataBinding.md) | [XmlMapping](../Enumeration/XmlMapping.md) | Retrieves the data binding of the content control. |
| [GetDataForXmlMapping](./Methods/GetDataForXmlMapping.md) | string | Returns the content control data for the XML mapping. |
| [GetDate](./Methods/GetDate.md) | undefined \| Date | Retrieves the selected date value from a date picker content control and returns it as a Date object. Throws: Error if the content control is not a date picker. |
| [GetDropdownList](./Methods/GetDropdownList.md) | [ApiContentControlList](../ApiContentControlList/ApiContentControlList.md) | Returns a list of values of the combo box / drop-down list content control. |
| [GetElement](./Methods/GetElement.md) | [ParagraphContent](../Enumeration/ParagraphContent.md) | Returns an element of the current inline text content control using the position specified. |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | Returns a number of elements in the current inline text content control. The text content  control is created with one text run present in it by default, so even without any  element added this method will return the value of '1'. |
| [GetId](./Methods/GetId.md) | string | Returns a unique ID for the current content control. |
| [GetInternalId](./Methods/GetInternalId.md) | string | Returns an internal ID of the current content control. |
| [GetLabel](./Methods/GetLabel.md) | number | Returns the label attribute for the current container. |
| [GetLock](./Methods/GetLock.md) | [SdtLock](../Enumeration/SdtLock.md) | Returns the lock type of the current container. |
| [GetParentContentControl](./Methods/GetParentContentControl.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) \| null | Returns a content control that contains the current content control. |
| [GetParentParagraph](./Methods/GetParentParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | Returns a paragraph that contains the current content control. |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Returns a table that contains the current content control. |
| [GetParentTableCell](./Methods/GetParentTableCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | Returns a table cell that contains the current content control. |
| [GetPlaceholderText](./Methods/GetPlaceholderText.md) | string | Returns the placeholder text from the current inline content control. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents the part of the document contained in the specified content control. |
| [GetTag](./Methods/GetTag.md) | string | Returns the tag attribute for the current container. |
| [IsCheckBox](./Methods/IsCheckBox.md) | boolean | Checks if the content control is a checkbox. |
| [IsCheckBoxChecked](./Methods/IsCheckBoxChecked.md) | boolean | Determines whether a checkbox content control is currently checked or unchecked. Throws: Error if the content control is not a checkbox. |
| [IsComboBox](./Methods/IsComboBox.md) | boolean | Checks whether the content control is a combo box list. |
| [IsDatePicker](./Methods/IsDatePicker.md) | boolean | Checks whether the content control is a datepicker. |
| [IsDropDownList](./Methods/IsDropDownList.md) | boolean | Checks whether the content control is a drop-down list. |
| [IsForm](./Methods/IsForm.md) | boolean | Checks if the content control is a form. |
| [IsPicture](./Methods/IsPicture.md) | boolean | Checks whether the content control is a picture control. This method verifies if the content control is specifically a picture control. |
| [MoveCursorOutside](./Methods/MoveCursorOutside.md) | boolean | Places a cursor before/after the current content control. |
| [Push](./Methods/Push.md) | boolean | Adds an element to the end of inline text content control. |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | Removes all the elements from the current inline text content control. |
| [RemoveElement](./Methods/RemoveElement.md) | boolean | Removes an element using the position specified from the current inline text content control. |
| [RemoveListItem](./Methods/RemoveListItem.md) | boolean | Removes an item from a combo box list or drop-down list. |
| [Select](./Methods/Select.md) | boolean | Selects the current content control. |
| [SelectListItem](./Methods/SelectListItem.md) | boolean | Sets the selected item for a combo box list or drop-down list. |
| [SetAlias](./Methods/SetAlias.md) | boolean | Sets the alias attribute to the current container. |
| [SetAppearance](./Methods/SetAppearance.md) | None | Sets the visualization type of the content control. |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | Sets the background color to the current content control. |
| [SetBorderColor](./Methods/SetBorderColor.md) | boolean | Sets the border color to the current content control. |
| [SetCheckBoxChecked](./Methods/SetCheckBoxChecked.md) | boolean | Sets the checkbox value for the content control. This method updates the checkbox state of the content control to either checked or unchecked. |
| [SetDataBinding](./Methods/SetDataBinding.md) | boolean | Sets the data binding for the current content control. |
| [SetDate](./Methods/SetDate.md) | boolean | Sets the value for the datepicker content control. |
| [SetDateFormat](./Methods/SetDateFormat.md) | boolean | Sets the date format for the datepicker content control. This method allows setting the format in which the date should be displayed in the datepicker content control. The format string should be specified using common date format patterns (e.g., "mm.dd.yyyy"). |
| [SetId](./Methods/SetId.md) | boolean | Specifies a unique ID for the current content control. |
| [SetLabel](./Methods/SetLabel.md) | boolean | Adds a string label to the current inline text content control. |
| [SetLock](./Methods/SetLock.md) | boolean | Sets the lock to the current inline text content control: **"unlocked"** - content can be edited and the container can be deleted. **"contentLocked"** - content cannot be edited. **"sdtContentLocked"** - content cannot be edited and the container cannot be deleted. **"sdtLocked"** - the container cannot be deleted. |
| [SetPicture](./Methods/SetPicture.md) | boolean | Sets the content (image) for the picture content control. This method updates the picture inside a content control by setting an image from a provided URL. The URL should be an internet link to the image. |
| [SetPictureSize](./Methods/SetPictureSize.md) | boolean | Sets the size for the picture in a content control. This method adjusts the width and height of the image if the content control is a picture. |
| [SetPlaceholderText](./Methods/SetPlaceholderText.md) | boolean | Sets the placeholder text to the current inline content control. *Can't be set to checkbox or radio button* |
| [SetTag](./Methods/SetTag.md) | boolean | Adds a string tag to the current inline text content control. |
| [SetTextPr](./Methods/SetTextPr.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | Applies text settings to the content of the content control. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiInlineLvlSdt object into the JSON object. |
| [UpdateFromXmlMapping](./Methods/UpdateFromXmlMapping.md) | boolean | Updates the content control using the value from the XML mapping. |
