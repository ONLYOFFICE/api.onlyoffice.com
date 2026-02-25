# CreateRedactAnnot

Creates redact annotation.

## Syntax

```javascript
expression.CreateRedactAnnot(rect);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | Required | [Rect](../../Enumeration/Rect.md) \| [Quad](../../Enumeration/Quad.md)[] |  | region to apply redact. |

## Returns

[ApiRedactAnnotation](../../ApiRedactAnnotation/ApiRedactAnnotation.md)