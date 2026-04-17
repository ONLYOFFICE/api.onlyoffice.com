---
sidebar_position: -17
---

# Mentions

The figure and steps below explain how the mentions feature works in ONLYOFFICE Docs.

<img alt="Create mentions" src="/assets/images/editor/mentions-create.png" width="720px" />

1. The user types `+` or `@` in the comment field of the **document editor**.
2. The **document editor** requests the list of users who can be mentioned from the **document manager**.
3. The **document manager** returns the user list to the **document editor**, which displays it under the comment field.
4. The user selects a name, writes a comment, and submits it.
5. The **document editor** sends the comment text, the list of mentioned emails, and the action link data to the **document manager**.

## How this can be done in practice

1. Create an `.html` file to [open the document](./opening-file.md#how-this-can-be-done-in-practice).

2. In the editor initialization config, define the [onRequestUsers](../../usage-api/config/events.md#onrequestusers) event handler. When the user types `+` or `@` in a comment, the editor calls this handler with `event.data.c` set to `"mention"`. Your code must respond by calling [setUsers](../../usage-api/methods.md#setusers) with the list of users who can be mentioned:

   <img alt="onRequestUsers" src="/assets/images/editor/onRequestUsers.png" width="309px" />

   ``` ts
   function onRequestUsers(event) {
     docEditor.setUsers({
       c: event.data.c,
       users: [
         {
           email: "john@example.com",
           name: "John Smith",
         },
         {
           email: "kate@example.com",
           name: "Kate Cage",
         },
       ],
     });
   }
   
   const config = {
     events: {
       onRequestUsers,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

3. Define the [onRequestSendNotify](../../usage-api/config/events.md#onrequestsendnotify) event handler to send notifications to mentioned users. When the user submits a comment that mentions someone, the editor calls this handler with:

   - `event.data.message` — the comment text
   - `event.data.emails` — the list of mentioned email addresses
   - `event.data.actionLink` — an object describing the comment position in the document

   :::note
   The `+` / `@` mention button in the comment field is only visible when `onRequestSendNotify` is set. In version 5.4, `onRequestSendNotify` can only be used if [onRequestUsers](../../usage-api/config/events.md#onrequestusers) is set. Starting from version 5.5, both events can be set independently.
   :::

   ``` ts
   function onRequestSendNotify(event) {
     const ACTION_DATA = event.data.actionLink;
     const comment = event.data.message;
     const emails = event.data.emails;
     NOTIFY_USERS(emails, comment, ACTION_DATA);
   }
   
   const config = {
     events: {
       onRequestSendNotify,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   `NOTIFY_USERS` is a placeholder for your server-side logic that sends notifications to the mentioned users. Include `ACTION_DATA` so that the notification link opens the document at the comment position.

## Opening the comment

<img alt="Open action link" src="/assets/images/editor/actionLink-open.png" width="720px" />

1. The mentioned user opens the link from a notification (for example, an email), which navigates to the **document manager**.
2. The **document manager** initializes the **document editor** with the [`config`](../../usage-api/config/config.md) that includes the comment position data in the [`actionLink`](../../usage-api/config/editor/editor.md#actionlink) parameter.
3. The **document editor** opens the document and scrolls to the comment.

As with [action links](./action-link.md#opening-the-bookmark), pass the `actionLink` object received from the [onRequestSendNotify](../../usage-api/config/events.md#onrequestsendnotify) event as the value of [`editorConfig.actionLink`](../../usage-api/config/editor/editor.md#actionlink):

``` ts
const config = {
  editorConfig: {
    actionLink: ACTION_DATA,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## Sharing settings

When [onRequestSendNotify](../../usage-api/config/events.md#onrequestsendnotify) fires, the integrator is responsible for granting the mentioned users access to the file and sending them a notification with the action link.

If the document config already includes a [`document.info.sharingSettings`](../../usage-api/config/document/info.md#sharingsettings) list and the set of users changes after mentioning, call [setSharingSettings](../../usage-api/methods.md#setsharingsettings) to update the displayed sharing list:

![Sharing settings](/assets/images/editor/sharing-settings.png#gh-light-mode-only)![Sharing settings](/assets/images/editor/sharing-settings.dark.png#gh-dark-mode-only)

``` ts
docEditor.setSharingSettings({
  sharingSettings: [
    {
      permissions: "Full Access",
      user: "John Smith",
    },
    {
      isLink: true,
      permissions: "Read Only",
      user: "External link",
    },
  ],
});
```

If [onRequestSendNotify](../../usage-api/config/events.md#onrequestsendnotify) does not grant file access to mentioned users, set [`mentionShare`](../../usage-api/config/editor/customization/customization-standard-branding.md#mentionshare) to `false` to hide the sharing UI in comments.

<img alt="Mentions" src="/assets/images/editor/mentionShare.png" width="379px" />
