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

Get all annots from page.

```javascript editor-pdf
// How do I get all annots in a PDF document?

// Get all annots using a page object.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);

let annots = page.GetAllAnnots();
annots[0].SetPosition({x: 30, y: 30});
```
