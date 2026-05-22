# GetDuration

Returns the transition duration in milliseconds for the slide show transition.

## Syntax

```javascript
expression.GetDuration();
```

`expression` - A variable that represents a [ApiSlideShowTransition](../ApiSlideShowTransition.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Get the transition duration and display it in a presentation.

```javascript editor-pptx
// Retrieve the duration value from a slide show transition object.

// Display the retrieved duration as milliseconds in a shape on the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectPushRight');
transition.SetDuration(3300);
slide.SetSlideShowTransition(transition);

const retrievedTransition = slide.GetSlideShowTransition();
const duration = retrievedTransition.GetDuration();

const shape = Api.CreateShape(
	'rect',
	250 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.HexColor('#61cbd1')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Transition Duration: ' + duration + ' ms');
slide.AddObject(shape);
```
