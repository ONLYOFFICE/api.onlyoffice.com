# GetClassType

Returns a type of the ApiCircleAnnotation class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiCircleAnnotation](../ApiCircleAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"circleAnnot"

## Example

Get the class type of a circle annotation in a PDF.

```javascript editor-pdf
// How do I find out what class type a circle annotation is in a PDF?

// Identify a circle annotation object by its class type identifier in a PDF.

let doc = Api.GetDocument();
let circleAnnot = Api.CreateCircleAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(circleAnnot);
circleAnnot.SetBorderEffectStyle("cloud");
circleAnnot.SetBorderEffectIntensity(1);
console.log(`Annot class type is: ${circleAnnot.GetClassType()}`);
```
