# InsertParagraph

在指定位置插入段落。

Inherited from [ApiDrawing.InsertParagraph](../../ApiDrawing/Methods/InsertParagraph.md).

## 示例

此示例在指定位置插入段落。

```javascript editor-docx
// How to insert the paragraph into the drawing.

// Create a rectangle and then add a paragraph to it.

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

