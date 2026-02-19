# SetRectDiff

Sets annotation rect difference.

## Syntax

```javascript
expression.SetRectDiff(rectDiff);
```

`expression` - A variable that represents a [ApiFreeTextAnnotation](../ApiFreeTextAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rectDiff | Required | [RectDiff](../../Enumeration/RectDiff.md) |  | A set of four numbers that shall describe the numerical differences between two rectangles. |

## Returns

boolean

## Example

This example sets rect diff to freeText annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetRectDiff([10, 10, 10, 10]);
console.log(`Annot rect diff is: ${freeTextAnnot.GetRectDiff()}`);
```
