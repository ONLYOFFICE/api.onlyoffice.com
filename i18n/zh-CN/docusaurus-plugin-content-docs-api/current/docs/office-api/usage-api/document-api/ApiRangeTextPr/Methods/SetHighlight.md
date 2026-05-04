# SetHighlight

指定添加到文本属性并作为背景应用于当前文本块/范围/段落内容的高亮颜色。

继承自 [ApiTextPr.SetHighlight](../../ApiTextPr/Methods/SetHighlight.md)。

## 示例

指定在文档中添加到文本属性并作为背景应用于当前 run/范围/段落内容的突出显示颜色。

```javascript editor-docx
// How to color a text object background in a document.

// Create a text run object, add color to its background in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetHighlight("lightGray");
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text highlighted with light gray color using the text properties.");
```
