Description

The document info section allows to change additional parameters for the document (document owner, folder where the document is stored, uploading date, sharing settings).

Example

Folder Example Files

Owner John Smith

Uploaded 2010-07-07 3:46 PM

\[x] Favorite

False (0)

\[x] Sharing Settings

Permissions Full Access

User John Smith

\[ ] Is link

\+

Config.js

![Copy](/content/img/copy-content.svg) When you copy, you get the HTML code for the whole example. HTML copied.

```
```

Parameters

| Name                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Type            | Example                                                     |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ----------------------------------------------------------- |
| author                                        | Defines the name of the document author/creator. Deprecated since version 5.4, please use [owner](#owner) instead.                                                                                                                                                                                                                                                                                                                                                                            | string          | "John Smith"                                                |
| created                                       | Defines the document creation date. Deprecated since version 5.4, please use [uploaded](#uploaded) instead.                                                                                                                                                                                                                                                                                                                                                                                   | string          | "2010-07-07 3:46 PM"                                        |
| favorite                                      | Defines the highlighting state of the *Favorite* icon. When the user clicks the icon, the [onMetaChange](/editors/config/events#onMetaChange) event is called. If the parameter is *undefined*, the *Favorite* icon is not displayed at the editor window header.                                                                                                                                                                                                                             | boolean         | true                                                        |
| ![](/content/img/editor/favorite.png)         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                 |                                                             |
| folder                                        | Defines the folder where the document is stored (can be empty in case the document is stored in the root folder).                                                                                                                                                                                                                                                                                                                                                                             | string          | "Example Files"                                             |
| owner                                         | Defines the name of the document owner/creator.                                                                                                                                                                                                                                                                                                                                                                                                                                               | string          | "John Smith"                                                |
| sharingSettings                               | Displays the information about the settings which allow to share the document with other users:- **isLink** - changes the user icon to the link icon, **type**: boolean, **example**: false;
- **permissions** - the access rights for the user with the name above. Can be **Full Access**, **Read Only** or **Deny Access**, **type**: string, **example**: "Full Access";
- **user** - the name of the user the document will be shared with, **type**: string, **example**: "John Smith". | array of object | \[ { "permissions": "Full Access", "user": "John Smith" } ] |
| ![](/content/img/editor/sharing_settings.png) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                 |                                                             |
| uploaded                                      | Defines the document uploading date.                                                                                                                                                                                                                                                                                                                                                                                                                                                          | string          | "2010-07-07 3:46 PM"                                        |
| ![](/content/img/editor/info.png)             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                 |                                                             |
