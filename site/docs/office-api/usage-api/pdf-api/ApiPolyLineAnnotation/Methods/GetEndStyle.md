# GetEndStyle

Gets a line end style.

## Syntax

```javascript
expression.GetEndStyle();
```

`expression` - A variable that represents a [ApiPolyLineAnnotation](../ApiPolyLineAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[LineEndStyle](../../Enumeration/LineEndStyle.md)

## Example

This example gets line end style of polyline annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let vertices = [{x: 100, y: 10}, {x: 150, y: 100}, {x: 50, y: 100}];
let polylineAnnot = Api.CreatePolyLineAnnot([40, 5, 160, 110], vertices);
polylineAnnot.SetBorderColor(Api.RGB(255, 0, 0));
let page = doc.GetPage(0);
page.AddObject(polylineAnnot);
console.log(`Default line end style is: ${polylineAnnot.GetEndStyle()}`);
```
