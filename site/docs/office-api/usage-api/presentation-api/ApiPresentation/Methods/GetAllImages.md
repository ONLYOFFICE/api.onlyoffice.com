# GetAllImages

Returns an array with all the image objects from the current presentation.

## Syntax

```javascript
expression.GetAllImages();
```

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiImage](../../ApiImage/ApiImage.md)[]

## Example

This example shows how to get all images from the current presentation.

```javascript editor-pptx playground
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const copiesCount = 3;
for (let i = 0; i < copiesCount; i++) {
	const imageSource = 'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png';
	const drawing = Api.CreateImage(imageSource, 174 * 36000, 38 * 36000);
	drawing.SetPosition(0, i * 38 * 36000);
	slide.AddObject(drawing);
}

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 153, 204));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('heart', 38 * 36000, 38 * 36000, fill, stroke);
shape.SetPosition(184 * 36000, 0 * 36000);
slide.AddObject(shape);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const imagesCount = presentation.GetAllImages().length;
paragraph.AddText('' + imagesCount);

```
