# GetCurrentParagraph

Returns the current paragraph where the cursor is located.

## Syntax

```javascript
expression.GetCurrentParagraph();
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

This example returns the current paragraph from the document content.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(200, 191, 231));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();

const paragraph = docContent.GetElement(0);
paragraph.AddText('First paragraph inside the shape.');

const newParagraph = Api.CreateParagraph();
newParagraph.AddText('Second paragraph inside the shape.');
docContent.Push(newParagraph);

const currentParagraph = docContent.GetCurrentParagraph();
if (currentParagraph) {
  currentParagraph.AddText(' (Current paragraph detected!)');
}
slide.AddObject(shape);

```
