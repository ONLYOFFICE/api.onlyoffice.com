---
sidebar_position: -11
---

# Anonymous users

The figure and steps below explain how an anonymous user’s name is set in ONLYOFFICE Docs.

<img alt="Anonymous" src="/assets/images/editor/anonymous-user.png" width="720px" />

1. An anonymous user opens a document for viewing or editing through the **document manager**.
2. The **document manager** initializes the **document editor** with a [`config`](../../usage-api/config/config.md) that has an empty [`user.id`](../../usage-api/config/editor/editor.md#user) and no user name.
3. The **document editor** prompts the user for a name.
4. The **document editor** sends the name to the **document editing service**.
5. The **document editing service** relays the name to the **document editors** of all users who are co-editing the document.

## How this can be done in practice

1. Create an `.html` file to [open the document](./opening-file.md#how-this-can-be-done-in-practice).

2. To make a user anonymous, pass an empty [`user.id`](../../usage-api/config/editor/editor.md#user) in the editor [`config`](../../usage-api/config/config.md). The [`editorConfig.customization.anonymous`](../../usage-api/config/editor/customization/customization-standard-branding.md#anonymous) parameter controls the name prompt and the guest label:

   - `request` — when `true` (the default), the **document editor** prompts the user for a name on first open. Set to `false` to suppress the prompt.
   - `label` — a suffix appended to the name to distinguish guests during co-editing. The default value is `"Guest"`.

   ``` ts
   const config = {
     editorConfig: {
       user: {
         id: "",
       },
       customization: {
         anonymous: {
           request: true,
           label: "Guest",
         },
       },
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

3. When `request` is `true` and no name is stored yet, the **document editor** shows a name prompt:

   ![Name request](/assets/images/editor/name-request.png#gh-light-mode-only)![Name request](/assets/images/editor/name-request.dark.png#gh-dark-mode-only)

4. Once the name is set, the `label` suffix is appended to it:

   ![Label](/assets/images/editor/label.png#gh-light-mode-only)![Label](/assets/images/editor/label.dark.png#gh-dark-mode-only)

5. The entered name is saved to the browser’s local storage. On the next visit, the stored name is reused automatically — the user is not prompted again.

6. To change the name, the user clicks their name on the top toolbar and enters a new one in the dialog that opens.

7. All co-authors see the updated name immediately.

## Restricting access to the editor or live viewer

To restrict anonymous user access to the editor or live viewer, set the [`services.CoAuthoring.server.isAnonymousSupport`](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#services-CoAuthoring-server-isAnonymousSupport) parameter in the server configuration file to `false`. When an anonymous user tries to open the editor, a warning is shown:

![Anonymous user warning](/assets/images/editor/anonymous-warning.png#gh-light-mode-only)![Anonymous user warning](/assets/images/editor/anonymous-warning.dark.png#gh-dark-mode-only)

For the live viewer, no warning is shown — it falls back to the offline viewer silently.
