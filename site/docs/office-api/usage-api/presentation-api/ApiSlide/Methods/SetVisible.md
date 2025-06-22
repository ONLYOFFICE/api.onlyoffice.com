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

This example sets the visibility to the current presentation slide.

```javascript editor-pptx
// How to change visibility of the slide.

// Create a slide and make it hidden.

const presentation = Api.GetPresentation();
const slide = Api.CreateSlide();
slide.SetVisible(false);
presentation.AddSlide(slide);

```
