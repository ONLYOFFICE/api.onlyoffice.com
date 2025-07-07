# Api

Represents the Api class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AcceptReviewChanges](./AcceptReviewChanges.md) | None | Accepts review changes. |
| [AddAddinField](./AddAddinField.md) | None | Creates a new addin field with the data specified in the request. |
| [AddComment](./AddComment.md) | string \| null | Adds a comment to the document. |
| [AddContentControl](./AddContentControl.md) | [ContentControl](../Enumeration/ContentControl.md) | Adds an empty content control to the document. |
| [AddContentControlCheckBox](./AddContentControlCheckBox.md) | None | Adds an empty content control checkbox to the document. |
| [AddContentControlDatePicker](./AddContentControlDatePicker.md) | None | Adds an empty content control datepicker to the document. |
| [AddContentControlList](./AddContentControlList.md) | None | Adds an empty content control list to the document. |
| [AddContentControlPicture](./AddContentControlPicture.md) | None | Adds an empty content control picture to the document. |
| [AddOleObject](./AddOleObject.md) | None | Adds an OLE object to the current document position. |
| [CanRedo](./CanRedo.md) | boolean | Checks if it possible to revert the user's last undone action. |
| [CanUndo](./CanUndo.md) | boolean | Checks if it is possible to undo the user's last action. |
| [ChangeComment](./ChangeComment.md) | None | Changes the specified comment. |
| [ChangeOleObject](./ChangeOleObject.md) | None | Changes the OLE object with the *InternalId* specified in OLE object data. |
| [ChangeOleObjects](./ChangeOleObjects.md) | None | Changes multiple OLE objects with the *InternalIds* specified in OLE object data. |
| [CoAuthoringChatSendMessage](./CoAuthoringChatSendMessage.md) | None | Sends a message to the co-authoring chat. |
| [ConvertDocument](./ConvertDocument.md) | string | Converts a document to Markdown or HTML text. |
| [EditOleObject](./EditOleObject.md) | None | Edits an OLE object in the document. |
| [EndAction](./EndAction.md) | None | Specifies the end action for long operations. |
| [GetAllAddinFields](./GetAllAddinFields.md) | [AddinFieldData](../Enumeration/AddinFieldData.md)[] | Returns all addin fields from the current document. |
| [GetAllComments](./GetAllComments.md) | [comment](../Enumeration/comment.md)[] | Returns all the comments from the document. |
| [GetAllContentControls](./GetAllContentControls.md) | [ContentControl](../Enumeration/ContentControl.md)[] | Returns information about all the content controls that have been added to the page. |
| [GetAllForms](./GetAllForms.md) | [ContentControl](../Enumeration/ContentControl.md)[] | Returns information about all the forms that have been added to the document. |
| [GetAllOleObjects](./GetAllOleObjects.md) | [OLEObjectData](../Enumeration/OLEObjectData.md)[] | Returns all OLE object data for objects which can be opened by the specified plugin. If *sPluginId* is not defined, this method returns all OLE objects contained in the currrent document. |
| [GetCurrentBookmark](./GetCurrentBookmark.md) | string \| null | Returns the current bookmark. |
| [GetCurrentContentControl](./GetCurrentContentControl.md) | string | Returns an identifier of the selected content control (i.e. the content control where the mouse cursor is currently positioned). |
| [GetCurrentContentControlPr](./GetCurrentContentControlPr.md) | [ContentControlProperties](../Enumeration/ContentControlProperties.md) | Returns the current content control properties. |
| [GetCurrentSentence](./GetCurrentSentence.md) | string | Returns the current sentence. |
| [GetCurrentWord](./GetCurrentWord.md) | string | Returns the current word. |
| [GetDocumentLang](./GetDocumentLang.md) | string | Returns the document language. |
| [GetFields](./GetFields.md) | string[] | Returns all fields as a text. |
| [GetFileHTML](./GetFileHTML.md) | string | Returns file content in the HTML format. |
| [GetFileToDownload](./GetFileToDownload.md) | string | Returns the current file to download in the specified format. |
| [GetFontList](./GetFontList.md) | [FontInfo](../Enumeration/FontInfo.md)[] | Returns the fonts list. |
| [GetFormValue](./GetFormValue.md) | null \| string \| boolean | Returns a value of the specified form. |
| [GetFormsByTag](./GetFormsByTag.md) | [ContentControl](../Enumeration/ContentControl.md)[] | Returns information about all the forms that have been added to the document with specified tag. |
| [GetImageDataFromSelection](./GetImageDataFromSelection.md) | [ImageData](../Enumeration/ImageData.md) | Returns the image data from the first of the selected drawings. If there are no drawings selected, the method returns a white rectangle. |
| [GetInstalledPlugins](./GetInstalledPlugins.md) | [PluginData](../Enumeration/PluginData.md)[] | Returns all the installed plugins. |
| [GetMacros](./GetMacros.md) | [Macros](../Enumeration/Macros.md) | Returns the document macros. |
| [GetSelectedContent](./GetSelectedContent.md) | string | Returns the selected content in the specified format. |
| [GetSelectedOleObjects](./GetSelectedOleObjects.md) | [OLEProperties](../Enumeration/OLEProperties.md)[] | Returns an array of the selected OLE objects. |
| [GetSelectedText](./GetSelectedText.md) | string | Returns the selected text from the document. |
| [GetSelectionType](./GetSelectionType.md) | [SelectionType](../Enumeration/SelectionType.md) | Returns the type of the current selection. |
| [GetVBAMacros](./GetVBAMacros.md) | string \| null | Returns all VBA macros from the document. |
| [GetVersion](./GetVersion.md) | string | Returns the editor version. |
| [InputText](./InputText.md) | None | Inserts text into the document. |
| [InsertAndReplaceContentControls](./InsertAndReplaceContentControls.md) | [ContentControlProperties](../Enumeration/ContentControlProperties.md)[] | Inserts the content control containing data. The data is specified by the JS code for [Document](https://api.onlyoffice.com/docs/office-api/usage-api/text-document-api/), or by a link to the shared document. |
| [InsertOleObject](./InsertOleObject.md) | None | Inserts the OLE object at the current document position. |
| [InstallPlugin](./InstallPlugin.md) | object | Installs a plugin using the specified plugin config. |
| [MouseMoveWindow](./MouseMoveWindow.md) | None | Sends an event to the plugin when the mouse button is moved inside the plugin iframe. |
| [MouseUpWindow](./MouseUpWindow.md) | None | Sends an event to the plugin when the mouse button is released inside the plugin iframe. |
| [MoveCursorToContentControl](./MoveCursorToContentControl.md) | None | Moves a cursor to the specified content control. |
| [MoveCursorToEnd](./MoveCursorToEnd.md) | None | Moves a cursor to the end of the current editing area (document body, footer/header, footnote, or autoshape). This method is similar to pressing the -**Ctrl + End** keyboard shortcut. |
| [MoveCursorToStart](./MoveCursorToStart.md) | None | Moves a cursor to the beginning of the current editing area (document body, footer/header, footnote, or autoshape). This method is similar to pressing the -**Ctrl + Home** keyboard shortcut. |
| [MoveToComment](./MoveToComment.md) | None | Moves a cursor to the specified comment. |
| [MoveToNextReviewChange](./MoveToNextReviewChange.md) | None | Navigates through the review changes. |
| [OnDropEvent](./OnDropEvent.md) | None | Implements the external drag&drop emulation. |
| [OnEncryption](./OnEncryption.md) | None | Encrypts the document. |
| [OpenFile](./OpenFile.md) | None | Opens a file with fields. |
| [PasteHtml](./PasteHtml.md) | None | Pastes text in the HTML format into the document. |
| [PasteText](./PasteText.md) | None | Pastes text into the document. |
| [PutImageDataToSelection](./PutImageDataToSelection.md) | None | Replaces the first selected drawing with the image specified in the parameters. If there are no drawings selected, the method inserts the image at the current position. |
| [Redo](./Redo.md) | None | Reverts the user's last undone action. |
| [RejectReviewChanges](./RejectReviewChanges.md) | None | Rejects review changes. |
| [RemoveComments](./RemoveComments.md) | None | Removes the specified comments. |
| [RemoveContentControl](./RemoveContentControl.md) | [ContentControlParentPr](../Enumeration/ContentControlParentPr.md) | Removes the currently selected content control retaining all its contents. The content control where the mouse cursor is currently positioned will be removed. |
| [RemoveContentControls](./RemoveContentControls.md) | None | Removes several content controls. |
| [RemoveFieldWrapper](./RemoveFieldWrapper.md) | None | Removes a field wrapper, leaving only the field content. |
| [RemoveOleObject](./RemoveOleObject.md) | None | Removes the OLE object from the document by its internal ID. |
| [RemoveOleObjects](./RemoveOleObjects.md) | None | Removes several OLE objects from the document by their internal IDs. |
| [RemovePlugin](./RemovePlugin.md) | object | Removes a plugin with the specified GUID. |
| [RemoveSelectedContent](./RemoveSelectedContent.md) | None | Removes the selected content from the document. |
| [ReplaceCurrentSentence](./ReplaceCurrentSentence.md) | None | Replaces the current sentence with the specified string. |
| [ReplaceCurrentWord](./ReplaceCurrentWord.md) | None | Replaces the current word with the specified string. |
| [ReplaceTextSmart](./ReplaceTextSmart.md) | boolean | Replaces each paragraph (or text in cell) in the select with the corresponding text from an array of strings. |
| [SearchAndReplace](./SearchAndReplace.md) | None | Finds and replaces the text. |
| [SearchNext](./SearchNext.md) | boolean | Finds and selects the next occurrence of the text starting at the current position. |
| [SelectContentControl](./SelectContentControl.md) | None | Selects the specified content control. |
| [SelectOleObject](./SelectOleObject.md) | None | Selects the specified OLE object. |
| [SetDisplayModeInReview](./SetDisplayModeInReview.md) | None | Sets the display mode for track changes. |
| [SetEditingRestrictions](./SetEditingRestrictions.md) | None | Sets the document editing restrictions. |
| [SetFormValue](./SetFormValue.md) | None | Sets a value to the specified form. |
| [SetMacros](./SetMacros.md) | None | Sets macros to the document. |
| [SetPluginsOptions](./SetPluginsOptions.md) | None | Configures plugins from an external source. The settings can be set for all plugins or for a specific plugin. For example, this method can be used to pass an authorization token to the plugin. This method can be used only with the connector class. |
| [SetProperties](./SetProperties.md) | None | Sets the properties to the document. |
| [ShowButton](./ShowButton.md) | None | Shows or hides buttons in the header. |
| [ShowError](./ShowError.md) | None | Shows an error/warning message. |
| [ShowInputHelper](./ShowInputHelper.md) | None | Shows the input helper. |
| [StartAction](./StartAction.md) | None | Specifies the start action for long operations. |
| [UnShowInputHelper](./UnShowInputHelper.md) | None | Unshows the input helper. |
| [Undo](./Undo.md) | None | Undoes the user's last action. |
| [UpdateAddinFields](./UpdateAddinFields.md) | None | Updates the addin fields with the specified data. |
| [UpdatePlugin](./UpdatePlugin.md) | object | Updates a plugin using the specified plugin config. |
