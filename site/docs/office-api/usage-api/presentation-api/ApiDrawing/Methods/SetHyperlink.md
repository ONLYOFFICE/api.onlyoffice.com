# SetHyperlink

Sets a hyperlink to the current drawing object (shape or image).\
Pass null to remove the hyperlink.

## Syntax

```javascript
expression.SetHyperlink(hyperlink);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| hyperlink | Required | [ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md) \| null |  | The hyperlink object to be set to the drawing, or null to remove the hyperlink. |

## Returns

boolean

## Example

This example sets a hyperlink for a shape and an image on a slide.

```javascript editor-pptx
const presentation = Api.GetPresentation();
presentation.AddSlide(Api.CreateSlide());

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#e2e4f6'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
slide.AddObject(shape);

const image = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000
);
image.SetPosition(160 * 36000, 0);
slide.AddObject(image);

const urlHyperlink = Api.CreateHyperlink('https://onlyoffice.com', 'Link to OnlyOffice website');
const pageHyperlink = Api.CreateHyperlink('ppaction://hlinksldjumpslide1', 'Link to the second slide');
shape.SetHyperlink(urlHyperlink);
image.SetHyperlink(pageHyperlink);

```
