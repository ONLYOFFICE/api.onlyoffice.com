# AddElement

Adds a paragraph or a table or a blockLvl content control using its position in the document content.

Inherited from [ApiDocumentContent.AddElement](../../ApiDocumentContent/Methods/AddElement.md).

## Syntax

```javascript
expression.AddElement(nPos, oElement);
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | The position where the current element will be added. |
| oElement | Required | [DocumentElement](../../Enumeration/DocumentElement.md) |  | The document element which will be added at the current position. |

## Returns

boolean

## Example

Insert a paragraph at a specific position in a document.

```javascript editor-docx
// How do I add a paragraph at a chosen index in a document?

// Build a paragraph with text runs and place it before existing content in a document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let run = Api.CreateRun();
run.AddText("Number of paragraph elements at this point: ");
run.AddTabStop();
run.AddText("" + paragraph.GetElementsCount());
run.AddLineBreak();
paragraph.AddElement(run);
run.AddText("Number of paragraph elements after we added a text run: ");
run.AddTabStop();
run.AddText("" + paragraph.GetElementsCount());
doc.AddElement(0, paragraph);
```
