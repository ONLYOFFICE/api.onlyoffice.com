# SetBold

为文本字符设置粗体属性。

继承自 [ApiTextPr.SetBold](../../ApiTextPr/Methods/SetBold.md)。

## 示例

在文档中为默认文本字符应用粗体格式。

```javascript editor-docx
// How do I make text appear heavier and bolder throughout a document?

// Change the weight of the default font so that all text renders with a bold appearance in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetBold(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font weight set to bold using the text properties.");
```
