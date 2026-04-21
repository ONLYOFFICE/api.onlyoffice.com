# CreatePolygonAnnot

Creates polygon annotation.

## Syntax

```javascript
expression.CreatePolygonAnnot(rect, path);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | Required | [Rect](../../Enumeration/Rect.md) |  | annotation rect. |
| path | Required | [Path](../../Enumeration/Path.md) |  | polygon path |

## Returns

[ApiPolygonAnnotation](../../ApiPolygonAnnotation/ApiPolygonAnnotation.md)

## Example

Create a polygon annotation and add it to the page.

```javascript editor-pdf
// How do I create the polygon annot in a PDF document?

// Create the polygon annot and display the result in a PDF document.

let doc = Api.GetDocument();
let polygonAnnot = Api.CreatePolygonAnnot([40, 40, 200, 200], [{x: 100, y: 100}, {x: 150, y: 150}, {x: 100, y: 150}]);
let page = doc.GetPage(0);
page.AddObject(polygonAnnot);
```
