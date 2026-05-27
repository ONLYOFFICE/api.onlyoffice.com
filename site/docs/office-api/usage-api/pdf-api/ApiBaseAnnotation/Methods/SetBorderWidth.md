# SetBorderWidth

Sets annotation border width.

## Syntax

```javascript
expression.SetBorderWidth(width);
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | Required | [pt](../../Enumeration/pt.md) |  | The border width in points. |

## Returns

boolean

## Example

Change the thickness of an annotation's border in a PDF.

```javascript editor-pdf
// How thick should an annotation border be in a PDF?

// Set the width of the border outline on an annotation object in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderWidth(2);
```
