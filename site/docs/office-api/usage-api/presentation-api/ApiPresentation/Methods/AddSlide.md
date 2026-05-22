# AddSlide

Appends a new slide to the end of the presentation.

## Syntax

```javascript
expression.AddSlide(oSlide, nIndex);
```

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oSlide | Required | [ApiSlide](../../ApiSlide/ApiSlide.md) |  | The slide created using the [Api#CreateSlide](../../Api/Methods/CreateSlide.md) method. |
| nIndex | Required | number |  | Index of the slide to be added. If not specified, the slide will be added to the end of the presentation. |

## Returns

This method doesn't return any data.

## Example

Add a new slide with a gradient background to a presentation.

```javascript editor-pptx
// How do I create and add a new slide to the end of a presentation?

// Create a slide with a radial gradient fill and add it to a presentation.

const presentation = Api.GetPresentation();
const slide = Api.CreateSlide();
const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
slide.SetBackground(fill);
presentation.AddSlide(slide);
```
