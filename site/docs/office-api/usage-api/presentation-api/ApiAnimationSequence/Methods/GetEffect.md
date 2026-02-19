# GetEffect

Returns the effect at the specified index.

## Syntax

```javascript
expression.GetEffect(index);
```

`expression` - A variable that represents a [ApiAnimationSequence](../ApiAnimationSequence.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| index | Required | number |  | The zero-based index of the effect. |

## Returns

[ApiAnimationEffect](../../ApiAnimationEffect/ApiAnimationEffect.md) \| null

## Example

This example gets an effect at a specified index from an animation sequence.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const shape = Api.CreateShape(
	'rect',
	150 * 36000, 100 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(61, 74, 107)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
shape.SetPosition(100 * 36000, 80 * 36000);
slide.AddObject(shape);

// Add animation
const timeLine = slide.GetTimeLine();
const mainSequence = timeLine.GetMainSequence();
mainSequence.AddEffect(shape, 'entranceFlyIn', 'onclick');

// Get the first effect
const effect = mainSequence.GetEffect(0);
const effectType = effect ? effect.GetEffectType() : 'none';

const infoShape = Api.CreateShape(
	'rect',
	150 * 36000, 40 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(200, 200, 200)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
infoShape.SetPosition(20 * 36000, 10 * 36000);
const content = infoShape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Effect at index 0: ' + effectType);
slide.AddObject(infoShape);

```
