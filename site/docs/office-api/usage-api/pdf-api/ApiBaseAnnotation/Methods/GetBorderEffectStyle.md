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

This example creates a square annotation and gets its border effect style.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);

let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border effect style is: ${squareAnnot.GetBorderEffectStyle()}`);

```
