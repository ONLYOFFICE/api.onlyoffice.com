# GetCurrentVisibleSlide

Returns the current visible slide.

## Syntax

```javascript
expression.GetCurrentVisibleSlide();
```

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiSlide](../../ApiSlide/ApiSlide.md) \| null

## Example

Retrieve the slide object currently visible on screen.

```javascript editor-pptx
// Access the slide displayed in the presentation view.

// Add a label to the visible slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetCurrentVisibleSlide();

if (slide) {
	const labelFill = Api.CreateSolidFill(Api.RGB(150, 200, 150));
	const labelStroke = Api.CreateStroke(0, Api.CreateNoFill());
	const label = Api.CreateShape('rect', 60 * 36000, 20 * 36000, labelFill, labelStroke);
	label.SetPosition(0, 50 * 36000);
	slide.AddObject(label);

	const docContent = label.GetDocContent();
	const paragraph = docContent.GetElement(0);
	paragraph.AddText('This slide is currently visible');
}
```
