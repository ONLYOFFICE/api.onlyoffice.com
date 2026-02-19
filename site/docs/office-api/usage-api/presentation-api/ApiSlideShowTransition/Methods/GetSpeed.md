# GetSpeed

Returns the transition speed (similar to PowerPoint VBA Speed property).\
Maps duration to speed based on OOXML spd attribute logic:\
- fast: duration &lt;= 500ms\
- medium: 500ms &lt; duration &lt;= 750ms\
- slow: duration &gt; 750ms

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

This example gets the transition speed and displays it.

```javascript editor-pptx
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
