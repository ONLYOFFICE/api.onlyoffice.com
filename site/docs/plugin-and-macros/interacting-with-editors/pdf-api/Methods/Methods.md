# Api

Represents the Api class.

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [CoAuthoringChatSendMessage](./CoAuthoringChatSendMessage.md) | None | Sends a message to the co-authoring chat. |
| [EndAction](./EndAction.md) | None | Specifies the end action for long operations. |
| [FocusEditor](./FocusEditor.md) | None | Returns focus to the editor. |
| [GetAllComments](./GetAllComments.md) | comment[] | Returns all the comments from the document. |
| [GetCurrentPage](./GetCurrentPage.md) | number | Returns the current page index. |
| [GetFileToDownload](./GetFileToDownload.md) | string | Returns the current file to download in the specified format. |
| [GetFontList](./GetFontList.md) | [FontInfo](../Enumeration/FontInfo.md)[] | Returns the fonts list. |
| [GetInstalledPlugins](./GetInstalledPlugins.md) | [PluginData](../Enumeration/PluginData.md)[] | Returns all the installed plugins. |
| [GetMacros](./GetMacros.md) | [Macros](../Enumeration/Macros.md) | Returns the document macros. |
| [GetPageImage](./GetPageImage.md) | canvas | Returns the page image. |
| [GetSelectedText](./GetSelectedText.md) | string | Returns the selected text from the document. |
| [GetVersion](./GetVersion.md) | string | Returns the editor version. |
| [GoToPage](./GoToPage.md) | boolean | Moves to specified page. |
| [InstallPlugin](./InstallPlugin.md) | object | Installs a plugin using the specified plugin config. |
| [MouseMoveWindow](./MouseMoveWindow.md) | None | Sends an event to the plugin when the mouse button is moved inside the plugin iframe. |
| [MouseUpWindow](./MouseUpWindow.md) | None | Sends an event to the plugin when the mouse button is released inside the plugin iframe. |
| [OnDropEvent](./OnDropEvent.md) | None | Implements the external drag&drop emulation. |
| [PasteHtml](./PasteHtml.md) | None | Pastes text in the HTML format into the document. |
| [PasteText](./PasteText.md) | None | Pastes text into the document. |
| [RemovePlugin](./RemovePlugin.md) | object | Removes a plugin with the specified GUID. |
| [ReplacePageContent](./ReplacePageContent.md) | boolean | Replaces the page content with the specified parameters. |
| [SetMacros](./SetMacros.md) | None | Sets macros to the document. |
| [SetPluginsOptions](./SetPluginsOptions.md) | None | Configures plugins from an external source. The settings can be set for all plugins or for a specific plugin. |
| [SetProperties](./SetProperties.md) | None | Sets the properties to the document. |
| [ShowButton](./ShowButton.md) | None | Shows or hides buttons in the header. |
| [ShowError](./ShowError.md) | None | Shows an error/warning message. |
| [ShowInputHelper](./ShowInputHelper.md) | None | Shows the input helper. |
| [StartAction](./StartAction.md) | None | Specifies the start action for long operations. |
| [UnShowInputHelper](./UnShowInputHelper.md) | None | Unshows the input helper. |
| [UpdatePlugin](./UpdatePlugin.md) | object | Updates a plugin using the specified plugin config. |
