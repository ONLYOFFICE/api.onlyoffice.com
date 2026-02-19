# GetLoopUntilStopped

Returns whether the presentation loops continuously until the user stops it.

## Syntax

```javascript
expression.GetLoopUntilStopped();
```

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example shows how to get the loop-until-stopped setting of the presentation.

```javascript editor-pptx
const presentation = Api.GetPresentation();
presentation.SetLoopUntilStopped(true);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
const isLooping = presentation.GetLoopUntilStopped();
paragraph.AddText("Loop until stopped: " + isLooping);
slide.AddObject(shape);

```
