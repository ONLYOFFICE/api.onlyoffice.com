# CubicBezTo

Draws a cubic Bezier curve from the current point to the specified end point using two control points.

## Syntax

```javascript
expression.CubicBezTo(x1, y1, x2, y2, x3, y3);
```

`expression` - A variable that represents a [ApiPath](../ApiPath.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| x1 | Required | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | The X coordinate of the first control point. |
| y1 | Required | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | The Y coordinate of the first control point. |
| x2 | Required | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | The X coordinate of the second control point. |
| y2 | Required | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | The Y coordinate of the second control point. |
| x3 | Required | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | The X coordinate of the end point. |
| y3 | Required | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | The Y coordinate of the end point. |

## Returns

This method doesn't return any data.

## Example

Creates a complex curve using cubic bezier, quadratic bezier and arc commands.

```javascript editor-docx
// Demonstrates different types of curve drawing methods.
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
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(200, 100, 0)));
let shape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
shape.SetGeometry(customGeometry);
paragraph.AddDrawing(shape);
```
