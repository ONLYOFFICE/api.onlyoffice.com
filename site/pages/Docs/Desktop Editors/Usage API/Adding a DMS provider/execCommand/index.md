Use the **execCommand** method of the *window\.AscDesktopEditor* object to execute a command specified in the request.

```
window.AscDesktopEditor.execCommand (command, parameters)
```

Parameters

| Name       | Description                                           | Type   |
| ---------- | ----------------------------------------------------- | ------ |
| command    | Defines a command that must be executed.              | string |
| parameters | Defines the parameters that are passed to the method. | string |

The following commands are available:

Commands

| Command                                                        | Description                                                                        |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [open:document](/desktop/addingdms/opening)                    | Opens a document.                                                                  |
| [portal:checkpwd](/desktop/addingdms/encryption/keygeneration) | Transfers the information about a password from the login page to the desktop app. |
| [portal:login](/desktop/addingdms/loginlogout#login)           | Registers a cloud and adds it to the **Connected clouds** page.                    |
| [portal:logout](/desktop/addingdms/loginlogout#logout)         | Removes a cloud from the list on the **Connected clouds** page.                    |
| [portal:uitheme](/desktop/addingdms/changingtheme)             | Changes a theme of the desktop editor tab.                                         |