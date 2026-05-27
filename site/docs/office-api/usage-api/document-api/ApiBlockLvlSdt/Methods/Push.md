# Push

Pushes a paragraph or a table or a block content control to actually add it to the current container.

## Syntax

```javascript
expression.Push(element);
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| element | Required | [DocumentElement](../../Enumeration/DocumentElement.md) |  | The type of the element which will be pushed to the current container. |

## Returns

boolean

## Example

Add a paragraph to a content control in a document.

```javascript editor-docx
// How do I add a paragraph to a content control in a document?

// Insert new text into a content control by appending a paragraph to it in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a block text content control.");
blockLvlSdt.Push(paragraph);
doc.AddElement(0, blockLvlSdt);
```
