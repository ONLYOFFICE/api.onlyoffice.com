# GetNotesPage

Returns the notes page from the current slide.

## Syntax

```javascript
expression.GetNotesPage();
```

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiNotesPage](../../ApiNotesPage/ApiNotesPage.md) \| null

## Example

This example shows how to get the notes page from a slide.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
shape.SetPosition(0, 3 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);

const notesPage = slide.GetNotesPage();
if (notesPage) {
	paragraph.AddText('Notes page exists on this slide');
} else {
	paragraph.AddText('Notes page is not available');
}

slide.AddObject(shape);

```
