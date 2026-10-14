# GetTextFit

Returns the text autofit type of the current shape.

## Syntax

```javascript
expression.GetTextFit();
```

`expression` - A variable that represents an [ApiShape](../ApiShape.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[TextFitType](../../Enumeration/TextFitType.md)

## Example

Read the text autofit type currently applied to a shape.

```javascript editor-pptx
// Apply an autofit type with SetTextFit, then retrieve it back.

// The retrieved value is added to the shape as text and equals "autoFit".

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(60, 50, 80));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());

const shape = Api.CreateShape(
	'rect',
	Api.MillimetersToEmus(100), Api.MillimetersToEmus(40),
	fill, stroke
);
shape.SetPosition(Api.MillimetersToEmus(50), Api.MillimetersToEmus(50));
shape.SetTextFit('autoFit');
slide.AddObject(shape);

const fitType = shape.GetTextFit();
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText('Current text fit: ' + fitType);
```
