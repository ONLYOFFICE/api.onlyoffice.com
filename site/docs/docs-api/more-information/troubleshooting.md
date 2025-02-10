The most common problems with the editors integration and the ways to solve them.

## Download failed

![Download failed](/assets/images/editor/e-download.png)

The "Download failed" message is displayed at the editors loading process.

The **Document editing service** cannot upload the file for editing.

Check if the link to the file specified in the [document.url](../usage-api/config/document/document.md#url) is correct. The link must be accessible from the **document editing service**.

## No changes

When closing the editor after the editing, the file is unchanged in the **document manager**.

The **document editing service** could not send the data to the **document storage service**.

Check if the [editorConfig.callbackUrl](../usage-api/config/editor/editor.md#callbackurl) link is correct. The saving in the **document manager** must be implemented through the [Callback handler](../usage-api/callback-handler.md#net-c-document-save-example)

## Could not be saved

![Could not be saved](/assets/images/editor/e-error0.png)

The editor is loaded with the "The document could not be saved" message.

The **document editing service** cannot connect to the **document storage service** at the [editorConfig.callbackUrl](../usage-api/config/editor/editor.md#callbackurl) address.

Check if the [Callback handler](../usage-api/callback-handler.md#net-c-document-save-example) is working correctly. The **document storage service** must return [\{"error": 0\}](../usage-api/callback-handler.md#response-from-the-document-storage-service) in response.

## The file version has been changed

![The file version has been changed](/assets/images/editor/e-key.png)

The editor displays the "Connection is lost. Trying to connect. Please check connection settings." message.

The **document editing service** is trying to update the file version without reloading the editor after the connection is lost.

Do not forget that every time the document is edited and saved, the [document.key](../usage-api/config/document/document.md#key) must be generated anew.

## The file version cannot be opened

![The file version cannot be opened](/assets/images/editor/changes-url.png)

The **document editing service** cannot open the file version.

Check if the *changesUrl* link from the [setHistoryData](../usage-api/methods.md#sethistorydata) method corresponds to the *previous.url* parameter.

## No collaborative editing

![No collaborative editing](/assets/images/editor/e-coedit.png)

No co-editing is available when the document is opened for editing by different users.

The **document editing service** opens **two different** files for editing.

Check if the [document.key](../usage-api/config/document/document.md#key) values coincide to be able to co-edit the same document. The *key* value must change after the save, must differ for different documents and coincide when co-editing one and the same document.

## Invalid token

![Invalid token](/assets/images/editor/e-token.png)

The editor is loaded with the "The document security token is not correctly formed. Please contact your Document Server administrator" message.

The **document editing service** requests an encrypted **signature**.

Check if the [token](../usage-api/config/config.md#token) is correct. The token must be generated in accordance with the [JWT (JSON Web Tokens) standard](../get-started/how-it-works/security.md) and present in **ONLYOFFICE Docs** config.

## Deny access

The editor is loaded with the "You are trying to perform an action you do not have rights for. Please contact your Document Server administrator." message.

The **document editing service** cannot perform an action requested by the user.

This problem may occur due to the following reasons:

1. This is an error of the editor, which passes such parameters that the server check considers a security violation.
2. Changing access rights in the config for opening in the browser (may be an editor error related to incorrect filling of missing config fields).
3. An attempt to save a document in the viewer or when the editor opens in the viewer by mistake.
4. The [downloadAs](../usage-api/methods.md#downloadas) method is executed but the user doesn't have rights to [download](../usage-api/config/document/permissions.md#download) documents.
5. Changing the username (for anonymous users only).

The reasons for the error are not limited to the examples provided. This list can be extended.

## History loading failed

The "History loading failed" message is displayed at the history loading process.

The **document editing service** cannot upload the version history.

Check if the [refreshHistory](../usage-api/methods.md#refreshhistory) method works correctly. It must pass the version history data that needs to be displayed in the editor.

If for some reason the integrator cannot give the version history, the *error* field with the error description will be returned in this data. The description is provided by the integrator:

```ts
docEditor.refreshHistory({
  error: "Exception",
})
```

If the integrator does not provide a specific description, it can simply send `error: true` and the default "History loading failed" message will be displayed.
