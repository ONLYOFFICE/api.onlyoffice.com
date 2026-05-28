# SetOpacity

Sets annotation opacity.

## Syntax

```javascript
expression.SetOpacity(value);
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | Required | [percentage](../../Enumeration/percentage.md) |  | The opacity value from 0 (transparent) to 100 (opaque). |

## Returns

boolean

## Example

Make an annotation transparent or opaque in a PDF.

```javascript editor-pdf
// Adjust the transparency level of an annotation in a PDF.

// Control how solid or see-through an annotation appears in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetFillColor(Api.RGB(255, 0, 0));
squareAnnot.SetOpacity(50);
```
