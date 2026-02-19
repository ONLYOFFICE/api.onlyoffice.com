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