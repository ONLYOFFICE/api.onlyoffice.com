# GetPrevImage

Returns the previous inline image if exists.

## Syntax

```javascript
expression.GetPrevImage();
```

`expression` - A variable that represents a [ApiImage](../ApiImage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiImage](../../ApiImage/ApiImage.md) \| null

## Example

Get the previous image before a given image and copy it into a paragraph in a document.

```javascript editor-docx
// How do I access the image that comes before another image in a document?

// Copy a sibling image by navigating backward through inline images in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

let image1 = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
paragraph.AddDrawing(image1);
paragraph.AddLineBreak();

let image2 = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png',
	130 * 36000, 90 * 36000
);
paragraph.AddDrawing(image2);

let prevImage = image2.GetPrevImage();
let copyImage = prevImage.Copy();
paragraph.AddLineBreak();
paragraph.AddDrawing(copyImage);
```
