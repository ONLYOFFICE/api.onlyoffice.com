# GetName

Returns the name of the current drawing.

Inherited from [ApiDrawing.GetName](../../ApiDrawing/Methods/GetName.md).

## Syntax

```javascript
expression.GetName();
```

`expression` - A variable that represents an [ApiSmartArt](../ApiSmartArt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the name of a shape in a PDF form.

```javascript editor-pdf
// Read the name assigned to a drawing to identify it among page objects.

// Create a shape, set its name, then read the name and display it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetName("MyShape");
const name = shape.GetName();
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Drawing name: " + name);
```
