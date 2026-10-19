# CreateImageStampAnnot

Creates stamp annotation from an image. The annotation dimensions are taken from the loaded image, or updated after it has been loaded.

## Syntax

```javascript
expression.CreateImageStampAnnot(position, imageSrc, author, creationDate);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| position | Required | [Point](../../Enumeration/Point.md) \| [Rect](../../Enumeration/Rect.md) |  | The position of the upper-left corner of the annotation. For a Rect, only x1 and y1 are used. |
| imageSrc | Required | string |  | The image source where the image should be taken from (currently, only internet URL or Base64 encoded images are supported). |
| author | Optional | string |  | name of the author |
| creationDate | Optional | number |  | creation date (timeStamp) |

## Returns

[ApiStampAnnotation](../../ApiStampAnnotation/ApiStampAnnotation.md)

## Example

Add an image stamp annotation to a PDF page.

```javascript editor-pdf
// Create a PDF stamp annotation using an image URL.

// Place an image stamp at specified coordinates in a PDF.

let doc = Api.GetDocument();
let imageAnnot = Api.CreateImageStampAnnot(
	[40, 40, 160, 100],
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png'
);
let page = doc.GetPage(0);
page.AddObject(imageAnnot);
```
