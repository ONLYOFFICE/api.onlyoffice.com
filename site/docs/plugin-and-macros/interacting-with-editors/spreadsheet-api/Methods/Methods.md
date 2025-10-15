# Api

Represents the Api class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddComment](./AddComment.md) | string \| null | Adds a comment to the workbook. |
| [AddOleObject](./AddOleObject.md) | None | Adds an OLE object to the current document position. |
| [ChangeComment](./ChangeComment.md) | boolean | Changes the specified comment. |
| [CoAuthoringChatSendMessage](./CoAuthoringChatSendMessage.md) | None | Sends a message to the co-authoring chat. |
| [ConvertDocument](./ConvertDocument.md) | string | Converts a document to Markdown or HTML text. |
| [EditOleObject](./EditOleObject.md) | None | Edits an OLE object in the document. |
| [EndAction](./EndAction.md) | None | Specifies the end action for long operations. |
| [FocusEditor](./FocusEditor.md) | None | Returns focus to the editor. |
| [GetAllComments](./GetAllComments.md) | [comment](../Enumeration/comment.md)[] | Returns all the comments from the document. |
| [GetCustomFunctions](./GetCustomFunctions.md) | string | Returns a library of local custom functions. |
| [GetDocumentLang](./GetDocumentLang.md) | string | Returns the document language. |
| [GetFileToDownload](./GetFileToDownload.md) | string | Returns the current file to download in the specified format. |
| [GetFontList](./GetFontList.md) | [FontInfo](../Enumeration/FontInfo.md)[] | Returns the fonts list. |
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
| [InstallPlugin](./InstallPlugin.md) | object | Installs a plugin using the specified plugin config. |
| [MouseMoveWindow](./MouseMoveWindow.md) | None | Sends an event to the plugin when the mouse button is moved inside the plugin iframe. |
| [MouseUpWindow](./MouseUpWindow.md) | None | Sends an event to the plugin when the mouse button is released inside the plugin iframe. |
| [OnDropEvent](./OnDropEvent.md) | None | Implements the external drag&drop emulation. |
| [OnEncryption](./OnEncryption.md) | None | Encrypts the document. |
| [PasteHtml](./PasteHtml.md) | None | Pastes text in the HTML format into the document. |
| [PasteText](./PasteText.md) | None | Pastes text into the document. |
| [PutImageDataToSelection](./PutImageDataToSelection.md) | None | Replaces the first selected drawing with the image specified in the parameters. If there are no drawings selected, the method inserts the image at the current position. |
| [RemoveComments](./RemoveComments.md) | None | Removes the specified comments. |
| [RemoveOleObject](./RemoveOleObject.md) | None | Removes the OLE object from the workbook by its internal ID. |
| [RemovePlugin](./RemovePlugin.md) | object | Removes a plugin with the specified GUID. |
| [ReplaceTextSmart](./ReplaceTextSmart.md) | boolean | Replaces each paragraph (or text in cell) in the select with the corresponding text from an array of strings. |
| [SetCustomFunctions](./SetCustomFunctions.md) | None | Updates a library of local custom functions. |
| [SetMacros](./SetMacros.md) | None | Sets macros to the document. |
| [SetPluginsOptions](./SetPluginsOptions.md) | None | Configures plugins from an external source. The settings can be set for all plugins or for a specific plugin. For example, this method can be used to pass an authorization token to the plugin. This method can be used only with the connector class. |
| [SetProperties](./SetProperties.md) | None | Sets the properties to the document. |
| [ShowButton](./ShowButton.md) | None | Shows or hides buttons in the header. |
| [ShowError](./ShowError.md) | None | Shows an error/warning message. |
| [ShowInputHelper](./ShowInputHelper.md) | None | Shows the input helper. |
| [StartAction](./StartAction.md) | None | Specifies the start action for long operations. |
| [UnShowInputHelper](./UnShowInputHelper.md) | None | Unshows the input helper. |
| [UpdatePlugin](./UpdatePlugin.md) | object | Updates a plugin using the specified plugin config. |
