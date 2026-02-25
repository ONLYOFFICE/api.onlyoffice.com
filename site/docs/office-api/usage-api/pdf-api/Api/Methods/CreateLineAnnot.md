# CreateLineAnnot

Creates line annotation.

## Syntax

```javascript
expression.CreateLineAnnot(rect, startPoint, endPoint);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | Required | [Rect](../../Enumeration/Rect.md) |  | annotation rect. |
| startPoint | Required | [Point](../../Enumeration/Point.md) |  | start line point |
| endPoint | Required | [Point](../../Enumeration/Point.md) |  | end line point |

## Returns

[ApiLineAnnotation](../../ApiLineAnnotation/ApiLineAnnotation.md)