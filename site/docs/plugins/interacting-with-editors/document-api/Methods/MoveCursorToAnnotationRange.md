# MoveCursorToAnnotationRange

Moves the cursor to the beginning or end of the specified annotation range without selecting it.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.MoveCursorToAnnotationRange(annotation, isBegin);
```

`expression` - A variable that represents a [Api](../document-api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| annotation | Required | [TextAnnotation](../Enumeration/TextAnnotation.md) |  | The annotation object. |
| isBegin | Optional | boolean | true | If true, moves to the beginning of the range; otherwise to the end. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod("MoveCursorToAnnotationRange", [{
    paragraphId: "p1",
    rangeId: "a1",
    name: "grammar"
}, true]);
```
