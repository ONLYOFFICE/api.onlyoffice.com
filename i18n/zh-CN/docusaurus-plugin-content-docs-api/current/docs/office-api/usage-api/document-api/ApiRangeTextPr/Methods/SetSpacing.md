# SetSpacing

设置以二十分之一磅为单位测量的文本间距。

继承自 [ApiTextPr.SetSpacing](../../ApiTextPr/Methods/SetSpacing.md)。

## 示例

设置文档中字符之间的间距。

```javascript editor-docx
// How do I increase or decrease the gap between letters in a document?

// Control how tightly or loosely characters are spaced along a line in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetSpacing(80);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the spacing set to 4 points (80 twentieths of a point).");
```
