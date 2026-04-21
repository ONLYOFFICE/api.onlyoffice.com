# SetPosition

Sets annotation position.

## Syntax

```javascript
expression.SetPosition(position);
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| position | Required | [Point](../../Enumeration/Point.md) |  | No description provided. |

## Returns

boolean

## Example

Create a square annotation and set new position in a PDF document.

```javascript editor-pdf
// How to set position for an annotation in a PDF document?

// Set position and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetPosition({x: 30, y: 30});
```
