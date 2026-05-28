# SetAdvanceTime

Sets the slide advance time in milliseconds.

## Syntax

```javascript
expression.SetAdvanceTime(advanceTime);
```

`expression` - A variable that represents a [ApiSlideShowTransition](../ApiSlideShowTransition.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| advanceTime | Required | number |  | The slide advance time in milliseconds. |

## Returns

boolean

## Example

Set the automatic advance time to 4.3 seconds (4300 milliseconds) in a presentation.

```javascript editor-pptx
// Configure the advance time property of a slide show transition object.

// Apply the transition and display a confirmation message on the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectFade');
transition.SetSpeed('medium');
transition.SetAdvanceOnClick(false);
transition.SetAdvanceOnTime(true);
transition.SetAdvanceTime(4300);

slide.SetSlideShowTransition(transition);

const shape = Api.CreateShape(
	'rect',
	250 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.HexColor('#aba4e8')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Slide will advance automatically after 4.3 seconds.');
slide.AddObject(shape);
```
