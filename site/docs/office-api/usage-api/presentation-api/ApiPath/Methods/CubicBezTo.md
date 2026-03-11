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

Creates a complex curved shape using various bezier and arc commands.

```javascript editor-pptx
// Demonstrates different curve types in a single path on a slide.
let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let customGeometry = Api.CreateCustomGeometry();
let path = customGeometry.AddPath();
path.SetWidth(120 * 36000);
path.SetHeight(120 * 36000);
path.MoveTo(0, 60 * 36000);
path.CubicBezTo(0, 0, 60 * 36000, 0, 60 * 36000, 60 * 36000);
path.QuadBezTo(120 * 36000, 60 * 36000, 120 * 36000, 120 * 36000);
path.ArcTo(60 * 36000, 60 * 36000, 0, 10800000);
path.Close();
let fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = Api.CreateShape("rect", 120 * 36000, 120 * 36000, fill, stroke);
shape.SetGeometry(customGeometry);
shape.SetPosition(2000000, 1000000);
slide.AddObject(shape);
```
