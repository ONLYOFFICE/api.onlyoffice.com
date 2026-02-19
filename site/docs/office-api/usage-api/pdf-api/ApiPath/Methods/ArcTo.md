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