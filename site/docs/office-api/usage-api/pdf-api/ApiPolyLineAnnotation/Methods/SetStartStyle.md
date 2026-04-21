# SetStartStyle

Sets a line start style.

## Syntax

```javascript
expression.SetStartStyle(style);
```

`expression` - A variable that represents a [ApiPolyLineAnnotation](../ApiPolyLineAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| style | Required | [LineEndStyle](../../Enumeration/LineEndStyle.md) |  | No description provided. |

## Returns

boolean

## Example

Set line start style to polyline annotation in a PDF document.

```javascript editor-pdf
// How do I set start style in a PDF document?

// Set start style using a polyline annotation object in a PDF document.

let doc = Api.GetDocument();
let vertices = [{x: 100, y: 10}, {x: 150, y: 100}, {x: 50, y: 100}];
let polylineAnnot = Api.CreatePolyLineAnnot([40, 5, 160, 110], vertices);
polylineAnnot.SetBorderColor(Api.RGB(255, 0, 0));
polylineAnnot.SetStartStyle("circle");
let page = doc.GetPage(0);
page.AddObject(polylineAnnot);
console.log(`We set line start style to: ${polylineAnnot.GetStartStyle()}`);
```
