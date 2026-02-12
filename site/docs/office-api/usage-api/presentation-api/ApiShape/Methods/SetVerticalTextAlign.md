# SetVerticalTextAlign

Sets the vertical alignment to the shape content where a paragraph or text runs can be inserted.

## Syntax

```javascript
expression.SetVerticalTextAlign(VerticalAlign);
```

`expression` - A variable that represents a [ApiShape](../ApiShape.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| VerticalAlign | Required | [VerticalTextAlign](../../Enumeration/VerticalTextAlign.md) |  | The type of the vertical alignment for the shape inner contents. |

## Returns

This method doesn't return any data.

## Example

This example sets the vertical alignment to the shape content where a paragraph or text runs can be inserted.

```javascript editor-pptx
// How to set vertical alignment of the shape content.

// Adjust vertical alignment of the text inside the shape.

const presentation = Api.GetPresentation();
presentation.SetSizes(254 * 36000, 190 * 36000);
const slide = presentation.GetCurrentSlide();
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartOnlineStorage", 200 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
shape.SetVerticalTextAlign("bottom");
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it ");
paragraph.AddText("aligning it vertically by the bottom.");
docContent.Push(paragraph);
slide.AddObject(shape);

```
