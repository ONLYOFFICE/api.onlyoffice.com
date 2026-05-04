# InsertInContentControl

用富文本内容控件包装图形对象。

继承自 [ApiDrawing.InsertInContentControl](../../ApiDrawing/Methods/InsertInContentControl.md)。

## 示例

在文档中用富文本内容控件包裹图形对象。

```javascript editor-docx
// How to add the drawing to the paragraph in a document.

// Create a rectangle and then insert it to the another content control in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This graphic object was wrapped in content control");
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.InsertInContentControl(1);
```
