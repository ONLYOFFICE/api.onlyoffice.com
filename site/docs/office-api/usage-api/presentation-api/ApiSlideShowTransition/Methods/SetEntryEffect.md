# SetEntryEffect

Sets the entry effect for the slide show transition.

## Syntax

```javascript
expression.SetEntryEffect(entryEffectName);
```

`expression` - A variable that represents a [ApiSlideShowTransition](../ApiSlideShowTransition.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| entryEffectName | Required | [EntryEffect](../../Enumeration/EntryEffect.md) |  | The name of the entry effect in string format. |

## Returns

boolean

## Example

This example sets the entry effect for a slide show transition.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectCoverLeftDown');
transition.SetSpeed('medium');

slide.SetSlideShowTransition(transition);

const shape = Api.CreateShape(
	'rect',
	250 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.HexColor('#aba4e8')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Entry Effect: effectCoverLeftDown');
slide.AddObject(shape);

```
