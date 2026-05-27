# InsertParagraph

Inserts a paragraph at the specified position.

## Syntax

```javascript
expression.InsertParagraph(paragraph, sPosition, beRNewPara);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| paragraph | Required | string \| [ApiParagraph](../../ApiParagraph/ApiParagraph.md) |  | Text or paragraph. |
| sPosition | Required | string |  | The position where the text or paragraph will be inserted ("before" or "after" the drawing specified). |
| beRNewPara | Required | boolean |  | Defines if this method returns a new paragraph (true) or the current ApiDrawing (false). |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| [ApiDrawing](../../ApiDrawing/ApiDrawing.md)

## Example

Insert a paragraph into the content area of a drawing in a document.

```javascript editor-docx
// How do I add text inside a shape in a document?

// Place a labeled paragraph inside a rectangle to annotate the shape in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This graphic object with paragraph.");
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph.");
drawing.InsertParagraph(paragraph);
```
