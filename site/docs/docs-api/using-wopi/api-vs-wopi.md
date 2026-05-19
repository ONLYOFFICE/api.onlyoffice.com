---
sidebar_position: -1
---

# API vs WOPI

You can integrate [ONLYOFFICE Docs](https://www.onlyoffice.com/office-suite.aspx) with any cloud service using either API or WOPI.

The table below will help you find out the difference between these options.

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| | **API** | **WOPI** |
| --- | --- | --- |
| **General info** | [API](../get-started/basic-concepts.md) | [WOPI](./overview.md) |
| **Integration** | [Ready-to-use connectors](https://www.onlyoffice.com/all-connectors.aspx) | WOPI connector |
| **Collaboration (modes)** | Real-time and paragraph-locking | Real-time only |
| **Customization** | | |
| Editor interface language | [Yes](../usage-api/config/editor/editor.md#lang) | [Yes](./wopi-discovery.md#ui) |
| Editor interface theme | [Yes](../usage-api/config/editor/customization/customization-standard-branding.md#uitheme) | [Yes](./wopi-discovery.md#thm) |
| Disabling chat | [Yes](../usage-api/config/editor/customization/customization-standard-branding.md#chat) | [Yes](./wopi-discovery.md#dchat) |
| Customer info in About | [Yes](../usage-api/config/editor/customization/customization-standard-branding.md#customer) | [Yes](./wopi-rest-api/checkfileinfo.md#BreadcrumbBrandUrl) |
| Toolbar customization and branding | [Yes](../usage-api/config/editor/customization/customization-standard-branding.md) | No |
| File templates | [Yes](../usage-api/config/editor/editor.md#templates) | No |
| Recent files list | [Yes](../usage-api/config/editor/editor.md#recent) | No |
| Plugins | [Yes](../usage-api/config/editor/plugins.md) | No |
| **Security** | | |
| IP filter (trusted integrators) | [Yes](./overview.md#ip-filter) | [Yes](./overview.md#ip-filter) |
| Restricting access to server | [JWT-based](../additional-api/signature/browser.md) | No |
| Restricting access to data | [JWT signature](../additional-api/signature/request/token-in-body.md#outgoing-requests) | [Proof keys](./proof-keys.md) |
| **Basic actions** | Viewing, editing, co-editing, mobile viewing and editing, embedded documents viewing | Viewing, editing, and co-editing |
| **Actions through method calls** | | |
| Download in a different format | [Yes](../usage-api/methods.md#downloadas) | No |
| Setting Favorite status | [Yes](../usage-api/methods.md#setfavorite) | No |
| Displaying tooltip message | [Yes](../usage-api/methods.md#showmessage) | No |
| **Actions through event handling** | | |
| Closing the editor | [Yes](../usage-api/config/events.md#onrequestclose) | [Yes](./postmessage.md#UI_Close) |
| Going to a file folder | [Yes](../usage-api/config/editor/customization/customization-standard-branding.md#goback) | [Yes](./wopi-rest-api/checkfileinfo.md#BreadcrumbFolderUrl) |
| Switching to editing mode | [Yes](../usage-api/config/events.md#onrequesteditrights) | [Yes](./postmessage.md#UI_Edit) |
| Renaming a file | [Yes](../usage-api/config/events.md#onrequestrename) | [Yes](./postmessage.md#File_Rename) |
| Sharing access settings | [Yes](../usage-api/config/events.md#onrequestsharingsettings) | [Yes](./postmessage.md#UI_Sharing) |
| Document version history | [Yes](../usage-api/config/events.md#onrequesthistory) | [Yes](./postmessage.md#UI_FileVersions) |
| Inserting images from storage | [Yes](../usage-api/config/events.md#onrequestinsertimage) | [Yes](./postmessage.md#UI_InsertGraphic) |
| Save as different format | [Yes](../usage-api/config/events.md#onrequestsaveas) | [Yes](./wopi-rest-api/putrelativefile.md#save-copy-as) |
| Mail merging | [Yes](../usage-api/config/events.md#onrequestmailmergerecipients) | No |
| Document comparison | [Yes](../usage-api/config/events.md#onrequestcomparefile) | No |
| Getting action link | [Yes](../usage-api/config/events.md#onmakeactionlink) | No |
| Mentioning users | [Yes](../usage-api/config/events.md#onrequestusers) | No |
| Creating a new file | [Yes](../usage-api/config/events.md#onrequestcreatenew) | No |
| **File lock** | [Status callback](../usage-api/callback-handler.md#status*) | [Lock](./wopi-rest-api/lock.md), [Refresh lock](./wopi-rest-api/refreshlock.md), [Unlock](./wopi-rest-api/unlock.md) |
| **File access rights** | | |
| Viewing | Yes | Yes |
| Editing | [Yes](../usage-api/config/document/permissions.md#edit) | [Yes](./wopi-rest-api/checkfileinfo.md#UserCanWrite) |
| Reviewing (documents only) | [Yes](../usage-api/config/document/permissions.md#review) | [Yes](./wopi-rest-api/checkfileinfo.md#UserCanReview) |
| Commenting | [Yes](../usage-api/config/document/permissions.md#comment) | [Yes](./wopi-rest-api/checkfileinfo.md#UserCanOnlyComment) |
| Filling forms (forms only) | [Yes](../usage-api/config/document/permissions.md#fillforms) | No |
| Modifying content controls (documents only) | [Yes](../usage-api/config/document/permissions.md#modifycontentcontrol) | No |
| Modifying filters (spreadsheets only) | [Yes](../usage-api/config/document/permissions.md#modifyfilter) | No |
| Copying to clipboard | [Yes](../usage-api/config/document/permissions.md#copy) | No |
| Downloading | [Yes](../usage-api/config/document/permissions.md#download) | No |
| Printing | [Yes](../usage-api/config/document/permissions.md#print) | [Yes](./wopi-rest-api/checkfileinfo.md#HidePrintOption) |
| Renaming | No | [Yes](./wopi-rest-api/checkfileinfo.md#UserCanRename) |

```mdx-code-block
</APITable>
```
