---
sidebar_position: -3
---

# Setting avatars

The figure and steps below explain how user avatars are set in ONLYOFFICE Docs.

<img alt="Setting avatars" src="/assets/images/editor/avatars.png" width="720px" />

1. The **document editor** is initialized with the current user's avatar URL in the [`editorConfig.user.image`](../../usage-api/config/editor/editor.md#user) field.
2. When the user opens comments or the co-editors list, the **document editor** fires the [`onRequestUsers`](../../usage-api/config/events.md#onrequestusers) event to request the other users' data.
3. The **document manager** retrieves the user data — including names and avatar URLs — and passes it back by calling the [`setUsers`](../../usage-api/methods.md#setusers) method.
4. The **document editor** displays all users' avatars next to their names.

## How this can be done in practice

1. Create an empty `.html` file to [Open the document](./opening-file.md#how-this-can-be-done-in-practice).

2. To set the current user's avatar, use the [editorConfig.user.image](../../usage-api/config/editor/editor.md#user) field of the initialization config:

   ``` ts
   const config = {
     editorConfig: {
       user: {
         group: "Group1",
         id: "78e1e841",
         image: "https://example.com/url-to-user-avatar.png",
         name: "John Smith",
       },
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

3. In the initialization script, specify the event handler for requesting users' avatars. When the user opens comments or the co-editors list, the [`onRequestUsers`](../../usage-api/config/events.md#onrequestusers) event is fired. The event's `data.c` parameter is set to `"info"`, and `data.id` contains the IDs of the users whose avatars are needed.

   ![Avatars in comments](/assets/images/editor/avatars-comments.png#gh-light-mode-only)![Avatars in comments](/assets/images/editor/avatars-comments.dark.png#gh-dark-mode-only)

   ![Co-editors avatars](/assets/images/editor/avatars-coediting.png#gh-light-mode-only)![Co-editors avatars](/assets/images/editor/avatars-coediting.dark.png#gh-dark-mode-only)

   ``` ts
   function onRequestUsers(event) {
     const c = event.data.c;
     const id = event.data.id;
   }

   const config = {
     events: {
       onRequestUsers,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

4. Inside the event handler, call the [`setUsers`](../../usage-api/methods.md#setusers) method to pass the users' data back to the editor:

   ``` ts
   docEditor.setUsers({
     c: "info",
     users: [
       {
         email: "john@example.com",
         id: "78e1e841",
         image: "https://example.com/url-to-user-avatar1.png",
         name: "John Smith",
       },
       {
         email: "kate@example.com",
         id: "F89d8069ba2b",
         image: "https://example.com/url-to-user-avatar2.png",
         name: "Kate Cage",
       },
     ],
   });
   ```

Replace `example.com` with the host serving your avatar images — i.e., your **document storage service** or another server accessible to the **document editing service**. See [How it works](./how-it-works.md) for more on ONLYOFFICE Docs client-server interactions.
