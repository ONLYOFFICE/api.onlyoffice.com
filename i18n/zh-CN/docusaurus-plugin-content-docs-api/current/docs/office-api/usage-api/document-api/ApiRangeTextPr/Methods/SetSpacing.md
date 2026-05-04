# SetSpacing

设置以二十分之一磅为单位测量的文本间距。

继承自 [ApiTextPr.SetSpacing](../../ApiTextPr/Methods/SetSpacing.md)。

## 示例

在文档中设置以磅的二十分之一为单位的文本间距。

```javascript editor-docx
// How to set the text spacing size in a document.

// Create a text run object, update its spacing in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetSpacing(80);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the spacing set to 4 points (80 twentieths of a point).");
```
