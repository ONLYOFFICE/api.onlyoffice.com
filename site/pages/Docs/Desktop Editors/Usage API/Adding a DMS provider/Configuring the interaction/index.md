Once your DMS is [added](/desktop/addingdms/) to the connection list, configure the DMS/Desktop Editors interaction:

* [log in](/desktop/addingdms/loginlogout) to your DMS so that it will be displayed in the **Connected clouds** list,
* enable [notifications](/desktop/addingdms/notifications) from the desktop application,
* change the interface [theme](/desktop/addingdms/changingtheme),
* enable end-to-end [encryption](/desktop/addingdms/encryption).

Before proceeding further, it’s highly recommended to adjust the DMS elements to be displayed when the document is opened in the desktop application.

Exclude the functionality which is not related to the document manager. Hide such sections like navigation, site header and footer, etc. Remove links to the third-party resources. Other pages will open in the default browser without interacting with the desktop editors.

There are three ways for the desktop application to be recognized:

* *?desktop = true* is added to the parameters of the server request address.
* Starting from version 6.1, the application adds the *AscDesktopEditor $version$* line to the *navigator.userAgent* parameter. For example, *AscDesktopEditor 6.1.0*.
* In JavaScript code there is also a *window\.AscDesktopEditor* object whose methods can send commands and information to the app.