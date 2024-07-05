The reference figure and the steps below explain the process of protecting ranges in spreadsheets in ONLYOFFICE Docs.

![Protect ranges](/content/img/editor/protect-ranges-scheme.svg)

1. The user opens *Protection -> Protect Range* in the **document editor**, clicks *New*, and starts typing the user name in the *Who can edit* field.
2. The **document editor** sends a request to the **document manager** for a list of users to allow editing the specified sheet range.
3. The **document manager** sends the list of users to the **document editor** where this list will be displayed under the *Who can edit* field.
4. The user specifies the range title and address in the corresponding fields of the *New Range* window in the **document editor** and clicks *OK* to add this range to the list of protected ranges.

## How this can be done in practice

1. Create an empty *html* file to [Open the document](/editors/open#apply).

2. In the configuration script for Document Editor initialization, specify the event handler to display the list of users for granting the access rights to edit the specified sheet range. When the user opens *Protection -> Protect Range*, clicks *New*, and starts typing in the *Who can edit* field, the [onRequestUsers](/editors/config/events#onRequestUsers) event is called and the user can select other users to allow them to edit this range. The *data.c* parameter with the *protect* operation type is passed in this event.

   ![Grant access](/content/img/editor/protect-range.png)

   ```
   var onRequestUsers = function(event) {
       docEditor.setUsers({
           "c": event.data.c,
           "users": [
               {
                   "email": "john@example.com",
                   "id": "78e1e841",
                   "name": "John Smith"
               },
               {
                   "email": "kate@example.com",
                   "id": "F89d8069ba2b",
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

3. In order to set the users list under the *Who can edit* field, the [setUsers](/editors/methods#setUsers) method must be called:

   ```
   docEditor.setUsers({
       "c": "protect",
       "users": [
           {
               "email": "john@example.com",
               "id": "78e1e841",
               "name": "John Smith"
           },
           {
               "email": "kate@example.com",
               "id": "F89d8069ba2b",
               "name": "Kate Cage"
           },
           ...
       ]
   });
   ```

   Where the **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](/editors/howitworks) section to find out more on ONLYOFFICE Docs service client-server interactions.