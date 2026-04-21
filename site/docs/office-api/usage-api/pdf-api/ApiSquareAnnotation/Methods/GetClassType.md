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

Check the class type returned by a square annotation in a PDF document.

```javascript editor-pdf
// How do I check what type a square annotation object is in a PDF document?

// Retrieve and output the class type string for a square annotation in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);
console.log(`Annot class type is: ${squareAnnot.GetClassType()}`);
```
