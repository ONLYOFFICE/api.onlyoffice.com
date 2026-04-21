# GetBorderEffectStyle

Gets annotation border effect style.

## Syntax

```javascript
expression.GetBorderEffectStyle();
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[AnnotBorderEffectStyle](../../Enumeration/AnnotBorderEffectStyle.md)

## Example

Create a square annotation and get its border effect style in a PDF document.

```javascript editor-pdf
// How do I get the border effect style in a PDF document?

// Get the border effect style using an annotation object in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);

let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border effect style is: ${squareAnnot.GetBorderEffectStyle()}`);
```
