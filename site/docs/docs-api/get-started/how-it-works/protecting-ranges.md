---
sidebar_position: -4
---

# Protecting ranges

The figure and steps below explain how range protection works in ONLYOFFICE Docs spreadsheets.

![Protect ranges](/assets/images/editor/protect-ranges-scheme.svg)

1. The user opens *Protection -> Protect Range* in the **document editor**, clicks *New*, and starts typing in the *Who can edit* field.
2. The **document editor** fires the [onRequestUsers](../../usage-api/config/events.md#onrequestusers) event with `data.c` set to `protect`, requesting a list of users who can be granted editing rights to the range.
3. The **document manager** handles the event and calls the [setUsers](../../usage-api/methods.md#setusers) method, passing the user list back to the **document editor**, which displays it under the *Who can edit* field.
4. The user specifies the range title and address in the *New Range* window and clicks *OK* to add the protected range.

## How this can be done in practice

1. Create an empty `.html` file to [open the document](./opening-file.md#how-this-can-be-done-in-practice).

2. In the configuration script for **document editor** initialization, add an [onRequestUsers](../../usage-api/config/events.md#onrequestusers) event handler. When the user opens *Protection -> Protect Range*, clicks *New*, and starts typing in the *Who can edit* field, this event fires with `data.c` set to `protect`. The handler calls the [setUsers](../../usage-api/methods.md#setusers) method to supply the list of users who can be granted editing rights:

   <img alt="Grant access" src="/assets/images/editor/protect-range.png" width="292px" />

   ``` ts
   function onRequestUsers(event) {
     docEditor.setUsers({
       c: event.data.c,
       users: [
         {
           email: "john@example.com",
           id: "78e1e841",
           name: "John Smith",
         },
         {
           email: "kate@example.com",
           id: "F89d8069ba2b",
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

3. Open your `.html` file in the browser.
