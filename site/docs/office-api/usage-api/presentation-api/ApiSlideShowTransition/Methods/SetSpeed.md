# SetSpeed

Sets the transition speed (similar to PowerPoint VBA Speed property).\
Converts speed to duration based on standard values:\
- fast = 500ms\
- medium = 750ms\
- slow = 1000ms

## Syntax

```javascript
expression.SetSpeed(speed);
```

`expression` - A variable that represents a [ApiSlideShowTransition](../ApiSlideShowTransition.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| speed | Required | [TransitionSpeed](../../Enumeration/TransitionSpeed.md) |  | The transition speed in string format. |

## Returns

boolean

## Example

This example sets the transition speed to 'slow'.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectWipeLeft');
transition.SetSpeed('slow');

slide.SetSlideShowTransition(transition);

const shape = Api.CreateShape(
	'rect',
	250 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.HexColor('#aba4e8')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Transition Speed is "slow" which is 1 second by default.');
slide.AddObject(shape);

```
