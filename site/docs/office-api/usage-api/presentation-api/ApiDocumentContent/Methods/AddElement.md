# AddElement

Adds a paragraph or a table or a blockLvl content control using its position in the document content.

## Syntax

```javascript
expression.AddElement(nPos, oElement);
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | The position where the current element will be added. |
| oElement | Required | [DocumentElement](../../Enumeration/DocumentElement.md) |  | The document element which will be added at the current position. |

## Returns

boolean

## Example

Add text content to a shape in a presentation.

```javascript editor-pptx
// How do I insert a new paragraph into a shape in a presentation?

// Create a shape, add a paragraph with text to it, and display the shape on the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.RemoveAllElements();
const paragraph = Api.CreateParagraph();
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
docContent.AddElement(0, paragraph);
slide.AddObject(shape);
```
