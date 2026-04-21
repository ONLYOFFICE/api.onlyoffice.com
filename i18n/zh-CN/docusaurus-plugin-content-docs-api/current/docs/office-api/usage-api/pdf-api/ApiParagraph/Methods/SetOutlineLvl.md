# SetOutlineLvl

设置指定属性的大纲级别。

继承自 [ApiParaPr.SetOutlineLvl](../../ApiParaPr/Methods/SetOutlineLvl.md)。

## 示例

在 PDF 文档中通过段落属性设置指定段落的大纲级别。

```javascript editor-pdf
// How can I set outline lvl using a paragraph properties in a PDF document?

// Set outline lvl for a paragraph properties in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const rgb = Api.CreateRGBColor(50, 100, 150);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 200 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(10 * 36000, 10 * 36000);
page.AddObject(shape);

const outlineLvlIndex = 8;

const content = shape.GetContent();
const paragraph = content.GetElement(0);
const paraPr = paragraph.GetParaPr();
paraPr.SetOutlineLvl(outlineLvlIndex);
paragraph.AddText("This is a paragraph with outline level parameter set to " + (outlineLvlIndex + 1));
```
