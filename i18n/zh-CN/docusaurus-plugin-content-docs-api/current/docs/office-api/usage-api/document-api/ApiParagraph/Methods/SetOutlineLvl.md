# SetOutlineLvl

设置指定属性的大纲级别。

继承自 [ApiParaPr.SetOutlineLvl](../../ApiParaPr/Methods/SetOutlineLvl.md)。

## 示例

通过文档中的段落属性获取指定段落的大纲级别。

```javascript editor-docx
// How to set outline lvl for a paragraph properties in a document?

// Set outline lvl and display the result in a document.

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
