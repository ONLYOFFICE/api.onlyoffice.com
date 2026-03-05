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
| point | Required | [Point](../../Enumeration/Point.md) |  | No description provided. |

## Returns

boolean

## Example

This example sets start point to line annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 12, y: 12}, {x: 155, y: 30});
lineAnnot.SetEndStyle("openArrow");
lineAnnot.SetStartPoint({x: 20, y: 20});
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`Start point set to: ${lineAnnot.GetEndPoint()}`);
```
