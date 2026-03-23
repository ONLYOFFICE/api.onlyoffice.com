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

This example gets class type of square annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);
console.log(`Annot class type is: ${squareAnnot.GetClassType()}`);
```
