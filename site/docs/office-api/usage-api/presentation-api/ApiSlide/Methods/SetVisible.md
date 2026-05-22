# SetVisible

Sets the visibility to the current presentation slide.

## Syntax

```javascript
expression.SetVisible(value);
```

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | Required | boolean |  | Slide visibility. |

## Returns

boolean

## Example

Control the visibility of a slide in the presentation.

```javascript editor-pptx
// Create a new slide in the presentation.

// Hide the slide using the SetVisible method.

const presentation = Api.GetPresentation();
const slide = Api.CreateSlide();
slide.SetVisible(false);
presentation.AddSlide(slide);
```
