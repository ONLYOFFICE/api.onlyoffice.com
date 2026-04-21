# GetHyperlink

Returns the hyperlink from the current drawing object (shape or image).

## Syntax

```javascript
expression.GetHyperlink();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md) \| null

## Example

Return the hyperlink from the current drawing object in a presentation.

```javascript editor-pptx
// How to get the hyperlink for a drawing object in a presentation?

// Get the hyperlink and display the result in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(200, 230, 201));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));

const hyperlink = Api.CreateHyperlink('https://api.onlyoffice.com/', 'ONLYOFFICE for developers');
shape.SetHyperlink(hyperlink);

const retrievedHyperlink = shape.GetHyperlink();
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
if (retrievedHyperlink) {
  paragraph.AddText('Hyperlink: ' + retrievedHyperlink.GetScreenTipText());
  paragraph.AddText(' (' + retrievedHyperlink.GetLinkedText() + ')');
} else {
  paragraph.AddText('No hyperlink found.');
}
slide.AddObject(shape);
```
