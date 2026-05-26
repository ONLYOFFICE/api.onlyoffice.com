# AddElement

使用在文档内容中的位置添加段落、表格或块级内容控件。

继承自 [ApiDocumentContent.AddElement](../../ApiDocumentContent/Methods/AddElement.md)。

## 示例

在文档中形状内的特定位置插入新段落。

```javascript editor-docx
// How do I add a paragraph to a content container in a document?

// Replace the default content of a shape by clearing it and placing a custom paragraph inside in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetDocContent();
docContent.RemoveAllElements();
paragraph = Api.CreateParagraph();
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
docContent.AddElement(0, paragraph);
```
