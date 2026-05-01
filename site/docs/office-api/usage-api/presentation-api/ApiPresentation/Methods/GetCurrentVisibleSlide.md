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

Get an object for a Slide that is currently visible in a presentation.

```javascript editor-pptx
// How can I get current visible slide using a presentation in a presentation?

// Get current visible slide for a presentation in a presentation.

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
