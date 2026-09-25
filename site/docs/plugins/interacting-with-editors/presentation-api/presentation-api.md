# Presentation API

The Presentation API contains the methods and events available to a plugin
in the ONLYOFFICE Presentation editor. Methods are run with executeMethod,
events are attached with attachEvent.

## Methods

The following table lists the available methods.

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddComment](./Methods/AddComment.md) | string \| null | Adds a comment to the presentation. |
| [AddOleObject](./Methods/AddOleObject.md) | None | Adds an OLE object to the current document position. |
| [AnnotateParagraph](./Methods/AnnotateParagraph.md) | None | Adds annotations to the specified paragraph. |
| [ApplyTheme](./Methods/ApplyTheme.md) | boolean | Applies a theme to the presentation by index or name. |
| [ChangeComment](./Methods/ChangeComment.md) | boolean | Changes the specified comment. |
| [CoAuthoringChatSendMessage](./Methods/CoAuthoringChatSendMessage.md) | None | Sends a message to the co-authoring chat. |
| [EditOleObject](./Methods/EditOleObject.md) | None | Edits an OLE object in the document. |
| [EndAction](./Methods/EndAction.md) | None | Specifies the end action for long operations. |
| [EndSlideShow](./Methods/EndSlideShow.md) | None | Ends the current slide show. |
| [FocusEditor](./Methods/FocusEditor.md) | None | Returns focus to the editor. |
| [GetAllComments](./Methods/GetAllComments.md) | [comment](./Enumeration/comment.md)[] | Returns all the comments from the document. |
| [GetDocumentLang](./Methods/GetDocumentLang.md) | string | Returns the document language. |
| [GetEditorThemes](./Methods/GetEditorThemes.md) | object[] | Returns the list of available editor themes. |
| [GetFileToDownload](./Methods/GetFileToDownload.md) | string | Returns the current file to download in the specified format. |
| [GetFontList](./Methods/GetFontList.md) | [FontInfo](./Enumeration/FontInfo.md)[] | Returns the fonts list. |
| [GetImageDataFromSelection](./Methods/GetImageDataFromSelection.md) | [ImageData](./Enumeration/ImageData.md) | Returns the image data from the first of the selected drawings. If there are no drawings selected, the method returns a white rectangle. |
| [GetInstalledPlugins](./Methods/GetInstalledPlugins.md) | [PluginData](./Enumeration/PluginData.md)[] | Returns all the installed plugins. |
| [GetMacros](./Methods/GetMacros.md) | [Macros](./Enumeration/Macros.md) | Returns the document macros. |
| [GetSelectedContent](./Methods/GetSelectedContent.md) | string | Returns the selected content in the specified format. |
| [GetSelectedOleObjects](./Methods/GetSelectedOleObjects.md) | [OLEProperties](./Enumeration/OLEProperties.md)[] | Returns an array of the selected OLE objects. |
| [GetSelectedText](./Methods/GetSelectedText.md) | string | Returns the selected text from the document. |
| [GetSelectionType](./Methods/GetSelectionType.md) | [SelectionType](./Enumeration/SelectionType.md) | Returns the type of the current selection. |
| [GetVBAMacros](./Methods/GetVBAMacros.md) | string \| null | Returns all VBA macros from the document. |
| [GetVersion](./Methods/GetVersion.md) | string | Returns the editor version. |
| [GoToNextSlideInSlideShow](./Methods/GoToNextSlideInSlideShow.md) | None | Displays the slide following the current slide in the slide show. |
| [GoToPreviousSlideInSlideShow](./Methods/GoToPreviousSlideInSlideShow.md) | None | Displays the slide following the current slide in the slide show. |
| [GoToSlide](./Methods/GoToSlide.md) | None | Sets the active slide in the editor by its index. |
| [GoToSlideInSlideShow](./Methods/GoToSlideInSlideShow.md) | None | Displays the slide with the specific index. |
| [InputText](./Methods/InputText.md) | None | Inserts text into the document. |
| [InsertPresentationFromUrl](./Methods/InsertPresentationFromUrl.md) | number | Inserts slides from an external presentation referenced by URL into the current presentation. |
| [InstallPlugin](./Methods/InstallPlugin.md) | object | Installs a plugin using the specified plugin config. |
| [MouseMoveWindow](./Methods/MouseMoveWindow.md) | None | Sends an event to the plugin when the mouse button is moved inside the plugin iframe. |
| [MouseUpWindow](./Methods/MouseUpWindow.md) | None | Sends an event to the plugin when the mouse button is released inside the plugin iframe. |
| [OnDropEvent](./Methods/OnDropEvent.md) | None | Implements the external drag&drop emulation. |
| [OnEncryption](./Methods/OnEncryption.md) | None | Encrypts the document. |
| [PasteHtml](./Methods/PasteHtml.md) | None | Pastes text in the HTML format into the document. |
| [PasteText](./Methods/PasteText.md) | None | Pastes text into the document. |
| [PauseSlideShow](./Methods/PauseSlideShow.md) | None | Pauses the current slide show. |
| [PutImageDataToSelection](./Methods/PutImageDataToSelection.md) | None | Replaces the first selected drawing with the image specified in the parameters. |
| [RemoveAnnotationRange](./Methods/RemoveAnnotationRange.md) | None | Removes a specific annotation range from the presentation. |
| [RemoveComments](./Methods/RemoveComments.md) | None | Removes the specified comments. |
| [RemoveOleObject](./Methods/RemoveOleObject.md) | None | Removes the OLE object from the presentation by its internal ID. |
| [RemovePlugin](./Methods/RemovePlugin.md) | object | Removes a plugin with the specified GUID. |
| [ReplaceTextSmart](./Methods/ReplaceTextSmart.md) | boolean | Replaces each paragraph (or text in cell) in the select with the corresponding text from an array of strings. |
| [ResumeSlideShow](./Methods/ResumeSlideShow.md) | None | Resumes the current slide show. |
| [SelectAnnotationRange](./Methods/SelectAnnotationRange.md) | None | Selects text in a presentation using a given annotation. |
| [SetMacros](./Methods/SetMacros.md) | None | Sets macros to the document. |
| [SetPluginsOptions](./Methods/SetPluginsOptions.md) | None | Configures plugins from an external source. The settings can be set for all plugins or for a specific plugin. |
| [SetProperties](./Methods/SetProperties.md) | None | Sets the properties to the document. |
| [ShowButton](./Methods/ShowButton.md) | None | Shows or hides buttons in the header. |
| [ShowError](./Methods/ShowError.md) | None | Shows an error/warning message. |
| [ShowInputHelper](./Methods/ShowInputHelper.md) | None | Shows the input helper. |
| [StartAction](./Methods/StartAction.md) | None | Specifies the start action for long operations. |
| [StartSlideShow](./Methods/StartSlideShow.md) | None | Starts the presentation slide show. |
| [UnShowInputHelper](./Methods/UnShowInputHelper.md) | None | Unshows the input helper. |
| [UpdatePlugin](./Methods/UpdatePlugin.md) | object | Updates a plugin using the specified plugin config. |

