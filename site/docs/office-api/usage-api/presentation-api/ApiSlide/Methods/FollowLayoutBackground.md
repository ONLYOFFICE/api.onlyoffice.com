# FollowLayoutBackground

Sets the layout background as the background of the slide.

## Syntax

```javascript
expression.FollowLayoutBackground();
```

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example sets the layout background as the background of the slide.

```javascript editor-pptx
// How to set a slide's background same as the layout's.

// Get a slide by its index and set its background as its layout.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
layout.SetBackground(fill);
slide.FollowLayoutBackground();

```
