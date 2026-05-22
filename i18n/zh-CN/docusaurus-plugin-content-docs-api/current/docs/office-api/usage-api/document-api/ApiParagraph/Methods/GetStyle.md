# GetStyle

返回段落样式方法。

继承自 [ApiParaPr.GetStyle](../../ApiParaPr/Methods/GetStyle.md)。

## 示例

检索应用于段落的样式并在文档中显示其名称。

```javascript editor-docx
// How do I get the current style of a paragraph in a document?

// Confirm which named style is active on a paragraph by reading and printing the style name in a document.

let doc = Api.GetDocument();
let heading6Style = doc.GetStyle("Heading 6");
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetJc("center");
paraPr.SetStyle(heading6Style);
paragraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
let style = paraPr.GetStyle();
paragraph.AddLineBreak();
paragraph.AddText("Style: " + style.GetName());
```
