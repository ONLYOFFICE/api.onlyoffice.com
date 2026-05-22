# SetCaps

指定文本块中的任何小写字符仅格式化显示为其对应的大写字母。

继承自 [ApiTextPr.SetCaps](../../ApiTextPr/Methods/SetCaps.md)。

## 示例

在文档中将所有小写字母显示为大写而不更改底层文本。

```javascript editor-docx
// How do I make text appear in all capital letters without retyping it in a document?

// Apply a visual-only capitals effect to the default text so readers see uppercase letters in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetCaps(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text set to capital letters using the text properties.");
```
