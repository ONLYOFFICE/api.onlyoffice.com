# GetVertices

Gets ink path list.

## Syntax

```javascript
expression.GetVertices();
```

`expression` - A variable that represents a [ApiPolygonAnnotation](../ApiPolygonAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Path](../../Enumeration/Path.md)

## Example

This example gets vertices from polygon annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let vertices = [{x: 100, y: 10}, {x: 150, y: 100}, {x: 50, y: 100}];
let polygonAnnot = Api.CreatePolygonAnnot([40, 5, 160, 110], vertices);
polygonAnnot.SetBorderColor(Api.RGB(255, 0, 0));
let page = doc.GetPage(0);
page.AddObject(polygonAnnot);
console.log(`Polygon vertices are: ${JSON.stringify(polygonAnnot.GetVertices())}`);
```
