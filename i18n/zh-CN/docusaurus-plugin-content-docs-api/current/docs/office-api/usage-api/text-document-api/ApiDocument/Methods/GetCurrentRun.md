# GetCurrentRun

返回光标所在的当前文本域。

继承自 [ApiDocumentContent.GetCurrentRun](../../ApiDocumentContent/Methods/GetCurrentRun.md)。

## 示例

从文档中的文档内容获取当前文本块。

```javascript editor-docx
// How to get current run for a document content?

// Get current run and display the result in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const rgb = Api.CreateRGBColor(100, 150, 200);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
paragraph.AddDrawing(drawing);

const docContent = drawing.GetDocContent();
const currentParagraph = docContent.GetCurrentParagraph();

const newRun = Api.CreateRun();
newRun.AddText("<NEW_RUN />");
currentParagraph.AddElement(newRun);

const currentRun = docContent.GetCurrentRun();
currentRun.AddText("<CURRENT_RUN />");
```
