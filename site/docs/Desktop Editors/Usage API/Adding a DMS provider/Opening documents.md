---
order: -4
---

After [registering](./Login%20and%20logout.md) in the cloud, you can start working on documents stored there.

Connecting ONLYOFFICE Desktop Editors to your cloud allows you to edit text documents, spreadsheets, and presentations without having a constant Internet connection and easily switch to the online mode for real-time co-editing (in case [ONLYOFFICE Docs](../../../Docs%20API/Get%20Started/Basic%20concepts.md) is integrated with your cloud).

Besides, using ONLYOFFICE Desktop Editors you are no longer limited by your browser resources. It means you can:

- copy and paste from/into another document using the editor toolbar buttons and context menu options;
- print the document directly from the app using the **Print** option;
- use all the fonts available on the local computer;
- work with documents without prior manual language setting (it is set automatically).

To open a document in a new window / tab correctly:

**Option 1.** Use the *window\.open("http\://url.to.document")* JavaScript command, where URL to the document is validated by the *editorPage* value of the [config](./Adding%20a%20DMS%20provider.md). The document will be opened upon successful validation.

**Option 2.** Use the *open:document* command of the [execCommand](./execCommand.md) method. When this command is sent, the document is opened. Parameters are specified in the format of a string with the serialized *json* as follows:

``` json
{
  "url": "url to document",
  "type": "type",
  "provider": "provider"
} 
```

## url

Defines the absolute URL to the opened document.

Type: string

Example: `https://example.com/url-to-example-document.docx`

## type

Defines the type of the opened document if it is possible to define: **word**, **cell** or **slide**.

Type: string

Example: "word"

## provider

Defines the provider id used to refer to the desktop app in the JavaScript commands (the same as in the [config](./Adding%20a%20DMS%20provider.md)).

Type: string

Example: "onlyoffice"

## Example

``` ts
const params = {
  url: "https://example.com/url-to-example-document.docx",
  type: "word",
  provider: "onlyoffice",
}
window.AscDesktopEditor.execCommand("open:document", JSON.stringify(params))
```
