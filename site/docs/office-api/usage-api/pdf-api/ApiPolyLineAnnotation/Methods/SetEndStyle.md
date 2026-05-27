# SetEndStyle

Sets a line end style.

## Syntax

```javascript
expression.SetEndStyle(style);
```

`expression` - A variable that represents a [ApiPolyLineAnnotation](../ApiPolyLineAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| style | Required | [LineEndStyle](../../Enumeration/LineEndStyle.md) |  | The style of the polyline end endpoint. |

## Returns

boolean

## Example

Change the line ending appearance of a polyline marking in a PDF.

```javascript editor-pdf
// How do I update the line ending style on a polyline marking in a PDF?

// Modify the appearance of the endpoint shown on a polyline marking in a PDF.

let doc = Api.GetDocument();
let vertices = [{x: 100, y: 10}, {x: 150, y: 100}, {x: 50, y: 100}];
let polylineAnnot = Api.CreatePolyLineAnnot([40, 5, 160, 110], vertices);
polylineAnnot.SetBorderColor(Api.RGB(255, 0, 0));
polylineAnnot.SetEndStyle("square");
let page = doc.GetPage(0);
page.AddObject(polylineAnnot);
console.log(`We set line end style to: ${polylineAnnot.GetEndStyle()}`);
```
