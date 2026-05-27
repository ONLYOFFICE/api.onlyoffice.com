# SetShd

指定应用于当前文本块内容的底纹。

继承自 [ApiTextPr.SetShd](../../ApiTextPr/Methods/SetShd.md)。

## 示例

在文档中为文本背后应用底纹颜色。

```javascript editor-docx
// How do I fill the background of a word or phrase with a color in a document?

// Highlight content by coloring the area directly behind the characters in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetShd('clear', Api.HexColor('#ff6f3d'));
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the shading set to orange.");
```
