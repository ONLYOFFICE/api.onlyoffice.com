# ArcTo

Draws an arc from the current point using the specified width and height radii, start angle, and sweep angle.

## Syntax

```javascript
expression.ArcTo(wR, hR, stAng, swAng);
```

`expression` - A variable that represents a [ApiPath](../ApiPath.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| wR | Required | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | The width radius. |
| hR | Required | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | The height radius. |
| stAng | Required | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | The start angle. |
| swAng | Required | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | The sweep angle. |

## Returns

This method doesn't return any data.

## Example

Draw an arc segment along a custom shape path to create curved geometry in a document.

```javascript editor-docx
// How do I add a curved arc portion to a shape's outline path in a document?

// Extend a shape's boundary with a smooth elliptical arc connecting two points in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let customGeometry = Api.CreateCustomGeometry();
let path = customGeometry.AddPath();
path.SetWidth(100 * 36000);
path.SetHeight(100 * 36000);
path.MoveTo(0, 50 * 36000);
path.CubicBezTo(0, 0, 50 * 36000, 0, 50 * 36000, 50 * 36000);
path.QuadBezTo(100 * 36000, 50 * 36000, 100 * 36000, 100 * 36000);
path.ArcTo(50 * 36000, 50 * 36000, 0, 10800000);
path.Close();
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
shape.SetGeometry(customGeometry);
paragraph.AddDrawing(shape);
```
