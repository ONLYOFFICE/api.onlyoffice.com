# SetAdvanceOnClick

Sets whether the slide advances on mouse click.

## Syntax

```javascript
expression.SetAdvanceOnClick(advanceOnClick);
```

`expression` - A variable that represents a [ApiSlideShowTransition](../ApiSlideShowTransition.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| advanceOnClick | Required | boolean |  | True to advance the slide on mouse click; otherwise false. |

## Returns

boolean

## Example

Enable advancing to the next slide on mouse click.

```javascript editor-pptx
// How do I set advance on click in a presentation?

// Set advance on click using a slide show transition object.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectCoverLeft');
transition.SetSpeed('medium');
transition.SetAdvanceOnClick(false);
transition.SetAdvanceOnTime(true);
transition.SetAdvanceTime(5000);

slide.SetSlideShowTransition(transition);

const shape = Api.CreateShape(
	'rect',
	250 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.HexColor('#aba4e8')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Advance On Click set to false. Slide will advance automatically after 5 seconds.');
slide.AddObject(shape);
```
