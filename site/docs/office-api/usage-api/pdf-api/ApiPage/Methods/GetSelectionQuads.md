# GetSelectionQuads

Gets page selection quads

## Syntax

```javascript
expression.GetSelectionQuads();
```

`expression` - A variable that represents a [ApiPage](../ApiPage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Quad](../../Enumeration/Quad.md)[]

## Example

This example gets the selection quads on the page and highlights it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetSelection({x: 10, y: 10}, {x: 100, y: 100});
let quads = page.GetSelectionQuads();
let annot = Api.CreateHighlightAnnot(quads);
page.AddObject(annot);
console.log('We highlight the selected text on the page');
```
