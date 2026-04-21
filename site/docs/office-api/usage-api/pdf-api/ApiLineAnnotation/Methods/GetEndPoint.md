# GetEndPoint

Gets a line end point.

## Syntax

```javascript
expression.GetEndPoint();
```

`expression` - A variable that represents a [ApiLineAnnotation](../ApiLineAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Point](../../Enumeration/Point.md)

## Example

Get end point of line annotation in a PDF document.

```javascript editor-pdf
// How do I get the end point in a PDF document?

// Get the end point using a line annotation object in a PDF document.

let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 12, y: 12}, {x: 155, y: 30});
lineAnnot.SetEndStyle("openArrow");
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
let endPoint = lineAnnot.GetEndPoint();
console.log(`End point is: x: ${endPoint.x}, y: ${endPoint.y}`);
```
