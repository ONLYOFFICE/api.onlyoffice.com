# SetFontSize

设置当前文本块字符的字体大小。

继承自 [ApiTextPr.SetFontSize](../../ApiTextPr/Methods/SetFontSize.md)。

## 示例

调整文档中应用于文本的字体大小。

```javascript editor-docx
// How do I make text larger or smaller in a document?

// Control how big characters appear by setting a custom font size in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetFontSize(30);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font size set to 15 points using the text properties.");
```
