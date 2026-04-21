# Push

推送段落或表格以将其实际添加到文档中。

继承自 [ApiDocumentContent.Push](../../ApiDocumentContent/Methods/Push.md)。

## 示例

在文档中移除形状的所有内容并在其中添加新段落。

```javascript editor-docx
// Insert an element to the document.

// Push the paragraph to the content of the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetDocContent();
docContent.RemoveAllElements();
paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
docContent.Push(paragraph);
```
