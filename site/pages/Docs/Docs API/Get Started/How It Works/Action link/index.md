The reference figure and the steps below explain the process of working with links in ONLYOFFICE Docs.

![Action link](/content/img/editor/actionLink-create.png)

1. The user sends a request to get a link to the document which contains a bookmark in the **document editor**.
2. The **document editor** sends the request to the **document manager** where the software integrators create the link.
3. The **document manager** sends the link back to the **document editor** where the link is displayed.

## How this can be done in practice

1. Create an *html* file to [Open the document](/editors/open#apply).

2. Specify the event handler for the *Get link* button to be displayed in the bookmark editing menu in the configuration script for Document Editor initialization. When the [onMakeActionLink](/editors/config/events#onMakeActionLink) event is called, the user request is sent to the software integrators which create the link in the document storage service.

   ![Action link](/content/img/editor/onMakeActionLink.png)

   ```
   var onMakeActionLink = function (event){
       var ACTION_DATA = event.data;
       ...
       var link = GENERATE_LINK(ACTION_DATA);
       docEditor.setActionLink(link);
   };

   var docEditor = new DocsAPI.DocEditor("placeholder", {
       "events": {
           "onMakeActionLink": onMakeActionLink,
           ...
       },
       ...
   });
   ```

3. In order to give the user the link to the document which contains a bookmark, the software integrators send the link to the [setActionLink](/editors/methods#setActionLink) method:

   ```
   docEditor.setActionLink(link);
   ```

## Opening the bookmark

![Action link](/content/img/editor/actionLink-open.png)

1. The user follows the link in the **document manager**.
2. The **document manager** sends the initialization *editorConfig* to the **document editor**.
3. The **document editor** scrolls the document to the bookmark.

When the user follows the link, the **document editor** sends the initialization *editorConfig* to the **document editing service**. The ACTION\_DATA received from the [onMakeActionLink](/editors/config/events#onMakeActionLink) event is specified in the [data.actionLink](/editors/config/editor#actionLink) parameter of the *editorConfig*:

```
var docEditor = new DocsAPI.DocEditor("placeholder", {
    "editorConfig": {
        "actionLink": ACTION_DATA,
        ...
    },
    ...
});
```

The link is generated in the same way when [mentioning](/editors/mentions#apply) users in the comments.