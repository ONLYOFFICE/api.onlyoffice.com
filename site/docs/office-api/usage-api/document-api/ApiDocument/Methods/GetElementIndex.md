# GetElementIndex

Returns the position (index) of the specified element within the current document content.

Inherited from [ApiDocumentContent.GetElementIndex](../../ApiDocumentContent/Methods/GetElementIndex.md).

## Syntax

```javascript
expression.GetElementIndex(element);
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| element | Required | [DocumentElement](../../Enumeration/DocumentElement.md) |  | The document element (paragraph, table or block content control) whose index will be returned. |

## Returns

Number

## Example

Determine the index of an element within the document content.

```javascript editor-docx
// The index reflects the position of a specific element inside the document content.

// Locate a paragraph within the document content and report its index.

let doc = Api.GetDocument();
let first = Api.CreateParagraph();
first.AddText("First paragraph");
doc.Push(first);
let second = Api.CreateParagraph();
second.AddText("Second paragraph");
doc.Push(second);
let index = doc.GetElementIndex(second);
let report = Api.CreateParagraph();
report.AddText("The second paragraph is at index " + index + ".");
doc.Push(report);
```
