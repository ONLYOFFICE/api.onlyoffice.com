# GetParentParagraph

返回包含图形对象的父段落。

继承自 [ApiDrawing.GetParentParagraph](../../ApiDrawing/Methods/GetParentParagraph.md)。

## 示例

获取文档中包含图形对象的父段落。

```javascript editor-docx
// Get an element's parent paragraph in a document.

// How to show the shape's wrapper paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let parentParagraph = drawing.GetParentParagraph();
parentParagraph.AddLineBreak();
parentParagraph.AddText("This is a parent paragraph");
```
