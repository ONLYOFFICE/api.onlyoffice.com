# SetItalic

为文本字符设置斜体属性。

继承自 [ApiTextPr.SetItalic](../../ApiTextPr/Methods/SetItalic.md)。

## 示例

使文档中的文本以斜体样式显示。

```javascript editor-docx
// How do I format text to display in italics in a document?

// Emphasize words by switching the default text style to italicized letters in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetItalic(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font set to italicized letters using the text properties.");
```
