# MoveTo

Moves the current slide to a specific location within the same collection.

## Syntax

```javascript
expression.MoveTo(nPos);
```

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | Position where the current slide will be moved to. |

## Returns

boolean

## Example

This example moves the current slide to a specific location within the same collection.

```javascript editor-pptx
// How to move a slide to the position index.

// Create a slide and change its position.

const presentation = Api.GetPresentation();
const slide = Api.CreateSlide();
const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
slide.SetBackground(fill);
presentation.AddSlide(slide);
slide.MoveTo(0);

```
