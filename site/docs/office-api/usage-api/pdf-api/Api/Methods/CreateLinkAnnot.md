# CreateLinkAnnot

Creates a link annotation.

## Syntax

```javascript
expression.CreateLinkAnnot(rect, action);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | Required | [Rect](../../Enumeration/Rect.md) |  | annotation rect. |
| action | Optional | [ApiBaseAction](../../ApiBaseAction/ApiBaseAction.md) |  | action executed when the link is clicked. |

## Returns

[ApiLinkAnnotation](../../ApiLinkAnnotation/ApiLinkAnnotation.md)
