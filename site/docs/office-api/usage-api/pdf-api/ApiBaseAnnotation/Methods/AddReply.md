# AddReply

Adds reply on this annot.

## Syntax

```javascript
expression.AddReply(textAnnot);
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textAnnot | Required | [ApiTextAnnotation](../../ApiTextAnnotation/ApiTextAnnotation.md) |  | No description provided. |

## Returns

boolean

## Example

Create a square annotation and add reply to it in a PDF document.

```javascript editor-pdf
// How to add the reply for an annotation in a PDF document?

// Add the reply and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetContents("Annot contents");
let page = doc.GetPage(0);
page.AddObject(squareAnnot);

let textAnnot = Api.CreateTextAnnot([10, 10, 20, 20]);
textAnnot.SetContents("Annot reply");
squareAnnot.AddReply(textAnnot);
```
