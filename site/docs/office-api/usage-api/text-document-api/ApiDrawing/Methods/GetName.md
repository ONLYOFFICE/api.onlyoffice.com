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

This example shows how to get the name of a drawing.

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const fill = Api.CreateSolidFill(Api.HexColor('#5B9BD5'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape('rect', Api.MillimetersToEmus(80), Api.MillimetersToEmus(40), fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetName('MyRectangle');

const shapeName = drawing.GetName();
const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('Drawing name: ' + shapeName);
doc.Push(paragraph2);

```
