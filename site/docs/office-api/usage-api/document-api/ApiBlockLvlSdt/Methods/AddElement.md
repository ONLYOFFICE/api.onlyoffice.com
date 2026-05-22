# AddElement

Adds a paragraph or a table or a block content control to the current container.

## Syntax

```javascript
expression.AddElement(element, pos);
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| element | Required | [DocumentElement](../../Enumeration/DocumentElement.md) |  | The type of the element which will be added to the current container. |
| pos | Required | Number |  | The specified position. |

## Returns

boolean

## Example

Insert a paragraph into a content control at a specific position in a document.

```javascript editor-docx
// How do I place a paragraph inside a content control in a document?

// Populate a content control with a text paragraph and add the whole block to the page in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a block text content control.");
blockLvlSdt.AddElement(paragraph, 0);
doc.AddElement(0, blockLvlSdt);
```
