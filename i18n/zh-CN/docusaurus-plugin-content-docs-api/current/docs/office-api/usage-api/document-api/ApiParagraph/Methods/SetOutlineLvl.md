# SetOutlineLvl

设置指定属性的大纲级别。

继承自 [ApiParaPr.SetOutlineLvl](../../ApiParaPr/Methods/SetOutlineLvl.md)。

## 示例

为段落分配大纲级别以控制其在文档结构中的位置。

```javascript editor-docx
// How do I set the outline level of a paragraph in a document?

// Change a paragraph's heading depth so it appears correctly in the navigation panel.

const doc = Api.GetDocument();

const paragraph = doc.GetElement(0);
const paraPr = paragraph.GetParaPr();

const levelBefore = paraPr.GetOutlineLvl();
paraPr.SetOutlineLvl(8);
const levelAfter = paraPr.GetOutlineLvl();

let text =  'Outline level (index) for this paragraph is currently set to ' + levelAfter;
text += ',\nbut originally was set to ' + levelBefore;
paragraph.AddText(text);
```