## Events

The following table lists the available events.

| Event | Description |
| ----- | ----------- |
| [onChangeCurrentSlide](./Events/onChangeCurrentSlide.md) | The function called when the current slide has changed. |
| [onChangeRestrictions](./Events/onChangeRestrictions.md) | The function called when the restrictions in the editor are changed. |
| [onClick](./Events/onClick.md) | The function called when the user clicks the element. |
| [onDocumentContentReady](./Events/onDocumentContentReady.md) | The function called when the document is completely loaded. |
| [onEnableMouseEvent](./Events/onEnableMouseEvent.md) | The function called to turn the mouse or touchpad events on/off. |
| [onExternalMouseUp](./Events/onExternalMouseUp.md) | The function called when the mouse button is released outside the plugin iframe. |
| [onSlideShowBegin](./Events/onSlideShowBegin.md) | The function called when a slide show presentation starts. |
| [onSlideShowEnd](./Events/onSlideShowEnd.md) | The function called when a slide show presentation ends. |
| [onSlideShowNextSlide](./Events/onSlideShowNextSlide.md) | The function called after a slide has been changed and displayed during a slide show presentation. Fires before the slide content is actually displayed. |
| [onSlideShowSlideChanged](./Events/onSlideShowSlideChanged.md) | The function called when slide changes during a slide show presentation. Provides information about both the current and previous slide. |
| [onTargetPositionChanged](./Events/onTargetPositionChanged.md) | The function called when the target position in the editor is changed. |
