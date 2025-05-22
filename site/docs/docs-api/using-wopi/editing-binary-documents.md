---
sidebar_position: -2
---

# Editing binary documents

The online office does not support editing files in the legacy binary formats such as *doc*, *ppt*, and *xls*. However, it can convert documents in such formats to the *docx*, *pptx*, and *xlsx* formats accordingly to let the users edit their contents in the online office.

> Usually, conversion does not make any visible changes to the original document layout and formatting. But sometimes it can occur and users might wish to revert to the previous binary document format after it has been converted.

The [convert](./wopi-discovery.md#convert) WOPI discovery action implements the possibility to convert a file in the binary format into the modern OOXML format. A host must also support the [PutRelativeFile](./wopi-rest-api/putrelativefile.md) WOPI operation. The process of the binary file editing consists of the following steps:

1. The host runs the **convert** action on a binary file.
2. The online office retrieves the file from the host and converts it.
3. The online office sends the converted document back to the host by executing the **PutRelativeFile** operation with the original file ID.
4. Hosts use the **X-WOPI-FileConversion** request header of the **PutRelativeFile** operation to determine that the request is being made in the context of a file conversion.
5. After the document is successfully converted, the online office redirects the user to the [HostEditUrl](./wopi-rest-api/checkfileinfo.md#HostEditUrl) that's returned in the **PutRelativeFile** response body.

Now the user can edit the document in the OOXML format.

## Viewing mode

There might be another scenario when the host first opens a document in the viewer and then uses the **Edit** button to convert the document into the OOXML format and edit it. The process of opening a binary file with the [view](./wopi-discovery.md#view) action should be done as follows:

1. Set the [UserCanWrite](./wopi-rest-api/checkfileinfo.md#UserCanWrite) property to **true**.
2. Set the [UserCanNotWriteRelative](./wopi-rest-api/checkfileinfo.md#UserCanNotWriteRelative) property to **false** (or simply omit it).
3. Set the [HostEditUrl](./wopi-rest-api/checkfileinfo.md#HostEditUrl) property to a host URL that runs the **convert** action when loaded.

If all these conditions are met, the **Edit** button is displayed in the viewer. When the user clicks it, the **HostEditUrl** provided for the binary file is opened and starts the conversion process. Finally, the user is redirected to the **HostEditUrl** for the newly converted document.

## Customization

Sometimes, the users might be confused when opening their binary files without any changes made. It happens because all the changes are made in the newly converted OOXML files. That is why, it can be important to inform the users prior the conversion start. There are three ways how the hosts can do this.

**Option 1**. Displaying a notification message

The host can display some UI to the user before the conversion start. When the **convert** action is executed, the host identifies it as an attempt to edit a binary document and displays a notification message to inform a user that the document will be converted. This scenario can be also applied to the **Edit** button by setting the [EditModePostMessage](./wopi-rest-api/checkfileinfo.md#EditModePostMessage) property to **true** and handling the [UI\_Edit](./postmessage.md#UI_Edit) PostMessage.

**Option 2**. Handling converted documents differently

The host can handle converted documents in a unique way, by handling the [PutRelativeFile](./wopi-rest-api/putrelativefile.md) operation differently when called during the conversion process. The **X-WOPI-FileConversion** header tells hosts when the operation is being called from the conversion flow, so the host can choose how best to handle those requests.

**Option 3**. Redirecting to an interstitial page

The online office navigates to the [HostEditUrl](./wopi-rest-api/checkfileinfo.md#HostEditUrl) that's returned in the [PutRelativeFile](./wopi-rest-api/putrelativefile.md) response, which the host controls. So, hosts can send the user to any URL after the conversion is finished. For example, a host might redirect the user to an interstitial page that informs them that their document has been converted.

<img alt="Convert binary files" src="/assets/images/editor/convert-binary-files.jpg" width="300px" />
