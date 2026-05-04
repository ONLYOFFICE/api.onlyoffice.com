# GetText

返回当前文档内容对象的内部文本。

继承自 [ApiDocumentContent.GetText](../../ApiDocumentContent/Methods/GetText.md)。

## 示例

从文档内容元素获取文本。

```javascript editor-docx
// Get the text of the document content as a string.

// Display all content using the document content API in a document.

const doc = Api.GetDocument();

const blockLvlSdt = Api.CreateBlockLvlSdt();
doc.Push(blockLvlSdt);

const content = blockLvlSdt.GetContent();
content.GetElement(0).AddText("This is a block text content control.");

const para = Api.CreateParagraph();
para.AddText("This text from DocContent element: " + content.GetText());
doc.Push(para);
```
