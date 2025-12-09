# AnnotateParagraph

Adds annotations to the specified paragraph.

## Syntax

```javascript
expression.AnnotateParagraph(data);
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| data | Required | Object |  | Annotation data specifying what to annotate. |
| data.type | Required | string |  | The type of annotation operation (e.g., `"highlightText"`). |
| data.name | Optional | string |  | Optional name of the annotation. |
| data.paragraphId | Required | string |  | ID of the paragraph being annotated. |
| data.recalcId | Required | string |  | Paragraph recalculation ID. |
| data.ranges | Optional | [TextAnnotationRange](../Enumeration/TextAnnotationRange.md)[] |  | Array of text ranges to highlight (for highlightText type) |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod("AnnotateParagraph", [{
    type: "highlightText",
    name: "grammar",
    paragraphId: "p1",
    recalcId: "r12",
    ranges: [
        { start: 5, length: 10, id: "a1" }
    ]
}]);
```
