After [registering](/desktop/addingdms/loginlogout) in the cloud, you can start working on documents stored there.

Connecting ONLYOFFICE Desktop Editors to your cloud allows you to edit text documents, spreadsheets, and presentations without having a constant Internet connection and easily switch to the online mode for real-time co-editing (in case [ONLYOFFICE Docs](/editors/basic) is integrated with your cloud).

Besides, using ONLYOFFICE Desktop Editors you are no longer limited by your browser resources. It means you can:

* copy and paste from/into another document using the editor toolbar buttons and context menu options;
* print the document directly from the app using the **Print** option;
* use all the fonts available on the local computer;
* work with documents without prior manual language setting (it is set automatically).

To open a document in a new window / tab correctly:

**Option 1.** Use the *window\.open("http\://url.to.document")* JavaScript command, where URL to the document is validated by the *editorPage* value of the [config](/desktop/addingdms/). The document will be opened upon successful validation.

**Option 2.** Use the *open:document* command of the [execCommand](/desktop/execcommand) method. When this command is sent, the document is opened. Parameters are specified in the format of a string with the serialized *json* as follows:

```
{
    "url" : "url to document",
    "type" : "type",
    "provider" : "provider"
} 
```

Parameters

| Name     | Description                                                                                                                             | Type   | Example                                             |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------ | --------------------------------------------------- |
| url      | Defines the absolute URL to the opened document.                                                                                        | string | "https\://example.com/url-to-example-document.docx" |
| type     | Defines the type of the opened document if it is possible to define: **word**, **cell** or **slide**.                                   | string | "word"                                              |
| provider | Defines the provider id used to refer to the desktop app in the JavaScript commands (the same as in the [config](/desktop/addingdms/)). | string | "onlyoffice"                                        |

Example

```
const params = {
    "url" : "https://example.com/url-to-example-document.docx",
    "type" : "word",
    "provider" : "onlyoffice"
}
window.AscDesktopEditor.execCommand("open:document", JSON.stringify(params))
```