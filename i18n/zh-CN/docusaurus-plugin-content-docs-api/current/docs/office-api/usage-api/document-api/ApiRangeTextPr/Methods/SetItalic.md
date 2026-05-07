# SetItalic

为文本字符设置斜体属性。

继承自 [ApiTextPr.SetItalic](../../ApiTextPr/Methods/SetItalic.md)。

## 示例

在文档中为文本字符设置斜体属性。

```javascript editor-docx
// How to make a text italic in a document.

// Create a text run object, change its properties by making it italic in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetItalic(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font set to italicized letters using the text properties.");
```
