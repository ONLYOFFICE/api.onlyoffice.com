# GetElementsCount

返回当前文档中的元素数量。

继承自 [ApiDocumentContent.GetElementsCount](../../ApiDocumentContent/Methods/GetElementsCount.md)。

## 示例

获取文档中当前文档内容的元素数量。

```javascript editor-docx
// How to get elements count and push it to the paragraph in a document.

// Count the number of elements in the document.

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
