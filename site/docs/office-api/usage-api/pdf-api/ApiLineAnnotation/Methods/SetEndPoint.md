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
| point | Required | [Point](../../Enumeration/Point.md) |  | No description provided. |

## Returns

boolean

## Example

This example sets end point to line annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 12, y: 12}, {x: 155, y: 30});
lineAnnot.SetEndStyle("openArrow");
lineAnnot.SetEndPoint({x: 145, y: 20});
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`End point set to: ${lineAnnot.GetEndPoint()}`);
```
