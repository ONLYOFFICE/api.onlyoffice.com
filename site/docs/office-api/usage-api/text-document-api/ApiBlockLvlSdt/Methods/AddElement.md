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

This example adds a paragraph to the container.

```javascript editor-docx
// Creates a block content control and adds a paragraph with a text to it.

// How to add the ApiParagraph object to the first position of the ApiBlockLvlSdt object.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a block text content control.");
blockLvlSdt.AddElement(paragraph, 0);
doc.AddElement(0, blockLvlSdt);
```
