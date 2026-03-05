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

This example gets class type of circle annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let circleAnnot = Api.CreateCircleAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(circleAnnot);
circleAnnot.SetBorderEffectStyle("cloud");
circleAnnot.SetBorderEffectIntensity(1);
console.log(`Annot class type is: ${circleAnnot.GetClassType()}`);
```
