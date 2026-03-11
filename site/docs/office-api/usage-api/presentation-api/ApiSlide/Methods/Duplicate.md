# Duplicate

Creates a duplicate of the specified slide object, adds the new slide to the slides collection.

## Syntax

```javascript
expression.Duplicate(nPos);
```

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Optional | number | ApiPresentation.GetSlidesCount() | Position where the new slide will be added. |

## Returns

[ApiSlide](../../ApiSlide/ApiSlide.md) \| null

## Example

This example creates a duplicate of the specified slide object, adds the new slide to the slides collection.

```javascript editor-pptx
// How to create a duplicate slide.

// Get a slide by its index and create its copy.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
slide.SetBackground(fill);
const duplicateSlide = slide.Duplicate(1);

```
