# GetSpeed

Returns the transition speed (similar to PowerPoint VBA Speed property).
Maps duration to speed based on OOXML spd attribute logic:
- fast: duration \<= 500ms
- medium: 500ms \< duration \<= 750ms
- slow: duration \> 750ms

## Syntax

```javascript
expression.GetSpeed();
```

`expression` - A variable that represents a [ApiSlideShowTransition](../ApiSlideShowTransition.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[TransitionSpeed](../../Enumeration/TransitionSpeed.md)

## Example

Get the transition speed and display it in a presentation.

```javascript editor-pptx
// Retrieve the speed value from a slide show transition object.

// Display the retrieved speed in a shape on the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectWheelReverse1Spoke');
transition.SetDuration(5000);
slide.SetSlideShowTransition(transition);

const retrievedTransition = slide.GetSlideShowTransition();
const transitionSpeed = retrievedTransition.GetSpeed();

const shape = Api.CreateShape(
	'rect',
	200 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.HexColor('#61cbd1')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Transition Speed is ' + transitionSpeed);
slide.AddObject(shape);
```
