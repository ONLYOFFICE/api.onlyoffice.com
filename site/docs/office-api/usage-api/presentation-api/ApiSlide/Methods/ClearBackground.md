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

This example clears the slide background.

```javascript editor-pptx
// How to remove the background from the slide.

// Create a duplicate slide and change its background.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
slide.SetBackground(fill);

const duplicateSlide = slide.Duplicate(1);
duplicateSlide.ClearBackground();

```
