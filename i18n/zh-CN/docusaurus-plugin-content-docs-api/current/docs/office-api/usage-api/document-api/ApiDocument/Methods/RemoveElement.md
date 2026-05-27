# RemoveElement

使用指定的位置移除元素。

继承自 [ApiDocumentContent.RemoveElement](../../ApiDocumentContent/Methods/RemoveElement.md)。

## 示例

按位置从文档中形状的内容中删除特定段落。

```javascript editor-docx
// How do I remove one paragraph at a given index from a shape's content in a document?

// Prune a numbered list of paragraphs inside a shape by targeting the unwanted entry's position.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 1926590, fill, stroke);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetDocContent();
docContent.RemoveAllElements();
paragraph = docContent.GetElement(0);
paragraph.AddText("This is paragraph #1.");
for (let i = 1; i < 5; ++i) {
	paragraph = Api.CreateParagraph();
	paragraph.AddText("This is paragraph #" + (i + 1) + ".");
	docContent.Push(paragraph);
}
docContent.RemoveElement(2);
paragraph = Api.CreateParagraph();
paragraph.AddText("We removed paragraph #3, check that out above.");
docContent.Push(paragraph);
```
