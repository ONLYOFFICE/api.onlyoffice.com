# CreateNoFill

Creates no fill and removes the fill from the element.

## Syntax

```javascript
expression.CreateNoFill();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiFill](../../ApiFill/ApiFill.md)

## Example

This example creates no fill and removes the fill from the element.

```javascript editor-pdf
// How to remove background fill from the object.

// Create no fill and apply it to the element.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("The stroke of this shape is transparent.");
page.AddObject(shape);

```
