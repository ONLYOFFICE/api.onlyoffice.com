# AddBreak

在主文档的指定位置插入分隔符。

Inherited from [ApiDrawing.AddBreak](../../ApiDrawing/Methods/AddBreak.md).

## 示例

此示例在主文档的指定位置插入分隔符。

```javascript editor-docx
// How to add some space from the drawing.

// Insert a drawing and text into document and add a break to them.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.InsertParagraph("Added a line break after this paragraph.", "before", false);
drawing.AddBreak(1, "before");
```

