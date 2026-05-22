# GetClassType

Returns a type of the ApiSquareAnnotation class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiSquareAnnotation](../ApiSquareAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"squareAnnot"

## Example

Identify what type of annotation a square box is in a PDF.

```javascript editor-pdf
// How do I determine the annotation category of a square box in a PDF?

// Learn the specific kind of square annotation used in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);
console.log(`Annot class type is: ${squareAnnot.GetClassType()}`);
```
