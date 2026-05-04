# SetBold

为文本字符设置粗体属性。

继承自 [ApiTextPr.SetBold](../../ApiTextPr/Methods/SetBold.md)。

## 示例

在文档中为文本字符设置粗体属性。

```javascript editor-docx
// How to make a text bold in a document.

// Get a font object of characters and make it bold in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetBold(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font weight set to bold using the text properties.");
```
