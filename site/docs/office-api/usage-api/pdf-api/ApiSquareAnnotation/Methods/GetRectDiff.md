# GetRectDiff

Gets annotation rect difference.

## Syntax

```javascript
expression.GetRectDiff();
```

`expression` - A variable that represents a [ApiSquareAnnotation](../ApiSquareAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Rect](../../Enumeration/Rect.md)

## Example

This example gets rect diff of square annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);
console.log(`Annot rect diff is: ${squareAnnot.GetRectDiff()}`);
```
