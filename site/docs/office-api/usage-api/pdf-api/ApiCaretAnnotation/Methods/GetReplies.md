# GetReplies

Gets replies on this annot.

Inherited from [ApiBaseAnnotation.GetReplies](../../ApiBaseAnnotation/Methods/GetReplies.md).

## Syntax

```javascript
expression.GetReplies();
```

`expression` - A variable that represents an [ApiCaretAnnotation](../ApiCaretAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTextAnnotation](../../ApiTextAnnotation/ApiTextAnnotation.md)[]

## Example

Retrieve all reply annotations attached to an annotation in a PDF.

```javascript editor-pdf
// What reply annotations are associated with a parent annotation in a PDF?

// Access the list of reply comments linked to an annotation object in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetContents("Annot contents");
let page = doc.GetPage(0);
page.AddObject(squareAnnot);

let textAnnot = Api.CreateTextAnnot([10, 10, 20, 20]);
textAnnot.SetContents("Annot reply");
squareAnnot.AddReply(textAnnot);

let replies = squareAnnot.GetReplies();
replies.forEach((reply, idx) => {
	console.log(`Reply with idx ${idx}: "${reply.GetContents()}"`);
});
```
