The most common problems with the editors integration and the ways to solve them.

## Download failed

![Download failed](/assets/images/editor/e-download.png)

The "Download failed" message is displayed at the editors loading process.

The **Document editing service** cannot upload the file for editing.

Check if the link to the file specified in the [document.url](../Usage%20API/Config/Document/Document.md#url) is correct. The link must be accessible from the **document editing service**.

## No changes

When closing the editor after the editing, the file is unchanged in the **document manager**.

The **document editing service** could not send the data to the **document storage service**.

Check if the [editorConfig.callbackUrl](../Usage%20API/Config/Editor/Editor.md#callbackurl) link is correct. The saving in the **document manager** must be implemented through the [Callback handler](../Usage%20API/Callback%20handler.md#net-c-document-save-example)

## Could not be saved

![Could not be saved](/assets/images/editor/e-error0.png)

The editor is loaded with the "The document could not be saved" message.

The **document editing service** cannot connect to the **document storage service** at the [editorConfig.callbackUrl](../Usage%20API/Config/Editor/Editor.md#callbackurl) address.

Check if the [Callback handler](../Usage%20API/Callback%20handler.md#net-c-document-save-example) is working correctly. The **document storage service** must return [\{"error": 0\}](../Usage%20API/Callback%20handler.md#response-from-the-document-storage-service) in response.

## The file version has been changed

![The file version has been changed](/assets/images/editor/e-key.png)

The editor is loaded with the "The file version has been changed. The page will be reloaded" message.

The **document editing service** cannot open the previously edited and saved file for editing.

Do not forget that every time the document is edited and saved, the [document.key](../Usage%20API/Config/Document/Document.md#key) must be generated anew.

## The file version cannot be opened

![The file version cannot be opened](/assets/images/editor/changes-url.png)

The **document editing service** cannot open the file version.

Check if the *changesUrl* link from the [setHistoryData](../Usage%20API/Methods.md#sethistorydata) method corresponds to the *previous.url* parameter.

## No collaborative editing

![No collaborative editing](/assets/images/editor/e-coedit.png)

No co-editing is available when the document is opened for editing by different users.

The **document editing service** opens **two different** files for editing.

Check if the [document.key](../Usage%20API/Config/Document/Document.md#key) values coincide to be able to co-edit the same document. The *key* value must change after the save, must differ for different documents and coincide when co-editing one and the same document.

## Invalid token

![Invalid token](/assets/images/editor/e-token.png)

The editor is loaded with the "The document security token is not correctly formed. Please contact your Document Server administrator" message.

The **document editing service** requests an encrypted **signature**.

Check if the [token](../Usage%20API/Config/Config.md#token) is correct. The token must be generated in accordance with the [JWT (JSON Web Tokens) standard](../Get%20Started/How%20It%20Works/Security.md) and present in **ONLYOFFICE Docs** config.
