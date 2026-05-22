# SetHighlight

指定添加到文本属性并作为背景应用于当前文本块/范围/段落内容的高亮颜色。

继承自 [ApiTextPr.SetHighlight](../../ApiTextPr/Methods/SetHighlight.md)。

## 示例

在文档中为文本应用背景高亮颜色。

```javascript editor-docx
// How do I mark text with a colored background in a document?

// Draw attention to specific words by painting a highlight behind them in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetHighlight("lightGray");
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text highlighted with light gray color using the text properties.");
```
