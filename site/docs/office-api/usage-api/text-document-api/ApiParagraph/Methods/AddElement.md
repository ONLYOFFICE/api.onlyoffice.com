# AddElement

Adds an element to the current paragraph.

## Syntax

```javascript
expression.AddElement(oElement, nPos);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oElement | Required | [ParagraphContent](../../Enumeration/ParagraphContent.md) |  | The document element which will be added at the current position. Returns false if the oElement type is not supported by a paragraph. |
| nPos | Optional | number |  | The position where the current element will be added. If this value is not specified, then the element will be added at the end of the current paragraph. |

## Returns

boolean

## Example

This example adds a Run to the paragraph.

```javascript editor-docx
// How to add an element to the paragraph.

// Create a text run and insert it to the paragraph.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a text run. Nothing special.");
paragraph.AddElement(run);
```
