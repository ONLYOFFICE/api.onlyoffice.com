# SetDuration

Sets the transition duration in milliseconds for the slide show transition.

## Syntax

```javascript
expression.SetDuration(duration);
```

`expression` - A variable that represents a [ApiSlideShowTransition](../ApiSlideShowTransition.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| duration | Required | number |  | The transition duration in milliseconds. |

## Returns

boolean

## Example

This example sets the transition duration to 2000 milliseconds.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectFadeSmoothly');
transition.SetDuration(2000);

slide.SetSlideShowTransition(transition);

const shape = Api.CreateShape(
	'rect',
	250 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.HexColor('#aba4e8')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Transition Duration: 2000 ms');
slide.AddObject(shape);

```
