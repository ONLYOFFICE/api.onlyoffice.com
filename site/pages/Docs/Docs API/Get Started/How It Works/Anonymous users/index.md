The reference figure and the steps below explain the process of setting a name to an anonymous user in ONLYOFFICE Docs.

![Anonymous](/content/img/editor/anonymous-user.png)

1. The anonymous user uses the **document manager** to open a document for viewing or editing.

   Anonymous user is a user with an empty [user id](/editors/config/editor#user).

2. The **document storage service** sends the initialization config to the **document editor** using the [JavaScript API](/editors/basic) but the user name is not specified there.

3. The **document editor** requests the user name.

4. The **document editor** sends the received name to the **document editing service**.

5. The **document editing service** sends the user name to the **document editors** of all the users in the co-editing mode.

## How this can be done in practice

1. Create an *html* file to [Open the document](/editors/open#apply).

2. If the anonymous user’s name is specified, it is displayed on the top toolbar.

3. If the user name is not specified, it will be requested. The request can be turned off with the *"request"=false* value of the [editorConfig.customization.anonymous](/editors/config/editor/customization#anonymous) parameter.

   ![Name request](/content/img/editor/name-request.png)

4. After the anonymous user’s name is set, the postfix is added to it via the *label* field of the *editorConfig.customization.anonymous* parameter to distinguish guests during the coediting session. By default this postfix is *"Guest"*.

   ![Label](/content/img/editor/label.png)

   ```
   var docEditor = new DocsAPI.DocEditor("placeholder", {
       "editorConfig": {
           "customization": {
               "anonymous": {
                   "request": true,
                   "label": "Guest"
               },
               ...
           },
           ...
       },
       ...
   });
   ```

5. As soon as you set the name for the first time, it will be stored in the browser local storage. To use it next time, just press the **F5** button.

6. To change this name, click it on the top toolbar and enter a new one in the opened window.

7. All the co-authors will see the new name.

## Restricting access to the editor or live viewer

To restrict anonymous users access to the editor or live viewer, set the [services.CoAuthoring.server.isAnonymousSupport](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#services-CoAuthoring-server-isAnonymousSupport) parameter in the configuration file to **false**. In this case, when the anonymous user tries to open the editor, a warning will occur.

![Anonymous user warning](/content/img/editor/anonymous-warning.jpg)

The live viewer will switch to the offline viewer without warnings.