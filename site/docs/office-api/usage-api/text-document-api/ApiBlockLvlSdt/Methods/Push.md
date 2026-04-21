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

Pushes a paragraph to actually add it to the container in a document.

```javascript editor-docx
// Create a block content control and pushes a paragraph to it in a document.

// Create the paragraph object, add a text to it, and push it to the block container in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a block text content control.");
blockLvlSdt.Push(paragraph);
doc.AddElement(0, blockLvlSdt);
```
