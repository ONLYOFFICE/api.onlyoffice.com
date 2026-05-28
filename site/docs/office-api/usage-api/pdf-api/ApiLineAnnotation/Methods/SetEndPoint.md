# SetEndPoint

Sets a line end point.

## Syntax

```javascript
expression.SetEndPoint(point);
```

`expression` - A variable that represents a [ApiLineAnnotation](../ApiLineAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| point | Required | [Point](../../Enumeration/Point.md) |  | The end point of the line. |

## Returns

boolean

## Example

Change where a line annotation ends in a PDF.

```javascript editor-pdf
// How do I move the endpoint of a line in a PDF?

// Update the ending position of a line annotation in a PDF.

let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 12, y: 12}, {x: 155, y: 30});
lineAnnot.SetEndStyle("openArrow");
lineAnnot.SetEndPoint({x: 145, y: 20});
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`End point set to: ${lineAnnot.GetEndPoint()}`);
```
