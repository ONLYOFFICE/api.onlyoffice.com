# SetVertices

Sets vertices to polyline annot.

## Syntax

```javascript
expression.SetVertices(path);
```

`expression` - A variable that represents a [ApiPolyLineAnnotation](../ApiPolyLineAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| path | Required | [Path](../../Enumeration/Path.md) |  | polyline path |

## Returns

boolean

## Example

This example sets vertices to polyline annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let vertices = [{x: 100, y: 10}, {x: 150, y: 100}, {x: 50, y: 100}];
let polylineAnnot = Api.CreatePolyLineAnnot([40, 5, 160, 110], vertices);
polylineAnnot.SetBorderColor(Api.RGB(255, 0, 0));
let newVertices = [{x: 100, y: 10}, {x: 150, y: 50}, {x: 50, y: 50}];
polylineAnnot.SetVertices(newVertices)
let page = doc.GetPage(0);
page.AddObject(polylineAnnot);
console.log(`We set vertices to polyline annotation`);
```
