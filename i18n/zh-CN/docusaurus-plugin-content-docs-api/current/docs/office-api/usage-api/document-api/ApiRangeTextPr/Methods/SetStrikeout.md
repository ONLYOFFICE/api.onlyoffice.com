# SetStrikeout

指定文本块的内容显示为中间有一条水平线穿过。

继承自 [ApiTextPr.SetStrikeout](../../ApiTextPr/Methods/SetStrikeout.md)。

## 示例

在文档中为文本应用删除线。

```javascript editor-docx
// How do I draw a horizontal line through the middle of text in a document?

// Mark text as deleted or deprecated by crossing it out in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetStrikeout(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text struck out with a single line.");
```
