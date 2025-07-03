# Copy

Creates a copy of the current slide object.

## Syntax

```javascript
expression.Copy();
```

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiSlide](../../ApiSlide/ApiSlide.md) \| null

## Example

This example creates a copy of the current slide object.

```javascript editor-pptx
// How to create a copy of the slide.

// Create a duplicate slide and add it to the presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
slide.SetBackground(fill);

const copySlide = slide.Copy();
presentation.AddSlide(copySlide);

```
