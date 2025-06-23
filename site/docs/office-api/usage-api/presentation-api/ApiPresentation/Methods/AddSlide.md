# AddSlide

Appends a new slide to the end of the presentation.

## Syntax

```javascript
expression.AddSlide(oSlide);
```

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oSlide | Required | [ApiSlide](../../ApiSlide/ApiSlide.md) |  | The slide created using the [Api#CreateSlide](../../Api/Methods/CreateSlide.md) method. |

## Returns

This method doesn't return any data.

## Example

This example appends a new slide to the end of the presentation.

```javascript editor-pptx
// How to add a new slide to the presentation.

// Create a slide and add it to the end of presentation.

const presentation = Api.GetPresentation();
const slide = Api.CreateSlide();
const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
slide.SetBackground(fill);
presentation.AddSlide(slide);

```
