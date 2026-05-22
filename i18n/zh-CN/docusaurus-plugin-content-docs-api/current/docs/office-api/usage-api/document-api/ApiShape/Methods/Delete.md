# Delete

删除当前图形对象。

继承自 [ApiDrawing.Delete](../../ApiDrawing/Methods/Delete.md)。

## 示例

从文档中形状锚定的段落中删除形状。

```javascript editor-docx
// How do I delete a drawing object that has been inserted into a paragraph in a document?

// Clean up unwanted graphics by programmatically deleting a shape after it has been placed.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.Delete();
paragraph.AddLineBreak();
paragraph.AddText("In this paragraph, the Drawing object has been deleted.");
```
