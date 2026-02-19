# CheckFileInfo

`GET /wopi/files/(file_id)`

The *CheckFileInfo* operation must be implemented for all WOPI actions. This operation returns information about a file, a user's permissions on that file, and general information about the capabilities that the WOPI host has on the file. Also, some CheckFileInfo properties can influence the appearance and behavior of WOPI clients.

## Parameters

| Name     | Type   | Description                                                                                       |
|----------|--------|---------------------------------------------------------------------------------------------------|
| file\_id | string | The [ID of a file](../key-concepts.md#file-id) managed by the host. This string must be URL safe. |

## Query parameters

| Name          | Type   | Description                                                                                                           |
|---------------|--------|-----------------------------------------------------------------------------------------------------------------------|
| access\_token | string | An [access token](../key-concepts.md#access-token) that the host uses to determine whether the request is authorized. |

## Request headers

| Name                  | Type   | Presence | Description                                                       |
|-----------------------|--------|----------|-------------------------------------------------------------------|
| X-WOPI-SessionContext | string | optional | Session context if it is provided on the initial WOPI action URL. |

## Required response properties

> Please note that the default value for any response string value is the empty string.

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Name         | Type    | Example                  | Description                                                                                                                                                                     |
|--------------|---------|--------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BaseFileName | string  | "Example File Name.docx" | A name of the file, including extension, without a path. Used for display in user interface (UI), and determining the extension of the file.                                    |
| Size         | integer | 100                      | The size of the file in bytes (64-bit signed integer).                                                                                                                          |
| Version      | string  | "Khirz6zTPdfd7"          | The current version of the file based on the server's file version schema. This value must change when the file changes, and version values must never repeat for a given file. |

```mdx-code-block
</APITable>
```

## Breadcrumb properties

```mdx-code-block
<APITable>
```

| Name                 | Type   | Example                                                | Description                                                                                                                                          |
|----------------------|--------|--------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| BreadcrumbBrandName  | string | "Example Brand Name"                                   | The brand name of the host.                                                                                                                          |
| BreadcrumbBrandUrl   | string | `https://example.com/url-to-breadcrumb-brand-page.com` | A URI to a web page that the WOPI client should navigate to when the user clicks on UI that displays [BreadcrumbBrandName](#BreadcrumbBrandName).    |
| BreadcrumbDocName    | string | "Example Breadcrumb File Name.docx"                    | A file name that the WOPI client displays to the user. If this parameter is not specified, then the [BaseFileName](#BaseFileName) parameter is used. |
| BreadcrumbFolderName | string | "Example Folder Name"                                  | The name of the container that contains the file.                                                                                                    |
| BreadcrumbFolderUrl  | string | `https://example.com/url-to-breadcrumb-brand-folder`   | A URI to a web page that the WOPI client should navigate to when the user clicks on UI that displays [BreadcrumbFolderName](#BreadcrumbFolderName).  |

```mdx-code-block
</APITable>
```

## PostMessage properties

```mdx-code-block
<APITable>
```

| Name                        | Type    | Example                     | Description                                                                                                                                                                                                                                                                                         |
|-----------------------------|---------|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ClosePostMessage            | boolean | true                        | Specifies if the host expects to receive the [UI\_Close](../postmessage.md#UI_Close) PostMessage when the **Close** UI in the online office is activated.                                                                                                                                           |
| EditModePostMessage         | boolean | true                        | Specifies if the host expects to receive the [UI\_Edit](../postmessage.md#UI_Edit) PostMessage when the *Edit* UI in the online office is activated. If this property is not set to *true*, the online office navigates the inner iframe URL to an edit action URL when the *Edit* UI is activated. |
| EditNotificationPostMessage | boolean | true                        | Specifies if the host expects to receive the [Edit\_Notification](../postmessage.md#Edit_Notification) PostMessage.                                                                                                                                                                                 |
| FileSharingPostMessage      | boolean | true                        | Specifies if the host expects to receive the [UI\_Sharing](../postmessage.md#UI_Sharing) PostMessage when the *Share* UI in the online office is activated.                                                                                                                                         |
| FileVersionPostMessage      | boolean | true                        | Specifies if the host expects to receive the [UI\_FileVersions](../postmessage.md#UI_FileVersions) PostMessage when the *Previous Versions* UI in the online office is activated.                                                                                                                   |
| PostMessageOrigin           | string  | `https://exampledomain.com` | A domain that the [host page](../host-page.md) is sending and receiving PostMessages to and from. The online office only sends outgoing PostMessages to this domain, and only listens to PostMessages from this domain.                                                                             |

```mdx-code-block
</APITable>
```

## File URL properties

```mdx-code-block
<APITable>
```

| Name           | Type   | Example                                                | Description                                                                                                                         |
|----------------|--------|--------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| CloseUrl       | string | `https://example.com/url-to-close-page.com`            | A URI to a web page that the WOPI client should navigate to when the application closes, or in the event of an unrecoverable error. |
| FileSharingUrl | string | `https://example.com/url-to-sharing-page.com`          | A URI to a location that allows the user to share the file.                                                                         |
| FileVersionUrl | string | `https://example.com/url-to-previous-version-page.com` | A URI to a location that lets the user view the version history for the file.                                                       |
| HostEditUrl    | string | `https://example.com/url-to-host-page.com`             | A URI to a host page that loads the edit WOPI action.                                                                               |

```mdx-code-block
</APITable>
```

## Other miscellaneous properties

```mdx-code-block
<APITable>
```

| Name                  | Type    | Example                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|-----------------------|---------|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CopyPasteRestrictions | string  | "BlockAll"                     | Specifies if the WOPI client should disable the **Copy and Paste** functionality within the application. By default, all **Copy and Paste** functionality is enabled, i.e. the setting has no effect. Possible property values:<br/><br/>- **BlockAll** - the **Copy and Paste** functionality is completely disabled within the application;<br/><br/>- **CurrentDocumentOnly** - the **Copy and Paste** functionality is enabled but content can only be copied and pasted within the file currently open in the application. |
| DisablePrint          | boolean | true                           | Specifies if the WOPI client should disable all print functionality.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| FileExtension         | string  | ".docx"                        | A file extension which must begin with a ".". If provided, WOPI clients will use this value as the file extension. Otherwise the extension will be parsed from the [BaseFileName](#BaseFileName).                                                                                                                                                                                                                                                                                                                               |
| FileNameMaxLength     | integer | 20                             | The maximum length for file names that the WOPI host supports, excluding the file extension. The default value is 250. Note that WOPI clients will use this default value if the property is omitted or if it is explicitly set to 0.                                                                                                                                                                                                                                                                                           |
| LastModifiedTime      | string  | "2009-06-15T13:45:30.0000000Z" | The last time that the file was modified. This time must always be a UTC time, and must be formatted in ISO 8601 round-trip format. This property can be specified as an alternative to the [Version](#Version) property.                                                                                                                                                                                                                                                                                                       |

```mdx-code-block
</APITable>
```

## User metadata properties

```mdx-code-block
<APITable>
```

| Name             | Type    | Example      | Description                                                                                                                                                                          |
|------------------|---------|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| IsAnonymousUser  | boolean | true         | Specifies if the user is authenticated with the host or not. Hosts should always set this to *true* for unauthenticated users, so that clients are aware that the user is anonymous. |
| UserFriendlyName | string  | "John Smith" | The name of the user, suitable for displaying in UI.                                                                                                                                 |
| UserId           | string  | "uid-1"      | A value uniquely identifying the user currently accessing the file.                                                                                                                  |

```mdx-code-block
</APITable>
```

## User permissions properties

```mdx-code-block
<APITable>
```

| Name                    | Type    | Example | Description                                                                                                                                                                                                                                                                                                       |
|-------------------------|---------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ReadOnly                | boolean | true    | Specifies if a file cannot be changed by the current user.                                                                                                                                                                                                                                                        |
| UserCanNotWriteRelative | boolean | false   | Specifies if the user has sufficient permission to create new files on the WOPI server. The **true** value means that the [PutRelativeFile](./putrelativefile.md) execution will fail for this user on the current file. By default, this parameter is **false** and the *PutRelativeFile* operation is executed. |
| UserCanRename           | boolean | true    | Specifies if the user has permissions to rename the current file.                                                                                                                                                                                                                                                 |
| UserCanReview           | boolean | true    | Specifies if the user has permissions to review the current file.                                                                                                                                                                                                                                                 |
| UserCanWrite            | boolean | true    | Specifies if the user has permissions to alter the file.                                                                                                                                                                                                                                                          |

```mdx-code-block
</APITable>
```

## WOPI host capabilities properties

```mdx-code-block
<APITable>
```

| Name              | Type    | Example | Description                                                                                                                  |
|-------------------|---------|---------|------------------------------------------------------------------------------------------------------------------------------|
| SupportsLocks     | boolean | true    | Specifies if the host supports the [Lock](./lock.md), [Unlock](./unlock.md), and [RefreshLock](./refreshlock.md) operations. |
| SupportsRename    | boolean | true    | Specifies if the WOPI server supports the renaming permission.                                                               |
| SupportsReviewing | boolean | true    | Specifies if the host supports the review permission.                                                                        |
| SupportsUpdate    | boolean | true    | Specifies if the host supports the [PutFile](./putfile.md) and [PutRelativeFile](./putrelativefile.md) operations.           |

```mdx-code-block
</APITable>
```

## Nextcloud/Collabora/Seafile properties

```mdx-code-block
<APITable>
```

| Name                    | Type    | Example | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|-------------------------|---------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| EnableInsertRemoteImage | boolean | true    | Specifies whether to enable the menu entry and toolbar item which call the [UI\_InsertGraphic](../postmessage.md#UI_InsertGraphic) message. This property is used to display a user interface element (for example, a dialog) allowing the user to pick an image from the integration. The integration is supposed to provide a temporary URL that may be downloaded once, and return it back via the [Action\_InsertGraphic](../postmessage.md#Action_InsertGraphic) message with *Values* set to the temporary URL. |
| HidePrintOption         | boolean | false   | Specifies if the WOPI server hides the print option from the file menu bar in the UI.                                                                                                                                                                                                                                                                                                                                                                                                                                 |

```mdx-code-block
</APITable>
```

## Collabora properties

```mdx-code-block
<APITable>
```

| Name               | Type    | Example | Description                                                  |
|--------------------|---------|---------|--------------------------------------------------------------|
| UserCanOnlyComment | boolean | true    | Specifies if the user can only add comments to the document. |

```mdx-code-block
</APITable>
```
