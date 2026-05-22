# GetElement

Returns an element by its position in the document.

## Syntax

```javascript
expression.GetElement(nPos);
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | The element position that will be taken from the document. |

## Returns

[DocumentElement](../../Enumeration/DocumentElement.md)

## Example

Retrieve a specific element by its index from a document content in a document.

```javascript editor-docx
// How do I get a single element at a known position inside a document content in a document?

// Add text to a header paragraph by fetching it directly through its position index.

let doc = Api.GetDocument();
let section = doc.GetFinalSection();
let docContent = section.GetHeader("default", true);
let paragraph = docContent.GetElement(0);
paragraph.AddText("This is the text in the default header");
```
