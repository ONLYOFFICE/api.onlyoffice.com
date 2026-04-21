# GetClassType

Returns a type of the ApiPolyLineAnnotation class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiPolyLineAnnotation](../ApiPolyLineAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"polyLineAnnot"

## Example

Retrieve the class type of a polyline annotation in a PDF document.

```javascript editor-pdf
// How to identify the class type of a polyline annotation in a PDF document?

// Obtain the class type identifier of a polyline annotation object in a PDF document.

let doc = Api.GetDocument();
let vertices = [{x: 100, y: 10}, {x: 150, y: 100}, {x: 50, y: 100}];
let polylineAnnot = Api.CreatePolyLineAnnot([40, 5, 160, 110], vertices);
polylineAnnot.SetBorderColor(Api.RGB(255, 0, 0));
let page = doc.GetPage(0);
page.AddObject(polylineAnnot);
console.log(`Annot class type is: ${polylineAnnot.GetClassType()}`);
```
