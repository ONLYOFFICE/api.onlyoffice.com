# GetAllImages

Returns a collection of image objects in the paragraph.

## Syntax

```javascript
expression.GetAllImages();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiImage](../../ApiImage/ApiImage.md)[]

## Example

Retrieve all image objects embedded in a paragraph in a document.

```javascript editor-docx
// How do I get every image from a paragraph in a document?

// Inspect or process multiple pictures at once by collecting all images in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let image1 = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
paragraph.AddDrawing(image1);

let image2 = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png',
	130 * 36000, 90 * 36000
);
paragraph.AddDrawing(image2);

let images = paragraph.GetAllImages();
let classType = images[0].GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText('Class type: ' + classType);
doc.Push(paragraph);
```
