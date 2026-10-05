# GetElement

Returns an element by its position in the document.

Inherited from [ApiDocumentContent.GetElement](../../ApiDocumentContent/Methods/GetElement.md).

## Syntax

```javascript
expression.GetElement(nPos);
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | The element position that will be taken from the document. |

## Returns

[DocumentElement](../../Enumeration/DocumentElement.md)

## Example

Access a document element by its index and add text to it in a document.

```javascript editor-docx
// How do I retrieve a specific element by position in a document?

// Target the first paragraph directly by index to insert a text run in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. Nothing special.");
paragraph.AddElement(run);
```
