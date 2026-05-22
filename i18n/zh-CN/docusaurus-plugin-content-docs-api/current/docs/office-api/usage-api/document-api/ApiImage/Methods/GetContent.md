# GetContent

返回可以插入段落或文本块的绘图内部内容（如果存在）。

继承自 [ApiDrawing.GetContent](../../ApiDrawing/Methods/GetContent.md)。

## 示例

获取绘图对象的内部内容以在文档中向其内部添加文本。

```javascript editor-docx
// How do I access the editable content area inside a drawing shape in a document?

// Insert a paragraph with custom text directly into a shape's content container in a document.

const doc = Api.GetDocument();
let firstParagraph = doc.GetElement(0);

const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
const drawing = Api.CreateShape("rect", 100 * 36000, 20 * 36000, fill, stroke);
firstParagraph.AddDrawing(drawing);

const docContent = drawing.GetContent();

const shapeParagraph = Api.CreateParagraph();
shapeParagraph.AddText('This is the text added to the paragraph inside the drawing using the GetContent method.');
docContent.AddElement(0, shapeParagraph);
```
