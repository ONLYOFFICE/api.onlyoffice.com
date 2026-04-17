# GetElement

通过元素在文档中的位置返回元素。

Inherited from [ApiDocumentContent.GetElement](../../ApiDocumentContent/Methods/GetElement.md).

## 示例

此示例展示如何通过元素在文档内容中的位置获取元素。

```javascript editor-docx
// How to get element knowing its index.

// Get the first paragraph and add text to it.

let doc = Api.GetDocument();
let section = doc.GetFinalSection();
let docContent = section.GetHeader("default", true);
let paragraph = docContent.GetElement(0);
paragraph.AddText("This is the text in the default header");
```

