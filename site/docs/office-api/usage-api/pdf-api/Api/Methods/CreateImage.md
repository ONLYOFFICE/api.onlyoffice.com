# CreateImage

Creates an image with the parameters specified.

## Syntax

```javascript
expression.CreateImage(sImageSrc, nWidth, nHeight);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sImageSrc | Required | string |  | The image source where the image to be inserted should be taken from (currently, only internet URL or Base64 encoded images are supported). |
| nWidth | Required | [EMU](../../Enumeration/EMU.md) |  | The image width in English measure units. |
| nHeight | Required | [EMU](../../Enumeration/EMU.md) |  | The image height in English measure units. |

## Returns

[ApiImage](../../ApiImage/ApiImage.md)

## Example

How to create an image object using a url and specifying its width and height.

```javascript editor-pdf
// Create an image and insert it to the page.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const shape = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
page.AddObject(shape);
```
