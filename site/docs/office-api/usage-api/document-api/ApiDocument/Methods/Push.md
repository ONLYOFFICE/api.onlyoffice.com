# Push

Pushes a paragraph or a table to actually add it to the document.

Inherited from [ApiDocumentContent.Push](../../ApiDocumentContent/Methods/Push.md).

## Syntax

```javascript
expression.Push(oElement);
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oElement | Required | [DocumentElement](../../Enumeration/DocumentElement.md) |  | The element type which will be pushed to the document. |

## Returns

boolean

## Example

Append new paragraphs to the end of a document.

```javascript editor-docx
// How do I add multiple paragraphs one after another in a document?

// Build a sequence of numbered paragraphs by pushing each one onto the document in a document.

const doc = Api.GetDocument();

const paragraphCount = 5;
for (let i = 0; i < paragraphCount; i++) {
	const newParagraph = Api.CreateParagraph();
	newParagraph.AddText("This is " + (i + 1) + " paragraph.");
	doc.Push(newParagraph);
}
```
