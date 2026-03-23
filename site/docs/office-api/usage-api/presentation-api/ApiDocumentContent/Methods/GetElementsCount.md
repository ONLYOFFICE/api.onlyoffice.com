# GetElementsCount

Returns a number of elements in the current document.

## Syntax

```javascript
expression.GetElementsCount();
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example gets elements count and inserts this value into the presentation.

```javascript editor-pptx
// How to get a number of elements a slide shape contains.

// Get a slide shape's content and display its elements count.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("We got the first paragraph inside the shape.");
paragraph.AddLineBreak();
paragraph.AddText("Number of elements inside the shape: " + docContent.GetElementsCount());
paragraph.AddLineBreak();
paragraph.AddText("Line breaks are NOT counted into the number of elements.");
slide.AddObject(shape);

```
