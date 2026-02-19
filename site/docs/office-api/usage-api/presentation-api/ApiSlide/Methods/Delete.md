# Delete

Deletes the current slide from the presentation.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example deletes the current slide from the presentation.

```javascript editor-pptx
// How to delete a slide.

// Remove a slide from the presentation.

const presentation = Api.GetPresentation();
let slide = Api.CreateSlide();

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
slide.SetBackground(fill);
presentation.AddSlide(slide);

slide = presentation.GetSlideByIndex(0);
slide.Delete();

```
