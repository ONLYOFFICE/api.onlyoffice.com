---
sidebar_position: -6
---

# execCommand method

Use the **execCommand** method of the *window\.AscDesktopEditor* object to execute a command specified in the request.

``` ts
window.AscDesktopEditor.execCommand(command, parameters);
```

## Parameters

| Name       | Type   | Description                                           |
| ---------- | ------ | ----------------------------------------------------- |
| command    | string | Defines a command that must be executed.              |
| parameters | string | Defines the parameters that are passed to the method. |

The following commands are available:

## Commands

| Command                                                    | Description                                                                        |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [open:document](./opening-documents.md)           | Opens a document.                                                                  |
| [portal:checkpwd](./encryption/key-generation.md) | Transfers the information about a password from the login page to the desktop app. |
| [portal:login](./login-and-logout.md#login)     | Registers a cloud and adds it to the **Connected clouds** page.                    |
| [portal:logout](./login-and-logout.md#logout)   | Removes a cloud from the list on the **Connected clouds** page.                    |
| [portal:uitheme](./changing-a-theme.md)         | Changes a theme of the desktop editor tab.                                         |
