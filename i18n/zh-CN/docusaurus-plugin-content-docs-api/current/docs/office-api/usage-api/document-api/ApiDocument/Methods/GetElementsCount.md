# GetElementsCount

返回当前文档中的元素数量。

继承自 [ApiDocumentContent.GetElementsCount](../../ApiDocumentContent/Methods/GetElementsCount.md)。

## 示例

计算文档中文档内容容器内的所有元素数量。

```javascript editor-docx
// How do I get the total number of elements in a document content in a document?

// Check how many elements a shape holds after modifying its content programmatically.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetDocContent();
docContent.RemoveAllElements();
paragraph = docContent.GetElement(0);
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
paragraph = Api.CreateParagraph();
paragraph.AddText("Number of elements inside the shape: " + docContent.GetElementsCount());
doc.Push(paragraph);
```
