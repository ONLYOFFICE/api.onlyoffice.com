# GetRectDiff

Gets annotation rect difference.

## Syntax

```javascript
expression.GetRectDiff();
```

`expression` - A variable that represents a [ApiCircleAnnotation](../ApiCircleAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Rect](../../Enumeration/Rect.md)

## Example

Get rect diff of circle annotation in a PDF document.

```javascript editor-pdf
// How do I get the rect diff in a PDF document?

// Get the rect diff using a circle annotation object in a PDF document.

let doc = Api.GetDocument();
let circleAnnot = Api.CreateCircleAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(circleAnnot);
circleAnnot.SetBorderEffectStyle("cloud");
circleAnnot.SetBorderEffectIntensity(1);
console.log(`Annot rect diff is: ${circleAnnot.GetRectDiff()}`);
```
