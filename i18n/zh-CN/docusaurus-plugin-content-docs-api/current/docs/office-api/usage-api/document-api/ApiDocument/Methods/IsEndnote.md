# IsEndnote

检查当前文档内容是否为尾注。

继承自 [ApiDocumentContent.IsEndnote](../../ApiDocumentContent/Methods/IsEndnote.md)。

## 示例

检测文档中的注释是否为尾注。

```javascript editor-docx
// How do I tell if a note is an endnote rather than a footnote in a document?

// Distinguish endnotes from footnotes to display the correct label next to each note.

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
