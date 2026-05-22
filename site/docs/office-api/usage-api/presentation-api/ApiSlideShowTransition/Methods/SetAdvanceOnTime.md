# SetAdvanceOnTime

Sets whether the slide advances after a specified time.

## Syntax

```javascript
expression.SetAdvanceOnTime(advanceOnTime);
```

`expression` - A variable that represents a [ApiSlideShowTransition](../ApiSlideShowTransition.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| advanceOnTime | Required | boolean |  | True to advance the slide after a specified time; otherwise false. |

## Returns

boolean

## Example

Enable automatic slide advance after time.

```javascript editor-pptx
// Configure the advance on time property of a slide show transition object.

// Apply the transition and display a confirmation message on the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectFadeSmoothly');
transition.SetSpeed('medium');
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
paragraph.AddText('Slide will advance on click or automatically after 5 seconds.');
slide.AddObject(shape);
```
