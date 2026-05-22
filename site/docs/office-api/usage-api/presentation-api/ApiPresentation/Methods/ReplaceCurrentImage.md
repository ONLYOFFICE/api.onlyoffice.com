# ReplaceCurrentImage

Replaces the current image with an image specified.

## Syntax

```javascript
expression.ReplaceCurrentImage(sImageUrl, Width, Height);
```

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sImageUrl | Required | string |  | The image source where the image to be inserted should be taken from (currently, only internet URL or Base64 encoded images are supported). |
| Width | Required | [EMU](../../Enumeration/EMU.md) |  | The image width in English measure units. |
| Height | Required | [EMU](../../Enumeration/EMU.md) |  | The image height in English measure units. |

## Returns

This method doesn't return any data.

## Example

Swap an image for a different one in a presentation.

```javascript editor-pptx
// How do I replace an image with another image in a presentation?

// Replace the selected image by loading a new one from a URL.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const url1 = 'https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png';
const url2 = 'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png';

const drawing = Api.CreateImage(url1, 300 * 36000, 150 * 36000);
slide.AddObject(drawing);
drawing.Select();
presentation.ReplaceCurrentImage(url2, 60 * 36000, 60 * 36000);
```
