# PDF API

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [CoAuthoringChatSendMessage](./Methods/CoAuthoringChatSendMessage.md) | None | Sends a message to the co-authoring chat. |
| [EndAction](./Methods/EndAction.md) | None | Specifies the end action for long operations. |
| [FocusEditor](./Methods/FocusEditor.md) | None | Returns focus to the editor. |
| [GetAllComments](./Methods/GetAllComments.md) | comment[] | Returns all the comments from the document. |
| [GetCurrentPage](./Methods/GetCurrentPage.md) | number | Returns the current page index. |
| [GetFileToDownload](./Methods/GetFileToDownload.md) | string | Returns the current file to download in the specified format. |
| [GetFontList](./Methods/GetFontList.md) | [FontInfo](./Enumeration/FontInfo.md)[] | Returns the fonts list. |
| [GetInstalledPlugins](./Methods/GetInstalledPlugins.md) | [PluginData](./Enumeration/PluginData.md)[] | Returns all the installed plugins. |
| [GetMacros](./Methods/GetMacros.md) | [Macros](./Enumeration/Macros.md) | Returns the document macros. |
| [GetPageImage](./Methods/GetPageImage.md) | canvas | Returns the page image. |
| [GetSelectedText](./Methods/GetSelectedText.md) | string | Returns the selected text from the document. |
| [GetVersion](./Methods/GetVersion.md) | string | Returns the editor version. |
| [GoToPage](./Methods/GoToPage.md) | boolean | Moves to specified page. |
| [InstallPlugin](./Methods/InstallPlugin.md) | object | Installs a plugin using the specified plugin config. |
| [MouseMoveWindow](./Methods/MouseMoveWindow.md) | None | Sends an event to the plugin when the mouse button is moved inside the plugin iframe. |
| [MouseUpWindow](./Methods/MouseUpWindow.md) | None | Sends an event to the plugin when the mouse button is released inside the plugin iframe. |
| [OnDropEvent](./Methods/OnDropEvent.md) | None | Implements the external drag&drop emulation. |
| [PasteHtml](./Methods/PasteHtml.md) | None | Pastes text in the HTML format into the document. |
| [PasteText](./Methods/PasteText.md) | None | Pastes text into the document. |
| [RemovePlugin](./Methods/RemovePlugin.md) | object | Removes a plugin with the specified GUID. |
| [ReplacePageContent](./Methods/ReplacePageContent.md) | boolean | Replaces the page content with the specified parameters. |
| [SetMacros](./Methods/SetMacros.md) | None | Sets macros to the document. |
| [SetPluginsOptions](./Methods/SetPluginsOptions.md) | None | Configures plugins from an external source. The settings can be set for all plugins or for a specific plugin. |
| [SetProperties](./Methods/SetProperties.md) | None | Sets the properties to the document. |
| [ShowButton](./Methods/ShowButton.md) | None | Shows or hides buttons in the header. |
| [ShowError](./Methods/ShowError.md) | None | Shows an error/warning message. |
| [ShowInputHelper](./Methods/ShowInputHelper.md) | None | Shows the input helper. |
| [StartAction](./Methods/StartAction.md) | None | Specifies the start action for long operations. |
| [UnShowInputHelper](./Methods/UnShowInputHelper.md) | None | Unshows the input helper. |
| [UpdatePlugin](./Methods/UpdatePlugin.md) | object | Updates a plugin using the specified plugin config. |

## Events

The following table lists the available events.

| Event | Description |
| ----- | ----------- |
| [onChangeRestrictions](./Events/onChangeRestrictions.md) | The function called when the restrictions in the editor are changed. |
| [onClick](./Events/onClick.md) | The function called when the user clicks the element. |
| [onDocumentContentReady](./Events/onDocumentContentReady.md) | The function called when the document is completely loaded. |
| [onEnableMouseEvent](./Events/onEnableMouseEvent.md) | The function called to turn the mouse or touchpad events on/off. |
| [onExternalMouseUp](./Events/onExternalMouseUp.md) | The function called when the mouse button is released outside the plugin iframe. |
| [onTargetPositionChanged](./Events/onTargetPositionChanged.md) | The function called when the target position in the editor is changed. |
