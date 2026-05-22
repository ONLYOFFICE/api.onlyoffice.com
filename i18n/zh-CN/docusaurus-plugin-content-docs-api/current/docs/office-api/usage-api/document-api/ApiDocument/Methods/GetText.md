# GetText

返回当前文档内容对象的内部文本。

继承自 [ApiDocumentContent.GetText](../../ApiDocumentContent/Methods/GetText.md)。

## 示例

从文档内容容器中提取所有文本作为纯字符串。

```javascript editor-docx
// How do I read the full text stored inside a document content object in a document?

// Verify the text inside a content control by reading it back as a single string.

const doc = Api.GetDocument();

const blockLvlSdt = Api.CreateBlockLvlSdt();
doc.Push(blockLvlSdt);

const content = blockLvlSdt.GetContent();
content.GetElement(0).AddText("This is a block text content control.");

const para = Api.CreateParagraph();
para.AddText("This text from DocContent element: " + content.GetText());
doc.Push(para);
```
