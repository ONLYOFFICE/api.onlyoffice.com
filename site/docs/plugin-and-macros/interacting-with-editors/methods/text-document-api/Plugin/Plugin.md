# Plugin

Represents the Plugin class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [attachContextMenuClickEvent](./Methods/attachContextMenuClickEvent.md) | None | Defines the method to add an event listener, a function that will be called whenever the specified event is clicked in the context menu. |
| [attachEvent](./Methods/attachEvent.md) | None | Defines the method to add an event listener, a function that will be called whenever the specified event is delivered to the target. The list of all the available events can be found &#123;@link /plugin/events here&#125;. |
| [callCommand](./Methods/callCommand.md) | None | Defines the method used to send the data back to the editor. It allows the plugin to send structured data that can be inserted to the resulting document file (formatted paragraphs, tables, text parts, and separate words, etc.). The *callback* is the result that the command returns. It is an optional parameter. In case it is missing, the [window.Asc.plugin.onCommandCallback](../Plugin/Methods/onCommandCallback.md) function will be used to return the result of the command execution. 💡 -**ONLYOFFICE Document Builder** commands can be only used to create content and insert it to the document editor (using the *Api.GetDocument().InsertContent(...)*). This limitation exists due to the co-editing feature in the online editors. If it is necessary to create a plugin for desktop editors to work with local files, no such limitation is applied. This method is executed in its own context isolated from other JavaScript data. If some parameters or other data need to be passed to this method, use &#123;@link /plugin/scope Asc.scope&#125; object. |
| [callModule](./Methods/callModule.md) | None | Defines the method used to execute a remotely located script following a link. |
| [createInputHelper](./Methods/createInputHelper.md) | None | Defines the method used to create an &#123;@link inputhelper input helper&#125; - a window that appears and disappears when you type text. Its location is tied to the cursor. |
| [executeMethod](./Methods/executeMethod.md) | boolean | Defines the method used to execute certain editor methods using the plugin. The callback is the result that the method returns. It is an optional parameter. In case it is missing, the [window.Asc.plugin.onMethodReturn](../Plugin/Methods/onMethodReturn.md) function will be used to return the result of the method execution. |
| [getInputHelper](./Methods/getInputHelper.md) | [InputHelper](../InputHelper/InputHelper.md) | Defines the method used to get the &#123;@link inputhelper InputHelper object&#125;. |
| [loadModule](./Methods/loadModule.md) | None | Defines the method used to load a remotely located text resource. |
| [resizeWindow](./Methods/resizeWindow.md) | None | Defines the method used to change the window size updating the minimum/maximum sizes. 💡 This method is used for visual modal plugins only. |
| [sendToPlugin](./Methods/sendToPlugin.md) | boolean | Sends a message from the modal window to the plugin. |
