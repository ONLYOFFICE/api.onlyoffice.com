# CreateLineAnnot

Creates line annotation.

## Syntax

```javascript
expression.CreateLineAnnot(rect, startPoint, endPoint);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | Required | [Rect](../../Enumeration/Rect.md) |  | annotation rect. |
| startPoint | Required | [Point](../../Enumeration/Point.md) |  | start line point |
| endPoint | Required | [Point](../../Enumeration/Point.md) |  | end line point |

## Returns

[ApiLineAnnotation](../../ApiLineAnnotation/ApiLineAnnotation.md)

## Example

Create a line annotation and add it to the page.

```javascript editor-pdf
// Create the line annot in a PDF document.

// Create the line annot and display the result in a PDF document.

let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 11, y: 11}, {x: 155, y: 25});
lineAnnot.SetEndStyle("openArrow");
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
```
