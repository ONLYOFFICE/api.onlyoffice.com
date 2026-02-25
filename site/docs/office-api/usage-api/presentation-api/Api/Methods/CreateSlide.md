# CreateSlide

Creates a new slide.

## Syntax

```javascript
expression.CreateSlide();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiSlide](../../ApiSlide/ApiSlide.md)

## Example

This example creates slide and inserts it into the presentation.

```javascript editor-pptx playground
// How to add a new slide.

// Add new slides to the presentation.

const presentation = Api.GetPresentation();
const slide = Api.CreateSlide();
const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
slide.SetBackground(fill);
presentation.AddSlide(slide);

```
