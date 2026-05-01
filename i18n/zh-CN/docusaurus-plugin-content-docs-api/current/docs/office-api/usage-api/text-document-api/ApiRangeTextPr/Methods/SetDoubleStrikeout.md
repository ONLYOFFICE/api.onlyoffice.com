# SetDoubleStrikeout

指定文本块的内容显示为每个字符都有两条水平线穿过。

继承自 [ApiTextPr.SetDoubleStrikeout](../../ApiTextPr/Methods/SetDoubleStrikeout.md)。

## 示例

指定在文档中 run 的内容以每个字符上显示两条水平线的方式显示。

```javascript editor-docx
// How to strikethrough a text with two lines in a document.

// Create a text run object, double cross out it in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetDoubleStrikeout(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text struck out with two lines using the text properties.");
```
