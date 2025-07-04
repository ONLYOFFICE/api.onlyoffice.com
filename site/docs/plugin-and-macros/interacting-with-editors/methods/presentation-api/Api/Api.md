# Api

Represents the Api class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddComment](./Methods/AddComment.md) | string \| null | Adds a comment to the presentation. |
| [AddOleObject](./Methods/AddOleObject.md) | None | Adds an OLE object to the current document position. |
| [ChangeComment](./Methods/ChangeComment.md) | boolean | Changes the specified comment. |
| [CoAuthoringChatSendMessage](./Methods/CoAuthoringChatSendMessage.md) | None | Sends a message to the co-authoring chat. |
| [ConvertDocument](./Methods/ConvertDocument.md) | string | Converts a document to Markdown or HTML text. |
| [EditOleObject](./Methods/EditOleObject.md) | None | Edits an OLE object in the document. |
| [EndAction](./Methods/EndAction.md) | None | Specifies the end action for long operations. |
| [EndSlideShow](./Methods/EndSlideShow.md) | None | Ends the current slide show. |
| [GetAllComments](./Methods/GetAllComments.md) | [comment](../Enumeration/comment.md)[] | Returns all the comments from the document. |
| [GetDocumentLang](./Methods/GetDocumentLang.md) | string | Returns the document language. |
| [GetFileToDownload](./Methods/GetFileToDownload.md) | string | Returns the current file to download in the specified format. |
| [GetFontList](./Methods/GetFontList.md) | [FontInfo](../Enumeration/FontInfo.md)[] | Returns the fonts list. |
| [GetImageDataFromSelection](./Methods/GetImageDataFromSelection.md) | [ImageData](../Enumeration/ImageData.md) | Returns the image data from the first of the selected drawings. If there are no drawings selected, the method returns a white rectangle. |
| [GetInstalledPlugins](./Methods/GetInstalledPlugins.md) | [PluginData](../Enumeration/PluginData.md)[] | Returns all the installed plugins. |
| [GetMacros](./Methods/GetMacros.md) | [Macros](../Enumeration/Macros.md) | Returns the document macros. |
| [GetSelectedContent](./Methods/GetSelectedContent.md) | string | Returns the selected content in the specified format. |
| [GetSelectedOleObjects](./Methods/GetSelectedOleObjects.md) | [OLEProperties](../Enumeration/OLEProperties.md)[] | Returns an array of the selected OLE objects. |
| [GetSelectedText](./Methods/GetSelectedText.md) | string | Returns the selected text from the document. |
| [GetSelectionType](./Methods/GetSelectionType.md) | [SelectionType](../Enumeration/SelectionType.md) | Returns the type of the current selection. |
| [GetVBAMacros](./Methods/GetVBAMacros.md) | string \| null | Returns all VBA macros from the document. |
| [GetVersion](./Methods/GetVersion.md) | string | Returns the editor version. |
| [GoToNextSlideInSlideShow](./Methods/GoToNextSlideInSlideShow.md) | None | Displays the slide following the current slide in the slide show. |
| [GoToPreviousSlideInSlideShow](./Methods/GoToPreviousSlideInSlideShow.md) | None | Displays the slide following the current slide in the slide show. |
| [GoToSlide](./Methods/GoToSlide.md) | None | Sets the active slide in the editor by its index. |
| [GoToSlideInSlideShow](./Methods/GoToSlideInSlideShow.md) | None | Displays the slide with the specific index. |
| [InputText](./Methods/InputText.md) | None | Inserts text into the document. |
| [InstallPlugin](./Methods/InstallPlugin.md) | object | Installs a plugin using the specified plugin config. |
| [MouseMoveWindow](./Methods/MouseMoveWindow.md) | None | Sends an event to the plugin when the mouse button is moved inside the plugin iframe. |
| [MouseUpWindow](./Methods/MouseUpWindow.md) | None | Sends an event to the plugin when the mouse button is released inside the plugin iframe. |
| [OnDropEvent](./Methods/OnDropEvent.md) | None | Implements the external drag&drop emulation. |
| [OnEncryption](./Methods/OnEncryption.md) | None | Encrypts the document. |
| [PasteHtml](./Methods/PasteHtml.md) | None | Pastes text in the HTML format into the document. |
| [PasteText](./Methods/PasteText.md) | None | Pastes text into the document. |
| [PauseSlideShow](./Methods/PauseSlideShow.md) | None | Pauses the current slide show. |
| [PutImageDataToSelection](./Methods/PutImageDataToSelection.md) | None | Replaces the first selected drawing with the image specified in the parameters. If there are no drawings selected, the method inserts the image at the current position. |
| [RemoveComments](./Methods/RemoveComments.md) | None | Removes the specified comments. |
| [RemovePlugin](./Methods/RemovePlugin.md) | object | Removes a plugin with the specified GUID. |
| [ReplaceTextSmart](./Methods/ReplaceTextSmart.md) | boolean | Replaces each paragraph (or text in cell) in the select with the corresponding text from an array of strings. |
| [ResumeSlideShow](./Methods/ResumeSlideShow.md) | None | Resumes the current slide show. |
| [SetMacros](./Methods/SetMacros.md) | None | Sets macros to the document. |
| [SetPluginsOptions](./Methods/SetPluginsOptions.md) | None | Configures plugins from an external source. The settings can be set for all plugins or for a specific plugin. For example, this method can be used to pass an authorization token to the plugin. This method can be used only with the connector class. |
| [SetProperties](./Methods/SetProperties.md) | None | Sets the properties to the document. |
| [ShowButton](./Methods/ShowButton.md) | None | Shows or hides buttons in the header. |
| [ShowError](./Methods/ShowError.md) | None | Shows an error/warning message. |
| [ShowInputHelper](./Methods/ShowInputHelper.md) | None | Shows the input helper. |
| [StartAction](./Methods/StartAction.md) | None | Specifies the start action for long operations. |
| [StartSlideShow](./Methods/StartSlideShow.md) | None | Starts the presentation slide show. |
| [UnShowInputHelper](./Methods/UnShowInputHelper.md) | None | Unshows the input helper. |
| [UpdatePlugin](./Methods/UpdatePlugin.md) | object | Updates a plugin using the specified plugin config. |
