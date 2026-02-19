# GetSlideShowTransition

Returns the slide show transition of the current slide.

## Syntax

```javascript
expression.GetSlideShowTransition();
```

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiSlideShowTransition](../../ApiSlideShowTransition/ApiSlideShowTransition.md) \| null

## Example

This example gets the slide show transition from a slide.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectUncoverRight');
transition.SetSpeed('medium');
slide.SetSlideShowTransition(transition);

const retrievedTransition = slide.GetSlideShowTransition();
const transitionEffect = retrievedTransition.GetEntryEffect();
const transitionSpeed = retrievedTransition.GetSpeed();

const shape = Api.CreateShape(
	'rect',
	300 * 36000, 100 * 36000,
	Api.CreateSolidFill(Api.HexColor('#61cbd1')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Effect: ' + transitionEffect + '\n');
paragraph.AddText('Speed: ' + transitionSpeed);
slide.AddObject(shape);

```
