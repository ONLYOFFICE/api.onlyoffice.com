# GetOutlineLvl

返回指定属性的大纲级别。

继承自 [ApiParaPr.GetOutlineLvl](../../ApiParaPr/Methods/GetOutlineLvl.md)。

## 示例

确定 PDF 中段落的大纲层次级别。

```javascript editor-pdf
// How do I check the outline level for document structure in a PDF?

// Get the nesting level used in document outline in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const rgb = Api.CreateRGBColor(50, 100, 150);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 200 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(10 * 36000, 10 * 36000);
page.AddObject(shape);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
const paraPr = paragraph.GetParaPr();

const levelBefore = paraPr.GetOutlineLvl();
paraPr.SetOutlineLvl(8);
const levelAfter = paraPr.GetOutlineLvl();

let text =  'Outline level (index) for this paragraph is currently set to ' + levelAfter;
text += ',\n';
text += 'but originally was set to ' + levelBefore;
paragraph.AddText(text);
```
