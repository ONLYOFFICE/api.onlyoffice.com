# GetName

Returns the name of the current drawing.

## Syntax

```javascript
expression.GetName();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Return the name of the current drawing in a presentation.

```javascript editor-pptx
// How do I get the name in a presentation?

// Get the name using a drawing object object in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#E6CCB2'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));

shape.SetName('MyShape');
const name = shape.GetName();

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Drawing name: ' + name);
slide.AddObject(shape);
```
