# IsEndnote

检查当前文档内容是否为尾注。

继承自 [ApiDocumentContent.IsEndnote](../../ApiDocumentContent/Methods/IsEndnote.md)。

## 示例

检查文档内容是否为尾注。

```javascript editor-docx
// How to add endnote to the document.

// Use document content to is endnote.

let doc = Api.GetDocument();
let endnote = doc.AddEndnote();
let paragraph = endnote.GetElement(0);
paragraph.AddText("Endnote text");

let isFootnote = endnote.IsFootnote();
let isEndnote  = endnote.IsEndnote();
paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.AddText("Footnote " + isFootnote);
paragraph.AddLineBreak();
paragraph.AddText("Endnote " + isEndnote);
```
