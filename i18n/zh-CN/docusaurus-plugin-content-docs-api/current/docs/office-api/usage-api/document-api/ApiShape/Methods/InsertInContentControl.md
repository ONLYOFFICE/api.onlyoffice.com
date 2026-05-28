# InsertInContentControl

用富文本内容控件包装图形对象。

继承自 [ApiDrawing.InsertInContentControl](../../ApiDrawing/Methods/InsertInContentControl.md)。

## 示例

在文档中将绘图包裹在富文本内容控件内。

```javascript editor-docx
// How do I place a shape inside a content control in a document?

// Protect or label a drawing by enclosing it in a content control container in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This graphic object was wrapped in content control");
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.InsertInContentControl(1);
```
