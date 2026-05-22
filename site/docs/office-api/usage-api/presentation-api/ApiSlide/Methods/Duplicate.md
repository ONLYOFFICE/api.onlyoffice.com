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

Create a duplicate of a slide in a presentation.

```javascript editor-pptx
// How do I duplicate a slide in a presentation?

// Select a slide and create a copy of it in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
slide.SetBackground(fill);
const duplicateSlide = slide.Duplicate(1);
```
