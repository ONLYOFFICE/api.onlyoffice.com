# GetQuads

Gets quads from current markup annotation.

## Syntax

```javascript
expression.GetQuads();
```

`expression` - A variable that represents a [ApiUnderlineAnnotation](../ApiUnderlineAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Quad](../../Enumeration/Quad.md)[]

## Example

This example gets quads of markup annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let markupAnnot = Api.CreateHighlightAnnot([84, 55, 231, 72]);
let page = doc.GetPage(0);
page.AddObject(markupAnnot);
console.log(`The markup quads is: ${markupAnnot.GetQuads()}`);
```
