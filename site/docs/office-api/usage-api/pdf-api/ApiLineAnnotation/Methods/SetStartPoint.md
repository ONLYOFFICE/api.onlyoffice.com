# SetStartPoint

Sets a line start point.

## Syntax

```javascript
expression.SetStartPoint(point);
```

`expression` - A variable that represents a [ApiLineAnnotation](../ApiLineAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| point | Required | [Point](../../Enumeration/Point.md) |  | The start point of the line. |

## Returns

boolean

## Example

Reposition where a line annotation begins in a PDF.

```javascript editor-pdf
// How do I move the starting position of a line in a PDF?

// Update the coordinates for the line's starting location in a PDF.

let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 12, y: 12}, {x: 155, y: 30});
lineAnnot.SetEndStyle("openArrow");
lineAnnot.SetStartPoint({x: 20, y: 20});
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`Start point set to: ${lineAnnot.GetStartPoint()}`);
```
