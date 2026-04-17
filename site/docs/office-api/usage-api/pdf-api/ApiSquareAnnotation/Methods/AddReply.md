# AddReply

Adds reply on this annot.

Inherited from [ApiBaseAnnotation.AddReply](../../ApiBaseAnnotation/Methods/AddReply.md).

## Example

This example creates a square annotation and adds reply to it.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetContents("Annot contents");
let page = doc.GetPage(0);
page.AddObject(squareAnnot);

let textAnnot = Api.CreateTextAnnot([10, 10, 20, 20]);
textAnnot.SetContents("Annot reply");
squareAnnot.AddReply(textAnnot);
```

