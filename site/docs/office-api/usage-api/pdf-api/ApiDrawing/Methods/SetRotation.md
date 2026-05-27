# SetRotation

Sets the rotation angle to the current drawing object.

## Syntax

```javascript
expression.SetRotation(rotAngle);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rotAngle | Required | number |  | New drawing rotation angle. |

## Returns

boolean

## Example

Rotate a drawing object to a specific angle in a PDF.

```javascript editor-pdf
// How do I spin a shape to face a different direction in a PDF?

// Change the rotation of a drawing element in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 65 * 36000, 10 * 36000, fill, stroke);
shape.SetPosition(100000, 2500000);
shape.SetRotation(90);

const rotAngle = shape.GetRotation();
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Drawing rotation angle is set to: " + rotAngle + " degrees");
page.AddObject(shape);
```
