# SetStyle

段落样式基础方法。
💡 此方法本身不单独使用，它仅构成 [ApiParagraph#SetStyle](../../ApiParagraph/Methods/SetStyle.md) 方法的基础，该方法为段落设置选定或创建的样式。

继承自 [ApiParaPr.SetStyle](../../ApiParaPr/Methods/SetStyle.md)。

## 示例

在文档中为段落设置样式。

```javascript editor-docx
// Set the style of the paragraph to "Heading 6" in a document.

// Create a text in a paragraph styled with the 'Heading 6' style in a document.

let doc = Api.GetDocument();
let heading6Style = doc.GetStyle("Heading 6");
let paraPr = heading6Style.GetParaPr();
paraPr.SetJc("center");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(heading6Style);
paragraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
```
