# GetSelection

Returns the selection from the current presentation.

## Syntax

```javascript
expression.GetSelection();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiSelection](../../ApiSelection/ApiSelection.md)

## Example

This example shows how to get current selection

```javascript editor-pptx playground
const presentation = Api.GetPresentation();

const rgb = Api.CreateRGBColor(50, 100, 150);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 200 * 36000, 10 * 36000, fill, stroke);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
shape.Select();

const selection = Api.GetSelection();
const content = shape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Type: ' + selection.GetType());

```
