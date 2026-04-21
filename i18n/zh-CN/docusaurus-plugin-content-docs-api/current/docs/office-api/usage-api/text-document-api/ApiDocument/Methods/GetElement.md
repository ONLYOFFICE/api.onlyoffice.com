# GetElement

通过元素在文档中的位置返回元素。

继承自 [ApiDocumentContent.GetElement](../../ApiDocumentContent/Methods/GetElement.md)。

## 示例

通过位置获取文档内容中的元素。

```javascript editor-docx
// How to get element knowing its index in a document.

// Get the first paragraph and add text to it in a document.

let doc = Api.GetDocument();
let section = doc.GetFinalSection();
let docContent = section.GetHeader("default", true);
let paragraph = docContent.GetElement(0);
paragraph.AddText("This is the text in the default header");
```
