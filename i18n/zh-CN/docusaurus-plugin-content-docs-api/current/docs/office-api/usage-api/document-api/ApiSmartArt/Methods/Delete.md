# Delete

删除当前图形对象。

继承自 [ApiDrawing.Delete](../../ApiDrawing/Methods/Delete.md)。

## 示例

删除文档中的当前图形对象。

```javascript editor-docx
// How to delete a shape from the document.

// Remove the drawing object in a document.

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
