# GetClassType

Returns a type of the ApiPolygonAnnotation class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiPolygonAnnotation](../ApiPolygonAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"polygonAnnot"

## Example

Retrieve the class type of a polygon annotation in a PDF.

```javascript editor-pdf
// How can I identify the annotation type in a PDF?

// Find the class type identifier for a polygon annotation in a PDF.

let doc = Api.GetDocument();
let vertices = [{x: 100, y: 10}, {x: 150, y: 100}, {x: 50, y: 100}];
let polygonAnnot = Api.CreatePolygonAnnot([40, 5, 160, 110], vertices);
polygonAnnot.SetBorderColor(Api.RGB(255, 0, 0));
let page = doc.GetPage(0);
page.AddObject(polygonAnnot);
console.log(`Annot class type is: ${polygonAnnot.GetClassType()}`);
```
