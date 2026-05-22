# GetCurrentParagraph

返回光标所在的当前段落。

继承自 [ApiDocumentContent.GetCurrentParagraph](../../ApiDocumentContent/Methods/GetCurrentParagraph.md)。

## 示例

从文档内容中检索当前光标位置的段落。

```javascript editor-docx
// How do I get the active paragraph inside a document content container in a document?

// Append text to whichever paragraph is focused without referencing it by index.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const rgb = Api.CreateRGBColor(100, 150, 200);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
paragraph.AddDrawing(drawing);

const docContent = drawing.GetDocContent();
docContent.RemoveAllElements();
const newParagraph = Api.CreateParagraph();
newParagraph.AddText("This is a new paragraph inside the shape.");
docContent.Push(newParagraph);

const currentParagraph = docContent.GetCurrentParagraph();
currentParagraph.AddText("(Current paragraph detected!)");
```
