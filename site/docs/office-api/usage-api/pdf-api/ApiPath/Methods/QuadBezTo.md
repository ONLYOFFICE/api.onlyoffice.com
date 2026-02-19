# QuadBezTo

Draws a quadratic Bezier curve from the current point to the specified end point using a control point.

## Syntax

```javascript
expression.QuadBezTo(x1, y1, x2, y2);
```

`expression` - A variable that represents a [ApiPath](../ApiPath.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| x1 | Required | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | The X coordinate of the control point. |
| y1 | Required | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | The Y coordinate of the control point. |
| x2 | Required | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | The X coordinate of the end point. |
| y2 | Required | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | The Y coordinate of the end point. |

## Returns

This method doesn't return any data.