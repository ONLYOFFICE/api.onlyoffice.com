---
sidebar_position: -18
---

# Action link

The figure and steps below explain how a shareable link to a bookmark position in a document is created in ONLYOFFICE Docs.

<img alt="Action link" src="/assets/images/editor/actionLink-create.png" width="720px" />

1. The user clicks the **Get link** button in the bookmark editing menu of the **document editor**.
2. The **document editor** fires the [onMakeActionLink](../../usage-api/config/events.md#onmakeactionlink) event, passing the bookmark data to the **document manager**.
3. The **document manager** builds a URL that encodes the bookmark data and passes it back to the **document editor** via the [setActionLink](../../usage-api/methods.md#setactionlink) method.
4. The **document editor** displays the link to the user.

## How this can be done in practice

1. Create an `.html` file to [open the document](./opening-file.md#how-this-can-be-done-in-practice).

2. In the editor initialization config, define the [onMakeActionLink](../../usage-api/config/events.md#onmakeactionlink) event handler. When the user clicks **Get link** in the bookmark menu, the editor calls this handler with an `event.data` object that describes the bookmark position. Your code must build a URL that encodes this data and pass it back to the editor via [setActionLink](../../usage-api/methods.md#setactionlink):

   ![onMakeActionLink](/assets/images/editor/onMakeActionLink.png#gh-light-mode-only)![onMakeActionLink](/assets/images/editor/onMakeActionLink.dark.png#gh-dark-mode-only)

   ``` ts
   function onMakeActionLink(event) {
     const ACTION_DATA = event.data;
     const link = GENERATE_LINK(ACTION_DATA);
     docEditor.setActionLink(link);
   }
   
   const config = {
     events: {
       onMakeActionLink,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   `GENERATE_LINK` is a placeholder for your server-side logic that builds a URL containing the bookmark data (for example, as a query-string parameter). When a user later opens that URL, your **document manager** must extract the data and pass it to the editor as described below.

## Opening the bookmark

<img alt="Open action link" src="/assets/images/editor/actionLink-open.png" width="720px" />

1. The user opens the action link in the browser, which navigates to the **document manager**.
2. The **document manager** initializes the **document editor** with the [`config`](../../usage-api/config/config.md) that includes the bookmark data in the [`actionLink`](../../usage-api/config/editor/editor.md#actionlink) parameter.
3. The **document editor** opens the document and scrolls to the bookmark.

To open a document at a bookmark position, pass the `ACTION_DATA` object (originally received from the [onMakeActionLink](../../usage-api/config/events.md#onmakeactionlink) event) as the value of [`editorConfig.actionLink`](../../usage-api/config/editor/editor.md#actionlink):

``` ts
const config = {
  editorConfig: {
    actionLink: ACTION_DATA,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

:::note
The link is generated in the same way when [mentioning](./mentions.md#how-this-can-be-done-in-practice) users in comments.
:::
