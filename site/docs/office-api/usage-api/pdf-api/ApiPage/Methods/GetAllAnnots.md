# GetAllAnnots

Gets all annots on page

## Syntax

```javascript
expression.GetAllAnnots();
```

`expression` - A variable that represents a [ApiPage](../ApiPage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiBaseAnnotation](../../ApiBaseAnnotation/ApiBaseAnnotation.md)[]

## Example

Retrieve all marked comments and notes from a page in a PDF.

```javascript editor-pdf
// How do I access all the annotations in a PDF?

// List every comment attached to the current page in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);

let annots = page.GetAllAnnots();
annots[0].SetPosition({x: 30, y: 30});
```
