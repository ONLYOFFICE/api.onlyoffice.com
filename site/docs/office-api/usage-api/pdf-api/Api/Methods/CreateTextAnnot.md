# CreateTextAnnot

Creates text annotation.

## Syntax

```javascript
expression.CreateTextAnnot(rect);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | Required | [Rect](../../Enumeration/Rect.md) |  | annotation rect. |

## Returns

[ApiTextAnnotation](../../ApiTextAnnotation/ApiTextAnnotation.md)

## Example

Add a text annotation to a page in a PDF.

```javascript editor-pdf
// How do I add a text annotation to a PDF?

// Create and insert a text annotation at specified coordinates in a PDF.

let doc = Api.GetDocument();
let textAnnot = Api.CreateTextAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(textAnnot);
```
