# CreateCircleAnnot

Creates circle annotation.

## Syntax

```javascript
expression.CreateCircleAnnot(rect);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | Required | [Rect](../../Enumeration/Rect.md) |  | annotation rect. |

## Returns

[ApiCircleAnnotation](../../ApiCircleAnnotation/ApiCircleAnnotation.md)

## Example

Create a circle annotation and add it to the page.

```javascript editor-pdf
// How to create the circle annot in a PDF document?

// Create the circle annot using the PDF document API.

let doc = Api.GetDocument();
let circleAnnot = Api.CreateCircleAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(circleAnnot);
```
