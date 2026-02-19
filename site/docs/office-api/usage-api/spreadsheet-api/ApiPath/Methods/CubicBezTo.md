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

Creates a complex curve shape using different bezier and arc commands.

```javascript editor-xlsx
// Combines multiple curve types in a single path.
let worksheet = Api.GetActiveSheet();
let customGeometry = Api.CreateCustomGeometry();
let path = customGeometry.AddPath();
path.SetWidth(80 * 36000);
path.SetHeight(80 * 36000);
path.MoveTo(0, 40 * 36000);
path.CubicBezTo(0, 0, 40 * 36000, 0, 40 * 36000, 40 * 36000);
path.QuadBezTo(80 * 36000, 40 * 36000, 80 * 36000, 80 * 36000);
path.ArcTo(40 * 36000, 40 * 36000, 0, 10800000);
path.Close();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
let stroke = Api.CreateStroke(18000, Api.CreateSolidFill(Api.CreateRGBColor(50, 75, 100)));
let shape = worksheet.AddShape("rect", 80 * 36000, 80 * 36000, fill, stroke, 3, 0, 3, 0);
shape.SetGeometry(customGeometry);
```
