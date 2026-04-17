# GetText

返回当前文档内容对象的内部文本。

Inherited from [ApiDocumentContent.GetText](../../ApiDocumentContent/Methods/GetText.md).

## 示例

此示例从文档内容元素获取文本。

```javascript editor-docx
// Get the text of the document content as a string.

// Display all content. 

const doc = Api.GetDocument();

const blockLvlSdt = Api.CreateBlockLvlSdt();
doc.Push(blockLvlSdt);

const content = blockLvlSdt.GetContent();
content.GetElement(0).AddText("This is a block text content control.");

const para = Api.CreateParagraph();
para.AddText("This text from DocContent element: " + content.GetText());
doc.Push(para);
```

