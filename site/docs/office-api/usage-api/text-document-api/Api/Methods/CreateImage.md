# CreateImage

Creates an image with the parameters specified.

## Syntax

```javascript
expression.CreateImage(imageSrc, width, height);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| imageSrc | Required | string |  | The image source where the image to be inserted should be taken from (currently only internet URL or Base64 encoded images are supported). |
| width | Required | [EMU](../../Enumeration/EMU.md) |  | The image width in English measure units. |
| height | Required | [EMU](../../Enumeration/EMU.md) |  | The image height in English measure units. |

## Returns

[ApiImage](../../ApiImage/ApiImage.md)

## Example

Create an image and paste it into the document.

```javascript editor-docx
// Create the image object and add it to the paragraph class in a document.

// How to create the image object using the URL to the image, its width and height in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let image = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
paragraph.AddDrawing(image);
```
