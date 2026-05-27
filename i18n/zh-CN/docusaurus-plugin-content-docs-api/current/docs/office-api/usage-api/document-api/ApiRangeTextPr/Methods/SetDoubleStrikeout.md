# SetDoubleStrikeout

指定文本块的内容显示为每个字符都有两条水平线穿过。

继承自 [ApiTextPr.SetDoubleStrikeout](../../ApiTextPr/Methods/SetDoubleStrikeout.md)。

## 示例

在文档中为默认文本字符绘制双删除线。

```javascript editor-docx
// How do I cross out text with a double strikethrough in a document?

// Mark the default font with a double strikeout to visually indicate deleted or superseded content in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetDoubleStrikeout(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text struck out with two lines using the text properties.");
```
