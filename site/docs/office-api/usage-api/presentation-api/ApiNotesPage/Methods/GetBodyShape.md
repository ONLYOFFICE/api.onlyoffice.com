# GetBodyShape

Returns a shape with the type="body" attribute from the current notes page.

## Syntax

```javascript
expression.GetBodyShape();
```

`expression` - A variable that represents a [ApiNotesPage](../ApiNotesPage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiShape](../../ApiShape/ApiShape.md) \| null

## Example

This example shows how to get the body shape from a notes page.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const notesPage = slide.GetNotesPage();

let message = 'No notes page available.';

if (notesPage) {
	const bodyShape = notesPage.GetBodyShape();
	if (bodyShape) {
		message = 'Body shape exists.';
	} else {
		message = 'No body shape available.';
	}
}

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
shape.SetPosition(0, 3 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText(message);

slide.RemoveAllObjects();
slide.AddObject(shape);

```
