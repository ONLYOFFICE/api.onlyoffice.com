# SetRectDiff

Sets annotation rect difference.

## Syntax

```javascript
expression.SetRectDiff(rectDiff);
```

`expression` - A variable that represents a [ApiCircleAnnotation](../ApiCircleAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rectDiff | Required | [RectDiff](../../Enumeration/RectDiff.md) |  | A set of four numbers that shall describe the numerical differences between two rectangles. |

## Returns

boolean

## Example

This example sets rect diff to circle annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let circleAnnot = Api.CreateCircleAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(circleAnnot);
circleAnnot.SetBorderEffectStyle("cloud");
circleAnnot.SetBorderEffectIntensity(1);
circleAnnot.SetRectDiff([10, 10, 10, 10]);
console.log(`Annot rect diff is: ${circleAnnot.GetRectDiff()}`);
```
