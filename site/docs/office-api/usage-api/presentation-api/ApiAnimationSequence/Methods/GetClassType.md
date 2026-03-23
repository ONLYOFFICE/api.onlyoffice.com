# GetClassType

Returns the type of the ApiAnimationSequence class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiAnimationSequence](../ApiAnimationSequence.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"animationSequence"

## Example

This example gets the class type of the ApiAnimationSequence object.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const timeLine = slide.GetTimeLine();
const mainSequence = timeLine.GetMainSequence();
const classType = mainSequence.GetClassType();

const shape = Api.CreateShape(
	'rect',
	250 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(61, 74, 107)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
shape.SetPosition(100 * 36000, 100 * 36000);
const content = shape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Class type: ' + classType);
slide.AddObject(shape);

```
