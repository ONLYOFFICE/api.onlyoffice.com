# GetIntent

Gets intent type of this annotation.

## Syntax

```javascript
expression.GetIntent();
```

`expression` - A variable that represents a [ApiFreeTextAnnotation](../ApiFreeTextAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[FreeTextIntent](../../Enumeration/FreeTextIntent.md)

## Example

This example gets intent of freeText annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetRectDiff([1, 1, 1, 1]);
console.log(`Annot intent is: ${freeTextAnnot.GetIntent()}`);
```
