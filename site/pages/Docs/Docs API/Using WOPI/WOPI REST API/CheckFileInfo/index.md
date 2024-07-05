**GET /wopi/files/*(file\_id)***

Returns information about the file properties, access rights and editor settings.

Parameters

| Name     | Description                        | Type   |
| -------- | ---------------------------------- | ------ |
| file\_id | The file ID that must be URL safe. | string |

Query parameters

| Name          | Description                                                                            | Type   |
| ------------- | -------------------------------------------------------------------------------------- | ------ |
| access\_token | An access token that the host will use to determine whether the request is authorized. | string |

Request headers

| Name                  | Description                                                       | Type   | Presence |
| --------------------- | ----------------------------------------------------------------- | ------ | -------- |
| X-WOPI-SessionContext | Session context if it is provided on the initial WOPI action URL. | string | optional |

Required response properties

| Name         | Description                                                                                                                                                                                               | Type   | Example                  |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------------------ |
| BaseFileName | A file name without a path that is displayed in the user interface (UI) and determines the file extension.                                                                                                | string | "Example File Name.docx" |
| Version      | The current version of the file based on the server file version schema. Every time the document is edited and saved, the version must be changed. The version values must never repeat for a given file. | string | "Khirz6zTPdfd7"          |

Breadcrumb properties

| Name                 | Description                                                                                                                                          | Type   | Example                                                 |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------- |
| BreadcrumbBrandName  | A name that the WOPI client displays to the user to indicate the brand name of the WOPI server.                                                      | string | "Example Brand Name"                                    |
| BreadcrumbBrandUrl   | URL to a web page that the WOPI client navigates to when the user clicks the UI displaying [BreadcrumbBrandName](#BreadcrumbBrandName).              | string | "https\://example.com/url-to-breadcrumb-brand-page.com" |
| BreadcrumbDocName    | A file name that the WOPI client displays to the user. If this parameter is not specified, then the [BaseFileName](#BaseFileName) parameter is used. | string | "Example Breadcrumb File Name.docx"                     |
| BreadcrumbFolderName | A name that the WOPI client displays to the user that indicates the name of the folder that contains the file.                                       | string | "Example Folder Name"                                   |
| BreadcrumbFolderUrl  | URL to a web page that the WOPI client navigates to when the user clicks the UI displaying [BreadcrumbFolderName](#BreadcrumbFolderName).            | string | "https\://example.com/url-to-breadcrumb-brand-folder"   |

PostMessage properties

| Name                        | Description                                                                                                                                                                                                                                                                                            | Type    | Example                      |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- | ---------------------------- |
| ClosePostMessage            | Specifies if the WOPI client should notify the WOPI server in case the user closes the rendering or editing client currently using this file. The host expects to receive the [UI\_Close](/editors/wopi/postmessage#UI_Close) PostMessage when the *Close* UI in the online office is activated.       | boolean | true                         |
| EditModePostMessage         | Specifies if the WOPI client should notify the WOPI server in case the user tries to edit a file. The host expects to receive the [UI\_Edit](/editors/wopi/postmessage#UI_Edit) PostMessage when the *Edit* UI in the online office is activated.                                                      | boolean | true                         |
| EditNotificationPostMessage | Specifies if the WOPI client should notify the WOPI server in case the user tries to edit a file. The host expects to receive the [Edit\_Notification](/editors/wopi/postmessage#Edit_Notification) PostMessage.                                                                                       | boolean | true                         |
| FileSharingPostMessage      | Specifies if the WOPI client should notify the WOPI server in case the user tries to share a file. The host expects to receive the [UI\_Sharing](/editors/wopi/postmessage#UI_Sharing) PostMessage when the *Share* UI in the online office is activated.                                              | boolean | true                         |
| FileVersionPostMessage      | Specifies if the WOPI client will notify the WOPI server in case the user tries to navigate to the previous file version. The host expects to receive the [UI\_FileVersions](/editors/wopi/postmessage#UI_FileVersions) PostMessage when the *Previous Versions* UI in the online office is activated. | boolean | true                         |
| PostMessageOrigin           | A domain that the WOPI client must use as the [targetOrigin](/editors/wopi/postmessage#targetOrigin) parameter when sending messages as described in [\[W3C-HTML5WEBMSG\]](https://html.spec.whatwg.org/multipage/web-messaging.html#posting-messages).                                                | string  | "https\://exampledomain.com" |

File URL properties

| Name           | Description                                                                                                                                        | Type   | Example                                                 |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------- |
| CloseUrl       | URL to a web page that the implementer deems useful to the user in case the user closes the rendering or editing client currently using this file. | string | "https\://example.com/url-to-close-page.com"            |
| FileSharingUrl | URL to the location that allows the user to share a file.                                                                                          | string | "https\://example.com/url-to-sharing-page.com"          |
| FileVersionUrl | URL to the location that allows the user to view the previous file version.                                                                        | string | "https\://example.com/url-to-previous-version-page.com" |
| HostEditUrl    | URL to a web page where a file can be edited using the WOPI client.                                                                                | string | "https\://example.com/url-to-host-page.com"             |

Other miscellaneous properties

| Name                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Type    | Example                        |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------ |
| CopyPasteRestrictions | Specifies if the WOPI client must disable the **Copy and Paste** functionality within the application. By default, all **Copy and Paste** functionality is enabled, i.e. the setting has no effect. Possible property values:- **BlockAll** - the **Copy and Paste** functionality is completely disabled within the application;
- **CurrentDocumentOnly** - the **Copy and Paste** functionality is enabled but content can only be copied and pasted within the file currently open in the application. | string  | "BlockAll"                     |
| DisablePrint          | Specifies if the WOPI client must disable any print functionality under its control.                                                                                                                                                                                                                                                                                                                                                                                                                       | boolean | true                           |
| FileExtension         | A file extension which must begin with a ".".                                                                                                                                                                                                                                                                                                                                                                                                                                                              | string  | ".docx"                        |
| FileNameMaxLength     | The maximum length of a file name, including the file extension, supported by the WOPI server.                                                                                                                                                                                                                                                                                                                                                                                                             | integer | 20                             |
| LastModifiedTime      | The last time when the file was modified. This time must always be a UTC time, and must be formatted in ISO 8601 round-trip format. This property can be specified as an alternative to the [Version](#Version) property.                                                                                                                                                                                                                                                                                  | string  | "2009-06-15T13:45:30.0000000Z" |

User metadata properties

| Name             | Description                                                                                                                                  | Type    | Example      |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------ |
| IsAnonymousUser  | Specifies if the user is anonymous.                                                                                                          | boolean | true         |
| UserFriendlyName | A user name. If it is undefined, the WOPI client may be configured to use a placeholder string in some scenarios, or to show no name at all. | string  | "John Smith" |
| UserId           | A unique user identifier that is specified by the WOPI server.                                                                               | string  | "uid-1"      |

User permissions properties

| Name                    | Description                                                                                                                                                                                                                                                                                                                     | Type    | Example |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------- |
| ReadOnly                | Specifies if a file cannot be changed by the current user.                                                                                                                                                                                                                                                                      | boolean | true    |
| UserCanNotWriteRelative | Specifies if the user has permissions to create new files on the WOPI server or not. The **true** value means that the [PutRelativeFile](/editors/wopi/restapi/putrelativefile) execution will fail for this user on the current file. By default, this parameter is **false** and the *PutRelativeFile* operation is executed. | boolean | false   |
| UserCanRename           | Specifies if the user has permissions to rename a file.                                                                                                                                                                                                                                                                         | boolean | true    |
| UserCanReview           | Specifies if the user has permissions to review a file.                                                                                                                                                                                                                                                                         | boolean | true    |
| UserCanWrite            | Specifies if the user has permissions to edit a file.                                                                                                                                                                                                                                                                           | boolean | true    |

WOPI host capabilities properties

| Name              | Description                                                                                                                                                                            | Type    | Example |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------- |
| SupportsLocks     | Specifies if the WOPI server supports the [Lock](/editors/wopi/restapi/lock), [Unlock](/editors/wopi/restapi/unlock), and [RefreshLock](/editors/wopi/restapi/refreshlock) operations. | boolean | true    |
| SupportsRename    | Specifies if the WOPI server supports the renaming permission.                                                                                                                         | boolean | true    |
| SupportsReviewing | Specifies if the WOPI server supports the review permission.                                                                                                                           | boolean | true    |
| SupportsUpdate    | Specifies if the WOPI server supports the [PutFile](/editors/wopi/restapi/putfile) and [PutRelativeFile](/editors/wopi/restapi/putrelativefile) operations.                            | boolean | true    |

Nextcloud/Collabora/Seafile properties

| Name                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Type    | Example |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------- |
| EnableInsertRemoteImage | Specifies whether to enable the menu entry and toolbar item which call the [UI\_InsertGraphic](/editors/wopi/postmessage#UI_InsertGraphic) message. This property is used to display a user interface element (for example, a dialog) allowing the user to pick an image from the integration. The integration is supposed to provide a temporary URL that may be downloaded once, and return it back via the [Action\_InsertGraphic](/editors/wopi/postmessage#Action_InsertGraphic) message with *Values* set to the temporary URL. | boolean | true    |
| HidePrintOption         | Specifies if the WOPI server hides the print option from the file menu bar in the UI.                                                                                                                                                                                                                                                                                                                                                                                                                                                 | boolean | false   |