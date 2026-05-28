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
| position | Required | [Point](../../Enumeration/Point.md) |  | The new position of the annotation. |

## Returns

boolean

## Example

Move an annotation to a new location on the page in a PDF.

```javascript editor-pdf
// Reposition an annotation by changing its coordinates in a PDF.

// Update where an annotation appears in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetPosition({x: 30, y: 30});
```
