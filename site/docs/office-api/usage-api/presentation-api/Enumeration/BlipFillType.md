# BlipFillType

The type of a fill which uses an image as a background.\
-**"tile"** - if the image is smaller than the shape which is filled, the image will be tiled all over the created shape surface.\
-**"stretch"** - if the image is smaller than the shape which is filled, the image will be stretched to fit the created shape surface.

## Type

Enumeration

## Values

- "tile"
- "stretch"


## Example

This example creates a blip fill with an image which is tiled all over the created shape.

```javascript editor-pptx
// How to create a blip fill from the image URL.

// Create a tiled blip fill from the image.

const imageUrl = 'https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png';
let blipFill = Api.CreateBlipFill(imageUrl, 'tile');

```
