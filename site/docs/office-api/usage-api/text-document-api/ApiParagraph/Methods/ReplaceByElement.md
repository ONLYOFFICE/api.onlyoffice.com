# ReplaceByElement

Replaces the current paragraph with a new element.

## Syntax

```javascript
expression.ReplaceByElement(oElement);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oElement | Required | [DocumentElement](../../Enumeration/DocumentElement.md) |  | The element to replace the current paragraph with. |

## Returns

boolean

## Example

Replace the paragraph with a block level content control in a document.

```javascript editor-docx
// How to replace paragraph with another element in a document.

// Add a block level content control instead of the paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("The paragraph was replaced with the current content control.");
paragraph.ReplaceByElement(blockLvlSdt);
```
