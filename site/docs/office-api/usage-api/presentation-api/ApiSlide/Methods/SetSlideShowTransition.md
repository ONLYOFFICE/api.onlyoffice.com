# SetSlideShowTransition

Sets the slide show transition to the current slide.

## Syntax

```javascript
expression.SetSlideShowTransition(transition);
```

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| transition | Required | [ApiSlideShowTransition](../../ApiSlideShowTransition/ApiSlideShowTransition.md) |  | The slide show transition to be applied. |

## Returns

boolean

## Example

This example sets a slide show transition to a slide.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectRandom');
transition.SetSpeed('fast');
transition.SetAdvanceOnClick(true);
slide.SetSlideShowTransition(transition);

const shape = Api.CreateShape(
	'rect',
	300 * 36000, 100 * 36000,
	Api.CreateSolidFill(Api.HexColor('#61cbd1')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Transition parameters: random effect, fast speed, advance on click');
slide.AddObject(shape);

```
