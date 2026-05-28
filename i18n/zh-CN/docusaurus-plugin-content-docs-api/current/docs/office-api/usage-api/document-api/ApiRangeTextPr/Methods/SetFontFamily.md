# SetFontFamily

使用指定的字体系列设置所有 4 个字体槽。

继承自 [ApiTextPr.SetFontFamily](../../ApiTextPr/Methods/SetFontFamily.md)。

## 示例

更改文档中应用于文本的字体系列。

```javascript editor-docx
// How do I apply a different typeface to text in a document?

// Switch all text to a specific font by updating the default text properties in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetFontFamily("Comic Sans MS");
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font family set to 'Comic Sans MS' using the text properties.");
```
