# SetStrikeout

指定文本块的内容显示为中间有一条水平线穿过。

继承自 [ApiTextPr.SetStrikeout](../../ApiTextPr/Methods/SetStrikeout.md)。

## 示例

指定在文档中当前 run 的内容以通过行中心的单条水平线显示。

```javascript editor-docx
// How to strike out a text with one line in a document.

// Create a text run object, cross out it in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetStrikeout(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text struck out with a single line.");
```
