# SetShd

指定应用于当前文本块内容的底纹。

继承自 [ApiTextPr.SetShd](../../ApiTextPr/Methods/SetShd.md)。

## 示例

指定在文档中应用于当前文本 run 内容的底纹。

```javascript editor-docx
// How to set a shading for a text in a document.

// Create a text run object, specify its shading options in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetShd('clear', Api.HexColor('#ff6f3d'));
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the shading set to orange.");
```
