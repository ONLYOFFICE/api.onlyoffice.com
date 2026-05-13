# SelectNoteReference

选择此脚注/尾注的引用。如果此文档内容不是脚注/尾注，则不执行任何操作。

继承自 [ApiDocumentContent.SelectNoteReference](../../ApiDocumentContent/Methods/SelectNoteReference.md)。

## 示例

在文档中选择脚注/尾注引用。

```javascript editor-docx
// How to add footnote to the document.

// How to select footnote reference and increate its font size in a document.

let doc = Api.GetDocument();
let footnote = doc.AddFootnote();
let paragraph = footnote.GetElement(0);
paragraph.AddText("Footnote text");

footnote.SelectNoteReference();

doc.GetRangeBySelect().SetFontSize(48);
```
