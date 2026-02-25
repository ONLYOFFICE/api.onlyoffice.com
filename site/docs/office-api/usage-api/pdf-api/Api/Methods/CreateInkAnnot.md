# CreateInkAnnot

Creates ink annotation.

## Syntax

```javascript
expression.CreateInkAnnot(rect, pathList);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | Required | [Rect](../../Enumeration/Rect.md) |  | annotation rect. |
| pathList | Required | [PathList](../../Enumeration/PathList.md) |  | ink path list |

## Returns

[ApiInkAnnotation](../../ApiInkAnnotation/ApiInkAnnotation.md)