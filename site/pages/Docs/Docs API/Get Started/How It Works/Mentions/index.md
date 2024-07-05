The reference figure and the steps below explain the process of mentioning users in comments in ONLYOFFICE Docs.

![Mentions](/content/img/editor/mentions-create.png)

1. The user sends a request to get a list of users to mention by typing **+** sign in the comment field in the **document editor**.
2. The **document editor** informs the **document manager** about the request.
3. The **document manager** sends the list of users to the **document editor** where this list will be displayed under the comment field.
4. The user types a comment in the comment field in the **document editor** and the comment is added to the document.
5. The **document editor** sends the message, the list of emails and the link action in the document to the **document manager**.

## How this can be done in practice

1. Create an empty *html* file to [Open the document](/editors/open#apply).

2. In the configuration script for Document Editor initialization, specify the event handler for the hint about mentioning users in the comments to be displayed. When the user types the **+** sign, the [onRequestUsers](/editors/config/events#onRequestUsers) event is called and the commenter can select other users for mentioning in the comments. The *data.c* parameter with the *mention* operation type is passed in this event.

   ![Mentions](/content/img/editor/onRequestUsers.png)

   ```
   var onRequestUsers = function(event) {
       docEditor.setUsers({
           "c": event.data.c,
           "users": [
               {
                   "email": "john@example.com",
                   "name": "John Smith"
               },
               {
                   "email": "kate@example.com",
                   "name": "Kate Cage"
               },
               ...
           ]
       });
   };

   var docEditor = new DocsAPI.DocEditor("placeholder", {
       "events": {
           "onRequestUsers": onRequestUsers,
           ...
       },
       ...
   });
   ```

3. In order to set the users list under the comment field, the [setUsers](/editors/methods#setUsers) method must be called:

   ```
   docEditor.setUsers({
       "c": "mention",
       "users": [
           {
               "email": "john@example.com",
               "name": "John Smith"
           },
           {
               "email": "kate@example.com",
               "name": "Kate Cage"
           },
           ...
       ]
   });
   ```

   Where the **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](/editors/howitworks) section to find out more on ONLYOFFICE Docs service client-server interactions.

## Opening the comment

![Mentions](/content/img/editor/actionLink-open.png)

1. The user follows the link in the **document manager**.
2. The **document manager** sends the initialization *editorConfig* to the **document editor**.
3. The **document editor** scrolls the document to the comment.

Specify the event handler for the comment message and the list of emails to be sent in the configuration script for Document Editor initialization. When the user adds the comment, the [onRequestSendNotify](/editors/config/events#onRequestSendNotify) event is called. The message and the list of emails are sent in the *data* parameter. The comment data is received in the *data.actionLink* parameter. As in the case of adding an [action link](/editors/actionlink#apply) to a bookmark, an *actionLink* object must be used in the configuration as the value for the [editorConfig.actionLink](/editors/config/editor#actionLink) parameter.

In version 5.4, **onRequestSendNotify** event can only be used if [onRequestUsers](#onRequestUsers) event is set. Starting from version 5.5, there is no such dependency between **onRequestSendNotify** and **onRequestUsers** - both can be set independently.

```
var onRequestSendNotify = function(event) {
    var ACTION_DATA = event.data.actionLink;
    var comment = event.data.message;
    var emails = event.data.emails;
    ...
};

var docEditor = new DocsAPI.DocEditor("placeholder", {
    "events": {
        "onRequestSendNotify": onRequestSendNotify,
        ...
    },
    ...
});
```

## Sharing settings

When the [onRequestSendNotify](/editors/config/events#onRequestSendNotify) event is called, the software integrators provide access to the file, send notifications to the mentioned users with the action link which allows scrolling to the comment position in the document.

In the case when the [document.info.sharingSettings](/editors/config/document/info#sharingSettings) field is used in the document initialization but the list of the users from the [onRequestSendNotify](/editors/config/events#onRequestSendNotify) event is different, the [setSharingSettings](/editors/methods#setSharingSettings) method must be called.

![Mentions](/content/img/editor/sharing_settings.png)

```
docEditor.setSharingSettings({
    "sharingSettings": [
        {
            "permissions": "Full Access",
            "user": "John Smith"
        },
        {
            "isLink": true,
            "permissions": "Read Only",
            "user": "External link"
        }
    ]
});
```

In the case when the [onRequestSendNotify](/editors/config/events#onRequestSendNotify) event does not provide access to the file, the [mentionShare](/editors/config/editor/customization#mentionShare) parameter in the customization section of the editor configuration must be set to **false**.

Please note that it will only be available for the comments if the [onRequestSendNotify](/editors/config/events#onRequestSendNotify) event is set.

![Mentions](/content/img/editor/mentionShare.png)