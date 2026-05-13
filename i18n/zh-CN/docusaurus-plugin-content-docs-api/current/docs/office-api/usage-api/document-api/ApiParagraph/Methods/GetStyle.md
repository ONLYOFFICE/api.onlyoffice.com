# GetStyle

返回段落样式方法。

继承自 [ApiParaPr.GetStyle](../../ApiParaPr/Methods/GetStyle.md)。

## 示例

获取文档中的段落样式。

```javascript editor-docx
// How to get the style of the paragraph in a document.

// Get the paragraph style and display its name in a document.

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
