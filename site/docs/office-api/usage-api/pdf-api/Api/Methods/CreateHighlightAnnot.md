# CreateHighlightAnnot

Creates highlight annotation.

## Syntax

```javascript
expression.CreateHighlightAnnot(rect);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | Required | [Rect](../../Enumeration/Rect.md) \| [Quad](../../Enumeration/Quad.md)[] |  | region to apply highlight. |

## Returns

[ApiHighlightAnnotation](../../ApiHighlightAnnotation/ApiHighlightAnnotation.md)

## Example

This example creates a highlight annotation and adds it to the page.

```javascript editor-pdf
let doc = Api.GetDocument();
let highlightAnnot = Api.CreateHighlightAnnot([[85.04985826771654,56.70000000000001,229.27237795275593,56.70000000000001,85.04985826771654,70.9988031496063,229.27237795275593,70.9988031496063]]);
let page = doc.GetPage(0);
page.AddObject(highlightAnnot);

```
