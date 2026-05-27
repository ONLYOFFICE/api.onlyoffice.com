# RemoveAnnotationRange

Remove a specific annotation range from the document.

## Syntax

```javascript
expression.RemoveAnnotationRange(annotation);
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| annotation | Required | [TextAnnotation](../Enumeration/TextAnnotation.md) |  | The annotation removing object. |
| annotation.all | Optional | boolean | false | Optional parameter, flag to remove all annotations for the current paragraph. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod("RemoveAnnotationRange", [{
    paragraphId: "p1",
    rangeId: "a1",
    name: "grammar"
}]);
```
