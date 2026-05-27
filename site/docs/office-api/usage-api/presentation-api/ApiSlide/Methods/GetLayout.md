# GetLayout

Returns a layout of the current slide.

## Syntax

```javascript
expression.GetLayout();
```

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiLayout](../../ApiLayout/ApiLayout.md) \| null

## Example

Get a layout of the current slide in a presentation.

```javascript editor-pptx
// Retrieve the slide layout using GetLayout method.

// Apply a background color to the layout using SetBackground.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const layout = slide.GetLayout();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
layout.SetBackground(fill);
slide.FollowLayoutBackground();
```
