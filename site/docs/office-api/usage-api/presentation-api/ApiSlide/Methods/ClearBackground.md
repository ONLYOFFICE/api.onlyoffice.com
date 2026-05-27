# ClearBackground

Clears the slide background.

## Syntax

```javascript
expression.ClearBackground();
```

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Remove the background from a slide in a presentation.

```javascript editor-pptx
// How do I remove a slide's background in a presentation?

// Create a duplicate of the slide and then clear its background in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
slide.SetBackground(fill);

const duplicateSlide = slide.Duplicate(1);
duplicateSlide.ClearBackground();
```
