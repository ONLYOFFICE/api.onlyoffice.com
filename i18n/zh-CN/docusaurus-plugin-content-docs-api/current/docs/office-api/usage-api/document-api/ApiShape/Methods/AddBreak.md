# AddBreak

在主文档的指定位置插入分隔符。

继承自 [ApiDrawing.AddBreak](../../ApiDrawing/Methods/AddBreak.md)。

## 示例

在文档中绘图之前插入分页符或换行符。

```javascript editor-docx
// How do I place a break at a specific position relative to a drawing in a document?

// Force content to start on a new page by adding a break before an existing shape.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.InsertParagraph("Added a line break after this paragraph.", "before", false);
drawing.AddBreak(1, "before");
```
