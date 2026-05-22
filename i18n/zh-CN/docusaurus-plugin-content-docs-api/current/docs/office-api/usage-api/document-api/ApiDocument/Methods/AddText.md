# AddText

将指定文本追加到文档内容的末尾。

继承自 [ApiDocumentContent.AddText](../../ApiDocumentContent/Methods/AddText.md)。

## 示例

```javascript editor-docx
// How do I add text to the last paragraph of a document content object in a document?

// Add a sentence to the end of a content control without replacing existing text in a document.

const doc = Api.GetDocument();
const blockLvlSdt = Api.CreateBlockLvlSdt();
doc.Push(blockLvlSdt);

const content = blockLvlSdt.GetContent();
content.GetElement(0).AddText("First sentence.");
content.AddText(" Appended sentence.");
```
