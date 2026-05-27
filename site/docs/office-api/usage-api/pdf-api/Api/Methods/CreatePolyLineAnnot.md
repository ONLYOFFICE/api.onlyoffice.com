# CreatePolyLineAnnot

Creates polyline annotation.

## Syntax

```javascript
expression.CreatePolyLineAnnot(rect, path);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | Required | [Rect](../../Enumeration/Rect.md) |  | annotation rect. |
| path | Required | [Path](../../Enumeration/Path.md) |  | polyline path |

## Returns

[ApiPolyLineAnnotation](../../ApiPolyLineAnnotation/ApiPolyLineAnnotation.md)

## Example

Add a polyline annotation to a PDF page.

```javascript editor-pdf
// How do I draw a connected line with multiple points in a PDF?

// Create an annotation with a series of connected line segments in a PDF.

let doc = Api.GetDocument();
let polylineAnnot = Api.CreatePolyLineAnnot([40, 40, 200, 200], [{x: 100, y: 100}, {x: 150, y: 150}, {x: 100, y: 150}]);
let page = doc.GetPage(0);
page.AddObject(polylineAnnot);
```
