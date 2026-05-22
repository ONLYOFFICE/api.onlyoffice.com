# SetUnderline

指定文本块的内容显示时在字符正下方有一条线
（小于行中字符上下的所有间距）。

继承自 [ApiTextPr.SetUnderline](../../ApiTextPr/Methods/SetUnderline.md)。

## 示例

在文档中为所有默认文本添加单下划线。

```javascript editor-docx
// How do I add an underline beneath the default paragraph text in a document?

// Emphasize body text by switching on the underline formatting option in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetUnderline(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text underlined with a single line.");
```
