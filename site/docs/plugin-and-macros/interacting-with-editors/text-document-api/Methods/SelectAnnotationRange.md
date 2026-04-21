# SelectAnnotationRange

Selects text in a document using a given annotation.

## Syntax

```javascript
expression.SelectAnnotationRange(annotation);
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| annotation | Required | [TextAnnotation](../Enumeration/TextAnnotation.md) |  | The annotation selection object. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod("SelectAnnotationRange", [{
    paragraphId: "p1",
    rangeId: "a1",
    name: "grammar"
}]);
```
