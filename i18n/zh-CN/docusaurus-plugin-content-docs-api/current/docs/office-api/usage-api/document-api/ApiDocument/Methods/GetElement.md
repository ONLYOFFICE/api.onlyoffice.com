# GetElement

通过元素在文档中的位置返回元素。

继承自 [ApiDocumentContent.GetElement](../../ApiDocumentContent/Methods/GetElement.md)。

## 示例

通过索引从文档内容中检索特定元素。

```javascript editor-docx
// How do I get a single element at a known position inside a document content in a document?

// Add text to a header paragraph by fetching it directly through its position index.

let doc = Api.GetDocument();
let section = doc.GetFinalSection();
let docContent = section.GetHeader("default", true);
let paragraph = docContent.GetElement(0);
paragraph.AddText("This is the text in the default header");
```
