# GetEntryEffect

Returns the entry effect for the slide show transition.

## Syntax

```javascript
expression.GetEntryEffect();
```

`expression` - A variable that represents a [ApiSlideShowTransition](../ApiSlideShowTransition.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[EntryEffect](../../Enumeration/EntryEffect.md)

## Example

This example gets the entry effect from a slide show transition.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectUncoverRight');
transition.SetSpeed('medium');
slide.SetSlideShowTransition(transition);

const retrievedTransition = slide.GetSlideShowTransition();
const entryEffect = retrievedTransition.GetEntryEffect();

const shape = Api.CreateShape(
	'rect',
	300 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.HexColor('#ff9447')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Entry Effect: ' + entryEffect);
slide.AddObject(shape);

```
